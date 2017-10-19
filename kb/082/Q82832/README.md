---
layout: page
title: "Q82832: Panacea WinSpeed 1.0 Has Problems Under Windows 3.1"
permalink: /kb/082/Q82832/
---

## Q82832: Panacea WinSpeed 1.0 Has Problems Under Windows 3.1

	Article: Q82832
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The WinSpeed version 1.0 and 1.02 installation program, INSTALL.EXE, does not
	work properly with the Microsoft Windows operating system version 3.1. The
	WinSpeed installation program copies an incompatible version of the SETUP.INF
	file to the WINDOWS directory.
	
	MORE INFORMATION
	================
	
	
	Updating to Windows 3.1
	-----------------------
	
	
	Symptom: When using applications such as Write and typing large TrueType fonts
	very quickly, the screen does not repaint correctly.
	
	Solution: Call Panacea to obtain an updated version of WinSpeed, then upgrade the
	files.
	
	Installing Under Windows 3.1
	----------------------------
	
	To install WinSpeed for use with Windows version 3.1, obtain an updated version
	of WinSpeed from Panacea.
	
	If INSTALL.EXE has already been used to install the WinSpeed drivers under
	Windows 3.1, the following message will appear when trying to run Windows Setup
	from the Main group:
	
	  The SETUP.INF file on your system is not valid for use with this version of
	  Setup.
	
	To correct this problem, do the following:
	
	1. Delete the SETUP.INF file from the WINDOWS directory.
	
	2. The 3.1 SETUP.INF file should still reside in your WINDOWS\SYSTEM directory.
	  If it does not, copy the SETUP.INF file on Windows Disk 1 to your
	  WINDOWS\SYSTEM directory.
	
	This will restore the Windows 3.1 setup files to their normal state.
	
	For additional information, please contact Panacea Inc. at (603) 437-5022.
	
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
