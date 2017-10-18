---
layout: page
title: "Q171135: Access Forbidden Accessing Secure Website"
permalink: kb/171/Q171135/
---

## Q171135: Access Forbidden Accessing Secure Website

	Article: Q171135
	Product(s): Internet Information Server
	Version(s): Winnt:2.0,3.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	- Microsoft Certificate Server version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access a web site, the browser displays the following error
	message:
	
	  HTTP/1.1 403 Access Forbidden
	
	  Secure Channel Required
	
	  This virtual directory requires a browser that supports the configured
	  encryption options.
	
	CAUSE
	=====
	
	The web site you are trying to access requires the Secure Sockets Layer (SSL)
	encryption protocol. As a result, http:// will not work.
	
	RESOLUTION
	==========
	
	Change the URL to read https://. This instructs the browser to use the Secure
	Sockets Layer (SSL) encryption protocol.
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbiisSearch kbiis300 kbiis200 kbCertServSearch kbZNotKeyword3 kbCertServ100
	Version           : Winnt:2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
