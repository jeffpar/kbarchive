---
layout: page
title: "Q83427: Reinstalling Windows Printer Drivers with 3.1=YES"
permalink: kb/083/Q83427/
---

## Q83427: Reinstalling Windows Printer Drivers with 3.1=YES

	Article: Q83427
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a Microsoft Windows printer driver file is corrupted, you may have to force
	Windows to replace it. The easiest way to do this is to modify the [Installed]
	section of the CONTROL.INI file.
	
	MORE INFORMATION
	================
	
	The Control Panel maintains a list of all Windows 3.1 files it has installed in
	the Printers and International dialog boxes. This list is maintained in the
	[Installed] section of CONTROL.INI, as in the following example:
	
	     [Installed]
	     3.1=yes
	     HPPCL5A.DRV=yes
	     HPPCL5A.HLP=yes
	     FINSTALL.DLL=yes
	     FINSTALL.HLP=yes
	     HPPCL5OP.HLP=yes
	     PSCRIPT.DRV=yes
	     PSCRIPT.HLP=yes
	     TESTPS.TXT=yes
	
	If you remove the line "3.1=yes," all drivers are marked as old. If you reinstall
	the printer driver, the corrupted driver is then replaced with the functioning
	driver from the original disks. To modify CONTROL.INI, use the following steps:
	
	1. Edit the CONTROL.INI file with a standard ACSII text editor.
	
	2. Locate the line "3.1=yes" and delete it.
	
	3. Save the file and restart Windows.
	
	4. Open the Control Panel.
	
	5. Choose the Printers icon, then choose the Add button. Reinstall the printer
	  driver.
	
	The line "3.1=yes" informs Control Panel that the following list of files were
	installed with Windows 3.1 (specifically with version 3.1 of MAIN.CPL, which
	comes with Windows). When a newer version of Windows is released, Control Panel
	will know that all of the following files are obsolete and should be replaced.
	If a file exists in this section and this section was created with the current
	version of Windows, Control Panel does not need to copy the file from the
	original disks again.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
