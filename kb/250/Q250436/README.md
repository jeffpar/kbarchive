---
layout: page
title: "Q250436: XCLN: Schedule Plus Does Not Open Outlook Calendar Across Domain"
permalink: kb/250/Q250436/
---

## Q250436: XCLN: Schedule Plus Does Not Open Outlook Calendar Across Domain

	Article: Q250436
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0,7.0a,7.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, versions 7.0, 7.0a, 7.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Microsoft Schedule+ with the Microsoft Outlook viewer
	(Msoutl32.dll) installed to view Outlook calendars, Schedule+ cannot open the
	calendar of a user who is in a different site in an untrusted resource domain.
	Both resource domains trust the same Microsoft Windows NT master account domain.
	In other situations (for example, if you use Schedule+ to view Schedule+
	calendars, Outlook to view Outlook calendars, and Outlook to view Schedule+
	calendars across the resource domains) you can view the calendars as expected.
	
	One of the following error messages may be displayed:
	
	  The Schedule file could not be opened. An unknown error occurred.
	
	  - or -
	
	  The schedule file could not be opened. The file could not be found.
	
	WORKAROUND
	==========
	
	Replicate the Schedule+ Free/Busy folder from the site that you want to see to
	the site where the Schedule+ user is located.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbSchedule700a kbSchedule750
	Version           : WINDOWS:7.0,7.0a,7.5
	Issue type        : kbprb
	
	=============================================================================
	
