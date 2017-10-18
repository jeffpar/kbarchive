---
layout: page
title: "Q83787: Troubleshooting Duplicate COMx Ports on Multi-I/O Boards"
permalink: kb/083/Q83787/
---

## Q83787: Troubleshooting Duplicate COMx Ports on Multi-I/O Boards

	Article: Q83787
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to communicate with an internal modem using the same COM port as an
	existing on-board COM port or a multi-I/O board can cause various problems,
	depending upon the hardware and BIOS used. These problems can occur even though
	nothing is connected to the physical COM port. Symptoms associated with having
	duplicate COM ports include the following:
	
	- The system hangs when you create a communications document, try to connect,
	  or use an Autodial/Dial This Number command.
	
	- The system reboots when attempting to dial out or when the connection would
	  have occurred.
	
	- The modem dials and rings but does not connect.
	
	- The modem initializes and dials but the message NO CARRIER is displayed.
	
	- A cursor is not enabled for Terminal under Microsoft Windows version 3.0 or
	  3.1.
	
	RESOLUTION
	==========
	
	To correct these problems, do one of the following:
	
	- Disable or reassign the on-board or multi-I/O board COM port. Consult your
	  hardware documentation for information on reconfiguring the COM port.
	
	  -or-
	
	- Reconfigure the internal modem to use a different COM port, such as COM3 or
	  COM4. Consult your modem documentation for information about doing this.
	  NOTE: Make sure that the IRQ of the COM port you choose is not being used by
	  any other installed device.
	
	  -or-
	
	- Use an external modem.
	
	MORE INFORMATION
	================
	
	Many PC motherboards ship with two built-in COM ports. Even though there may not
	be an external connector for the second COM port on the back of the case, the
	COM port circuitry is on these motherboards and must be disabled to reliably use
	an internal modem on COM2. Reconfiguring the COM ports usually involves changing
	a DIP switch or moving a jumper. Consult your hardware documentation for more
	information about configuring the COM ports.
	
	Additional query words: comm 3rdparty tshoot 3.00 3.0 3.0a 3.00a 3.1 com1 com2 com3 com4 irq sharing input output redirect starts again multi i/o serial test works for windows home
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
