---
layout: page
title: "Q172514: Silent RIP for IP Available for Windows NT Workstation"
permalink: /kb/172/Q172514/
---

## Q172514: Silent RIP for IP Available for Windows NT Workstation

	Article: Q172514
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kbFEA kbWinNT400sp4fea
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 4.0 Service Pack 4 (SP4) adds support to Windows NT Workstation 4.0
	for the following feature:
	
	- Silent Routing Information Protocol (RIP)
	
	MORE INFORMATION
	================
	
	RIP is a routing protocol that allows routers to exchange route tables so
	clients can use the best possible route to transfer data to servers on different
	subnets. Silent RIP is the passive mode of this protocol whereby a router will
	listen to advertised routes from other routers, but does not actively advertise
	its own routes.
	
	Previous to SP4, Microsoft has provided no support for RIP in Windows NT
	Workstation, only in Windows NT Server. This new feature will only be of value
	when local routers are using RIP version 1 broadcasts.
	
	
	
	For more information on Service Pack 4, please see the following article in the
	Microsoft Knowledge Base.
	
	  Q152734 How To Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	Additional query words: nt4sp4fea
	
	======================================================================
	Keywords          : kbFEA kbWinNT400sp4fea 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp4
	Version           : :4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	
