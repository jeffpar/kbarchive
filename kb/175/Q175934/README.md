---
layout: page
title: "Q175934: Schedule+ Time Zone Transition Dates Incorrect"
permalink: /kb/175/Q175934/
---

## Q175934: Schedule+ Time Zone Transition Dates Incorrect

	Article: Q175934
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0,7.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, versions 7.5, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Appointments between the last Sunday in September and the last Sunday in October
	may appear one hour off from the expected time. This occurs in specific time
	zones that have changed the transition dates for entering and leaving Daylight
	Savings Time.
	
	The same symptoms can occur during the period from the first Sunday in March to
	the last Sunday in March.
	
	CAUSE
	=====
	
	Schedule+ uses an internal table to store transition times for each individual
	time zone. When a governing body decides to change transition dates, the tables
	no longer agree with the dates observed in the time zone.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Schedule+ version 7.0 and 7.5.
	
	For Schedule+ 7.0, this problem was corrected in Microsoft Office 97 Service
	Release 2 (SR-2).
	
	For Schedule+ 7.5, this problem was corrected in Microsoft Exchange Service Pack
	2 - Client update.
	
	For additional information about SR-2, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	
	MORE INFORMATION
	================
	
	Timezones affected by timezone transition changes include:
	
	  [GMT + 1.00] - Berlin, Stockholm, Rome, Brussels, Vienna
	  [GMT + 1.00] - Lisbon, Warsaw
	  [GMT + 1.00] - Paris, Madrid
	  [GMT + 1.00] - Prague
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbSchedule750
	Version           : WINDOWS:7.0,7.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
