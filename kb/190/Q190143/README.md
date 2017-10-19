---
layout: page
title: "Q190143: IIS 4.0 Crashes; IIS 3.0 Generates Corrupted Log Data for HTTPS"
permalink: /kb/190/Q190143/
---

## Q190143: IIS 4.0 Crashes; IIS 3.0 Generates Corrupted Log Data for HTTPS

	Article: Q190143
	Product(s): Internet Information Server
	Version(s): winnt:3.0,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When HTTPS connections are used, the following may occur:
	
	- Internet Information Server (IIS) 4.0 may stop responding (crash) when it
	  receives an invalid SSL3 package.
	
	- IIS 4.0 may stop responding when a browser sends the packages in a certain
	  order.
	
	- IIS 3.0 may generate a corrupted IIS log for the above situation, such as
	  xxx.xxx.xxx.xxx (IP address), -, 6/30/98, 0:51:42, W3SVC, N004B2I0300,
	  192.168.129.71, 594, 23, 203, 404, 3, A[ASCII 174]JVh[ASCII 154], U[ASCII
	  227]#[ASCII 243]LI&u[ASCII 129]_%[ASCII 225][ASCII 129]&[ASCII
	  215][ASCII 136], -,
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	versions 3.0 and 4.0. This problem was first corrected in Windows NT 4.0 Service
	Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	Additional query words: sp hot fix qfe iissecurity iisgeneral ntsecurity
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400 kbiis300
	Version           : winnt:3.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
