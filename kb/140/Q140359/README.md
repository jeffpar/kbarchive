---
layout: page
title: "Q140359: Err Msg: Windows Could Not Find a Backup Program"
permalink: kb/140/Q140359/
---

## Q140359: Err Msg: Windows Could Not Find a Backup Program

	Article: Q140359
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you use DriveSpace to compress an existing drive, you are given the option
	to back up files before you compress the drive. When you click Back Up Files,
	you may receive the following error message:
	
	  Windows could not find a backup program on your system. To install Microsoft
	  Backup now, click Install Now, double-click the Disk Tools component and then
	  follow the instructions on your screen. To continue without installing or
	  running Backup, choose Continue.
	
	The problem persists even if you click Install Now to install Microsoft Backup.
	
	CAUSE
	=====
	
	This error can occur if there is an invalid Backuppath entry in the registry. If
	the Backuppath entry is invalid, reinstalling Backup does not solve the problem.
	
	RESOLUTION
	==========
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	To correct this problem, locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\ 
	  Explorer\MyComputer\Backuppath
	
	Change the value for the (Default) value to a valid path for Backup.exe.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
