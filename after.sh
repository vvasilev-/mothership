#!/bin/sh

# If you would like to do some extra provisioning you may
# add any commands you wish to this file and they will
# be run after the Homestead machine is provisioned.

projectDir=/home/vagrant/code
phpmyadminDir=$projectDir/public/phpmyadmin
phpmyadminGzip=https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-english.tar.gz

# Run all commands in the projectDir
cd $projectDir

# Setup phpMyAdmin
if [ ! -d "$phpmyadminDir" ]; then
    echo "Running: phpMyAdmin setup"

    mkdir -p $phpmyadminDir
    wget -q $phpmyadminGzip -O phpmyadmin.tar.gz
    tar -xzf phpmyadmin.tar.gz -C $phpmyadminDir --strip 1 2>/dev/null
    rm phpmyadmin.tar.gz
fi
