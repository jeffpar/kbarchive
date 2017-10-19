---
layout: page
title: "Q141067: PC WSPlus: Description of Offline and Online Merging"
permalink: /kb/141/Q141067/
---

## Q141067: PC WSPlus: Description of Offline and Online Merging

	Article: Q141067
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
	
	This article describes how Microsoft Schedule+ for Windows resolves schedule
	conflicts between offline and online calendar information. The local (offline)
	calendar file is usually found in the Windows directory, named as the user's
	logon name; for example, C:\WINDOWS\<USERNAME>.CAL
	
	The online calendar file is usually found on the Microsoft Mail for PC Networks
	postoffice directory structure in the CAL directory; for example,
	M:\CAL\<HEXID>.CAL.
	
	You can use the DUMPKEY.EXE utility to find the eight digit hexid value of the
	user's calendar file that is stored in the SCHEDULE.KEY file in the CAL
	directory on the postoffice server. The following line will give you the user's
	eight digit HEXID.CAL file:
	
	dumpkey m:\po1\cal\schedule.key
	
	NOTE: You can get the database utilities by contacting Microsoft Product Support
	Services.
	
	MORE INFORMATION
	================
	
	You can use Schedule+ both online and offline, and Schedule+ is designed so that
	you always have an online and offline calendar file. You can use your online
	calendar while your workstation is connected via the network to your Microsoft
	Mail for PC Networks postoffice server.
	
	If you have an assistant, that person can also make changes to your online
	calendar. You can also use the offline calendar when the Microsoft Mail server
	is unavailable or when you are away from the office.
	
	Schedule+ has a mechanism to keep online and offline calendar files (*.CAL)
	synchronized. Your local (offline) file will be updated to match your server
	(online) file automatically each time you start Schedule+ and each time you
	connect to or disconnect from the server. It will also be updated in the
	background while you are running Schedule+ if your file server changes.
	
	The merging of calendar files happens as follows:
	
	1. Schedule+ adds all of the appointments that were added offline to the
	  postoffice file.
	
	2. Schedule+ deletes all of the appointments that you have deleted offline to
	  the postoffice file.
	
	3. When you change an existing appointment, the changes made to the local file
	  always takes precedence over the changes made to the postoffice file. If you
	  change the text of the appointment offline and another person changes the
	  start time, both changes will be applied because these changes are not in
	  conflict. If you change the start time, end time, start date, end date,
	  reminder notification time, or reminder notification date for an appointment,
	  all of these attributes will be set to the values in the local file.
	
	4. When an overlap occurs as a result of merging the online and offline files,
	  Schedule+ does not notify you specifically; instead, both appointments are
	  entered in the calendar. For example, suppose you schedule an appointment on
	  January 1st at noon while working offline and your Schedule+ assistant
	  creates an appointment at the same time on the postoffice file. Because your
	  assistant has authority to add or modify your scheduled activities, Schedule+
	  shows that you made two changes to the schedule at the same time. As a
	  result, Schedule+ enters both appointments in the merged calendar files.
	
	Additional query words: 1.00 1.00a offline online CAL merge update schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
