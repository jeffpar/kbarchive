---
layout: page
title: "Q172122: Toshiba I586 Pro 230 MHz System and the National 307 Chip"
permalink: /kb/172/Q172122/
---

## Q172122: Toshiba I586 Pro 230 MHz System and the National 307 Chip

	Article: Q172122
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbhw kbWinNT400sp4fix kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT may not recognize the COM2 port on a Toshiba computer.
	
	CAUSE
	=====
	
	Some Intel motherboards included in Toshiba computers support COM2 as an
	infrared (IR) device. If the COM2 port is set in the BIOS to Infrared Data
	Access Mode, Windows NT does not recognize it. If COM2 is set as a serial port,
	Windows NT recognizes it and makes it available automatically.
	
	Windows NT fails to recognize the National 307 chip on the Intel motherboard
	included in some Toshiba computers. During Detection, Windows NT runs the
	DoesPortExist() function that reads the serial port's line control register. The
	COM2 port test usually returns 0x00; however, the infrared port returns 0x5C.
	The COM2 port is not available because Windows NT writes this returned value to
	the wrong registers in the device.
	
	RESOLUTION
	==========
	
	Perform one of the following to resolve this problem:
	
	- Manually install the COM2 port.
	
	  Please refer to the manufacturer's instructions for making changes to your
	  CMOS settings.
	
	  1. Before Windows NT is installed, start the CMOS setup routine on the
	     Toshiba PC. From the CMOS settings, change the infrared (IR) port to
	     COM:2. When you install Windows NT, it will properly install the COM:2
	     port.
	
	  2. If Windows NT is already installed, ensure the CMOS is set to COM2: (see
	     step 1), then perform the following steps:
	
	     a. Click the Start button, point to Settings, and then click Control
	        Panel.
	
	     b. Double-click the Ports icon, select COM2:, and then click Settings.
	        Click Advanced, and then from the Settings for COM2 Port dialog box,
	        select 03f8 for the Base I/O Port Address and 4 for the Interrupt
	        Request Line. Click OK.
	
	- To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	  Windows NT Server 4.0, Terminal Server Edition. For additional information,
	  please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	======================================================================
	Keywords          : kbhw kbWinNT400sp4fix kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
