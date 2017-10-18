---
layout: page
title: "Q179470: Unable to Access Shares on RAS Client from RAS Server"
permalink: kb/179/Q179470/
---

## Q179470: Unable to Access Shares on RAS Client from RAS Server

	Article: Q179470
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WinNT:3.5,3.51,4.0;Windows:95
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have a Remote Access Service (RAS) client connected to your RAS server,
	your Local Area Network (LAN) clients may not be able to access the resources on
	the RAS client.
	
	CAUSE
	=====
	
	The cause for the above issue may vary depending on your type of RAS client.
	
	Windows 95 Dial-Up Networking (DUN) Client
	------------------------------------------
	
	The network protocol bound to the Dial-Up Adapter is not bound to the file and
	printer sharing for Microsoft Networks service.
	
	Windows NT RAS Client
	---------------------
	
	The network protocol bound to the Server service has the Remote Access WAN
	Wrapper disabled.
	
	RESOLUTION
	==========
	
	To enable access to shared resources on the RAS client from LAN clients, perform
	the following steps:
	
	WARNING: Security risks are increased by allowing other networks (including the
	Internet if you connect to it) to access shares on your RAS client computer.
	
	Windows 95 RAS Client
	---------------------
	
	1. Right-click Network Neighborhood, and then click Properties.
	
	2. Select the protocol(s) bound to Dial-Up Adapter, and then click Properties.
	
	3. Click the Bindings tab, and then click File and Printer Sharing for Microsoft
	  Networks to enable it.
	
	4. Click OK, and then restart your computer.
	
	Windows NT version 3.5x RAS Client
	----------------------------------
	
	1. Click the Start button, point to Settings, click Control Panel, and then
	  double-click Network.
	
	2. Click the Bindings tab, and then select Server in the box below the Show
	  Bindings for drop down list box.
	
	3. Select the entry that displays the Server service bound to your protocol. For
	  example:
	
	     Server\NetBEUI Protocol\Remote Access WAN Wrapper
	
	4. Click Enable, and then click OK.
	
	5. Restart your computer when prompted.
	
	Windows NT version 4.0 RAS Client
	---------------------------------
	
	1. Click Start, point to Settings, click Control Panel, and then double- click
	  Network.
	
	2. Click the Bindings tab, and then select Server in the box below the Show
	  Bindings for drop down list box.
	
	3. Double-click the protocol(s) your RAS connection uses.
	
	4. Click Remote Access WAN Wrapper, and then click Enable.
	
	5. Click Close, and then restart your computer when prompted.
	
	Additional query words: browse
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : WinNT:3.5,3.51,4.0;Windows:95
	Issue type        : kbprb
	
	=============================================================================
	
