---
layout: page
title: "Q177526: CSNW Does Not Handle Files Correctly When PBurst Is Enabled"
permalink: /kb/177/Q177526/
---

## Q177526: CSNW Does Not Handle Files Correctly When PBurst Is Enabled

	Article: Q177526
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Client Services for NetWare (CSNW) does not handle files correctly when it
	receives the packet burst in the wrong order.
	
	When this happens, CSNW and Gateway Services for NetWare (GSNW) actually issue a
	CloseFileRequest prior to the entire file being transferred, resulting in an
	incomplete file being loaded.
	
	A subsequent save will overlay the good file on the NetWare server, resulting in
	lost data.
	
	This behavior also causes the CSNW or GSNW open file (either a Word or Excel
	document) that is located on the NetWare server to be extremely slow if the
	NetWare server is on a Wide Area Network (WAN) and the routers are configured
	with Multi path.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	Reduce the NWLink packet size or change the Router configuration. To do this,
	perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe), and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\NWLinkIPX
	  \NetConfig\Driverx
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. Edit the following information:
	
	  MaxPktSize     REG_DWORD
	
	  Range: 0 to 65535
	
	  Default: 0
	
	3. Quit Registry Editor and restart your computer.
	
	MORE INFORMATION
	================
	
	The registry key mentioned above specifies the maximum frame size the network
	adapter card is allowed to transmit. If this number is 0, NWLink gets this
	information from the card driver.
	
	This value entry allows the administrator to make the maximum transmit size for a
	card smaller than the card driver allows. A scenario in which you might want to
	change this entry is in an environment in which the network adapter card on one
	side of a conversation is on a link that has a larger frame size than the link
	on the other side of a conversation.
	
	For example, if the sending station is linked to a 16 Mbps Token Ring and the
	receiving station is linked to an Ethernet network, go to the following registry
	key and change the information as shown below:
	
	1. Start Registry Editor (Regedt32.exe), and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Parameters
	
	2. Add the following value:
	
	  DefaultMaxPacketSize:REG_DWORD: (Using Decimal value that matches the
	  MAXPKTSIZE value)
	
	  -or-
	
	Change the router configuration:
	
	  Parameter MAXPATH=1.
	
	This requires that the path to one computer will be the same (this is not a good
	choice because routers are configured with multiple paths to insure network
	reliability).
	
	======================================================================
	Keywords          : kbnetwork kbtshoot 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	
	=============================================================================
	
