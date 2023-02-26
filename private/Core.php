<?php
    require_once(__DIR__."/vendor/autoload.php");
    use Archp\services\PasswordGenerator;
    header("content-type: text/plain");
    if(count($_POST)>0){
        $generator = new PasswordGenerator(intval($_POST["number"]), intval($_POST["level"]));
        if(isset($_POST["name"])){
            $generator->set_exclude(explode(" ", $_POST["name"]));
        }
        unset($_POST);
        $generator->gen(0);
        print $generator->get();
    }
    else{
        print "Erro de servidor. Por favor, reporte isso!";
    }
    return;
?>