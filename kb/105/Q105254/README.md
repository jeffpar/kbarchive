---
layout: page
title: "Q105254: DoubleSpace Automount Fails After You Free a Drive Letter"
permalink: kb/105/Q105254/
---

## Q105254: DoubleSpace Automount Fails After You Free a Drive Letter

	Article: Q105254
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	This information applies to both Microsoft DoubleSpace and Microsoft
	DriveSpace. For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands
	and filenames.
	
	SYMPTOMS
	========
	
	If DoubleSpace attempts to automatically mount a drive and fails (due to lack of
	available drive letters), subsequent attempts also fail even if you free up
	additional drive letters.
	
	CAUSE
	=====
	
	This situation occurs when DoubleSpace doesn't detect a disk change after the
	drive letter is made available.
	
	RESOLUTION
	==========
	
	To work around this situation, remove the removable media disk from the drive,
	reinsert it, and then issue a command that will allow DoubleSpace to mount the
	drive (for example, DIR A:).
	
	
	Additional query words: 6.20 floppy disk diskette automount
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
