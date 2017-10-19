---
layout: page
title: "Q265462: FP: Err Msg Installing Server Extensions with Disk-Based Web"
permalink: /kb/265/Q265462/
---

## Q265462: FP: Err Msg Installing Server Extensions with Disk-Based Web

	Article: Q265462
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbdta
	Last Modified: 24-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2002 
	- Microsoft FrontPage 2000 
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing the FrontPage Server Extensions to a virtual server, you
	receive the following error message:
	
	  The document root of the web server where you are trying to install the
	  server extensions already contains a disk-based web.
	
	CAUSE
	=====
	
	This behavior occurs when the Web site is opened directly from the FrontPage
	client through the file path or a mapped drive. This behavior can also occur if
	the site was created as a disk-based Web and then copied into the document root
	on the Web server.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Using Windows Explorer, go to the document root of the virtual server.
	
	2. In the _vti_pvt folder, locate a file called Service.cnf.
	
	3. Open this file with Notepad.
	
	4. Remove the following lines:
	
	  vti_httpdversion:SX|FrontPage DBW
	  vti_webservertype:SR|diskweb
	
	5. Save the changes.
	
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kberrmsg kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 _IKkbZNotKeyword4 kbFrontPage2000Search kbFrontPage2002Search kbFrontPage98Search kbZNotKeyword3 kbZNotKeyword5
	Version           : :
	
	=============================================================================
	
