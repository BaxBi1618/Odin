<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");


require_once __DIR__ . '/../config/database.php';

try {
    $stmt = $pdo->query("SELECT id, title, content FROM articles");
    $articles = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // zwracamy JSON do frontendu
    echo json_encode($articles, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

} catch (\PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}