---
layout: page
title: "Q160517: RRAS May Decrement Local Static Route Metric"
permalink: kb/160/Q160517/
---

## Q160517: RRAS May Decrement Local Static Route Metric

	Article: Q160517
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbinterop kbWinNT400sp4fix
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Routing and Remote Access Service Update (RRAS) on a computer
	running Windows NT Server 4.0, if you create a static route to a network with a
	metric of 2 or 3, after demand-dialing and disconnecting from a remote network,
	the metric may change to 1.
	
	These route metric changes can be observed using Kernrout.exe, a utility that
	ships with RRAS. "Kernrout print" displays the actual kernel route table in use
	at the time it is run, and only shows the best route to each destination.
	
	
	CAUSE
	=====
	
	RRAS incorrectly decrements the route metric for local routes upon hanging up a
	demand-dial connection.
	
	RESOLUTION
	==========
	
	Obtain the Routing & Remote Access Service Hotfix Update mentioned below.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	Microsoft has confirmed this to be a problem in Routing and Remote Access Update
	for Windows NT Server version 4.0. This problem was corrected in the Routing
	& Remote Access Service Hotfix Update. You can obtain this update from
	Microsoft's World Wide Web Site on the Internet at the following location:
	
	  http://www.microsoft.com/ntserver/commserv/exec/feature/routing.asp
	
	NOTE: Because the Microsoft Web site is constantly updated, the site address may
	change without notice. If this occurs, link to the Microsoft home page at the
	following address:
	
	  http://www.microsoft.com/
	
	
	Additional query words: increment
	
	======================================================================
	Keywords          : kbinterop kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	
