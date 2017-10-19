---
layout: page
title: "Q134357: System Agent Runs Tasks at Wrong Time/Day During Leap Year"
permalink: /kb/134/Q134357/
---

## Q134357: System Agent Runs Tasks at Wrong Time/Day During Leap Year

	Article: Q134357
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In leap years, System Agent may run monthly tasks that should run on the 30th
	day of the month at the wrong time of day on the 28th of February. You expect
	System Agent to run the tasks at the correct time of day on February 29th.
	
	CAUSE
	=====
	
	The System Agent specification indicates that any day after the last day of the
	month is treated as the last day of the month. If a task is scheduled to begin
	at 11:59 P.M. on the 28th of February, and end at 12:00 A.M. on the 29th, the
	end time precedes the start time and the period is not what you expect.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	
	=============================================================================
	
