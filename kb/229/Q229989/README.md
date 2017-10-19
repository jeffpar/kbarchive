---
layout: page
title: "Q229989: Event Viewer Does Not Sort Events by Date and Time"
permalink: /kb/229/Q229989/
---

## Q229989: Event Viewer Does Not Sort Events by Date and Time

	Article: Q229989
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Event Viewer tool (Eventvwr.exe) appears to sort Event log messages by date
	and time. These events are actually sorted by the order in which they are
	written to the log file and not by the time that they are written. For example,
	if an event is logged at 4/4/99 12:00:00pm and the system date is moved back to
	1996, the next log entry might read 4/4/96 12:00:30pm. The second event appears
	above the first in the log as this is the order in which they are reported. This
	may be noticeable in scenarios similar to the following:
	
	- When you use a time server on a computer that has a fast clock, it may appear
	  that events are logged out of order, when in fact, they are logged correctly.
	
	- When you turn off daylight savings time, events may appear out of sequence.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
