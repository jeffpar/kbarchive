---
layout: page
title: "Q216453: FP: FP98: Security Patch for FrontPage Personal Web Server"
permalink: kb/216/Q216453/
---

## Q216453: FP: FP98: Security Patch for FrontPage Personal Web Server

	Article: Q216453
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 13-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Users running FrontPage Personal Web Server 1.0 (vhttpd32.exe version
	3.0.2.xxxx) under the Microsoft Windows 95 or Windows 98 operating systems are
	vulnerable to unauthorized users accessing their files using a specific
	non-standard URL. The unauthorized users would have to know the exact file name
	to access it.
	
	Users running FrontPage Personal Web Server on Microsoft Windows NT are not
	affected. Furthermore, most users of Microsoft FrontPage are not affected as the
	FrontPage Personal Web Server is available on the FrontPage CD, but was only
	installed by default with FrontPage 1.1. Subsequent versions of FrontPage
	installed Microsoft Personal Web Server 2.0, which is not affected by this
	issue.
	
	CAUSE
	=====
	
	This vulnerability involves the ability of a malicious user to bypass the
	server's normal file access controls by entering a non-standard URL. The file
	must be specifically requested by name, so the malicious user would need to
	already know the name of the file or correctly guess it. The vulnerability only
	affects users of FrontPage Personal Web Server 1.0 (vhttpd32.exe version
	3.0.2.xxxx) to host their own Web site.
	
	RESOLUTION
	==========
	
	A fully supported patch is available to fix this vulnerability, and Microsoft
	recommends that affected customers download and install it.
	
	Users can connect to the following site for more information and to download the
	patch:
	
	  http://office.microsoft.com/assistance/9798/PersWeb.aspx
	
	Additional query words: front page fix add-on add on update
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch _IKkbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
