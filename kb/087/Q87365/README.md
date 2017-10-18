---
layout: page
title: "Q87365: Use Generic/Text Only Driver with HP ThinkJet 2225A"
permalink: kb/087/Q87365/
---

## Q87365: Use Generic/Text Only Driver with HP ThinkJet 2225A

	Article: Q87365
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	To print to the Hewlett-Packard HP-IB ThinkJet or ThinkJet 2225A printer you
	need to use the Generic Text-only printer driver. Hewlett-Packard (HP) does not
	offer a Windows driver for the HP ThinkJet 2225A printer. At this time, HP is
	not planning to develop such a driver.
	
	MORE INFORMATION
	================
	
	The Hewlett-Packard HP-IB ThinkJet and ThinkJet 2225A printers use a proprietary
	device interface based on the IEEE standard. The HP ThinkJet driver included in
	the Microsoft Windows versions 3.0 does not work with this printer. Although
	Windows 3.1 includes a driver for the ThinkJet 2225 C-D, the printer produces
	poor output if this driver is used with the ThinkJet 2225A.
	
	To make the HP-IB ThinkJet printer to work with Windows 3.0 or 3.1, use the
	Generic Text-only printer driver and print to the LPTx.DOS or LPTx.OS2 port, or
	clear the Fast Printing Direct To Port check box in the Control Panel Printer
	Connect dialog box (in Windows 3.1 only).
	
	Cabling Problems
	----------------
	
	The most common cause of problems printing to the HP ThinkJet is using a cable
	that was not specifically designed for the ThinkJet printer.
	
	Because of differences in the way various drivers access the cable, many
	applications can print successfully to the printer with the wrong cable.
	However, Windows uses more pin/wires on the cable than most MS-DOS-based
	applications.
	
	If the ThinkJet cable does not clear up the problems, try booting to a "clean"
	environment, then try to print again.
	
	For more information, query on the following words in the Microsoft Knowledge
	Base:
	
	  " What Clean Boot Windows 3.1" (without the quotation marks)
	
	The ThinkJet printer is manufactured by Hewlett-Packard, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: 2.03 2.10 3.00 3.00a 3.10 3.11 garbage output WIN30 WIN31
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:2.x,3.0,3.0a,3.1,3.11
	
	=============================================================================
	
