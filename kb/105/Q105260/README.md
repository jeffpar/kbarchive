---
layout: page
title: "Q105260: Err Msg After Uncompressing: You Cannot Access Any..."
permalink: /kb/105/Q105260/
---

## Q105260: Err Msg After Uncompressing: You Cannot Access Any...

	Article: Q105260
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	SYMPTOMS
	========
	
	After removing MS-DOS DoubleSpace, you may receive the following error message:
	
	  You cannot access any DoubleSpace drives because the DoubleSpace driver,
	  DBLSPACE.BIN, is not installed.
	
	CAUSE
	=====
	
	This error is generated if DoubleSpace fails to remove any
	DEVICE=C:\DOS\DBLSPACE.SYS commands from your CONFIG.SYS file. This situation
	typically occurs if you have followed the sequence below.
	
	1. Installed MS-DOS 6.0.
	
	2. Installed DoubleSpace.
	
	3. Installed MS-DOS 6.2.
	
	4. Uncompressed your DoubleSpace drives.
	
	5. Removed MS-DOS 6.2.
	
	RESOLUTION
	==========
	
	To work around this situation, edit your CONFIG.SYS file and remove all
	DEVICE=C:\DOS\DBLSPACE.SYS commands.
	
	Additional query words: 6.20 uninstalling
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.22
	
	=============================================================================
	
