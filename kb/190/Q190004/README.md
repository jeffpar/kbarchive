---
layout: page
title: "Q190004: Error 403.7 or &quot;Connection to Server Could Not Be Established&quot;"
permalink: kb/190/Q190004/
---

## Q190004: Error 403.7 or &quot;Connection to Server Could Not Be Established&quot;

	Article: Q190004
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
	
	One of the following errors occurs when trying to browse a Web site that has
	Secure Sockets Layer (SSL) enabled:
	
	- HTTP Error 403
	  403.7 Forbidden: Client certificate required
	
	  This error occurs when the resource you are attempting to access requires your
	  browser to have a client Secure Sockets Layer (SSL) certificate that the
	  server recognizes. This is used for authenticating you as a valid user of the
	  resource.
	
	  Please contact the Web server's administrator to obtain a valid client
	  certificate.
	
	  -or-
	
	- Connection to the server could not be established.
	
	CAUSE
	=====
	
	The Internet Explorer client certificate and the Internet Information Server
	(IIS) client certificate need to be synchronized.
	
	WORKAROUND
	==========
	
	To work around this problem, run the following three commands from a command
	prompt in the <%SystemRoot%>\System32\Inetsrv directory:
	
	  IISCA
	  Net Stop IISAdmin /y
	  Net Start W3SVC
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
