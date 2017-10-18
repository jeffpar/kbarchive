---
layout: page
title: "Q145955: Overlapping Appointments Cause Synchronization Error"
permalink: kb/145/Q145955/
---

## Q145955: Overlapping Appointments Cause Synchronization Error

	Article: Q145955
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may get the following error message when you synchronize your local (.SCD)
	and server-based (.CAL) calendar files, using Microsoft Schedule+ for Windows,
	version 7.0:
	
	  Your schedule may have been only partially synchronized. Try again later.
	  Only one appointment can be scheduled for a single time period. To schedule
	  overlapping appointments, you must deselect the Disallow Overlapping
	  Appointments setting.
	
	CAUSE
	=====
	
	You are trying to schedule an overlapping appointment and have selected the
	option to "Disallow overlapping appointments."
	
	RESOLUTION
	==========
	
	Remove one of the overlapping appointments
	
	  -or-
	
	clear the option to Disallow Overlapping Appointments.
	
	MORE INFORMATION
	================
	
	To clear the option to Disallow Overlapping Appointments, follow these steps:
	
	1. On the Tools menu, click Set Access Permissions.
	
	2. On the Global tab, click to clear Disallow Overlapping Appointments and click
	  OK.
	
	
	Additional query words: schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	
	=============================================================================
	
