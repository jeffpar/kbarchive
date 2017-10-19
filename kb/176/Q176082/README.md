---
layout: page
title: "Q176082: RRAS Server Updates Link State Database but Not Route Table"
permalink: /kb/176/Q176082/
---

## Q176082: RRAS Server Updates Link State Database but Not Route Table

	Article: Q176082
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix kbinfo kbArtTypeINF
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The route table on your Routing and Remote Access Service (RRAS) server is not
	updated with routes from external autonomous systems (AS); however, the link
	state database (LSDB) is updated properly and should cause no routing issues.
	
	CAUSE
	=====
	
	RRAS will only update its route table with external AS routes after it has
	received one or more non-AS routes, such as Routing Information Protocol (RIP)
	version 2 for Internet Protocol announcements, Simple Network Management
	Protocol (SNMP) routes, or static routes.
	
	RESOLUTION
	==========
	
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
	
	www.microsoft.com/ntserver/commserv/exec/feature/routing.asp
	
	NOTE: Because the Microsoft Web site is constantly updated, the site address may
	change without notice. If this occurs, link to the Microsoft home page at the
	following address:
	
	www.microsoft.com
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix kbinfo kbArtTypeINF 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
