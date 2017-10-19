---
layout: page
title: "Q136036: Supported Network Adapters Not Available in Remoteboot Manager"
permalink: /kb/136/Q136036/
---

## Q136036: Supported Network Adapters Not Available in Remoteboot Manager

	Article: Q136036
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set up a profile in Remoteboot Manager (RPLMGR.EXE), some supported
	network adapters are not available. The supported network adapters for
	Remoteboot are listed on page 112 of the "Windows NT Server 3.5 (and 3.51)
	Installation Guides."
	
	RESOLUTION
	==========
	
	To correct this problem, use the default profile in Remoteboot Manager if you
	are using any one of the supported network adapters listed below. The Remoteboot
	Service for Windows NT identifies the network adapter by its vendor ID and
	passes the correct network adapter driver to the computer.
	
	The following supported network adapters are not available for selection in
	Remoteboot Manager:
	
	  3Com TokenLink
	  3Com TokenLink III
	  3Com 3Station
	  Madge Smart Ringnodes
	  IBM Token Ring
	  Novell NE1000
	
	NOTE: The Madge Smart Ringnodes network adapter is not listed in page 112 of the
	Windows NT Server Installation Guides, but is one of the supported network
	adapters for the Remoteboot service.
	
	Additional query words: prodnt rpl
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
