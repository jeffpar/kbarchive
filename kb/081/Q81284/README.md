---
layout: page
title: "Q81284: Windows Does Not Load With Intel 386 SnapIn"
permalink: /kb/081/Q81284/
---

## Q81284: Windows Does Not Load With Intel 386 SnapIn

	Article: Q81284
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows may encounter some problems when running on a computer system configured
	with an Intel 386 SnapIn. The following are some of the most common situations:
	
	- Windows returns to the command line after trying to load.
	
	  -or-
	
	- The error message "Cannot file or load specific file" is received.
	
	  -or-
	
	- Windows cannot be run in enhanced mode.
	
	This information applies to Microsoft MS-DOS version 5.0 and Windows versions 3.0
	and 3.0a.
	
	MORE INFORMATION
	================
	
	If Windows is having a problem operating on a system equipped with an Intel
	SnapIn 386, check the following:
	
	1. Make sure Windows has been reinstalled after SnapIn 386 was added to the
	  system. This makes sure the 386 specific files necessary for enhanced mode
	  operation are copied to the hard drive. NOTE: This case alone is the most
	  common cause for the error message "Cannot file or load specific file."
	
	2. Add VirtualHDIRQ=off to the 386ENH section of the SYSTEM.INI file. This will
	  enable certain hard disk controller interrupts to go through the ROM routine
	  that handles those interrupts, instead of being controlled by Windows when
	  running in enhanced mode.
	
	3. If SMARTDRV.SYS is loading, add the parameter /b+ to the end of the
	  SMARTDRV.SYS command line in the CONFIG.SYS file. The /b+ parameter forces
	  the double buffering capability of the SMARTDRV.SYS disk cache to be
	  installed. The line would look similar to the following example:
	
	        DEVICE=[drive:][path]\SMARTDRV.SYS 1024 512 /B+
	
	  Warning: It is also possible to use the /b- parameter, which disables the
	  double buffering capabilities of SMARTDRV.SYS. However, if there is a Bus
	  Master board present in the system and the /b- parameter is used, Data
	  corruption may occur.
	
	4. Check for memory conflicts. If there are expansion boards in the system that
	  occupy memory address space (network boards, emulation boards, and so on),
	  add an EMMEXCLUDE= statement to the 386ENH section of the SYSTEM.INI file.
	  Exclude the range to cover the memory address of the expansion board. The
	  line would look similar to the following example:
	
	        EMMEXCLUDE=A000-EFFF
	
	NOTE: On an Intel SnapIn 386 equipped system running MS-DOS 5.0, SMARTDRV.SYS
	looks at the system ID byte and sees a 286. It then assumes that Windows cannot
	be run in enhanced mode. Because SnapIn 386 allows these systems to run in 386
	enhanced mode, you must make the adjustments above to ensure stable operation.
	
	SnapIn 386 is manufactured by Intel, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	REFERENCES
	==========
	
	Intel FaxBack Document #2770, #2850
	
	
	For more information, query on the following words:
	
	  INTEL and BOARDS and COMPATIBILITY
	
	Additional query words: MS-DOS 5 5.0 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
