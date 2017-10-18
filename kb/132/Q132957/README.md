---
layout: page
title: "Q132957: Removable-Media Drives Not Automatically Mounted at Startup"
permalink: kb/132/Q132957/
---

## Q132957: Removable-Media Drives Not Automatically Mounted at Startup

	Article: Q132957
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows 95, a compressed volume on a removable-media drive (such
	as a Bernoulli or Syquest drive) may not be automatically mounted.
	
	CAUSE
	=====
	
	This problem can occur if the computer has two floppy disk drives and the
	following settings exist in the Drvspace.ini file:
	
	- MaxRemovableDrives=2
	
	- AutoMount=1
	
	RESOLUTION
	==========
	
	To correct this problem, increase the value of the MaxRemovableDrives setting to
	match the total number of removable-media drives in the computer. For example,
	if your computer has two floppy disk drives and a double Bernoulli drive, use
	the setting "MaxRemovableDrives=4" (two floppy disk drives plus two Bernoulli
	drives).
	
	To edit the Drvspace.ini file, follow these steps.
	
	1. Using Windows Explorer, locate the Drvspace.ini file in the root directory of
	  the boot drive.
	
	2. Use the right mouse button to click the Drvspace.ini file, then click
	  Properties on the menu that appears.
	
	3. Click the Read-only check box to clear it, then click OK.
	
	4. Double-click the Drvspace.ini file to open it.
	
	5. Make either of the following changes to the file:
	
	   - Change the value of the MaxRemovableDrives setting to match the total
	     number of removable-media drives.
	
	     -or-
	
	   - Set the AutoMount entry to the drive letters assigned to the
	     removable-media drives. For example, if you have a double Bernoulli drive
	     with drive letters D and E assigned to the drive, use the setting
	     "AutoMount=DE."
	
	6. Save and then close the file.
	
	MORE INFORMATION
	================
	
	Note that when you are using an Iomega RCD driver with a double Bernoulli drive,
	you may receive a "General Failure" error message the first time you access the
	second drive. This causes automatic activation and automatic mounting to fail.
	Using an Iomega OAD or SCSI driver resolves the problem.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: automount autoactivate cvf
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
