---
layout: page
title: "Q81432: Windows: Stack Overflow and UAE with PEAK/DM BIOS"
permalink: /kb/081/Q81432/
---

## Q81432: Windows: Stack Overflow and UAE with PEAK/DM BIOS

	Article: Q81432
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use Chips & Technologies PEAK/DM BIOS version 1.1, you may receive
	Unrecoverable Application Error (UAE) or Internal Stack Overflow error messages
	while Microsoft Windows version 3.0 is running in enhanced mode.
	
	These errors may occur while running a Windows-based application such as
	Microsoft Excel 3.0 in enhanced mode.
	
	CAUSE
	=====
	
	This problem is caused by an outdated BIOS version.
	
	RESOLUTION
	==========
	
	You need to upgrade the BIOS to version 1.3 (dated March 21, 1991) or later. For
	an update to this BIOS, contact Chips and Technologies, Inc.
	
	MORE INFORMATION
	================
	
	Chips & Technologies, Inc. is a supplier of motherboards to many computer
	manufacturers. These motherboards use the PEAK/DM BIOS, which is also
	manufactured by Chips & Technologies, Inc.
	
	Details of PEAK/DM BIOS Version 1.3
	-----------------------------------
	
	Version 1.3 of the BIOS provides the following improvements:
	
	1. Reduced the time-out delay that occurs on 386 and 486 systems when waiting
	  for the printer line to no longer be busy. This makes the time- out on
	  printer failure more consistent with the IBM PC/AT.
	
	2. Improved the detection of EGA/VGA BIOS, even if both exist and are addressed
	  at C0000H; the following is the precedence that is given to the multiple
	  video BIOS in one system:
	
	  a. External BIOS at C0000H (signature is AA55H)
	
	  b. Internal BIOS at E0000H (signature is 6699H)
	
	  c. Internal BIOS at C0000H (signature is AA55H)
	
	3. Changed the BIOS serial interface (INT 14H) so that it no longer does range
	  checking on the COM port index.
	
	4. Corrected a problem with the conversion of 286 LOADALL instruction data to
	  386 LOADALL instruction data, which caused AUTOCAD for DOS version 10 to fail
	  when running in MS-DOS mode under OS/2 version 1.1.
	
	5. Improved the moving of C000 segment ROM data to shadow RAM when the ROM is on
	  the motherboard; now the whole 64K segment, rather than just the video BIOS,
	  is scanned for valid adapter ROMs to be copied to shadow RAM.
	
	6. Reduced the time-out delay on the RTC test from 3-4 seconds down to 1.5-2.0
	  seconds.
	
	7. Changed the cache enable field name in the ADVANCED FEATURE CONTROL page of
	  the setup from "Cache Operation" to "Cache Initialization" to differentiate
	  it from the CHIPset REGISTER CONTROL page of the setup.
	
	8. Changed the description of the cache enable bit on the CHIPset REGISTER
	  CONTROL page to indicate that enabling this bit will not provide any
	  pre-enable initialization of the cache, and thus may cause system failure.
	
	9. Corrected a problem with the time display in Setup when the RTC time values
	  are corrupted; now, if the values are invalid or not in BCD format, the time
	  is reset to midnight.
	
	10. Corrected a problem with the adapter ROM scan so that the scan still checks
	  every 2K, even if it finds an adapter ROM smaller than 2K.
	
	11. Changed the fixed disk interface (INT 13H) so that the fixed disk drive is
	  selected early enough to allow certain drives to become ready, even when the
	  CPU is running at very high speeds (such as 33 MHz or higher).
	
	12. Corrected some problems in the handling and display of drive data for the
	  user-defined fixed disk drives.
	
	13. Changed the speed-switching part of the BIOS to support the newest version
	  for the CHIPS Keyboard controller (version 2.14), which allows several pins
	  to be used for input from a turbo switch (which the keyboard controller will
	  monitor), and any of several pins to be used for changing the state of a
	  turbo LED.
	
	14. Changed the floppy disk interface (INT 13H, INT 40H) so that the disk change
	  line is ignored if the drive is a 360K drive.
	
	The products included here are manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	REFERENCES
	==========
	
	The above information is contained in a document supplied by Chips &
	Technologies. The document is part number 1301-06043-002.
	
	Additional query words: 3.00 3.0 3.00a 3.0a Chips&Technologies peak-dm chip set
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
