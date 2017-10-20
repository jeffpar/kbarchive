---
layout: page
title: "Q104946: Commands that Don't Automatically Mount Removable Media Disks"
permalink: /kb/104/Q104946/
---

## Q104946: Commands that Don't Automatically Mount Removable Media Disks

{% raw %}

	Article: Q104946
	Product(s): Microsoft Disk Operating System
	Version(s): 6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	If you put a removable media disk in a drive and issue a command that doesn't
	automatically mount it, DoubleSpace does not automatically mount it until you
	trigger a disk change. For example, the following DoubleSpace commands do not
	cause a DoubleSpace-compressed disk in a removable media drive to be mounted
	automatically.
	
	  DBLSPACE /DEFRAG <drive>:
	  DBLSPACE /info <drive>:
	  DBLSPACE /uncompress <drive>:
	
	RESOLUTION
	==========
	
	To work around this problem, access the DoubleSpace-compressed drive before you
	try to access it using DoubleSpace. For example, if your removable
	DoubleSpace-compressed disk is in drive A, type "A:" (without the quotation
	marks) at the MS-DOS command prompt and then press ENTER.
	
	If you have already typed a command that doesn't cause the disk to be
	automatically mounted, do the following:
	
	1. Eject the disk from the drive.
	
	2. Reinsert the disk into the drive.
	
	3. Access the drive. For example, type "A:" (without the quotation marks) at the
	  MS-DOS command prompt and then press ENTER.
	
	How ChangeLine Support Effects this Situation
	---------------------------------------------
	
	If you use the DRIVPARM command (in the CONFIG.SYS file) to disable ChangeLine
	support, you can successfully mount the removable media disk by accessing it.
	
	With ChangeLine support enabled (the MS-DOS default), after you insert a floppy
	disk in drive A and type "dblspace /info a:" (without the quotation marks), you
	have to eject the disk, reinsert it, and then access it (that is, type "A:"
	[without the quotation marks]) to gain access to the compressed data. If you
	have ChangeLine support disabled, you can force the floppy disk to be
	automatically mounted by typing "A:" (without the quotation marks) and then
	pressing ENTER-- even after you access it in a way that causes it not to be
	mounted.
	
	
	Additional query words: 6.20 change-line chane line
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : :6.2,6.22
	
	=============================================================================
	

{% endraw %}
