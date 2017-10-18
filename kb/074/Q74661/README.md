---
layout: page
title: "Q74661: Running MS-DOS Setup From An External Floppy"
permalink: kb/074/Q74661/
---

## Q74661: Running MS-DOS Setup From An External Floppy

	Article: Q74661
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
	
	MS-DOS 5.x and later Setup runs from only drive A or B. If you have an external
	floppy drive that is not recognized as drive A or B, you need to either
	reconfigure you hardware or run MS-DOS Setup from your hard drive.
	
	
	MORE INFORMATION
	================
	
	To run MS-DOS Setup from the hard drive:
	
	1. Create a directory on the hard drive. For example, type "md c:\temp" (without
	  the quotation marks) at the MS-DOS command prompt and then press ENTER.
	
	2. Copy all of the files from the MS-DOS Upgrade disks to the temporary
	  directory. For example, insert the first disk into floppy drive A and type
	  the following at the command prompt:
	
	  " xcopy a:*.* c:\temp " (without the quotation marks)
	
	  Repeat this for all disks included in the MS-DOS Upgrade package.
	
	3. Change to the directory that you created in step 1. For example, at the
	  MS-DOS command prompt, type the following commands, pressing ENTER after each
	  one.
	
	  " c:
	  cd\
	  cd temp " (without the quotation marks)
	
	4. At the command prompt, type the following:
	
	  " setup " (without the quotation marks)
	
	  This command starts the MS-DOS Setup program.
	
	5. After Setup has completed and rebooted your computer, delete the temporary
	  directory and the files.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 requires device driver CONFIG.SYS file C D E internal
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
