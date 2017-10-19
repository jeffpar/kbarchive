---
layout: page
title: "Q94682: Windows 3.1 COMM.DRV File May Be Incompatible with PS/2 50Z"
permalink: /kb/094/Q94682/
---

## Q94682: Windows 3.1 COMM.DRV File May Be Incompatible with PS/2 50Z

	Article: Q94682
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows 3.1 COMM.DRV designed for external modems that are connected to the
	on board serial port (COM1) may not work with early models of the IBM PS/2 50Z.
	Windows may not be able to communicate with the modem, or the computer may lock
	up.
	
	The following information does not apply to internal modems because they do not
	use the external serial port on the 50Z. They should work with Windows 3.1.
	
	MORE INFORMATION
	================
	
	Early versions of the IBM PS/2 model 50Z may have shipped with ZM41 system
	boards that use a non-standard serial communications port.
	
	At speeds less than 9600bps, the external (COM1) serial port may fail with
	Windows 3.1 and other communications programs, including Autosig for MS-DOS and
	the CompuServe Information Manager (CIM) for MS-DOS.
	
	
	WORKAROUND
	==========
	
	As a possible workaround, you can try using the COMM.DRV driver for Windows 3.0.
	If you have this driver available, install it as follows:
	
	1. Make a backup copy of the COMM.DRV that is located in your Windows system
	  subdirectory.
	
	2. Insert the Windows 3.0 disk that contains COMM.DR_ into a floppy disk drive.
	  This file is located on disk 1 (5.25-inch high-density), disk 2 (3.5-inch
	  low-density) or disk 4 (5.25-inch low-density).
	
	3. Use the EXPAND command to expand the file to the hard disk. For example:
	
	  EXPAND A:COMM.DR_ c:\Windows\SYSTEM
	
	For further information, please contact IBM.
	
	
	The IBM products included here are manufactured by International Business
	Machines, Inc., a vendor independent of Microsoft; we make no warranty, implied
	or otherwise, regarding these products' performance or reliability.
	
	KBCategory: kb3rdparty kbprb
	KBSubcategory: wwin31 wincom
	
	Additional query words: 3.10 8550 8550z hang
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
