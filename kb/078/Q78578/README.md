---
layout: page
title: "Q78578: DRIVER.SYS Usage and Information"
permalink: /kb/078/Q78578/
---

## Q78578: DRIVER.SYS Usage and Information

	Article: Q78578
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
	
	DRIVER.SYS helps to allocate a new drive letter for an existing floppy drive
	(which is recognized by MS-DOS) and to redefine the physical parameters.
	
	MORE INFORMATION
	================
	
	For example, suppose drive A is a 1.2 MB floppy drive. Using DRIVER.SYS, the
	drive can be assigned as drive D as a 360K drive.
	
	So, in this example, if the command FORMAT A: is executed, the floppy in the
	drive will be formatted to a 1.2 MB disk. If FORMAT D: is executed, the floppy
	in the same drive will be formatted to 360 K.
	
	DRIVER.SYS can be used with any floppy drive that MS-DOS has already recognized.
	DRIVER.SYS cannot be used to create a drive letter for a drive that MS-DOS has
	not recognized.
	
	For example, if a third party device driver is used to provide support for a
	fourth floppy drive, DRIVER.SYS cannot be used to redefine the physical
	characteristics of the third party driver.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
