---
layout: page
title: "Q92785: Err Msg: &quot;Incorrect DOS Version&quot; Caused by Mismatched Files"
permalink: kb/092/Q92785/
---

## Q92785: Err Msg: &quot;Incorrect DOS Version&quot; Caused by Mismatched Files

	Article: Q92785
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have different versions of COMMAND.COM, MSDOS.SYS, and IO.SYS on your
	computer, the following error message may appear when you boot your machine:
	
	  Incorrect DOS Version
	
	To work around this problem, you need to boot from an MS-DOS boot disk, for
	example, the MS-DOS Uninstall disk.
	
	RESOLUTION
	==========
	
	To verify the versions of MSDOS.SYS and IO.SYS, type "VER" (without the
	quotation marks) at the command prompt, then type "COMMAND" (without the
	quotation marks) to verify the version of the command interpreter.
	
	If VER and COMMAND do not report identical versions and manufacturers, you must
	reinstall the operating system so that COMMAND.COM and the system files have the
	same version number and are from the same manufacturer.
	
	Additional query words: 6.22 5.00 6.00 5.00a 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
