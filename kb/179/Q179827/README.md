---
layout: page
title: "Q179827: Registry Handle Leak Causes Random Blue Screens"
permalink: /kb/179/Q179827/
---

## Q179827: Registry Handle Leak Causes Random Blue Screens

	Article: Q179827
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After a fairly long period of continuously using Attachmate Extra V6.3, the
	computer displays blue screen errors randomly.
	
	
	CAUSE
	=====
	
	These blue screen errors are caused by an application containing a registry
	handle leak. This leak occurs because an application continuously reopens a
	registry key but never closes it. After this has happened 65,535 times, the open
	instance count for this key wraps round to zero making the kernel think that
	there is no longer any open handles to this key. The next time an instance of
	the key is closed, the storage used by the kernel to reference the key is
	deleted.
	
	However, any time subsequent to this that the key is opened or closed, the freed
	storage is written to again. This causes free pool corruption and eventually the
	system will crash when this freed storage is referenced in any way.
	
	
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
	
	
	Additional query words: 4.0
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
