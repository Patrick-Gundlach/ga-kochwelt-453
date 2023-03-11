<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  if (!empty($name) && !empty($email) && !empty($message)) {
    $to = 'pg@patrick-gundlach.de';
    $subject = 'Kontaktformular: ' . $name;
    $body = "Name: $name\nE-Mail: $email\nNachricht:\n$message";
    $headers = "From: $email\n";
    $headers .= "Reply-To: $email\n";

    if (mail($to, $subject, $body, $headers)) {
      echo "Vielen Dank für Ihre Nachricht, $name. Wir werden uns so bald wie möglich bei Ihnen melden.";
    } else {
      echo 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.';
    }
  } else {
    echo 'Bitte füllen Sie alle Pflichtfelder aus.';
  }
}
?>