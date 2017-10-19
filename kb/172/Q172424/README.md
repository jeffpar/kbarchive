---
layout: page
title: "Q172424: Security Certificate Doesn't Match Internet Address"
permalink: /kb/172/Q172424/
---

## Q172424: Security Certificate Doesn't Match Internet Address

	Article: Q172424
	Product(s): Internet Information Server
	Version(s): WinNT:1.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you access a Web site that has an SSL certificate installed, the following
	error may appear:
	
	  The Internet site you are about to view uses a security certificate that does
	  not match its Internet address.
	
	CAUSE
	=====
	
	This error occurs if the hostname of the computer running Internet Information
	Server (IIS) has been changed since the certificate request was created and
	applied to the server.
	
	WORKAROUND
	==========
	
	To resolve this issue, do one of the following:
	
	- Rename the server with the name used when the digital certificate was
	  created.
	
	  -OR-
	
	- Use the following steps to obtain a new digital certificate:
	
	  1. Generate a key pair file and a request file.
	
	  2. Request a certificate from a Certification Authority.*
	
	  3. Install the certificate on your server.
	
	  4. Activate PCT/SSL security on a WWW service directory.
	
	MORE INFORMATION
	================
	
	Digital certificates can be obtained from Verisign. For more information, point
	your browser to:
	
	  http://www.verisign.com/microsoft/
	
	You can find more information on the implementation of PCT/SSL in the "Microsoft
	Internet Information Server Installation and Planning Guide," pages 58 - 63.
	======================================================================
	Keywords          : kbenv 
	Technology        : kbiisSearch kbiis100
	Version           : WinNT:1.0
	Issue type        : kbprb
	
	=============================================================================
	
