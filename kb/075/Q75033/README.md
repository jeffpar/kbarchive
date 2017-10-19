---
layout: page
title: "Q75033: Microsoft MS-DOS Upgrade Minimum Installation"
permalink: /kb/075/Q75033/
---

## Q75033: Microsoft MS-DOS Upgrade Minimum Installation

	Article: Q75033
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
	
	If you do not have enough free space to install Microsoft MS-DOS 5 or later
	Upgrade even after removing unnecessary files, you can perform a minimal
	installation. A minimal installation does NOT do the following:
	
	- Expand and copy nonsystem files directly from the upgrade disks to your hard
	  disk.
	
	- Copy your previous nonsystem files to the OLD_DOS directory.
	
	A minimal installation creates the following:
	
	- CONFIG.NEW and AUTOEXEC.NEW files
	
	- MS-DOS version 5.0 or later system files (IO.SYS, MSDOS.SYS, COMMAND.COM) on
	  the hard drive
	
	- An OLD_DOS directory containing only a README.NOW file
	
	MORE INFORMATION
	================
	
	To perform a minimal installation, do the following:
	
	1. Create a set of working disks.
	
	  For more information about how to create working disks, see the section titled
	  "Installation on Floppy Disks" in Chapter 2 of the version 5.0 "Microsoft
	  MS-DOS Getting Started" manual.
	
	2. After you create the working disks, back up all of your current MS-DOS files
	  by copying them to another directory or disk.
	
	3. Remove any memory resident programs from your AUTOEXEC.BAT file.
	
	4. Insert Disk 1 - Setup in drive A.
	
	5. Type "a:setup /m" (without the quotation marks).
	
	6. When Setup is finished, press ENTER to restart your computer.
	
	7. Because you have the working disks of MS-DOS 5.0, you can selectively copy
	  nonsystem files of MS-DOS 5.0 to the previous MS-DOS directory. Do not mix
	  the previous MS-DOS nonsystem files with the new ones in the same directory.
	  An "Incorrect DOS Version" error message will be displayed if the previous
	  MS-DOS nonsystem file is executed.
	
	8. Compare CONFIG.SYS and AUTOEXEC.BAT with CONFIG.NEW and AUTOEXEC.NEW. Make
	  necessary modifications.
	
	9. Restart the computer. Make sure there is no disk in the floppy drive.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
