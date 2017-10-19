---
layout: page
title: "Q301054: Internet Explorer Automatic Dialing May Not Work"
permalink: /kb/301/Q301054/
---

## Q301054: Internet Explorer Automatic Dialing May Not Work

	Article: Q301054
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP5,4.0 SP6,4.0 SP6a,5.5,5.5 Service Pack 1
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Internet Explorer versions 5.5, 5.5 Service Pack 1 for Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the automatic dialing function in Internet Explorer when you start
	Internet Explorer the first time, an Internet connection is established. After
	making the connection, Internet Explorer displays the following error message:
	
	  Server not found or DNS error
	
	CAUSE
	=====
	
	This problem occurs because the DNS entries are not reread from the registry
	after the connection is made from Internet Explorer.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q253502 Error Message When Attempting to Resolve NetBIOS Name Longer than 16
	  Characters with VPN or RAS Connection
	
	WORKAROUND
	==========
	
	To work around this problem, establish the connection to the Internet manually,
	or start a second instance of Internet Explorer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400search kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch kbIEsearch kbWinNTW400sp6 kbIE2000Search kbWinNTSEnt400SP6a kbWinNTW400SP6a kbIE550Win2000SP1 kbIE550Win2000 kbZnotKeyword7 kbIE550Search
	Version           : :4.0 SP5,4.0 SP6,4.0 SP6a,5.5,5.5 Service Pack 1
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
