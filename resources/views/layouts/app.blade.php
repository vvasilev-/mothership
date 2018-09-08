<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf" content="{{ csrf_token() }}">

    <title>{{ config('app.name') }}</title>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&amp;subset=cyrillic">
    <link rel="stylesheet" href="{{ mix('css/bundle.css') }}">
</head>
<body>
    @section('app')
        <div class="app"></div>
    @show

    @include('partials.scripts')
</body>
</html>
