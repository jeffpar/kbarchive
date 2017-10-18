---
layout: page
title: "Q120366: How to Create a Bootable Floppy Disk for the Macintosh"
permalink: kb/120/Q120366/
---

## Q120366: How to Create a Bootable Floppy Disk for the Macintosh

	Article: Q120366
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Disk Tools floppy disk, included with the Macintosh System 7.1 package, is a
	bootable disk.
	
	You can boot from it directly, or use it to make a new bootable floppy disk by
	copying its System Folder to the new floppy disk.
	
	MORE INFORMATION
	================
	
	In the process of troubleshooting problems on the Macintosh, you may need to
	make changes to the System Folder. As a precautionary measure, you should have a
	bootable floppy disk ready beforehand.
	
	NOTE: If you have any INITs or CDEVs necessary to run your Macintosh, be sure to
	copy them to the System Folder on the newly created bootable floppy disk. You
	should not make any changes to the Disk Tools floppy disk.
	
	Steps to Copy the Disk Tools' System Folder to Another Floppy Disk
	------------------------------------------------------------------
	
	1. Insert a blank floppy disk in the disk drive. A floppy disk icon will appear
	  on the desktop, labeled Untitled (unless the floppy disk has been given a
	  different name).
	
	2. From the Special menu, choose Eject Disk. Note that the Untitled floppy disk
	  remains on the desktop and becomes gray.
	
	3. Slide the write-protect tab open on the Disk Tools disk, then insert it into
	  the floppy disk drive. When the Disk Tools icon appears on the desktop,
	  double-click it to open its window.
	
	4. Drag the System Folder from the Disk Tools window to the Untitled disk icon.
	
	5. You may be prompted multiple times to insert the Untitled or Disk Tools disks
	  as the files are copied. Insert the appropriate disk as instructed until the
	  System Folder has been copied.
	
	6. Drag the Disk Tools icon to the Trash icon to remove it from the desktop.
	
	7. Drag the Untitled icon to the Trash icon to eject it from the disk drive.
	
	The Untitled floppy disk is now bootable. To boot from it, turn off the
	Macintosh, insert the disk in the drive, then turn the Macintosh on.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: VFoxMac FoxMac 2.50b 2.50c diskette startup start- up clean system akz
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.5x,2.6a,3.0b
	
	=============================================================================
	
