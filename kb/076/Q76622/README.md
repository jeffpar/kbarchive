---
layout: page
title: "Q76622: FORMAT Parameters Versus DRIVPARM/DRIVER.SYS"
permalink: kb/076/Q76622/
---

## Q76622: FORMAT Parameters Versus DRIVPARM/DRIVER.SYS

	Article: Q76622
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use the DRIVPARM command or DRIVER.SYS device driver in the CONFIG.SYS
	file, it will override any parameters specified by the FORMAT command. For all
	intents and purposes, the drive will become the type of drive specified by the
	DRIVPARM and DRIVER.SYS commands; therefore, any attempt to format a disk using
	the drive's true parameters will fail.
	
	MORE INFORMATION
	================
	
	The DRIVPARM command in the CONFIG.SYS file allows you to modify the parameters
	of an existing physical disk drive. The settings specified in the DRIVPARM
	command override any previous driver definitions, even those specified when
	using the FORMAT command.
	
	Example
	-------
	
	If you use the DRIVPARM command to redefine a high density (1.44 MB, 3.5-inch)
	disk drive as a low density (720K, 3.5-inch) disk drive, the FORMAT command will
	be unable to format a disk as high density when using the redefined drive. If
	you try to do so, the following error message will be displayed:
	
	  Parameters Not Compatible. Format Terminated.
	
	For more information on the DRIVPARM command, see page 455 of the version 5.0
	"Microsoft MS-DOS User's Guide and Reference."
	
	The DRIVER.SYS device line in the CONFIG.SYS file allows you to create a logical
	drive that can be used to refer to a physical floppy disk drive and/or to modify
	the parameters of an existing physical disk drive. The settings specified in the
	DRIVER.SYS device line override any previous driver definitions, even those
	specified when using the FORMAT command.
	
	EXAMPLE
	-------
	
	If you use the DRIVER.SYS device line to redefine a high density (1.44 MB,
	3.5-inch) disk drive as a low density (720K, 3.5-inch) disk drive, the FORMAT
	command will be unable to format a disk as high density when using the redefined
	drive. If you try to do so, the following error message will be displayed:
	
	  Parameters Not Compatible.
	  Format Terminated.
	
	For more information on the DRIVPARM command, see page 602 in the version 5.0
	"Microsoft MS-DOS User's Guide and Reference."
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
