---
layout: page
title: "Q265372: PRB: Different Cases Across ASP Collection Key Names Not Advised"
permalink: /kb/265/Q265372/
---

## Q265372: PRB: Different Cases Across ASP Collection Key Names Not Advised

{% raw %}

	Article: Q265372
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbDSupport kbiis400 kbiis500 kbWin2000PreSP2Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The key names of the Active Server Pages (ASP) collections - ClientCertificate,
	Cookie, Form, and QueryString - are not case-sensitive. "MyVar" and "myvar"
	would reference the same collection.
	
	You should avoid using the same name with different cases for different ASP
	collections. For example, don't use "MyVar" for a cookie name and "myvar" for a
	form name. Depending on the ASP page, the form name in this case might be
	misunderstood as the cookie name, and the cookie pair myvar=aValue (not
	MyVar=aValue as expected) may be returned to the browsers in such a situation.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Install the following three ASP pages on an Internet Information Server/Services
	server and browse to Page1.asp. Click submit, and then click Page3.asp. Although
	"cookie:SecondValue" should be returned, "cookie:firstValue" is returned
	instead. Page1.asp
	
	  <%
	    Response.Cookies("CookieName") = "firstValue"
	  %>
	  <HTML>
	  <BODY>
	  <FORM action="page2.asp" method=POST>
	  <INPUT type=hidden name=someothername value=Hello>
	  <INPUT type=hidden name=cookiename value=Yes>
	  <INPUT type="submit" value="Submit">
	  </BODY>
	  </HTML>
	
	Page2.asp
	
	  <%
	  myvar = Request.Form("CookieName") 
	  Response.Cookies("CookieName") = "Secondvalue"
	  %>
	  cookie: 
	  <a href=page3.asp>page3.asp</a>
	
	Page3.asp
	
	  <%
	  Response.Write "cookie:" & Request.Cookies("CookieName") & "<P>"
	  Response.Write "HTTP_COOKIE: " & Request.ServerVariables("HTTP_COOKIE") & "<P>" 
	  %>
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbiis400 kbiis500 kbWin2000PreSP2Fix 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : winnt:4.0,5.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
