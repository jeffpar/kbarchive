---
layout: page
title: "Q97455: MS-DOS: Making a Bootable DoubleSpace Floppy Disk"
permalink: /kb/097/Q97455/
---

## Q97455: MS-DOS: Making a Bootable DoubleSpace Floppy Disk

{% raw %}

	Article: Q97455
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the steps necessary to make a bootable DoubleSpace-
	compressed floppy disk.
	
	NOTE: This procedure works on 720K, 1.2-MB, and 1.44-MB disks only.
	
	MORE INFORMATION
	================
	
	Steps to Create a Bootable Floppy Disk with DoubleSpace
	-------------------------------------------------------
	
	1. Format a floppy disk in drive A using the following command:
	
	     format a: /s
	
	2. Run DoubleSpace and compress the floppy disk in drive A. For example, type
	  "dblspace /compress a:" (without the quotation marks) at the MS-DOS command
	  prompt, and then press ENTER.
	
	3. After DoubleSpace finishes compressing the disk, it mounts the disk. Run
	  DBLSPACE /LIST to determine which drive is the host drive.
	
	4. Delete the READTHIS.TXT from the host drive. For example, type "del
	  h:\readthis.txt" (without the quotation marks) at the MS-DOS command prompt
	  and then press ENTER.
	
	5. Copy COMMAND.COM to the host drive. For example, type "copy c:\command.com
	  h:\" (without the quotation marks) at the MS-DOS command prompt and then
	  press ENTER.
	
	6. Using MS-DOS Editor, create a DBLSPACE.INI file on the host drive with the
	  following lines in it:
	
	      MaxRemovableDrives=<number of floppy drive on your system>
	     FirstDrive=<one letter greater than the last drive letter used>
	     LastDrive=<five letters greater than the last drive letter used>
	     MaxFileFragments=120
	     ActivateDrive=<host drive>,A0
	
	  For example:
	
	     MaxRemovableDrives=2
	     FirstDrive=D
	     LastDrive=H
	     MaxFileFragments=120
	     ActivateDrive=G,A0
	
	  NOTE: DBLSPACE.BIN reads the DBLSPACE.INI file from the floppy disk, and
	  ignores any DBLSPACE.INI files on the hard disk drive. Therefore, any
	  ACTIVATEDRIVE= lines in the DBLSPACE.INI file on the hard disk drive aren't
	  processed, and the corresponding compressed volume file (CVF) on the hard
	  disk drive isn't mounted. Thus, data stored in that CVF is inaccessible. To
	  work around this situation and ensure access to other compressed drives, add
	  an additional ACTIVATEDRIVE= line for each compressed drive to the
	  DBLSPACE.INI file on the floppy disk. For example:
	
	     MaxRemovableDrives=2
	     FirstDrive=D
	     LastDrive=H
	     MaxFileFragments=120
	     ActivateDrive=G,A0
	     ActivateDrive=H,C0
	
	  WARNING: If you edit the DBLSPACE.INI file, be sure you do not have
	  FirstDrive= set to a letter used by a physical or logical drive (such as
	  drive C). Also, do not set the LastDrive= and FirstDrive= statements to drive
	  letters that are more than 13 letters apart.
	
	7. Delete the MS-DOS system files on drive A. (These files are not required on
	  the compressed volume.) To do this, type the following at the MS-DOS command
	  prompt, pressing ENTER after each line:
	
	  " deltree a:\dblspace.bin
	  deltree a:\msdos.sys
	  deltree a:\io.sys " (without the quotation marks)
	
	  The disk is now bootable. The CVF on the floppy disk now mounts automatically
	  when you restart your computer with this disk in drive A.
	
	Additional query words: 6.00 double space
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	

{% endraw %}
