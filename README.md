# Zscaler_EUN

```bash
Author: Sergio Pereira
version 1.2
```

Challenge 1:
Text added in Notification Message Box in admin portal is not translated.  

Solution: 
Run Java script to detect browser language and statically translate the message


Challenge 2:EUN redirect button
Solution:
Examples of External Caution EUN redirect in php and java

Note: use the correct gateway:
```html
file: external_caution.php
action="https://gateway.zscalerthree.net:443/_sm_ctn">

file: external_caution_java.html
var redirect = "https://gateway.zscalerthree.net/_sm_ctn?_sm_url="+url+ "&_sm_rid=" + zsq + "&_sm_cat=" +cat;
```
