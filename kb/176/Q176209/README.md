---
layout: page
title: "Q176209: RAS or RRAS Server Fails to Answer Incoming Calls"
permalink: /kb/176/Q176209/
---

## Q176209: RAS or RRAS Server Fails to Answer Incoming Calls

	Article: Q176209
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Windows NT Remote Access Service (RAS) Server or Routing and Remote Access
	Service (RRAS) server fails to answer incoming calls on a particular port. You
	have your RAS or RRAS server configured to answer calls after a specific number
	of rings.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	ARTICLE-ID: Q170825
	TITLE : RAS Auto-Answer Behavior in Windows NT
	
	CAUSE
	=====
	
	A RAS client attempted to connect to your server and the connection was
	interrupted before the specified number of rings for the RAS or RRAS server
	could occur.
	
	For example, you have your server configured to answer after five rings. A client
	dials and the call is interrupted before it reaches the fifth ring. The server
	will not answer any more calls on that port until the RAS or RRAS server is
	restarted.
	
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
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
