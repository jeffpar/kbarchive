---
layout: page
title: "Q253717: No Data Is Visible in Log File Created Using Performance Monitor"
permalink: /kb/253/Q253717/
---

## Q253717: No Data Is Visible in Log File Created Using Performance Monitor

	Article: Q253717
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a Performance Monitor Log on a remote computer, and then try to
	view the data on a different computer, the objects are not visible.
	
	CAUSE
	=====
	
	This issue can occur if you do not type two backslashes (\) in front of the
	computer name you want to monitor.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Start Performance Monitor, and then click Log View.
	
	2. On the Options menu, click Log, and then click the the Log file that you are
	  having the problem with. Click the same interval that you used previously,
	  and then click Save.
	
	3. On the Edit menu, click "Add to log" or click Add Counter on the toolbar.
	
	4. Type the name of the computer that you were monitoring in the original log.
	  Make sure you precede the name with two backslashes (\).
	
	5. Click an object to add to the log, and then click Done.
	
	6. On the Options menu, click Log, and then click Start Log. Once this is done
	  you should see the status of the log as Collecting. Allow the log to collect
	  for a couple of intervals.
	
	7. On the Options menu, click Log, click Stop Log, and then click Save.
	
	Additional query words: disappear counters perfmon blank
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
