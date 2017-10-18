---
layout: page
title: "Q68343: Add Printer Button in Control Panel Not Working"
permalink: kb/068/Q68343/
---

## Q68343: Add Printer Button in Control Panel Not Working

	Article: Q68343
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose the Add Printer button in the Printers dialog box of Control
	Panel, nothing happens, or you receive the following error message:
	
	  Information file not in system directory or corrupt.
	  Copy in CONTROL.INF and SETUP.INF from disk #1.
	
	CAUSE
	=====
	
	The following problems can cause this symptom:
	
	- You do not have enough memory to display the printer list.
	
	- The SETUP.INF or CONTROL.INF file is corrupted or has been deleted.
	
	- The SETUP.INF file of another application has been installed over the Windows
	  SETUP.INF.
	
	- There is a copy of SETUP.INF in the Windows directory as well as the Windows
	  SYSTEM subdirectory.
	
	- You are loading Intel Net Satisfaction terminate-and-stay-resident (TSR)
	  programs from your Novell NetWare System Login Script.
	
	WORKAROUND
	==========
	
	Use one of the following procedures to correct this problem.
	
	Low Memory
	----------
	
	If you suspect that there is not enough memory to display the printer list,
	proceed as follows:
	
	1. Exit Control Panel.
	
	2. Close one or more applications.
	
	3. Restart Control Panel and try to add the printer again.
	
	Missing or Corrupted SETUP.INF or CONTROL.INF File
	--------------------------------------------------
	
	Windows looks first in the Windows directory. If the SETUP.INF or CONTROL.INF
	file is not found, it looks in the Windows SYSTEM subdirectory.
	
	If you suspect that the SETUP.INF or CONTROL.INF file in the Windows SYSTEM
	subdirectory is corrupted (or is missing), proceed as follows:
	
	1. Exit the Control Panel and run File Manager.
	
	2. Copy the SETUP.INF and/or CONTROL.INF file from your Windows installation
	  disks to the Windows SYSTEM subdirectory. (The SETUP.INF file is located on
	  Disk 1. The CONTROL.INF file is located on Disk 5 of the 3.5-inch set and on
	  Disk 6 of the 5.25-inch set.)
	
	3. Restart the Control Panel and try to add the printer again.
	
	NOTE: The SETUP.INF and CONTROL.INF files are not compressed files and can be
	copied without using the EXPAND utility.
	
	Incorrect Version of SETUP.INF File
	-----------------------------------
	
	1. Verify that the SETUP.INF file is the correct version for Windows by
	  comparing the file contents with the original SETUP.INF file on your Windows
	  installation disks.
	
	2. If there appears to be a dramatic difference between the two files, back up
	  your current SETUP.INF file by saving it to a floppy disk or renaming it.
	
	3. Replace the current SETUP.INF file with the original SETUP.INF. You may need
	  to manually edit the new SETUP.INF and make some changes.
	
	4. Restart Control Panel and try to add the printer again.
	
	Multiple SETUP.INF Files
	------------------------
	
	If there are identical copies of SETUP.INF in the Windows and Windows SYSTEM
	subdirectory, delete the SETUP.INF file from the Windows directory. If the
	SETUP.INF file is in the Windows directory, but not the Windows SYSTEM
	directory, move the file to the Windows SYSTEM directory.
	
	REFERENCES
	==========
	
	For more information about adding a printer, refer to "Installing a Printer" in
	the Microsoft Windows "User's Guide" for version 3.0 or 3.1.
	
	Additional query words: 3.00 3.00a 3.10 3.11
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
