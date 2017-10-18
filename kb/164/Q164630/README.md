---
layout: page
title: "Q164630: RPC over NetBEUI Fails from WinNT 4.0 RAS to WinNT 4.0 RAS"
permalink: kb/164/Q164630/
---

## Q164630: RPC over NetBEUI Fails from WinNT 4.0 RAS to WinNT 4.0 RAS

	Article: Q164630
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbRPC kbSDKPlatform kbGrpDSNetkbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Applications that use remote procedure calls (RPCs) may fail when they attempt
	to communicate over a remote access service (RAS) link between two computers
	running Windows NT 4.0 using the NetBEUI protocol.
	
	CAUSE
	=====
	
	This problem occurs because the Binding Analysis in the Network Control Panel
	incorrectly writes the LANA Registry parameters for Dial-Out modems.
	Additionally, the RPC components fail to attempt to connect over the other
	LANAs.
	
	
	RESOLUTION
	==========
	
	Install the hotfix noted below, or update to the latest service pack for Windows
	NT 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbRPC kbSDKPlatform kbGrpDSNet kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
