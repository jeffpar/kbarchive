---
layout: page
title: "Q82641: Windows 3.1 Serial Communications Improvements"
permalink: kb/082/Q82641/
---

## Q82641: Windows 3.1 Serial Communications Improvements

	Article: Q82641
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	All Windows communications applications will benefit from the improved
	system-wide communications features in Microsoft Windows operating system
	version 3.1. Most of the serial communications problems experienced by users of
	Windows 3.0 are corrected in Windows 3.1. Below is a summary of the changes:
	
	- COM port addresses and IRQs can be configured in the Control Panel. Windows
	  3.0 used preset address values for serial ports. Windows 3.1 now allows any
	  port address and IRQ to be used. This solves problems using ports COM3 and
	  COM4, for which Windows 3.0 used nonstandard default values.
	
	- Faster bit rates. Applications for Windows can now set speeds higher than
	  19.2 kilobits per second (Kbps), up to 57.6 Kbps. Contact your Windows
	  software manufacturer for an update to support this new feature.
	
	- Reduced system overhead. Windows 3.1 is fine-tuned for better performance
	  overall, including faster throughput and fewer errors during serial
	  communications. A new driver interface allows Windows to pass data in blocks
	  to the driver, rather than passing data a character at a time. See the
	  Windows 3.1 Device Development Kit (DDK) for details. Windows 3.0 passes data
	  one character at a time.
	
	- The high-speed 16550 UART (Universal Asynchronous Receiver Transmitter) is
	  now supported for Windows applications.
	
	- EnableCommNotification API. Windows applications can register to be notified
	  by a window message when serial port events occur, rather than performing
	  constant polling, which reduces overall system performance.
	
	- Serial ports on the same IRQ can be used "in rotation." Although on most PCs,
	  serial ports that use the same IRQ cannot be used simultaneously, Windows 3.0
	  sometimes prevented them from being used in rotation, one after another. This
	  is corrected in Windows 3.1.
	
	- Full-duplex improvements. Some users experienced lockups during full-duplex
	  transfers at fast bit rates under Windows 3.0. These problems are corrected
	  in Windows 3.1.
	
	
	KBCategory: kbusage
	KBSubcategory: win31 wincomm
	
	Additional query words: 3.10 3.11 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
