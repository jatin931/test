<?php
$host = "localhost";
$user = "root";
$password = "";
$db = "entrance_wizard";

// Create connection
$conn = new mysqli($host, $user, $password, $db);

// Check connection
if ($conn->connect_error) {
    die("Failed to connect: " . $conn->connect_error);
}

// Process form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Prepare SQL statement
    $stmt = $conn->prepare("INSERT INTO contactus (name, email, subject, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $subject, $message);

    // Execute SQL statement
    if ($stmt->execute()) {
        // Return success message as JSON
        echo json_encode(array("error" => "Failed to send message: " . $conn->error));
    } else {
        // Return error message as JSON
        echo json_encode(array("message" => "Your message has been sent. Thank you!"));
    }
}

// Close connection
$conn->close();
?>
