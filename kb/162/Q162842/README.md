---
layout: page
title: "Q162842: DNS with &quot;WINS Reverse Lookup&quot; Fails with Multiple IP Addresses"
permalink: /kb/162/Q162842/
---

## Q162842: DNS with &quot;WINS Reverse Lookup&quot; Fails with Multiple IP Addresses

	Article: Q162842
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use NSLOOKUP to perform reverse lookup using a Windows NT 4.0 Domain
	Name Service (DNS) server that has a network adapter with multiple IP addresses
	(and has a zone that has "Use WINS Resolution" enabled) you receive the
	following error:
	
	  [dns server] can't find IP address: Non-existent domain
	
	CAUSE
	=====
	
	By design NetBIOS over TCP/IP (NetBT) supports only one IP address per network
	interface card (NIC) adapter. It is possible to configure TCP/IP to have
	multiple IP addresses on a single NIC, but NetBT will only support the first
	address configured. For more information, please see the following Microsoft
	Knowledge Base article:
	
	  ARTICLE-ID: Q131641
	  TITLE : NetBT Supports One IP Address per NIC
	
	MORE INFORMATION
	================
	
	For information about reverse lookup, please see the following article in the
	Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q154553
	  TITLE : Windows NT 4.0 DNS WINS Reverse Lookups Do Not Use WINS
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
