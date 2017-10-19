---
layout: page
title: "Q170336: Network Error (1222): Unable to Browse the Network"
permalink: /kb/170/Q170336/
---

## Q170336: Network Error (1222): Unable to Browse the Network

	Article: Q170336
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 24-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	You are able to access network resources from a command prompt; however, when
	you try to access network resources from Windows Explorer, you may experience
	one or more of the following problems:
	
	- Double-clicking Network Neighborhood gives the following error:
	
	  Unable to browse the network.
	  Network error (1222).
	
	  -or-
	
	- Clicking Start, clicking Run, typing <computer name>, and clicking OK
	  results in the following error:
	
	  \\<computer name>
	  The network is not present or not started.
	
	  -or-
	
	- From File Manager (Winfile.exe), none of the connect drive commands are
	  present.
	
	CAUSE
	=====
	
	The Multiple Provider Router (Mpr.dll) cannot load any network providers from
	the registry.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To resolve this issue, follow this procedure:
	
	1. Start Registry Editor (Regedt32.exe) and go to the following key:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control
	     \NetworkProvider\Order
	
	2. On the Edit menu, click Add Value.
	
	3. Enter the following value:
	
	     Value Name: ProviderOrder
	     Data Type:  REG_SZ
	     Value:      LanmanWorkstation
	
	4. This change should take effect without restarting Windows NT.
	
	MORE INFORMATION
	================
	
	When Mpr.dll initializes, it reads the above registry key value. If Mpr.dll
	fails to get this information, it will return WN_NO_NETWORK, which produces the
	symptoms described above.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
