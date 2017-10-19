---
layout: page
title: "Q138699: Configuring Windows NT Workstation for Multiple Frame Types"
permalink: /kb/138/Q138699/
---

## Q138699: Configuring Windows NT Workstation for Multiple Frame Types

	Article: Q138699
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry  Key" Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	On Windows NT Server, the NWLink dialog box allows administrators to configure
	NWLink to use multiple frame types. Windows NT Workstation does not provide a
	Windows interface to configure NWLink for multiple frame types. This article
	explains how to edit the Windows NT Workstation registry to configure NWLink for
	multiple frame types.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To configure NWLink for multiple frame types, edit the registry in the following
	location:
	
	1. Under the subtree HKEY_LOCAL_MACHINE, find the PKType parameter under the
	  following subkey:
	
	  SYSTEM\CurrentControlSet\Services\NWLinkIpx\NetConfig\<network_card>
	
	  where <network_card> is the name of the driver for your network card.
	
	2. If the value is set to ff, remove this entry. You may set the PKType
	  parameter to two or more values. When you edit the PKType value, each of the
	  entries for a frame type should be on its own line in the multi- string
	  editor dialog box. Use the following table to determine what values to use:
	
	     Value  Frame Type
	     ---------------------
	     0      Ethernet II
	     1      Ethernet 802.3
	     2      Ethernet 802.2
	     3      Ethernet SNAP
	     4      Arcnet
	     ff     Auto Detect
	
	3. Quit Registry Editor and restart your computer.
	
	Alternatively, if you want to connect to two NetWare servers, make sure that you
	have multiple frames bound to the network card on one of your NetWare servers.
	This NetWare server becomes a router for your Windows NT Workstations. As a
	result, the browse list displays all NetWare servers (802.3 and 802.2 servers).
	
	Additional query words: ipx
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351
	Version           : 3.5 3.51 4.0
	Issue type        : kbhowto
	
	=============================================================================
	
