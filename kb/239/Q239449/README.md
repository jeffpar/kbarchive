---
layout: page
title: "Q239449: Err: Internet Explorer Can't Open the Site Https://&lt;Sitename&gt;..."
permalink: /kb/239/Q239449/
---

## Q239449: Err: Internet Explorer Can't Open the Site Https://&lt;Sitename&gt;...

	Article: Q239449
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Server Gated Cryptography (SGC) certificates, the client attempting
	to access the site with the HTTPS protocol may receive the following error
	message:
	
	IIS 4.0:
	
	  Internet Explorer can't open the site https://<sitename>
	  The supplied certificate is invalid.
	
	IIS 5.0:
	
	  The page cannot be displayed.
	  Cannot find server or DNS Error.
	
	CAUSE
	=====
	
	This is by design. Unlike non-SGC certificates, which allow the user to accept a
	situation where the name used in the certificate does not match the name used in
	the URL accessing the site, SGC certificates require that the names match. If
	the names do not match, the error message is returned instead of a dialog box.
	
	WORKAROUND
	==========
	
	To work around this issue, do the following:
	
	1. Get a SGC certificate, which has a common name that matches the DNS name of
	  the Web site.
	
	2. Make a hosts file entry on the client computer to ensure that the common name
	  is used.
	
	
	Additional query words: verisign
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
