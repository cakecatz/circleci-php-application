<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>CircleCI PHP Application</title>
        <style>
            html, body {
                background-color: white;
            }
        </style>
    </head>
    <body>
<?php
if (isset($_POST['message'])) {
    echo "<div class=\"message\">${_POST['message']}
</div>";
}
?>
        <form action="/" method="post">
            <input name="message"></input>
            <input type="submit"></input>
        </form>
    </body>
</html>
