---
layout: page
title: "Q114469: Setup: TCP/IP Binding Defaults To All Installed NIC's"
permalink: /kb/114/Q114469/
---

## Q114469: Setup: TCP/IP Binding Defaults To All Installed NIC's

	Article: Q114469
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing the TCP/IP protocol on a Windows NT version 3.5 Workstation or
	Server with more than one network interface card (NIC) installed, you are forced
	to initially bind TCP/IP to every installed NIC. During setup you cannot bind
	TCP/IP to a single NIC. This is a change in behavior from Windows NT version
	3.1.
	
	CAUSE
	=====
	
	Under Windows NT 3.1, NetBIOS over TCP/IP (NBT) supported only one adapter, so
	it would bind to the first adapter. Under Windows NT 3.5, NBT supports multiple
	adapters and by default the network control panel applet (NCPA) binds all
	transports to all adapters.
	
	WORKAROUND
	==========
	
	If you don't want TCP/IP on a particular segment, go to the network control
	panel and disable the appropriate TCP/IP bindings.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	
