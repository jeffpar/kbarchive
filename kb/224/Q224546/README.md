---
layout: page
title: "Q224546: STOP 0xA in Ndis.sys or Netbt.sys on Compaq Proliant"
permalink: /kb/224/Q224546/
---

## Q224546: STOP 0xA in Ndis.sys or Netbt.sys on Compaq Proliant

	Article: Q224546
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbnetwork kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Netelligent 10/100 Dual-Port NIC Model NC 3122 in a Compaq
	Proliant computer, you may receive any of the following error messages:
	
	- 
	
	  STOP A (0x00000010, 0x00000002, 0x0, <xxxxxxxx>) in NDIS.SYS
	
	  where <xxxxxxxx> is a kernel mode address.
	
	- 
	
	  STOP A (0x00000064, 0x00000002, 0x00000000, <xxxxxxxx>)in NETBT.SYS
	
	  where <xxxxxxxx> is a kernel mode address.
	
	CAUSE
	=====
	
	This issue can occur when you have a large amount of network I/O traffic and you
	installed the Compaq NIC Management Agents.
	
	RESOLUTION
	==========
	
	To resolve this issue, disable the Compaq NIC Management Agents. To do this,
	follow these steps:
	
	1. In Control Panel, double-click Insight Agents.
	
	2. On the Services tab, click Compaq NIC Management Agents.
	
	3. Click Remove, and then click Yes.
	
	4. Restart your computer.
	
	MORE INFORMATION
	================
	
	For more information, please contact Compaq technical support or visit the
	following Compaq Web site:
	
	  http://www.compaq.com/support/files/server/WINNT/index.html
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: n100nt.sys qnft.sys nt
	
	======================================================================
	Keywords          : kbenv kberrmsg kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
