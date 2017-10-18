---
layout: page
title: "Q142065: Connecting Windows NT to Windows 95 with a Null-Modem Cable"
permalink: kb/142/Q142065/
---

## Q142065: Connecting Windows NT to Windows 95 with a Null-Modem Cable

	Article: Q142065
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.5 3.51 4.0 95
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork _IK12469 kbSDKPlatform kbGrpDSNetkbfaq
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If you do not have network adapters, you can use a null-modem (serial) cable to
	connect a Windows 95 computer to a Windows NT computer. There are two ways to
	configure this connection:
	
	- Windows NT is the host and Windows 95 is the guest
	
	-or-
	
	- Windows 95 is the host and Windows NT is the guest
	
	MORE INFORMATION
	================
	
	Windows NT is the Host and Windows 95 is the Guest
	--------------------------------------------------
	
	If you use Windows NT as the server, start the RAS Server Service on the Windows
	NT computer and make sure the user who is connecting has RAS Dial- in
	permissions. The Windows 95 guest should connect using the Direct Cable Connect
	utility and should have their serial adapter configured for the same speed
	connection as the Windows NT computer.
	
	Windows 95 is the Host and Windows NT is the Guest
	--------------------------------------------------
	
	If you use a Windows 95 computer as the server, configure the Windows NT computer
	with a Phonebook entry that uses the null modem 19200 speed (or whatever speed
	is set on the Windows 95 computer) and dial the Windows 95 computer.
	
	Notes
	-----
	
	Windows NT 4.0:
	
	The serial cable device is installed/configured in the Modem utility in Control
	Panel and is listed under Standard Modem Types as "Dial-Up Networking Serial
	Cable between 2 PCs."
	
	Windows NT 3.5x:
	
	The serial cable device is installed/configured in the Remote Access Setup and is
	listed as Null Modem 9600, Null Modem 19200, or Null Modem 38400.
	
	Windows 95:
	
	The serial cable device is configured in the System utility in Control Panel.
	Click the Device Manager tab, double-click Modems, and then double- click Serial
	Cable On ComX (where 'x' is the COM port where your cable is attached.) Make
	sure the speed set here matches the speed of the Windows NT serial connection.
	The client (guest) and server (host) must be the same for the serial connection
	to work properly.
	
	
	For additional information on null-modem (serial) cables, such as the proper
	pin-out configuration to work with the setups above, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q142324 Cables That Are Compatible with Direct Cable Connection
	
	
	Additional query words: win95 win95x dcc winnt Remote Access Service
	
	======================================================================
	Keywords          : kbinterop kbnetwork _IK12469 kbSDKPlatform kbGrpDSNet kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : 3.5 3.51 4.0 95
	Issue type        : kbhowto
	
	=============================================================================
	
