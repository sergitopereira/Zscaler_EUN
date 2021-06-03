<!DOCTYPE html>
<html>

<body>

<script>
var usrlang = navigator.language 
                || navigator.userLanguage;
        document.write(
            "User's preferred language is: "
            + usrlang);
            
        document.write("<br>");
        if (usrlang =='es') { 
            document.write('Si necesita acceder a este sitio por motivos esenciales empresariales, rellene <a href="https://www.google.com">una excepción de riesgo de seguridad</a>. Póngase en contacto con el <a href="https://www.google.com"> servicio de asistencia informática global</a>  si necesita ayuda para rellenar la excepción.');}
        else if (usrlang =='ru') {
            document.write('сли получить доступ к этому веб-сайту критически важно для работы, выполните операцию <a href="https://www.google.com"> security risk exception </a>(регистрация исключения из правил безопасности). Обратитесь в службу <a href="https://www.google.com">IT Global Service Desk</a> (Глобальная служба ИТ-поддержки), если вам требуется помощь с регистрацией исключения.');}
        
        else if (usrlang =='pt') {
            document.write('Caso necessite de acesso a este site por motivos essenciais ao negócio, preencha uma <a href="https://www.google.com">security risk exception</a>. Contacte a <a href="https://www.google.com">IT Global Service Desk</a> caso necessite de ajuda para preencher a exceção.');}
        
        else if (usrlang =='de') {
        document.write('Wenn Sie aus geschäftskritischen Gründen auf diese Website zugreifen müssen, füllen Sie bitte eine <a href="https://www.google.com">Security risk exception</a> aus. Wenden Sie sich an den <a href="https://www.google.com">IT Global Service Desk</a>, wenn Sie Hilfe beim Ausfüllen des Exception-Formulars benötigen.');}

        else if (usrlang =='fr') {
        document.write('Si vous devez accéder à ce site pour des raisons professionnelles, veuillez remplir une <a href="https://www.google.com">exception de risque de sécurité</a>. Contactez le service informatique <a href="https://www.google.com">Global Service Desk</a> si vous avez besoin d\'aide pour compléter l\'exception.');}

        else if (usrlang =='ja') {
        document.write('業務上必須であるため、このサイトにアクセスする必要がある場合は、<a href="https://www.google.com">セキュリティーリスクエクセプション</a>を完了してください。完了するにあたりサポートが必要な場合は、<a href="https://www.google.com"></a>にお問い合わせください。');}


        else {
            document.write('If you need to access this site for business-critical reasons, please complete a <a href="https://www.google.com">security risk exception</a>. Contact the <a href="https://www.google.com"> IT Global Service Desk </a> if you need help in completing the exception.');
        }


</script>

</body>
</html>
