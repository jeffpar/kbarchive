---
layout: page
title: "Q131016: Settings for the 16550 UART FIFO Buffer"
permalink: kb/131/Q131016/
---

## Q131016: Settings for the 16550 UART FIFO Buffer

	Article: Q131016
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 msnetwork
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes the FIFO settings for a 16550 UART chip and how to change
	them.
	
	MORE INFORMATION
	================
	
	Windows 95 provides two methods for accessing the 16550 UART FIFO buffer
	settings. Each method is a global setting and can affect PCMCIA, internal, and
	external modems. Use one of the following methods to access the Advanced Port
	Settings dialog box:
	
	Method 1
	--------
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click Modems.
	
	3. On the General tab, click Properties.
	
	4. On the Connection tab, click Port Settings.
	
	NOTE: This setting can be changed from any modem properties dialog box. If you
	change this setting in one connectoid, it affects all connectoids.
	
	Method 2
	--------
	
	1. Click the Start button, point to Settings, then click Control Panel.
	
	2. Double-click System.
	
	3. On the Device Manager tab, double-click Ports (COM & LPT).
	
	4. Double-click the communications port (COMx) you want to change.
	
	5. On the Port Settings tab, click Advanced.
	
	In the Advanced Port Settings dialog box you can:
	
	- Enable/disable the FIFO buffer for the 16550 chip.
	
	  NOTE: The COMxFIFO setting that can be manually added to the [386Enh] section
	  of the SYSTEM.INI file does not affect Windows-based programs in Windows 95.
	  This setting only affects MS-DOS-based programs.
	
	- Increase/decrease the Receive buffer.
	
	- Increase/decrease the Transmit buffer.
	
	Enable/Disable the FIFO Buffer
	------------------------------
	
	To disable the FIFO buffer for a 16550 UART chip, click the "Use FIFO buffers
	(requires 16550 compatible UART)" check box to clear it.
	
	Receive Buffer
	--------------
	
	The Receive Buffer slider supports the values 1 (low), 4, 8, and 14 (high).
	
	The default value of 8 should be sufficient in most cases. If you decrease this
	value, more interrupts are sent to the processor, slowing bytes into the UART.
	If you increase this value from 8 to 14, characters may overrun the FIFO
	buffer.
	
	Transmit Buffer
	---------------
	
	The Transmit Buffer slider supports the values 1 (low), 6, 11, and 16 (high).
	
	If you experience problems uploading files, decrease the default value of 16. If
	you decrease the buffer from 16, more interrupts are sent to the processor,
	slowing down the rate at which bytes are sent into the UART Transmit buffer,
	reducing serial overruns. The higher the number, the fewer interrupts are sent,
	increasing system performance during uploads.
	
	
	======================================================================
	Keywords          : win95 msnetwork 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
