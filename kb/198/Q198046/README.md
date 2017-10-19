---
layout: page
title: "Q198046: Change in Time Zone Behavior for Israel with Service Pack 4"
permalink: /kb/198/Q198046/
---

## Q198046: Change in Time Zone Behavior for Israel with Service Pack 4

	Article: Q198046
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows NT 4.0 Service Pack 4, the "Automatically adjust clock
	for daylight saving changes" check box is unavailable on the Time Zone tab in
	the Date/Time tool in Control Panel if the time zone is set for Israel.
	
	This check box is available for Israel before you install Service Pack 4.
	
	CAUSE
	=====
	
	The country of Israel participates in daylight savings time, but the dates on
	which it starts and ends may vary. Because the start and end dates may vary,
	automatic adjustment is unavailable.
	
	RESOLUTION
	==========
	
	To work around this behavior, use any of the following methods:
	
	- Change the time manually on the affected computer(s) by double-clicking
	  Date/Time in Control Panel and then adjusting the hour value on the Date
	  & Time tab.
	
	- Use the Tzedit program from the Windows NT 4.0 Resource Kit. You can use this
	  program to change the affected time zones to start and end daylight savings
	  time on the appropriate date.
	
	- If it is available, use Microsoft Systems Management Server to make the
	  modifications on a network.
	
	STATUS
	======
	
	This behavior is by design after installation of Service Pack 4.
	
	
	Additional query words: gray grayed grey greyed dimmed out
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
