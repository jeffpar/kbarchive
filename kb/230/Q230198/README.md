---
layout: page
title: "Q230198: SP4 or SP5 Re-Enables Daylight Savings Time Option"
permalink: /kb/230/Q230198/
---

## Q230198: SP4 or SP5 Re-Enables Daylight Savings Time Option

	Article: Q230198
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT 4.0 Service Pack 4 (SP4) or Windows NT 4.0 Service
	Pack 5 (SP5) on your computer, the computer automatically adjusts for daylight
	savings time even if the option was previously turned off.
	
	CAUSE
	=====
	
	This behavior occurs because applying SP4 or SP5 re-enables the "automatically
	adjust clock for daylight savings changes" option.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Date/Time, click the Time Zone tab, and then clear the
	  "Automatically adjust clock for daylight savings changes" check box.
	
	NOTE: You must do this after each application of a service pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: sp4 sp5 NTS NTW setup
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400xsearch kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
