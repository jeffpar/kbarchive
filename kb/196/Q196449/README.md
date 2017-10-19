---
layout: page
title: "Q196449: Error: SAS Window: Winlogon.exe When Logging In"
permalink: /kb/196/Q196449/
---

## Q196449: Error: SAS Window: Winlogon.exe When Logging In

	Article: Q196449
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you start Windows NT and you log on, the following error message may
	appear:
	
	  Error: SAS Window: Winlogon.exe
	  There is no disk in the drive. Please insert a disk into drive A:
	
	CAUSE
	=====
	
	The system is attempting to load referenced wallpaper from the floppy drive and
	there is no disk present.
	
	RESOLUTION
	==========
	
	To resolve this problem, do either of the following:
	
	- Edit the display properties and choose a background wallpaper that is present
	  on the local hard drive.
	
	- Modify the registry.
	
	  WARNING: Using Registry Editor incorrectly can cause serious problems that may
	  require you to reinstall your operating system. Microsoft cannot guarantee
	  that problems resulting from the incorrect use of Registry Editor can be
	  solved. Use Registry Editor at your own risk.
	
	  For information about how to edit the registry, view the "Changing Keys And
	  Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	  Information in the Registry" and "Edit Registry Data" Help topics in
	  Regedt32.exe. Note that you should back up the registry before you edit it.
	  If you are running Windows NT, you should also update your Emergency Repair
	  Disk (ERD).
	
	  Run a registry editor and remove the value data at the following key:
	
	  HKEY_Current_User\Control Panel\Desktop\Wallpaper
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbWinNTSsearch kbWinNTS400xsearch kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
