---
layout: page
title: "Q187034: Netscape Navigator Errors: &quot;HTTP Error 400&quot;; &quot;400 Bad Request&quot;"
permalink: /kb/187/Q187034/
---

## Q187034: Netscape Navigator Errors: &quot;HTTP Error 400&quot;; &quot;400 Bad Request&quot;

	Article: Q187034
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When browsing an Internet Information Server (IIS) Web site from Netscape
	Navigator version 4.05, the following error message may occur:
	
	  HTTP Error 400
	
	  400 Bad Request
	
	  Due to malformed syntax, the request could not be understood by the
	  server. The client should not repeat the request without
	  modifications.
	
	CAUSE
	=====
	
	The Uniform Resource Locator (URL) that Navigator is attempting to open contains
	a space.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- On the server, rename the file that contains a space to another name that
	  does not contain a space.
	
	  -or-
	
	- In the Navigator Location text box, substitute "%20" (without the quotation
	  marks) for the space in the URL. The string "%20" is the URL encoding
	  equivalent of a space character.
	
	  For example, if the URL is
	
	  http://example.microsoft.com/has space.htm
	
	  instead use:
	
	  http://example.microsoft.com/has%20space.htm
	
	MORE INFORMATION
	================
	
	When you view directories in "directory browse" format (no default.htm in the
	directory), the link at the top of the page called "[To Parent Directory]" is
	not URL-encoded with a %20 in place of any space-character in the filename.
	
	When you use Netscape Navigator version 4.05 and click the link, the Web server
	stops responding and the error message occurs.
	
	
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: browser netscape navigator "HTTP ERROR 400" %20 akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
