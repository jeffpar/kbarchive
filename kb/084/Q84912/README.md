---
layout: page
title: "Q84912: Reinstalling WRK May Not Re-Create a WRK Program Group"
permalink: /kb/084/Q84912/
---

## Q84912: Reinstalling WRK May Not Re-Create a WRK Program Group

	Article: Q84912
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Microsoft Windows Resource Kit (WRK) for the Microsoft Windows operating
	system version 3.1 is deleted from the system (including its group and
	directory) and reinstalled, a WRK program group may not be recreated when it is
	reinstalled.
	
	CAUSE
	=====
	
	This problem occurs because the WRK Setup program checks for a previous WRK
	installation by looking for the existence of the following files in the
	corresponding locations:
	
	  BMPVIEW.EXE     Specified WRK target directory
	  TOPHOOK.DLL     \WINDOWS directory
	  VBRUN100.DLL    \WINDOWS\SYSTEM directory and then \WINDOWS directory
	
	If any one of these files are found, Setup considers there to be a previous WRK
	installation on the machine, so it does not create a new WRK program group.
	
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Delete the WRK program group.
	
	2. Delete the \WRK directory. (BMPVIEW.EXE is the only file that requires
	  deletion.)
	
	3. Delete VBRUN100.DLL from the \WINDOWS and \WINDOWS\SYSTEM directories.
	
	4. Delete TOPHOOK.DLL from the \WINDOWS directory.
	
	5. Run the Setup program for the WRK.
	
	A program group for the WRK should be created when the installation is complete.
	
	KBCategory: kbsetup kbui kbprb kbtool
	KBSubcategory: win31
	
	Additional query words:
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
