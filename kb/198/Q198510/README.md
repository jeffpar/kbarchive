---
layout: page
title: "Q198510: Broadcast Messages Blocked by OLE Threads"
permalink: /kb/198/Q198510/
---

## Q198510: Broadcast Messages Blocked by OLE Threads

	Article: Q198510
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain conditions, broadcast messages can become blocked. This situation
	will only occur when OLE threads are open but those threads are not processing
	messages.
	
	RESOLUTION
	==========
	
	Windows NT has been modified to not send broadcast messages to those threads.
	
	
	To resolve this problem, obtain the latest service pack for Windows NT version
	4.0. For more information, please see the following article in the Microsoft
	Knowledge Base.
	
	  Q152734
	  How to Obtain the Latest Windows NT 4.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT 4.0 Service Pack 4.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
