---
layout: page
title: "Q73090: &quot;Wrong Disk&quot; Error When Installing MS-DOS"
permalink: kb/073/Q73090/
---

## Q73090: &quot;Wrong Disk&quot; Error When Installing MS-DOS

	Article: Q73090
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your computer repeatedly prompts for the same Microsoft MS-DOS 5, 6, or 6.2
	Upgrade disk. When you insert the disk, one of the following error messages is
	displayed:
	
	  Wrong disk
	
	  -or-
	
	  This is not the correct disk
	
	  -or-
	
	  Please insert the following disk in drive <x>:
	
	where <x> is the floppy drive letter.
	
	The computer then prompts for the same disk again.
	
	WORKAROUND
	==========
	
	Run Setup from the hard drive.
	
	To run Setup from the hard drive, do the following:
	
	1. Create a new directory on the hard drive.
	
	2. Use the XCOPY command to copy all files from all of the MS-DOS Upgrade disks
	  to the directory you created in step 1.
	
	3. Run Setup from the directory you created in step 1.
	
	
	MORE INFORMATION
	================
	
	If the computer repeatedly prompts for one of the Uninstall disks, check the
	following:
	
	1. Disable the change line support for the floppy drive. To do this, add a
	  DRIVPARM command to the CONFIG.SYS file. For example, if the drive in
	  question is drive A and the drive supports 1.2 MB disks, the proper command
	  is:
	
	  drivparm=/d:0 /f:1
	
	  NOTE: There is no /C switch in the line. For more information on the DRIVPARM
	  command, see page 455 of the version 5.0 "Microsoft MS-DOS User's Reference"
	  or the Online Help for version 6.0 or 6.2.
	
	2. Setup cannot use an Uninstall disk that has a volume label that matches one
	  of the distribution disks. Delete the volume label of the Uninstall disk
	  using a command such as the following:
	
	  label a:
	
	  When the following prompt is displayed:
	
	  Delete current volume label (Y/N)?
	
	  press Y.
	
	3. Try an unformatted disk.
	
	4. Make sure that you aren't putting a high-density disk in a low-density drive.
	
	5. Setup prompts for a size if it determines that the disk is unformatted. Make
	  sure that you choose to format the disk as the media requires.
	
	6. If the Uninstall disk has NOT been created, rename the CONFIG.SYS and
	  AUTOEXEC.BAT files, reboot the computer, and try again.
	
	7. If the Uninstall disk has been created:
	
	  a. Boot off of the Uninstall disk.
	
	  b. Choose to uninstall.
	
	  c. Rename CONFIG.SYS and AUTOEXEC.BAT.
	
	  d. Reboot.
	
	  e. Start over.
	
	8. Make sure you are inserting the disk for which the computer is prompting. If
	  the disks are high density, Uninstall #2 won't be needed, and you may have
	  inserted this disk instead of the upgrade disk that is required.
	
	9. Run Microsoft Anti-Virus (MSAV) from the MS-DOS 6.0 or 6.2 disks (disk 3 of
	  the 1.44 MB disk set and disk 4 of the 1.2 MB disk set) to scan and clean any
	  virus. The Michelangelo virus may cause the MS-DOS 6.0 or 6.2 Setup process
	  to hang and repeatedly ask for the Uninstall disk. (This seems to happen when
	  Setup is approximately 5 percent complete.)
	
	
	If you suspect that your computer has a virus and you are using MS-DOS 6.0 or
	later, run Microsoft Anti-Virus. If you are running an earlier version of
	MS-DOS, either obtain MS-DOS 6.0 or later, or obtain help from a third- party
	virus-correction service or vendor.
	
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 6.21 Tshoot
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	
