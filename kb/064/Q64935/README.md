---
layout: page
title: "Q64935: Windows 3.0 Support of 16550 and 16550A UART"
permalink: /kb/064/Q64935/
---

## Q64935: Windows 3.0 Support of 16550 and 16550A UART

	Article: Q64935
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	Microsoft Windows version 3.0 does not support the advanced first-in-first-
	out (FIFO) buffer feature of the 16550 and 16550A Universal Asynchronous
	Receiver Transmitter (UART). It does support the 16550 and 16550A as a
	standard 8250 UART.
	
	The 8250 UART has been the primary micro-circuitry for communication ports
	in IBM-compatible machines. If the computer's communication port is using
	the 16550 or 16550A, you should disable the FIFO buffer.
	
	Refer to your hardware documentation or contact your manufacturer for
	assistance in disabling the FIFO buffer.
	
	Additional query words: 3.00 3.0 3.0a 3.00a KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
