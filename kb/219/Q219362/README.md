---
layout: page
title: "Q219362: Using SNA Server Print Server and LPR Degrades Performance"
permalink: kb/219/Q219362/
---

## Q219362: Using SNA Server Print Server and LPR Degrades Performance

	Article: Q219362
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbprint kbWinNT400sp5fix
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft SNA Server Print Server feature on a Windows NT-based
	computer that is configured to use the line printer remote (LPR) print service,
	you may experience slow computer performance and your computer may stop
	responding (hang).
	
	CAUSE
	=====
	
	This issue occurs because there is a memory leak in the remote print server
	service.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT 4.0 Service Pack 5.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbprint kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
