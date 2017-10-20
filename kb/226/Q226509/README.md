---
layout: page
title: "Q226509: Access Violation Error After Changing Event Viewer Log Location"
permalink: /kb/226/Q226509/
---

## Q226509: Access Violation Error After Changing Event Viewer Log Location

{% raw %}

	Article: Q226509
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you save the Event Viewer log file and modify the registry to use the
	saved event log file in a different location, an Access Violation error message
	may be displayed in the System log.
	
	CAUSE
	=====
	
	The Event Viewer tool can only write information to an event log file that is 64
	KB in size (or any multiple of 64 KB). The Event Viewer Save As command does not
	save the Event log file in 64 KB increments.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	For additional information about changing the default location of the Event
	Viewer log file, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q216169 How to Change the Default Event Viewer Log File Location
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
