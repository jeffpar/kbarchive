---
layout: page
title: "Q191285: Services for Macintosh Index Corruption on Large Volumes"
permalink: /kb/191/Q191285/
---

## Q191285: Services for Macintosh Index Corruption on Large Volumes

{% raw %}

	Article: Q191285
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use File Services for the Macintosh, Macintosh users may report that
	files and/or directories that were previously visible are no longer visible from
	Macintosh clients. When viewed on the server itself or by PC clients, the files
	are viewable.
	
	CAUSE
	=====
	
	This issue was caused by the index not being updated with all of the change
	notifications that were occurring as a result of the Macintosh clients making
	changes to files. There was also a problem where, if the server was restarted
	because of a Window NT blue screen, loss of power, or a hard power-down without
	properly shutting down the server through the Windows UI, the index would not be
	rebuilt correctly when the server was restarted.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	This hotfix supercedes all hotfixes referenced in
	
	  ARTICLE-ID: Q185722
	  TITLE : SFM Rebuilds Indexes upon Restarting of Windows NT
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
