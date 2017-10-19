---
layout: page
title: "Q164421: XCLN: Behavior of Schedule+ 7.0 Synchronize on Exit"
permalink: /kb/164/Q164421/
---

## Q164421: XCLN: Behavior of Schedule+ 7.0 Synchronize on Exit

	Article: Q164421
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes one criteria that Microsoft Schedule+ 7.0 uses to
	determine whether or not to synchronize your local schedule file with the
	schedule file on the network when you exit Microsoft Schedule+.
	
	MORE INFORMATION
	================
	
	Microsoft Schedule+ will only synchronize on exit if the time interval you
	specified in the "Synchronize Every n Minutes" has expired. For example, if you
	set this interval to five minutes, start and then exit Microsoft Schedule+
	before five minutes has elapsed, the schedules are not synchronized. In
	contrast, if you leave Microsoft Schedule+ open for five minutes or longer, the
	schedules will be synchronized. This is done to optimize the Schedule+ process
	of logging on and off of the mail system. If you need to synchronize your
	schedule before the elapsed time, click the Synchronize Now button on the
	Synchronize tab in the Options dialog box (Tools menu).
	
	
	Additional query words: SYNCHRONIZE EXIT XCLNSCH XCLN XSCH
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
