---
layout: page
title: "Q126412: Using the Microcom DeskPorte 28.8 Modem in Windows 95"
permalink: kb/126/Q126412/
---

## Q126412: Using the Microcom DeskPorte 28.8 Modem in Windows 95

	Article: Q126412
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): dun win95 msnetwork kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you click the More Information button on the Diagnostics tab when you are
	viewing the properties for a Microcom DeskPorte 28.8 Fast EP modem, you receive
	the following error message:
	
	  The modem failed to respond. Make sure it is properly connected and turned
	  on. Verify that the interrupt for the port is properly set.
	
	After you receive this error message and then try to make a connection with
	Dial-Up Networking, you receive the following error message:
	
	  The computer is not receiving a response from the modem. Check that it is
	  plugged in, and if necessary, turn it off, and then turn it back on.
	
	You can access the modem with Dial-Up Networking after you turn the modem off and
	back on.
	
	CAUSE
	=====
	
	Modem diagnostics does not work correctly with the Microcom DeskPorte 28.8 Fast
	EP modem. The second error message occurs only if you click the More Information
	button for the modem before you use Dial-Up Networking.
	
	
	RESOLUTION
	==========
	
	Turn the modem off and back on. Do not click the More Information button on the
	Diagnostics tab when you are viewing the properties for this modem.
	
	MORE INFORMATION
	================
	
	The Windows 16-bit API (and most communication packages) does not support the
	driver name syntax used to open the Microcom modem port driver (PPM.VXD). Only
	32-bit programs that support the Telephony API (TAPI) can access the Microcom
	DeskPorte 28.8 Fast EP modem with the default configuration.
	
	To use the DeskPorte 28.8 Fast EP parallel port modem with 16-bit Windows-based
	applications that use only COM ports, perform the following steps.
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	1. Add a CommAlias key to
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control
	
	  in the registry.
	
	2. For the CommAlias key, add a string value of
	
	  <COM port>
	
	  where <COM port> is the COM port you are redirecting to the LPT port.
	  This COM port must not be physicall present in your computer or in Device
	  Manager. For example, if your computer does not have a COM3 port, you could
	  use the value:
	
	  COM3
	
	3. Set the <COM port> string value to
	
	  <parallel port>\PPM.VXD
	
	  where <parallel port> is the port the modem is attached to. For example,
	  if the modem is on LPT1, you could use the value:
	
	  LPT1\PPM.VXD
	
	======================================================================
	Keywords          : dun win95 msnetwork kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
