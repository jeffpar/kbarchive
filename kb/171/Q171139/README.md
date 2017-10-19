---
layout: page
title: "Q171139: Err. Msg.: Line 41 Object Not Support this Property or Method"
permalink: /kb/171/Q171139/
---

## Q171139: Err. Msg.: Line 41 Object Not Support this Property or Method

	Article: Q171139
	Product(s): Internet Information Server
	Version(s): winnt:1.0,3.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Certificate Server version 1.0 
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access an Internet Information Server (IIS) server that requires
	Client Certificates, you will get the following error message:
	
	  Microsoft VBScript runtime error
	  Line 41 Object doesn't support this property or method: Certhelper
	
	CAUSE
	=====
	
	The server's Self-Signed Certificate (Root CA) is not installed on the client
	computer.
	
	RESOLUTION
	==========
	
	1. In your browser, connect to http://certsrv.
	
	2. Select the Certificate Enrollment hyperlink.
	
	3. Select the Install Certificate Authority Certificates.
	
	4. Select the appropriate hyperlink for the web server you are trying to access
	  securely.
	
	5. Click Open from the Open/Save As dialog box.
	
	6. The New Site Certificate dialog is displayed. Select OK to install the Root
	  Certificate.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbiisSearch kbiis300 kbCertServSearch kbZNotKeyword3 kbCertServ100
	Version           : winnt:1.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
