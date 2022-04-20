<ul style="list-style-type:square">
    <li><strong>Redirect URL: </strong>Enter the redirected URL that hosts the notification. <a href="#redirectionguidelines">See the Redirection Guidelines.</a></li>
</ul>
</div>

<div class="subc">
<p><a id="redirectionguidelines" name="redirectionguidelines"></a>When the user's browser is redirected, the URL includes query parameters, which administrators can use to customize the page that is served or for logging purposes. During the redirection, all query parameters are sent to the external site. For Web DLP Violation policy requests, the query parameters enable the administrator to find the Web Post DLP transaction. These query parameters are:</p>

<ul style="list-style-type:disc">
    <li>action: Specifies the action that triggered the redirect.</li>
    <li>cat: Specifies the URL category of the URL (if available).</li>
    <li>kind: Specifies the policy that triggered the URL redirection. <a href="#listvaluesmappingtopolicies">See a list of possible values for kind and their mapping to policies.</a></li>
    <li>reason: Specifies the string that contains additional information about the URL.</li>
    <li>reasoncode: Specifies the reason that this notification or redirect triggered. <a href="#reasoncodeandexplanation">See a list of possible values for reasoncode and their explanation.</a></li>
    <li>referer: Specifies the referer URL in URL-encoded format.</li>
    <li>rule: Specifies the internal rule-id that triggered the caution (if available).</li>
    <li>timebound: Specifies whether this notification or redirect is triggered by a policy that includes time interval as a criteria.</li>
    <li>url: Specifies the original URL that caused this redirect or notification.</li>
    <li>user: Specifies the user-id (the login name) of the user (if available).</li>
    <li>zsq: This parameter is used by the Zscaler service.</li>
</ul>

If you wish to create a custom AUP or EUN page for specific websites, you can use the following techniques.
<div class="subc">
<ul style="list-style-type:disc">
    <li><a href="#redireccode">Customize the  following code.</a></li>
<a id="redirectcode" name="redirectcode"></a>
<pre>
<?php
echo "hello world";
$url = $_GET['url'];
$referer = $_GET['referer'];
$reason = $_GET['reason'];
$reason_code = $_GET['reasoncode'];
$timebound = $_GET['timebound'];
$action = $_GET['action'];
$kind = $_GET['kind'];
$rule = $_GET['rule'];
$cat = $_GET['cat'];
$user = $_GET['user'];
$lang = $_GET['lang'];
$zsq = split("zsq", $_GET['zsq']);
echo ('<br>');
echo $url;
?>
</pre>
</ul>
</div>
<table border=1>
<tr><td>url</td><td><?php echo $url; ?> </td></tr>
<tr><td>reason</td><td><?php echo $reason; ?> </td></tr>
<tr><td>zsq</td><td><?php echo $zsq[0]; ?> </td></tr>
<tr><td>referer</td><td><?php echo $referer; ?> </td></tr>
<tr><td>rule</td><td><?php echo $rule; ?> </td></tr>
<tr><td>action</td><td><?php echo $action; ?> </td></tr>
</table>
<form method="GET" action="https://gateway.zscalerthree.net:443/_sm_ctn">
<input class="btn" type="submit" value="Continue">
<input type="hidden" name="_sm_url" value=<?php echo $url; ?>>
<input type="hidden" name="_sm_rid" value=<?php echo $zsq[0]; ?>>
<input type="hidden" name="_sm_cat" value="testing+urls">
</form>