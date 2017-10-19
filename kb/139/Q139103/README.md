---
layout: page
title: "Q139103: Replication to Import Computers in a WAN Environment"
permalink: /kb/139/Q139103/
---

## Q139103: Replication to Import Computers in a WAN Environment

	Article: Q139103
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses directory replication to a domain name in a Wide Area
	Network (WAN) environment, why import computers located across a router or
	bridge may not receive notification, and the procedures for configuring these
	computers to receive replicated data.
	
	MORE INFORMATION
	================
	
	Page 459 of the Windows NT "Server System Guide" (in the Managing Directory
	Replication section) states that replication to a domain name does not always
	succeed when some or all of the replication import computers are located across
	a wide area network (WAN) bridge from an export server. When adding names to the
	export list on an export server, and when adding names to the import list on an
	import computer, for those computers separated by a WAN bridge you should
	specify the computer names (instead of or in addition to specifying the domain
	name).
	
	The details of why this is documented and how replication works in this situation
	are as follows:
	
	When the option to export directories is chosen, and no entries exist in the "To
	List", the export server defaults to exporting to the local domain. From the
	export server, mailslots addressed to "\MAILSLOT\NET\REPL_CLI" are broadcast to
	a multicast address, and if in a TCP/IP environment, a broadcast is sent to the
	subnet on which the export server resides. Included in the Server Message Block
	(SMB) is the name of the domain the export server is broadcasting for. An import
	computer listening for this broadcast responds and sets up a replication session
	if the import computers domain name equals that of the destination domain name
	included in the packet. However, import computers that are configured to import
	from the domain, but are across routers or bridges from where these broadcasts
	are not forwarded do not receive notification from the export server, and do not
	receive replicated data.
	
	To replicate directories to import computers across the router or bridge, add the
	NetBIOS name of the computer to the "To List" on the export server. When the
	replication interval occurs, the NetBIOS name is resolved and a mailslot
	addressed to "\MAILSLOT\NET\REPL_CLI" is directed at the import computer
	specified.
	
	
	Additional query words: prodnt directory name resolution
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	Issue type        : kbhowto
	
	=============================================================================
	
