---
layout: page
title: "Q43083: DOSSHELL Returns to DOS after Executing Batch File"
permalink: kb/043/Q43083/
---

## Q43083: DOSSHELL Returns to DOS after Executing Batch File

	Article: Q43083
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you execute a batch file from DOSSHELL, you are not returned to the
	DOSSHELL when the batch file is finished. Instead, you are returned to the
	MS-DOS prompt.
	
	CAUSE
	=====
	
	This problem occurs because you are not using the following syntax in your
	Commands field of the Add Program dialog box:
	
	  CALL FOOT.BAT
	
	If you neglect to use the CALL statement, the batch file does not return properly
	to the calling program. Instead, it returns you to the MS-DOS command prompt
	because the DOSSHELL also has its own batch command language, slightly different
	from that used by COMMAND.COM. The CALL is necessary to inform the DOSSHELL that
	the file should be CALLed as a normal MS-DOS batch file.
	
	MORE INFORMATION
	================
	
	For more information about the use of batch files from the Microsoft MS-DOS 4.0
	Shell, refer to Page 101 of the "Microsoft MS-DOS Shell User's Guide" manual.
	
	Additional query words: 4.00 4.01 5.00 5.00a 6.00 6.20 6.21 6.22
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
