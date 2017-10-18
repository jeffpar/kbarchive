---
layout: page
title: "Q142348: Recurring Appointments Include the Until Date"
permalink: kb/142/Q142348/
---

## Q142348: Recurring Appointments Include the Until Date

	Article: Q142348
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0; Win95:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you create recurring appointments with Microsoft Schedule+ version 7.0, the
	scheduled appointments include the date specified in the Until Date box.
	
	This is by product design.
	
	MORE INFORMATION
	================
	
	The following date boxes are under Duration in the When tab of the Appointment
	Series dialog box:
	
	  Effective:  day mm/dd/yy
	  Until:  day mm/dd/yy
	
	The Until date will always be included in daily recurring appointments. For
	example, when you create a daily recurring appointment from 1/15/96 until
	1/30/96, appointments will be made every day from Monday 1/15/96 through and
	including Tuesday 1/30/96.
	
	For weekly, monthly, and yearly appointments, the Until date will be scheduled
	with an appointment when it falls on the same day of the week as the Duration's
	Effective date. For example, when you create a weekly recurring appointment from
	1/15/96 until 4/15/96, appointments will be made for all Mondays from 1/15/96
	through and including Monday 4/15/96. However, for weekly recurring appointments
	from 1/15/96 until 5/15/96, appointments will be scheduled for all Mondays from
	1/15/96 through Monday 5/13/96. The date 5/15/96 is excluded because it falls on
	a Wednesday.
	
	
	
	Additional query words: 7.00 schedule plus scheduleplus
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbSQLServ700 kbScheduleSearch kbOffice95Search kbZNotKeyword3
	Version           : WINDOWS:7.0; Win95:7.0
	
	=============================================================================
	
