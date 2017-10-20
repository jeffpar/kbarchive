---
layout: page
title: "Q75087: 3.5-inch MS-DOS 5 Upgrade May Fail with Early DOS Versions"
permalink: /kb/075/Q75087/
---

## Q75087: 3.5-inch MS-DOS 5 Upgrade May Fail with Early DOS Versions

{% raw %}

	Article: Q75087
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
	
	When upgrading to MS-DOS 5.0 or later from DOS versions earlier than 3.2,
	installation from the 3.5-inch MS-DOS 5 Upgrade disks may fail.
	
	Most MS-DOS and OEM DOS versions earlier than DOS 3.2 do not support 3.5- inch
	floppy drives and thus will not be able to correctly read all the files on 720K
	disks. When the Setup command is run from MS-DOS 5 Upgrade Disk 1 - Setup, the
	message "bad command or file name" will be displayed. When the DIR command is
	used on one of the MS-DOS 5 Upgrade disks, all the files will not be listed, or
	the filenames will displayed as garbage (extended ASCII characters).
	
	For example, IBM PC-DOS versions 3.0 and 3.1 will provide the following
	information with the DIR command:
	
	Setup Disk     Files on Disk      Files Displayed
	----------     -------------      ---------------
	  1               37                   5
	  2               28                   0
	  3               52                   27
	
	Other OEM DOS versions may also exhibit the same behavior or display garbage.
	
	MORE INFORMATION
	================
	
	To successfully install the MS-DOS 5 or later Upgrade, do one of the following:
	
	- Obtain the 5.25-inch MS-DOS 5 or 6 Upgrade disks if the computer system has a
	  5.25-inch floppy drive.
	
	- If another computer that is running DOS 3.2 (or later) with 1.2 MB and
	  3.5-inch floppy drives is available, and the current system has a 1.2 MB
	  floppy drive, do the following:
	
	  1. Copy all files from each 3.5-inch MS-DOS 5 or 6 Upgrade floppy disk to
	     three 5.25-inch 1.2 MB disks using the second computer.
	
	  2. Label the disks as Disk 1, Disk 2, and Disk 3 using the LABEL command.
	     There should be six spaces between the word "Disk" and the number in the
	     volume label (for example, Disk 1).
	
	  3. Run Setup from the 1.2 MB floppy drive on the first computer.
	
	- Start from a later DOS version that supports a 3.5-inch floppy drive, such as
	  MS-DOS or PC-DOS versions 3.2 or later, and run Setup.
	
	Additional query words: 6.22 3.00 3.20 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
