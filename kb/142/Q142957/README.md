---
layout: page
title: "Q142957: Starting Microsoft Backup Hangs Computer"
permalink: kb/142/Q142957/
---

## Q142957: Starting Microsoft Backup Hangs Computer

	Article: Q142957
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg kbhw win95 kbHardware
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you start Microsoft Backup, your computer may stop responding (hang). Or,
	you may receive the following error message:
	
	  Microsoft Backup has encountered a serious error in the Tape Manager. Quit MS
	  BAckup and all other programs then try again. If problem persist, reinstall
	  MS Backup
	
	CAUSE
	=====
	
	When you start Backup, it attempts to detect whether the computer contains a
	tape drive. If Backup incorrectly determines that there is a tape drive when
	there is not, the computer may hang.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To correct this problem, follow these steps:
	
	1. Restart your computer.
	
	2. Change the value for the TapeDriveDetected key from 1 to 0 in the following
	  registry key:
	
	     HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\ 
	     Applets\Backup
	
	NOTE: If you have never run Backup successfully, the Backup key may not exist in
	the registry. To create this key, restart your computer in Safe mode, run
	Backup, quit Backup, and then restart your computer normally. You can then
	follow the steps above.
	
	
	MORE INFORMATION
	================
	
	For additional information about Troubleshooting Windows 95 Backup, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q130946 Troubleshooting Windows 95 Backup
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbhw win95 kbHardware 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
