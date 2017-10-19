---
layout: page
title: "Q155365: Cannot Uninstall Microsoft Internet Products in OSR2"
permalink: /kb/155/Q155365/
---

## Q155365: Cannot Uninstall Microsoft Internet Products in OSR2

	Article: Q155365
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): osr2 win95 msiew95
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to uninstall Microsoft Internet Explorer or Microsoft Internet Mail
	and News, you find that they are not listed in the Add/ Remove Programs tool in
	Control Panel.
	
	CAUSE
	=====
	
	These programs are preinstalled with Windows 95 OEM Service Release 2 (OSR2) and
	do not register themselves in the uninstall list.
	
	RESOLUTION
	==========
	
	To work around this problem, install these programs from the OSR2 CD-ROM, or
	from the Web.
	
	CD-ROM location:
	
	  Program                  CD-ROM location
	  ----------------------------------------------------
	  Internet Explorer        Other\ie30\Msie30.exe
	  Internet Mail and News   Other\Mailnews\Mailnews.exe
	
	Web location:
	
	  http://www.microsoft.com/ie/download/
	
	Installing these programs causes them to be registered in the uninstall list.
	After you install them, you can uninstall them using the Add/Remove Programs
	tool.
	
	======================================================================
	Keywords          : osr2 win95 msiew95 
	Technology        : kbWin95search kbOPKSearch kbWin95
	Version           : WINDOWS:95
	
	=============================================================================
	
