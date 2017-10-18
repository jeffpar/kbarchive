---
layout: page
title: "Q108070: Application Log Full Dialog Box Appears Instead of Overwriting"
permalink: kb/108/Q108070/
---

## Q108070: Application Log Full Dialog Box Appears Instead of Overwriting

	Article: Q108070
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Application Log Full dialog box incorrectly appears on the Application Log
	screen of Event Viewer in the following situation:
	
	1. You set Event Log Wrapping to Overwrite Events As Needed in the Event Log
	  Settings dialog box.
	
	2. The Application Log completely fills with events.
	
	3. In the Control Panel window, choose the Date/Time icon, and then set the time
	  back a few minutes.
	
	4. Immediately log more events to the Application Log.
	
	The Application Log Full dialog box appears. This should not happen because you
	have set the Application Log to Overwrite Events As Needed.
	
	CAUSE
	=====
	
	The Application Log Full dialog box incorrectly appears in this situation
	because Event Log does not continue to overwrite log files based on the time
	difference.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in Windows NT
	Workstation and Windows NT Server version 3.5. This problem has also been
	corrected in the latest U.S. Service Pack for Windows NT and Windows NT Advanced
	Server version 3.1. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
