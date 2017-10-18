---
layout: page
title: "Q162438: &quot;STOP 0x50&quot; Accessing Files on Windows NT from Windows 95"
permalink: kb/162/Q162438/
---

## Q162438: &quot;STOP 0x50&quot; Accessing Files on Windows NT from Windows 95

	Article: Q162438
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access files on a Windows NT 4.0-based computer from a Windows
	95 client computer, the Windows NT computer may stop responding (hang) while
	displaying the following error message on a blue screen:
	
	  STOP 0x00000050
	
	CAUSE
	=====
	
	This behavior can occur if Dr. Solomon's WinGuard for Windows NT version 7.65 is
	running as a service on the Windows NT-based computer.
	
	RESOLUTION
	==========
	
	According to the manufacturer, Dr. Solomon's Software Ltd., version 7.66 of Dr.
	Solomon's WinGuard for Windows NT corrects this problem. Contact Dr. Software
	Ltd. at info@drsolomon.com for information about obtaining the updated version
	of Dr. Solomon's WinGuard for Windows NT.
	
	To temporarily work around this issue, disable the WinGuard service using the
	following steps:
	
	1. In Control Panel, double-click Services.
	
	2. Click Guard, and then click Stop.
	
	3. Click Startup, and then click Disabled for the Startup setting.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
