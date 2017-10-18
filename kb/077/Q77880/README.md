---
layout: page
title: "Q77880: Nth Group Peripherals Device Drivers, PS/2, and MS-DOS 5.0"
permalink: kb/077/Q77880/
---

## Q77880: Nth Group Peripherals Device Drivers, PS/2, and MS-DOS 5.0

	Article: Q77880
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Nth Group Peripherals has confirmed that all device drivers shipped with their
	floppy drives for IBM PS/2 machines are incompatible with MS-DOS 5.0.
	
	Updates of these drivers for MS-DOS 5.0 are available from Nth Group
	Peripherals.
	
	This information applies to Microsoft MS-DOS 5.0.
	
	MORE INFORMATION
	================
	
	When attempting to boot MS-DOS 5.0 on machines with the Nth Group Peripherals
	drivers, the machine will hang. Nth Group states that the SETVER command should
	NOT be used to attempt to get the drivers to work.
	
	Nth Group Peripherals produces external floppy drives for IBM PS/2 computers.
	These drives come with device drivers that allow the external floppy drive to be
	assigned the B drive specification.
	
	With IBM PS/2 machines, the internal floppy drive may be accessed using both the
	A and B drive specifications. To allow an Nth Group drive to be accessed as
	drive B on a PS/2, its BIOS must be modified. The location of the modification
	varies depending on the version of DOS being used.
	
	Warning: If you use the SETVER command to attempt to correct the problem with
	these drivers, the device driver will modify an incorrect location in the BIOS,
	producing unpredictable errors and a degradation of system integrity.
	
	To obtain upgraded drivers to use with MS-DOS 5.0, call Nth Group Peripherals at
	(805) 772-6121.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 5.00 3rdparty noupd LOCK-UP
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
