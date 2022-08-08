<script>
var usrlang = navigator.language || navigator.userLanguage;
console.log(usrlang);
document.addEventListener('DOMContentLoaded', (event) => {
  var url = document.getElementsByClassName("eu_l")[0].innerText;
  console.log(url);
  var eu_co = document.getElementsByClassName("eu_co");
  console.log(eu_co[2]);
  if (usrlang =='fr') {
      eu_co[2].innerHTML="Si vous pensez que le site Web doit être examiné manuellement par Zscaler pour recatégorisation, veuillez cliquer <a href='https://sitereview.zscaler.com/?url="+ url + "'>ico</a> pour soumettre une demande et ceci seront examinés et traités dans les <u>48 heures</u>.</br> </br> Si vous avez une raison commerciale légitime d'accéder aux sites de cette catégorie ou si le manque d'accès à ce site Web arrête les activités commerciales urgentes ou si vous avez essayé le lien ci-dessus et cela fait plus de 48 heures alors veuillez cliquer sur <a href=mailto:accenturenetworksecurityservices@riotinto.com?subject=DEMANDE URGENTE DE ZSCALER!&body= ><b>ici</b></a>";
  } else {
      eu_co[2].innerHTML="If you believe the website should be manually reviewed by Zscaler for recategorization then please  <a href='https://sitereview.zscaler.com/?url="+ url + "'>click here </a> to submit a request and this will be reviewed and actioned within <u>48 hours</u>. </br> </br> If you have a legitimate business reason for accessing sites in this category or if the lack of access to this website is stopping urgent business activities or if you have tried the above link and its been more then 48 hours then please click <a href=mailto:accenturenetworksecurityservices@riotinto.com?subject=URGENT ZSCALER REQUEST!&body= Hi, I am unable to access the Website, Can you please allow access to the site><b>here</b></a>";
  }

});
</script>