---
layout: page
title: "Q122447: Token Ring Network Startup Disk, Error 53: Network not found"
permalink: kb/122/Q122447/
---

## Q122447: Token Ring Network Startup Disk, Error 53: Network not found

	Article: Q122447
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbnetwork kbenv
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	To make a Token Ring Network Installation Startup Disk using NWLink IPX
	Compatible Protocol with the Network Client Administrator utility, the
	frame type has to be manually changed in the PROTOCOL.INI (or NET.CFG) file
	because the network startup disk uses Ethernet 802.2 as the default frame
	type. In a Token Ring environment, this may cause an error when you try to
	use the NET USE or NET VIEW commands:
	
	  Error 53: Network not found
	
	Following are the required Token Ring frame type syntaxes for workstations
	that need PROTOCOL.INI modifications:
	
	Network Client version 3.0 for MS-DOS and Windows:
	
	  FRAME=TOKENRING
	
	Windows for Workgroups 3.11:
	
	   FRAME=TOKEN-RING
	
	NetWare (modify NET.CFG):
	
	  FRAME=TOKEN-RING and TOKEN-RING_SNAP
	
	Other frame types include the following:
	
	  ETHERNET_802.2  (Default)
	  ETHERNET_802.3
	  ETHERNET_II
	  ETHERNET_SNAP
	
	Additional query words: wfw wfwg prodnt 3.11 wfwg
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
