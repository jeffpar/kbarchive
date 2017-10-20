---
layout: page
title: "Q100021: Unable to Access Compressed Drives Using DBLBOOT.BAT Disk"
permalink: /kb/100/Q100021/
---

## Q100021: Unable to Access Compressed Drives Using DBLBOOT.BAT Disk

{% raw %}

	Article: Q100021
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	If you start your computer from the compressed disk created by DBLBOOT.BAT (a
	batch file included with MS-DOS 6.x Supplemental Disks that creates a
	DoubleSpace-compressed startup disk), you cannot access any other compressed
	drives on your system.
	
	To work around this problem, edit the DBLSPACE.INI file on the compressed disk
	and include an ActivateDrive entry for each compressed drive that should be
	mounted at startup.
	
	CAUSE
	=====
	
	To ensure that the compressed volume file (CVF) DBLBOOT.BAT creates is mounted
	automatically at startup, the batch file creates a DBLSPACE.INI file and places
	it in the root directory of the floppy disk. Because DBLSPACE.BIN reads this
	DBLSPACE.INI file from the floppy disk, any DBLSPACE.INI file on the hard disk
	is ignored. Therefore, any ActivateDrive entry specified in such a DBLSPACE.INI
	file is never processed, the corresponding CVF on the hard disk is not mounted,
	and any data stored in that CVF is inaccessible.
	
	The DBLSPACE.INI file created by DBLBOOT.BAT should contain an entry resembling
	the following:
	
	  ActivateDrive=G,A0
	
	This entry causes the CVF on the disk to be mounted at startup and creates a host
	drive (G in the above example) to store the DoubleSpace files.
	
	WORKAROUND
	==========
	
	To work around this problem, you need to edit the DBLSPACE.INI file on the
	compressed disk and include an ActivateDrive entry for each compressed drive
	that should be mounted at startup.
	
	Modify DBLSPACE.INI
	-------------------
	
	Modify the DBLSPACE.INI file located on the floppy disk (if the CVF is not
	mounted) or on the host drive (if the CVF is mounted) and include an
	ActivateDrive entry for each compressed drive that should be mounted at startup.
	The DBLSPACE.INI file on the hard disk drive can be used as a guide for adding
	the appropriate ActivateDrive entries.
	
	These entries should be made in addition to the original ActivateDrive entry made
	by DBLBOOT.BAT.
	
	Preventing This Problem in the Future Under MS-DOS 6.0
	------------------------------------------------------
	
	To prevent this problem from occurring with future use of the DBLBOOT.BAT file,
	modify the DBLBOOT.INI file (which is in the same directory as DBLBOOT.BAT), and
	include an ActivateDrive entry for each compressed drive that should be mounted
	at startup.
	
	DBLBOOT.INI is a prototype .INI file used by the DBLBOOT.BAT file for creating a
	DBLSPACE.INI file on the floppy disk.
	
	Preventing This Problem in the Future Under MS-DOS 6.2
	------------------------------------------------------
	
	Since the MS-DOS 6.2 Supplemental Disk does not contain a DBLBOOT.INI file, you
	must modify the DBLBOOT.BAT file. Line number 76 states the following:
	
	  echo ActivateDrive=I,A0 >> %1\dblspace.ini"
	
	Add additional "echo ActivateDrive" lines after line 76 for each compressed drive
	to be mounted at startup with the DBLBOOT disk. For example, if C is compressed
	and you want drive H for the host drive, add:
	
	  echo ActivateDrive=H,C0 >> %1\dblspace.ini"
	
	MORE INFORMATION
	================
	
	For more information on editing the DBLSPACE.INI file, query on the following
	words in the Microsoft Knowledge Base:
	
	  "dblspace.ini" (without the quotation marks) and "edit" (without the
	  quotation marks) and "how" (without the quotation marks)
	
	Additional query words: 6.00 doublespace double space ds startup dblspace create suppdisk
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	

{% endraw %}
