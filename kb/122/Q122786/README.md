---
layout: page
title: "Q122786: Steps to Remove Windows Entertainment Pack, Volume 4"
permalink: kb/122/Q122786/
---

## Q122786: Steps to Remove Windows Entertainment Pack, Volume 4

	Article: Q122786
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-JUN-1999
	
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Entertainment Pack, volume 4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is an outline of files and directories that will allow you to
	remove all information the Windows Entertainment Pack, volume 4, installs on
	your computer.
	
	WARNING: Some files that Windows Entertainment Pack, volume 4, installs in the
	Windows directory and the Windows SYSTEM subdirectory are used by other
	applications. Removing these files can cause Windows-based applications and the
	Windows environment to not operate properly. Extreme care should be taken when
	deleting these files to ensure the continued functionality of Windows-based
	applications and the Windows environment.
	
	Please check the dates of the files and check the Windows disks for backup files
	before deletion. All files that are to be deleted will have a date marked
	9/7/94, except the ENTPACK.INI file.
	
	MORE INFORMATION
	================
	
	Follow these steps to completely remove Windows Entertainment Pack, volume 4,
	from your system:
	
	1. In the Windows directory, delete:
	
	  ENTPACK.INI
	  VBRUN100.DLL
	
	2. In the Windows SYSTEM subdirectory, delete:
	
	  VER.DLL
	  COMMDLG.DLL
	
	3. Delete the entire WEP directory.
	
	Additional query words: 1.00 remove delete uninstall un-install deinstall de-install erase
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbWinEntPkSearch kbWinEntPk400
	Version           : WINDOWS:
	Issue type        : kbinfo
	
	=============================================================================
	
