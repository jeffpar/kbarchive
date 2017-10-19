---
layout: page
title: "Q125976: How to Assign IPX Network Numbers to Multiple Network Cards"
permalink: /kb/125/Q125976/
---

## Q125976: How to Assign IPX Network Numbers to Multiple Network Cards

	Article: Q125976
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	You cannot configure a Windows NT computer through the user interface to
	access two different IPX networks on two different network adapters, each
	with a different frame type. If you run Control Panel, choose Network,
	select each adapter, and assign a network number, the same network number
	is used for both network adapters. In order to provide the network number
	for each network card, you must modify the Windows NT Registry.
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following subkey:
	
	  SYSTEM\CurrentControlSet\Services\NwlnkIpx\NetConfig\<network card>
	
	  where <network card> is the network card you are configuring for a
	  different IPX network.
	
	3. Remove the entry: NetworkNumber
	
	4. From the Edit menu, choose Add Value. Add the following:
	
	  Value Name: NetworkNumber
	  Data Type: REG_MULTI_SZ
	  Data: <Network ID>
	
	5. If necessary, repeat steps 2 through 4 for each network adapter.
	
	6. Quit the Registry.
	
	7. Shutdown and restart Windows NT.
	
	For additional information, please see the following article in the
	Microsoft Knowledge base:
	
	  Q150546: NWLink IPX/SPX: Network Number vs. Internal Network Number
	
	Additional query words: prodnt nwlink ethernet 802.2 802.3 snap multihomed interface card cards nic nics
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	
