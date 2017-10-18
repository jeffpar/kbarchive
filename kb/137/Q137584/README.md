---
layout: page
title: "Q137584: CalComp Digitizer Fails on Windows NT 3.51"
permalink: kb/137/Q137584/
---

## Q137584: CalComp Digitizer Fails on Windows NT 3.51

	Article: Q137584
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On your computer running Windows NT 3.51 Server or Workstation, when you install
	the CalComp Wintab32 Digitizer Services and Drivers version 1.1 for Windows NT
	version 3.5, the digitizer works briefly after you reboot your computer, but the
	cursor for the pointing device fails to respond shortly thereafter.
	
	CAUSE
	=====
	
	According to CalComp technical support, the cause is that you have not checked
	the "Allow Service to Interact with Desktop" option in Control Panel.
	
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. Run Control Panel.
	
	2. Choose Services and then Startup.
	
	3. Under Log On As, check the "Allow Service to Interact with Desktop" check
	  box.
	
	
	MORE INFORMATION
	================
	
	CalComp supports the Wintab32 driver with the following CalComp products on
	Windows NT version 3.5 and 3.51:
	
	  DrawingBoard 3200
	  DrawingBoard II 3300
	  DrawingBoard III 3400
	  9500 Series Digitizers
	  DrawingSlate 3100
	  DrawingSlate II 3200.
	
	CalComp states that the DrawingPad product is not tested with Windows NT 3.51.
	
	The Wintab32 drivers ships with the file, WTCPL32.EXE. This is the Wintab 32-bit
	Tablet Control Panel. According to CalComp, you can run it from the command line
	or assign an icon for it in Program Manager.
	
	CalComp digitizers are not on the Windows NT Hardware Compatibility List for
	either Windows NT 3.5 or 3.51. Support questions for CalComp digitizers should
	be referred to CalComp technical support at (800) 458-5888.
	
	For more information, please refer to the INSTALL.DOC file that ships with the
	Calcomp Wintab32 Digitizer Services and Drivers for Windows NT.
	
	The third-party products discussed here are manufactured by Calcomp, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt Cal Comp digitize
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	
