---
layout: page
title: "Q105181: SMARTDRV Err Msg After Installing DBLSPACE: You Must Specify"
permalink: /kb/105/Q105181/
---

## Q105181: SMARTDRV Err Msg After Installing DBLSPACE: You Must Specify

{% raw %}

	Article: Q105181
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22; WINDOWS:95
	Operating System(s): 
	Keyword(s): msdos win95
	Last Modified: 31-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	If you install DoubleSpace on a machine that already has SMARTDrive installed,
	you receive the following error message:
	
	  You must specify the host drive for a DoubleSpace drive.
	
	CAUSE
	=====
	
	This situation occurs when you have write caching enabled for a specific drive,
	and you then run DoubleSpace to compress it. For example, if you have "SMARTDRV
	C+" in your AUTOEXEC.BAT file to specify read/write caching for drive C and then
	you compress drive C, you receive the error message noted above.
	
	This situation occurs because DoubleSpace installation does not modify the
	SMARTDRV command in the AUTOEXEC.BAT file.
	
	RESOLUTION
	==========
	
	To work around this situation, use a text editor such as MS-DOS Editor to edit
	your AUTOEXEC.BAT file and change the SMARTDRV command so that it automatically
	determines which drives to cache. For example:
	
	  SMARTDRV
	
	Additional query words: 6.20 6.22
	
	======================================================================
	Keywords          : msdos win95 
	Technology        : kbWin95search kbZNotKeyword3 kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22; WINDOWS:95
	
	=============================================================================
	

{% endraw %}
