---
layout: page
title: "Q172512: Routing and Remote Access Event ID 20100"
permalink: /kb/172/Q172512/
---

## Q172512: Routing and Remote Access Event ID 20100

	Article: Q172512
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbnetwork kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install the Routing and Remote Access (RRAS) Update for Windows NT 4.0
	on your Windows NT 4.0 RAS server, Dial-Up Networking (DUN) clients may not be
	able to connect to your RAS server when using third party security
	authentication; one such product is SecurID from Security Dynamics. You may also
	note the following event log message in the event viewer on the RRAS server:
	
	  Event ID: 20100
	  Source: Router
	  Description: The user was authenticated as %1 by the third party security host
	  module but was authenticated as %2 by the RAS security. The user has been
	  disconnected.
	
	Where %1 and %2 are variables that represent user names.
	
	NOTE: In Windows 2000 you receive Event ID: 20096 but the text is the same.
	
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
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q233340 Event ID 20100 on Server When SecurID Client Is Not Authenticated
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbWinAdvServSearch kbRRASNTSearch kbRRASNT400
	Version           : :2000,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
