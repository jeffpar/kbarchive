---
layout: page
title: "Q123441: Windows 95 DriveSpace Err Msg: Windows Cannot Perform..."
permalink: /kb/123/Q123441/
---

## Q123441: Windows 95 DriveSpace Err Msg: Windows Cannot Perform...

	Article: Q123441
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Windows 95 DriveSpace compression utility to delete a
	compressed drive, the following error message is displayed:
	
	  Windows cannot perform this operation because the enhanced mode disk
	  compression driver could not be loaded. You may need to run setup again to
	  install additional disk components. DRVSPACE 545
	
	CAUSE
	=====
	
	This problem occurs if the Windows 95 protected-mode DriveSpace driver
	(DRVSPACX.VXD) is missing or corrupted. In such cases, Windows 95 loads the
	real-mode DriveSpace driver. Deletion operations are not possible with the
	real-mode driver.
	
	RESOLUTION
	==========
	
	To correct this problem, extract the file DRVSPACX.VXD from the original Windows
	95 disks or CD-ROM. To extract the file, perform the following steps:
	
	1. Rename the DRVSPACX.VXD file on your hard disk. This file should be located
	  in the WINDOWS\SYSTEM\IOSUBSYS subdirectory.
	
	  a. To rename this file, first click the Start button on the taskbar. On the
	     Find menu, click Files Or Folders.
	
	  b. In the Find: All Files dialog box, type "drvspacx.vxd" (without the
	     quotation marks) in the Named box. Click the Find Now button.
	
	     NOTE: If DRVSPACX.VXD is missing, that is, it is not found on the hard disk
	     that contains Windows 95, skip to step 2 below.
	
	  c. In the file listing box, use the right (secondary) mouse button to click
	     the file DRVSPACX.VXD and then click Rename. Rename the file DRVSPACX.OLD
	     and then press ENTER.
	
	     NOTE: It is important that you use an extension other than .VXD when
	     renaming files.
	
	2. Extract a new DRVSPACX.VXD from the Windows 95 disks to the
	  WINDOWS\SYSTEM\IOSUBSYS subdirectory. To extract the file, insert Disk 11 in
	  the floppy disk drive, or insert the Windows 95 Setup CD in the CD-ROM drive,
	  then follow the steps below.
	
	  a. On the taskbar, click Start. On Programs menu, click MS-DOS Prompt.
	
	  b. At the command line, type the following
	
	  " extract /l <drive letter>:\windows\system\iosubsys <drive
	  letter>:\A drvspacx.vxd " (without the quotation marks)
	
	     where <drive letter> indicates the letter designating the drive
	     containing the floppy disk or CD-ROM.
	
	3. Restart the system.
	
	  NOTE: For additional information about the EXTRACT command, type "extract /?"
	  (without the quotation marks) at the MS-DOS prompt.
	
	MORE INFORMATION
	================
	
	If DRVSPACX.VXD becomes corrupted or is accidentally deleted from the system,
	the real-mode driver loads by default. DriveSpace cannot perform any operation
	using the real-mode driver while running under Windows 95. However, some
	operations (such as unmount and change letter) can be performed by making
	changes to the DRVSPACE.INI file and then restarting the system. However, the
	FORMAT and DELETE commands cannot be performed without the full support of the
	file system. These commands cannot be run with the real-mode driver.
	
	Additional query words: err msg drive space compression remove delete
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
