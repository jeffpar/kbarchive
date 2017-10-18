---
layout: page
title: "Q241588: Connect Command Unavailable in Terminal Services Sessions"
permalink: kb/241/Q241588/
---

## Q241588: Connect Command Unavailable in Terminal Services Sessions

	Article: Q241588
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under the following circumstances, when you click the Actions menu, the Connect
	command is unavailable:
	
	1. Connect your client computer to a Terminal Services server computer as a
	  user. For this example, consider this session 1.
	
	2. Connect a different client computer to a Terminal Services server computer as
	  an administrator. For this example, consider this session 2.
	
	3. Run Tsadmin.exe on session 2.
	
	4. In Tsadmin.exe, point to session 1, and then click the Actions menu. Note
	  that the Connect command is unavailable.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.To resolve this problem, obtain the
	latest service pack for Windows NT Server 4.0, Terminal Server Edition. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	Additional query words:
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
