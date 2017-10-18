---
layout: page
title: "Q167833: TCP/IP Connection Disconnected After Inactive Period"
permalink: kb/167/Q167833/
---

## Q167833: TCP/IP Connection Disconnected After Inactive Period

	Article: Q167833
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1
	Operating System(s): 
	Keyword(s): kbenv kbnetwork osr1 3rdpartynet msnets osr2 win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	After a long period of inactivity, you may receive a message that the TCP/IP
	connection to the server has been disconnected.
	
	CAUSE
	=====
	
	This behavior can occur when the session has been inactive for a long period of
	time and the KeepAliveTime time setting has expired.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	To resolve this issue, add a key to the registry to increase the default value of
	the KeepAliveTime setting.
	
	The entry described in this article does not normally exist in the Windows 95
	registry, and must be added to the following registry key:
	
	  Hkey_Local_Machine\System\CurrentControlSet\Services\VxD\MSTCP
	     KeepAliveTime = <32-bit number>
	
	This entry is a Dword value that specifies the connection idle time in
	milliseconds before TCP begins sending keepalive packets, if keepalive packets
	are enabled on a connection. The default is 2 hours (7,200,000).
	
	MORE INFORMATION
	================
	
	Windows 95 does not send keepalive packets after the KeepAliveTime value
	expires. Increasing the KeepAliveTime value keeps the connection open for a
	longer period of time.
	
	For additional information about TCP/IP registry entries, see the following
	article in the Microsoft Knowledge Base:
	
	  Q158474 Windows TCP/IP Registry Entries
	
	For additional information about how to back up the registry, see the following
	article in the Microsoft Knowledge Base:
	
	  Q139437 Windows 95 Emergency Recovery Utility
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork osr1 3rdpartynet msnets osr2 win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1
	
	=============================================================================
	
