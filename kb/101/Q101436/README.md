---
layout: page
title: "Q101436: Deleting DoubleSpace Drives Causes the System to Hang"
permalink: /kb/101/Q101436/
---

## Q101436: Deleting DoubleSpace Drives Causes the System to Hang

{% raw %}

	Article: Q101436
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you delete all your DoubleSpace-compressed drives using the MS-DOS 6.0
	DoubleSpace maintenance program, the system may stop responding (hang) when the
	"Starting MS-DOS..." prompt appears during startup. Pressing the F5 or F8
	function key at the "Starting MS-DOS..." prompt may cause the system to appear
	to operate properly. The system may ask for user input and then hang with a
	blinking cursor. After hanging, the system cannot accept keyboard input;
	therefore, a reset is required to restart (reboot) the computer.
	
	CAUSE
	=====
	
	This problem occurs if drive C has been set as the last drive reserved for
	DoubleSpace's use (LastDrive=C) in the DBLSPACE.INI file. The MS-DOS 6.0
	DoubleSpace maintenance program does not delete the DBLSPACE.INI file when the
	last DoubleSpace drive is deleted.
	
	RESOLUTION
	==========
	
	To correct this problem, delete the DBLSPACE.INI file and reboot the computer.
	To do so:
	
	1. Boot your computer from an MS-DOS 6.0 bootable floppy disk. Make sure that
	  the floppy disk does not contain the DBLSPACE.BIN file.
	
	2. Remove the attributes from the DBLSPACE.INI file as follows:
	
	  c:\dos\attrib -s -h -r c:\dblspace.ini
	
	3. Delete the DBLSPACE.INI file and remove the floppy disk from drive A.
	
	4. Reboot the computer.
	
	The system should now boot from the hard disk.
	
	Additional query words: 6.00 double space
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600
	Version           : MS-DOS:6.0
	
	=============================================================================
	

{% endraw %}
