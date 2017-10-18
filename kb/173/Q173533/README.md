---
layout: page
title: "Q173533: WinNT Radius Client Sends Incomplete Accounting Information"
permalink: kb/173/Q173533/
---

## Q173533: WinNT Radius Client Sends Incomplete Accounting Information

	Article: Q173533
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbWinNT400sp4fix
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you have a Routing and Remote Access Service (RRAS) server that is using
	Remote Authentication Dial-In User Service (RADIUS) authentication and
	accounting, you may notice that one or more of the following fields of
	accounting information are not logged on your RADIUS Server:
	
	  NAS-Identifier
	  NAS-Port
	  Acct-Session-Id
	  Framed-Protocol
	
	RESOLUTION
	==========
	
	Obtain the Routing & Remote Access Service Hotfix Update mentioned below.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Routing and Remote Access Update
	for Windows NT Server version 4.0. This problem was corrected in the Routing
	& Remote Access Service Hotfix Update. You can obtain this update from
	Microsoft's World Wide Web Site on the Internet at the following location:
	
	http://www.microsoft.com/ntserver/commserv/exec/feature/routing.asp
	
	NOTE: Because the Microsoft Web site is constantly updated, the site address may
	change without notice. If this occurs, link to the Microsoft home page at the
	following address:
	
	http://www.microsoft.com/
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	Additional query words: missing null incomplete
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
