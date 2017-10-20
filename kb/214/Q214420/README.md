---
layout: page
title: "Q214420: Task Scheduler Displays Scheduled Task Incorrectly"
permalink: /kb/214/Q214420/
---

## Q214420: Task Scheduler Displays Scheduled Task Incorrectly

{% raw %}

	Article: Q214420
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 01-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Scheduled Tasks component from Microsoft Internet
	Explorer, tasks that are scheduled to run today may be reported as being
	scheduled to run next month.
	
	CAUSE
	=====
	
	This behavior occurs because the Scheduled Tasks component from Internet
	Explorer contains changes to the Windows NT Task Scheduler.
	
	RESOLUTION
	==========
	
	Note that this problem is cosmetic only. The scheduled tasks run at the correct
	time.
	
	To correct the display, uninstall the Scheduled Tasks component from Internet
	Explorer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q208675 AT Command Displays Scheduled Tasks for Sunday Incorrectly
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
