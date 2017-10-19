---
layout: page
title: "Q219341: Access Violation in Explorer When Using an Alternate Shell"
permalink: /kb/219/Q219341/
---

## Q219341: Access Violation in Explorer When Using an Alternate Shell

	Article: Q219341
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0a
	Operating System(s): 
	Keyword(s): kbenv kbtool kbWinNT400sp5fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a shell other than Windows NT Explorer and you open Windows NT
	Explorer, the Dr. Watson tool may report an access violation in Explorer at
	0xc0000005.
	
	CAUSE
	=====
	
	This issue occurs because Windows NT Explorer is the only supported shell in
	Windows NT 4.0 and if you run Windows NT Explorer as a program it corrupts
	memory heaps.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT version 4.0 Service Pack 5.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbenv kbtool kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : winnt:4.0,4.0a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
