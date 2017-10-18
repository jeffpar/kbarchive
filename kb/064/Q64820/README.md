---
layout: page
title: "Q64820: Quicken Shows Up as Quattro During Windows Setup"
permalink: kb/064/Q64820/
---

## Q64820: Quicken Shows Up as Quattro During Windows Setup

	Article: Q64820
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run Microsoft Windows Setup to make icons for applications or when you
	set up Windows 3.0 and select Set Up Applications On Hard Drive, Setup may
	incorrectly identify some of the programs. You can delete the unnecessary icon
	by highlighting it and from the File menu of Program Manager, selecting Delete.
	
	If you want to keep the icon but want to change the name that appears under the
	icon, do the following:
	
	1. Highlight the icon.
	
	2. From the File menu in the Program Manager, choose Properties.
	
	3. Change Description to the desired name and select OK.
	
	MORE INFORMATION
	================
	
	Windows Setup decides which MS-DOS programs to make icons for by searching the
	hard disk for the .EXE and .COM specified in the PIF files supplied with Windows
	3.0. These PIF files are contained in the SETUP.INF file. Any MS-DOS application
	with the same name as one of the applications that has a PIF file may be
	incorrectly identified.
	
	For example, Setup finds Q.EXE in the C:\QUICKEN3 directory. It also finds the
	PIF file Q.PIF and it assumes that this is the PIF file for this program. Since
	the Q.PIF is actually for Quattro, Windows incorrectly identifies Quicken 3.0 as
	Quattro when it makes the icon.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
