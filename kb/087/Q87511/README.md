---
layout: page
title: "Q87511: FaceLift Err Msg: Data in Section of WIN.INI..."
permalink: kb/087/Q87511/
---

## Q87511: FaceLift Err Msg: Data in Section of WIN.INI...

	Article: Q87511
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Bitstream FaceLift, you may receive one of the following two error
	messages when you attempt to print from a Windows-based application:
	
	  Data in section "Shell devices" in WIN.INI is corrupted or SHELL PRT is
	  directly assigned
	
	  -or-
	
	  Shellprt directly assigned in shell devices
	
	CAUSE
	=====
	
	These messages indicate that Bitstream FaceLift is installed and not functioning
	correctly. Contact Bitstream technical support for help in correcting this error
	message.
	
	Bitstream FaceLift replaces the drivers listed for the printer devices under the
	[devices], [PrinterPorts], and [Shelldevices] sections of the WIN.INI file with
	its own printer driver. The error message above specifically relates to an
	invalid entry in the [Shelldevices] section.
	
	WORKAROUND
	==========
	
	The error messages can be caused by any of the following conditions:
	
	- There is an invalid entry in FaceLift's [Shelldevices] section.
	
	  Solution
	
	  1. Run the FaceLift icon and select Parameters.
	
	     NOTE: If you can't find the icon, from Program Manager, open the File menu
	     and choose Run. On the Command Line type "facelift" (without the quotation
	     marks) and choose OK. (FACELIFT.EXE is installed in the Windows directory
	     so you don't need to specify a drive or directory.)
	
	  2. Clear the FaceLift active box.
	
	  3. Choose OK.
	
	  4. Select Printers and unassign the FaceLift shell-driver.
	
	  5. Exit and restart Windows.
	
	  6. Reinstall FaceLift.
	
	- A default printer has not been selected in the Windows Control Panel.
	
	  Solution
	
	  1. Run Control Panel and choose the Printers icon.
	
	  2. Check and make sure that there is a default printer selected.
	
	- A Windows version 3.0 printer driver is assigned to the same printer port as
	  a Windows version 3.1 driver.
	
	  Solution
	
	  1. Run Control Panel and choose the Printers icon.
	
	  2. Remove or change the port that the Windows 3.0 driver uses.
	
	- The Atech PowerPak printer driver is on the same port as a Hewlett-Packard
	  (HP) LaserJet driver.
	
	  Solution
	
	  1. Run Control Panel and choose the Printers icon.
	
	  2. Remove or change the port that is being used by one of these font
	     applications.
	
	The FaceLift and Atech Publisher's PowerPak products included here are
	manufactured by vendors independent of Microsoft; we make no warranty, implied
	or otherwise, regarding these products' performance or reliability.
	
	For more information, contact Bitstream technical support.
	
	Additional query words: 3.00 3.00a 3.10 err msg 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : :3.0,3.0a,3.1,3.11
	
	=============================================================================
	
