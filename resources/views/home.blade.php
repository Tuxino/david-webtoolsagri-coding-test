@extends('layouts.app')
<?php 

//$version = app()->version(); echo $version;
    //var_dump($Users);
?>
@section('content')
<!doctype html>
<div class="container"/>
    <html lang="{{ app()->getLocale() }}">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>David A's Webtools App</title>
            <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
        </head>
        <body>
        <h2 style="text-align: center">Farmer Joe's Company Employee Register</h2>
            <div id="root"></div>
            <script src="{{mix('js/app.js')}}" ></script>
        </body>
    </html>
</div>
@endsection
