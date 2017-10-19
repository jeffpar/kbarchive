---
layout: page
title: "Q71535: MS-DOS: Uninstalling After Moving the OLD_DOS Directory"
permalink: /kb/071/Q71535/
---

## Q71535: MS-DOS: Uninstalling After Moving the OLD_DOS Directory

	Article: Q71535
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	If you would like to free up disk space in your root directory, you can move the
	OLD_DOS directory to another drive or to a floppy disk(s), and later, you can
	restore your previous version of MS-DOS by copying the directory back and using
	UNINSTALL.
	
	MORE INFORMATION
	================
	
	The procedure is as follows:
	
	1. Move the OLD_DOS directory by doing the following:
	
	  a. Copy or back up the OLD_DOS.X directory and its files to another drive or
	     to a floppy disk(s). If copying to floppy disk(s), you may need more than
	     one disk, depending on the OLD_DOS directory size and the floppy disk
	     type. Make sure to note the name of the directory; you will need to know
	     this when uninstalling.
	
	  b. Delete the OLD_DOS directory and its files.
	
	2. Uninstall to a previous DOS version by doing the following:
	
	  a. Copy or restore the OLD_DOS.X directory and its files to the root
	     directory of the boot drive, making sure to name the directory the same as
	     the OLD_DOS.X directory deleted.
	
	  b. Uninstall
	
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 dos
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
