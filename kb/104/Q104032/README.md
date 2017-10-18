---
layout: page
title: "Q104032: Cannot Use SMARTDRV.SYS with MS-DOS 6.x (DoubleSpace)"
permalink: kb/104/Q104032/
---

## Q104032: Cannot Use SMARTDRV.SYS with MS-DOS 6.x (DoubleSpace)

	Article: Q104032
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This information applies to both Microsoft DoubleSpace and Microsoft DriveSpace.
	For MS-DOS 6.22, use DRVSPACE in place of DBLSPACE for commands and filenames.
	
	MS-DOS Setup does not remove SMARTDRV.SYS from the DOS directory. Since
	SMARTDrive versions earlier than 4.1 are not compatible with DoubleSpace, you
	can safely delete SMARTDRV.SYS from your DOS directory.
	
	MORE INFORMATION
	================
	
	If you try to use SMARTDRV.SYS with MS-DOS 6.0 or 6.2, you receive the following
	message:
	
	  SMARTDrive: Incorrect DOS version
	
	If you use SETVER to allow the successful loading of SMARTDRV.SYS and then try to
	install DoubleSpace, you receive the following message:
	
	  Cannot load SMARTDrive with DoubleSpace
	
	Additional query words: 6.20 stepup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.22
	
	=============================================================================
	
