---
layout: page
title: "Q83353: Windows Repeatedly Prompts for Same Disk for Printer Driver"
permalink: /kb/083/Q83353/
---

## Q83353: Windows Repeatedly Prompts for Same Disk for Printer Driver

	Article: Q83353
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	While installing a printer driver in the Microsoft Windows operating system
	version 3.0 or 3.1 through the Control Panel, the Printers dialog box appears as
	follows if you installed Windows from a different set of disks:
	
	  INSERT Microsoft Windows 3.00 DISK # OR A DISK WITH THE
	  UPDATED (DRIVER) IN drive A:
	
	This dialog box keeps repeating after you insert the disk and choose the OK
	button.
	
	MORE INFORMATION
	================
	
	If you installed Windows with 5.35-inch disks, Windows prompts you for the
	5.25-inch disk that contains the appropriate printer driver. If you insert a
	3.5-inch disk in the disk drive and press the OK button, Windows cannot find the
	appropriate printer driver if it is not contained on the disk. Pressing the OK
	button causes this dialog box to reappear.
	
	
	To work around this problem, use the following steps:
	
	1. Obtain the same size disks that Windows was originally installed with, and
	  insert the requested disk. When prompted, press the OK button to complete the
	  driver installation.
	
	2. Search the disks for the requested printer driver. When the requested file is
	  found, insert the disk in the drive containing the driver, and press the OK
	  button.
	
	KBCategory: kbprint kbsetup
	KBSubcategory: win30 win31 windrvr
	
	Additional query words: 3.00 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
