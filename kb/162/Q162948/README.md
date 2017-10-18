---
layout: page
title: "Q162948: Windows 95 Does Not Send DHCP Request Packet"
permalink: kb/162/Q162948/
---

## Q162948: Windows 95 Does Not Send DHCP Request Packet

	Article: Q162948
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbnetwork dun win95 kbDialUp
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you are using Windows 95 with a DHCP server to assign an IP address, you
	may be unable to connect to or view network resources using TCP/IP.
	
	CAUSE
	=====
	
	This behavior can occur if the DHCP key in the registry contains eight MAC
	address entries. When this occurs, a new one cannot be created for the current
	session.
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods:
	
	Method 1
	--------
	
	Obtain and install the Windows 95 Windows Sockets 2 Update. This update is
	available at the following Microsoft Web site:
	
	  http://www.microsoft.com/windows/downloads/contents/updates/
	  w95sockets2/default.asp
	
	For additional information about the Windows Sockets 2 Update, see the following
	article in the Microsoft Knowledge Base
	
	  Q182108 Availability of Windows Sockets 2.0 for Windows 95
	
	Method 2
	--------
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	Use Registry Editor to remove all the keys except for the Dhcpinfo00 key from the
	following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\VxD\DHCP
	
	After removing the keys, restart the computer.
	
	MORE INFORMATION
	================
	
	Windows stores the MAC addresses for each individual network adapter under the
	DHCP key in the registry. The key for the MAC address (and other information) is
	stored in a key in the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\VxD\DHCP
	
	When eight of these keys have been created (DhcpInfo00-DhcpInfo07), Windows 95
	does not create a new key and does not send a DHCP Request packet to obtain an
	IP address from the DHCP server. This problem primarily affects laptop computers
	that are routinely plugged into different docking stations with network
	adapters.
	
	Additional query words: wins winsock
	
	======================================================================
	Keywords          : kbnetwork dun win95 kbDialUp 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
