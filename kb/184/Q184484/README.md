---
layout: page
title: "Q184484: Err Msg: HTTP/1.0 403 Access Forbidden"
permalink: /kb/184/Q184484/
---

## Q184484: Err Msg: HTTP/1.0 403 Access Forbidden

	Article: Q184484
	Product(s): Internet Information Server
	Version(s): winnt:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While browsing a site, you may receive the following error message:
	
	  HTTP/1.0 403 Access Forbidden
	
	CAUSE
	=====
	
	This error may be caused if either of the following conditions exist:
	
	- The file designated as the default document for the site does not exist. This
	  default file for a Web site is typically Default.htm or Default.asp.
	
	- The site has been configured to use to use a secure channel over the HTTPS
	  protocol, but the browser used HTTP as its protocol instead.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods:
	
	- Use the Directories tab under the WWW Service Properties to set the correct
	  default document.
	
	- Browse the server using the HTTPS protocol instead of HTTP.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: winsock ssl secure sockets layer akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300
	Version           : winnt:3.0
	Issue type        : kbprb
	
	=============================================================================
	
