---
layout: page
title: "Q83473: Troubleshooting PostScript Printer Problems with TESTPS.TXT"
permalink: /kb/083/Q83473/
---

## Q83473: Troubleshooting PostScript Printer Problems with TESTPS.TXT

	Article: Q83473
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11,95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Microsoft Windows 3.1 comes with a file called TESTPS.TXT. This file is brought
	into the Windows SYSTEM subdirectory if you install a PostScript printer.
	
	On page 30, Chart 4.1, the "Microsoft Windows Resource Kit" (WRK) guide
	incorrectly states that TESTPS.TXT is copied into the \WINDOWS directory.
	
	MORE INFORMATION
	================
	
	TESTPS.TXT is used to test PostScript printers for connection and functionality
	problems. To use TESTPS.TXT, copy it to the port to which the PostScript printer
	is connected as follows:
	
	  COPY C:\WINDOWS\SYSTEM\TESTPS.TXT LPTx
	
	  -or-
	
	  COPY C:\WINDOWS\SYSTEM\TESTPS.TXT COMx
	
	where "x" is the port number
	
	If the printer is functioning correctly, a page is ejected with the following
	information:
	
	  Max Printer VM (KB):            xxx.x
	  Max Suggested VM (KB):          xxx.x
	  Bit Rate:                      19.2 kilobits per second (Kbps) or less
	  Data Bits:                      7
	  Parity:                         None
	  Stop Bits:                      1
	  Flow Control:                   Hardware
	
	If the printer is not functioning or is not connected properly, no page is
	ejected.
	
	If no output occurs, check the following:
	
	1. Is the printer plugged in? Is the power on? Try turning off the power and
	  turning it back on again.
	
	2. Is there paper in the printer?
	
	3. Is the correct port being used to copy TESTPS.TXT? Try copying the file to
	  other available ports.
	
	4. Is the printer cable functioning properly? Try a different cable.
	
	5. Is the LPT or Serial card/port configured correctly? Check the BIOS table at
	  40:0 for proper addresses. Check the DIP switches or software setup for the
	  card.
	
	6. Are the settings in the Ports window of the Control Panel configured
	  according to the TESTPS.TXT output? To verify this, use the following steps:
	
	  a. Open the Control Panel, and double-click the Ports icon.
	
	  b. Select the active port, then choose the Settings button.
	
	  c. Compare the settings with the TESTPS.TXT output.
	
	REFERENCES
	==========
	
	"Getting Started with Microsoft Windows," version 3.1, page 76
	
	
	Additional query words: 3.10 documentation error docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbWin95search kbWin98search kbZNotKeyword3 kbWin310 kbWin311 kbWin98
	Version           : WINDOWS:3.1,3.11,95
	
	=============================================================================
	
