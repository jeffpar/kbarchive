---
layout: page
title: "Q289794: HTMLA with SSL Incorrectly Warns of a Non-Secure Connection"
permalink: kb/289/Q289794/
---

## Q289794: HTMLA with SSL Incorrectly Warns of a Non-Secure Connection

	Article: Q289794
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the HTML Administration Web Site through a Secure Sockets Layer
	(SSL) connection, the following error message occurs:
	
	  Warning! You are not using a secure connection for your Web-based
	  administration. For more information, see Secure Sockets Layer in the
	  Internet Information Services online documentation.
	
	CAUSE
	=====
	
	The Java script that parses the URL to find and identify an SSL connection is
	passed the incorrect parameters.
	
	RESOLUTION
	==========
	
	Edit the Default.asp page in the C:\WINNT\System32\Inetsrv\Iisadmin directory.
	Find the following line of code:
	
	  if (curURL.substring(0,4) != "HTTPS")
	
	and change it to:
	
	  if (curURL.substring(0,5) != "HTTPS")
	
	MORE INFORMATION
	================
	
	The following statement will always return "HTTP," and therefore always
	evaluates true in the IF statement and triggers the warning message:
	
	  if (curURL.substring(0,4) != "HTTPS")
	  {
	  	alert("<%= L_NOSSL_TEXT %>");
	  }
	
	From the SDK:
	
	substring( int beginIndex, int endIndex )
	
	Returns a new string that is a substring of this string. The substring begins at
	the specified beginIndex and extends to the character at index endIndex - 1.
	
	Additional query words: iis ssl administration warning 443 htmla
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
