---
layout: page
title: "Q128964: PC WSPlus: Mailbox Change Creates New Calendar Files"
permalink: /kb/128/Q128964/
---

## Q128964: PC WSPlus: Mailbox Change Creates New Calendar Files

{% raw %}

	Article: Q128964
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-SEP-1999
	
	1.00 1.00a
	WINDOWS
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you modify the Microsoft Mail for Windows user's mailbox, the modifications
	will force Microsoft Schedule+ to create new calendar files (.CAL) because of
	the login IDs have been changed.
	
	MORE INFORMATION
	================
	
	When you log into Schedule+, the \MAILDATA\CAL\SCHEDULE.KEY is accessed to
	determine if the user's login ID (mailbox) already has an existing hexid number
	assigned to it. Because the login ID is different, a new HEXID.CAL will be
	created along with a new USERNAME.CAL on the local workstation.
	
	
	To retrieve the information from the user's original calendar file, do the
	following steps:
	
	1. Add StartupOffline=1 to the SCHDPLUS.INI file.
	
	2. Launch Schedule+ using the old username and password.
	
	  This should bring the information from the users original USERNAME.CAL file on
	  the local workstation.
	
	3. From the File menu, choose Export Appointments.
	
	  You should export the appointments to the USERNAME.SCH file.
	
	4. Log out of Schedule+.
	
	5. Remove the StartupOffline=1 parameter from the SCHDPLUS.INI file.
	
	6. Launch Schedule+ using the new username and password.
	
	  This should bring up the blank calendar file information.
	
	7. From the File menu, choose Import Appointments. You should import the
	  appointments from the USERNAME.SCH file created in step 3.
	
	Additional query words: 1.00 1.00a changes
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	

{% endraw %}
