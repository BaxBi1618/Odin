<?php

$request = $_SERVER['REQUEST_URI'];
$segments = explode('/', trim($request, '/'));

if ($segments[0] === 'api' && $segments[1] === 'articles') {
    $_GET['id'] = $segments[2] ?? null;
    require 'api/articles.php';
} else {
    echo "404 Not Found";
}
