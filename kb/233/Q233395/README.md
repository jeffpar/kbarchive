---
layout: page
title: "Q233395: SNMP Access Violation After Installing Service Pack 4"
permalink: /kb/233/Q233395/
---

## Q233395: SNMP Access Violation After Installing Service Pack 4

	Article: Q233395
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kberrmsg kbWinNT400sp5fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP4 
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT 4.0 Service Pack 4, the following error message may
	be displayed:
	
	  An application error has occurred and a application log is being generated.
	  SNMP.EXE Exception: access violation(0xc0000005), Address: address
	
	CAUSE
	=====
	
	This behavior occurs because the Snmpelea.dll file is attempting to reallocate
	its buffer but cannot update the pointer to the new buffer location.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Windows NT 4.0 Service Pack 5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
