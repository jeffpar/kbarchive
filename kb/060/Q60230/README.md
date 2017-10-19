---
layout: page
title: "Q60230: How MS-DOS Communicates with Serial Ports"
permalink: /kb/060/Q60230/
---

## Q60230: How MS-DOS Communicates with Serial Ports

	Article: Q60230
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.3,3.3a,4.0,4.01,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.3, 3.3a, 4.0, 4.01, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information listed below describes how MS-DOS communicates with the serial
	ports.
	
	MORE INFORMATION
	================
	
	The traditional MS-DOS method of reading from and writing to the serial ports is
	done through Interrupt 21H, Function 3 for AUX input. Interrupt 21H, Function 4
	is used for AUX output. In MS-DOS Versions 2.00 and later, the handle-based Read
	File or Write File, or Device Functions (Interrupt 21H, Functions 3fH and 40H)
	can be used to read from or write to the auxiliary device. MS-DOS support for
	the serial communications port is inadequate in several respects for
	high-performance serial I/O applications. See "Article 5: Character Device Input
	and Output" on Pages 161-162 of the "Microsoft MS-DOS Encyclopedia" for a
	complete discussion of these limitations.
	
	Whereas MS-DOS supports only two serial ports via COM1 and COM2, the BIOS also
	provides support for RS-232C asynchronous communications via Interrupt 14H for
	up to four serial ports. However, this service is not "interrupt-driven" and
	also is limited. Telecommunication application programs commonly take complete
	control of the serial ports and supply their own interrupt handler and internal
	buffering for character read and write operations. See "Article 6:
	Interrupt-Driven Communications" on Pages 167-246 of the "Microsoft MS-DOS
	Encyclopedia" for complete details and examples.
	
	The industry COMx standard for ports, I/O addresses, and interrupt request lines
	is as follows:
	
	  I/O PORT    Address    IRQ
	  --------    -------    ---
	
	  COM1        3F8 HEX    4
	  COM2        2F8 HEX    3
	  COM3        3E8 HEX    4
	  COM4        2E8 HEX    3
	
	Additional query words: 3.30 3.30a 4.00 4.01 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS330a kbMSDOS500 kbMSDOS330 kbMSDOS401
	Version           : MS-DOS:3.3,3.3a,4.0,4.01,5.0
	
	=============================================================================
	
