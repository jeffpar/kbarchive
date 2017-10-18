---
layout: page
title: "Q154424: FP: Image Not Loaded to Personal Web Server"
permalink: kb/154/Q154424/
---

## Q154424: FP: Image Not Loaded to Personal Web Server

	Article: Q154424
	Product(s): Word Front Page
	Version(s): ; WINDOWS:1.1
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 05-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a Web on the Personal Web Server and if you use a tilde (~) as the
	first character of the Web name, you may experience either of the following
	problems:
	
	- You are unable to retrieve images when you edit the Web.
	
	  -or-
	
	- You are unable to open pages when you browse the Web.
	
	CAUSE
	=====
	
	The Personal Web Server is based on the architecture used by the National Center
	for Supercomputing Applications (NCSA) Web server. On that server, Web names
	that begin with a tilde are reserved for "per user" Webs.
	
	WORKAROUND
	==========
	
	To work around this problem, add the following line to the srm.cnf file. By
	default, this file is located in the C:\FrontPage Webs\Server\conf folder.
	
	  UserDir DISABLED
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft FrontPage
	98 for Windows.
	
	Additional query words: Front Page 1.1 97 PWS
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage110
	Version           : :; WINDOWS:1.1
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
