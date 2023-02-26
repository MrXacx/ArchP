<?php
    namespace Archp\services;
    
    // gera senha aleatória
    class PasswordGenerator{
        private int $lengthOfPwd;
        private int $levelOfSecurity;
        private array $excludeTerms;
        private string $pwd = "";
        public function __construct(int $lop, int $los){
            $this->lengthOfPwd = $lop; // número de caracteres da senha
            $this->levelOfSecurity = ($los++)*2; // nível de segurança da senha
        }

        // função geradora
        public function gen(int $count):void{ 
            for($count; $count<$this->lengthOfPwd; $count++){
                $pwd[] = $this->get_char(rand(1,$this->levelOfSecurity));
            }
            $pwd = $this->sanitize_pwd(implode("", $pwd));
            $this->pwd .= $pwd;
            $length = strlen($this->pwd);

            // garante que a senha tem o comprimento correto
            if($length < $this->lengthOfPwd){ 
               $this->gen($length);
            }
        }

        // retorna senha
        public function get():string{
            return $this->pwd;
        }

        // retorna caracter ASCII
        private function get_char(int $randomInt):string{ 
            switch($randomInt){
                case 1:
                case 2:
                    return chr(48+rand(0,9)); // números
                case 3:
                case 4:
                    return chr(97+rand(0,25)); // letras minúsculas
                case 5:
                case 6:
                    return chr(65+rand(0,25)); // letras maiúsculas
                case 7:
                    return chr(35+rand(0,3)); // símbolos
                case 8:
                    return chr(60+rand(0,4)); // símbolos
            }
        }

        // retira termos indesejáveis
        private function sanitize_pwd(string $pwd):string{ 
            foreach($this->excludeTerms as $exclude){
                $pwd = str_ireplace($exclude, "",$pwd);
            }
            return $pwd;
        }

        // obtém termos indesejáveis
        public function set_exclude(array $excludes):int{ 
            foreach($excludes as $str){
                $this->excludeTerms[] = $str;
                $this->excludeTerms[] = strrev($str);
            }
            $this->excludeTerms = array_unique($this->excludeTerms, SORT_STRING);
            return count($this->excludeTerms);
        }
    }
?>