---
layout: page
title: "Q147132: How to Prevent DoubleSpace or DriveSpace Drivers from Loading"
permalink: /kb/147/Q147132/
---

## Q147132: How to Prevent DoubleSpace or DriveSpace Drivers from Loading

	Article: Q147132
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): diskmem win95 kbDiskMemory
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to prevent the DoubleSpace or DriveSpace driver from
	being loaded into memory.
	
	MORE INFORMATION
	================
	
	The DoubleSpace or DriveSpace driver is loaded under either of the following
	conditions:
	
	- There is a Dblspace.ini or Drvspace.ini file present on the host drive on the
	  boot disk. This is usually drive H, but it can be drive C if the boot disk is
	  not compressed.
	
	- There are lines in the Msdos.sys file calling the driver.
	
	Temporarily Disabling the Driver
	--------------------------------
	
	To temporarily bypass the loading of the Dblspace.bin or Drvspace.bin driver,
	restart your computer, and then press CTRL+F5 when you see the "Starting Windows
	95" message.
	
	Permanently Disabling the Driver
	--------------------------------
	
	To permanently disable the Dblspace.bin or Drvspace.bin driver, follow these
	steps:
	
	1. Make sure Windows 95 is configured so you can view hidden and system files.
	  For additional information, please see the following article in the Microsoft
	  Knowledge Base:
	
	  Q141276 How to View System and Hidden Files in Windows 95
	
	2. Click the Start button, point to Find, and then click Files Or Folders.
	
	3. In the Named box, type "dblspace.ini" (without the quotation marks). Click
	  the Include Subfolders check box to clear it, and then click Find Now.
	
	4. If a Dblspace.ini file is found, use the right mouse button to click the
	  file, click Rename on the menu that appears, and then rename the file to
	  Dblspace.sav.
	
	5. In the Named box, type "drvspace.ini" (without the quotation marks), and then
	  click Find Now.
	
	6. If a Drvspace.ini file is found, use the right mouse button to click the
	  file, click Rename on the menu that appears, and then rename the file to
	  Drvspace.sav.
	
	If the DoubleSpace or DriveSpace driver is still loaded when you restart the
	computer, follow these steps:
	
	1. Start an MS-DOS session.
	
	2. At the command prompt, type the following lines. Press ENTER after each
	  line:
	
	  " cd\
	  attrib -s -h -r msdos.sys
	  edit msdos.sys " (without the quotation marks)
	
	3. In the [Options] section of the file, search for the following lines:
	
	  " Dblspace=0
	  Drvspace=0 " (without the quotation marks)
	
	  If these lines do not exist, add them to the [Options] section.
	
	4. Save the Msdos.sys file and then quit the editor.
	
	5. Type "attrib +s +h +r msdos.sys" (without the quotation marks), and then
	  press ENTER.
	
	6. Restart the computer. The DoubleSpace or DriveSpace driver should not be
	  loaded.
	
	======================================================================
	Keywords          : diskmem win95 kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
