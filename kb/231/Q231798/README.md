---
layout: page
title: "Q231798: Access Database with Multiple Users Slow on Terminal Server"
permalink: kb/231/Q231798/
---

## Q231798: Access Database with Multiple Users Slow on Terminal Server

	Article: Q231798
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When multiple users on a computer running Windows NT Server 4.0, Terminal Server
	Edition attempt to open the same Microsoft Access database on another computer
	running Windows NT Server, performance may be severely degraded. However, single
	Terminal Server users do not experience any performance degradation.
	
	If several Terminal Server users communicate with different servers containing
	Access databases, performance is not impaired, but when they open the same
	database, query timing may be an order of magnitude slower.
	
	CAUSE
	=====
	
	This behavior occurs because database record locking is affecting performance.
	By default, Terminal Server establishes a single session with the Windows NT
	Server-based computer that contains the database. Multiple users querying the
	database through that one session can cause conflicts. When you use Network
	Monitor to track network traffic, the trace shows that the computer is no longer
	using opportunistic locking.
	
	RESOLUTION
	==========
	
	To resolve this issue, apply the fix described in the following Microsoft
	Knowledge Base article:
	
	  Q190162 Terminal Server and the 2048 Open File Limitation
	
	This article describes how to set up different sessions between the servers, and
	describes changes to Terminal Server that are made with Service Pack 4. After
	you apply the fix and restart the computer, the performance issue should be
	resolved.
	
	In addition, if there are multiple users on the computer doing large amounts of
	record locking, refer to the following article in the Microsoft Knowledge Base:
	
	  Q191370 Slow Network Performance with Terminal Server
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbprb
	
	=============================================================================
	
