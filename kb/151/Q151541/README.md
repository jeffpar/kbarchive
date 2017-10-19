---
layout: page
title: "Q151541: FP: How to Create an Alias for FrontPage Personal Web Server"
permalink: /kb/151/Q151541/
---

## Q151541: FP: How to Create an Alias for FrontPage Personal Web Server

	Article: Q151541
	Product(s): Word Front Page
	Version(s): windows:1.0,1.1,97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194154.
	
	SUMMARY
	=======
	
	If your computer is running FrontPage Personal Web Server, you may want to
	create an alias to another folder (directory) or drive. Creating an alias to
	another folder or drive allows remote clients to browse documents at various
	locations as though these documents were FrontPage Webs.
	
	MORE INFORMATION
	================
	
	To create an alias to a folder, to a CD-ROM drive, or to a network drive, use
	any of the following methods.
	
	Method 1: Create an alias to a folder
	-------------------------------------
	
	1. In a text editor such as Notepad, open the Srm.cnf file.
	
	  NOTE: This file is usually found in C:\Vermeer\Httpd\Conf for FrontPage
	  version 1.0 and in C:\FrontPage Webs\Server\Conf for FrontPage versions 1.1
	  and 97.
	
	2. In the Srm.cnf file, type:
	
	  "Alias /name/ c:/folder/" (without the quotation marks)
	
	Method 2: Create an alias to the root directory of a CD-ROM drive
	-----------------------------------------------------------------
	
	1. In a text editor such as Notepad, open the Srm.cnf file.
	
	  NOTE: This file is usually found in C:\Vermeer\Httpd\Conf for FrontPage
	  version 1.0 and in C:\FrontPage Webs\Server\Conf for FrontPage, versions 1.1
	  and 97.
	
	2. In the Srm.cnf file, type:
	
	  "Alias /cdrom/ d:/./" (without the quotation marks)
	
	Method 3: Create an alias to a network drive or share
	-----------------------------------------------------
	
	1. In a text editor such as Notepad, open the Srm.cnf file.
	
	  NOTE: This file is usually found in C:\Vermeer\Httpd\Conf for FrontPage
	  version 1.0 and in C:\FrontPage Webs\Server\Conf for FrontPage, versions 1.1
	  and 97.
	
	2. In the Srm.cnf file, type:
	
	  "Alias /name/ //server/share/" (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage110
	Version           : windows:1.0,1.1,97
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
