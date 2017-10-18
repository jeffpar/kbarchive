---
layout: page
title: "Q169456: Multihomed DNS Server May Fail Recursive Queries"
permalink: kb/169/Q169456/
---

## Q169456: Multihomed DNS Server May Fail Recursive Queries

	Article: Q169456
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may not be able to reliably resolve recursive queries from your Windows NT
	Server Domain Name Service (DNS) server when all of the following conditions is
	true:
	
	- Your DNS Server is multihomed, having multiple IP interfaces.
	
	- DNS is not bound to all of the adapters in the computer.
	
	- The adapters in the DNS server are connected to disjoint network segments.
	
	CAUSE
	=====
	
	The DNS server cannot consistently choose which network adapter to send and
	receive queries on under this configuration. DNS may either try to send on an
	adapter that does not have DNS bound to it or try to send packets on an adapter
	not reachable by the querying DNS client hosts.
	
	
	RESOLUTION
	==========
	
	Verify that DNS is bound to all adapters in your multihomed computer.
	
	Additional query words: recursion unresolved name query multi-homed
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
