---
layout: page
title: "Q172215: How to Force 128-bit Data Encryption for RAS"
permalink: kb/172/Q172215/
---

## Q172215: How to Force 128-bit Data Encryption for RAS

	Article: Q172215
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork dun win95 kbDialUp
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	With the release of the 128-bit Service Pack 3 (SP3) for Windows NT 4.0, RAS
	clients can now negotiate 128-bit RAS data encryption with a Windows NT 4.0 RAS
	server. Normal RAS data encryption is 40-bit. RAS clients that can take
	advantage of 128-bit data encryption are Windows NT Server or Workstation 4.0
	with SP3 128-bit and Windows 95 Dial-Up Networking 1.2 128- bit.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To enable 128-bit RAS data encryption on an NT 4.0 SP3 128-bit RAS server, use
	the following steps:
	
	1. in Control Panel, double-click Network , and then click Services.
	
	2. Click Remote Access Service, and tjem click Properties.
	
	3. Click Network, and then click "Require Microsoft encrypted authentication".
	
	4. Click "Require data encryption", and then click OK.
	
	5. Click Continue, and then click Close.
	
	6. Click No when you receive a prompt to restart the computer.
	
	7. Start Registry Editor (Regedit.exe or Regedt32.exe).
	
	8. Navigate to the following registry subtree:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\RasMan\PPP\COMPCP
	
	9. Click Edit, click Add Value, and then enter the following information:
	
	  Value Name: "ForceStrongEncryption" (without the quotation marks)
	  Value Type: "DWORD" (without the quotation marks)
	  Value Data: "1" (without the quotation marks)
	
	10. Exit Registry Editor, and then restart the computer.
	
	With 128-bit RAS encryption enabled, you will see one or more event log messages
	in Event Viewer when RAS users connect using RAS or PPTP. If the RAS client
	supports 128-bit RAS data encryption, the computer may log the following event:
	
	  Event ID: 20107
	  Source: RemoteAccess
	  Description: The user RAS connected to port COM1 using strong encryption.
	
	If the RAS client does not support 128-bit RAS data encryption, the computer may
	log the following event:
	
	  Event ID: 20077
	  Source: RemoteAccess
	  Description: An error occurred in the Point to Point Protocol module on port
	  COM1. The remote computer does not support the required encryption type.
	
	A Windows 95 client that fails with the above event log may receive the following
	error message:
	
	  Dial-Up Networking
	  Error 629: You have been disconnected from the computer you dialed.
	  Double-click the connection to try again.
	
	A Windows NT client that fails with the above event log may receive the following
	error message:
	
	  Error Connecting to RAS server
	  Disconnected.
	  Error 629: The port was disconnected by the remote machine.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q169895 Enabling 128-bit Encryption for Routing and Remote Access
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork dun win95 kbDialUp 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
