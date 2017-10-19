---
layout: page
title: "Q158275: WFW Err Msg: There Is Not Enough Memory Available"
permalink: /kb/158/Q158275/
---

## Q158275: WFW Err Msg: There Is Not Enough Memory Available

	Article: Q158275
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:3.11; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error may occur when you attempt to connect from Windows for
	Workgroups 3.11 to a network printer shared from an Windows NT server. After
	clicking on the Windows NT server computer name in the Connect Network Printer
	dialog box in Print Manager, you may see:
	
	  STOP: There Is Not Enough Memory Available
	
	CAUSE
	=====
	
	This error occurs when the printer's share name (the name that client computers
	use to connect to Windows NT print shares) has a forward slash "/" in it. For
	example, a printer shared as A1/LASER will produce this error.
	
	RESOLUTION
	==========
	
	On the Windows NT Server where the printer shares were created, remove the "/"
	(forward slash) from the printer's share name.
	
	NOTE: A good rule of thumb for printer naming, especially when there are 16-bit
	network clients like Windows for Workgroups, is to stick with 8.3 naming
	conventions. For example, Printer9.pcl would be a good choice.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11; winnt:3.5,3.51
	
	=============================================================================
	
