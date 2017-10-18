---
layout: page
title: "Q118458: PROFS: How to Configure Free/Busy Exchange on VMHOST"
permalink: kb/118/Q118458/
---

## Q118458: PROFS: How to Configure Free/Busy Exchange on VMHOST

	Article: Q118458
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.4 of the PROFS gateway can exchange Free/Busy scheduling information
	with Schedule+. The host component is the Calendar Service Machine (MS-CSM);
	this accesses the calendars of the host PROFS users for complete Free/Busy times
	distribution (all users' times), as well as incremental Free/Busy time
	distributions (only calendars that have changed over the interval period). To
	know when to process incremental Free/Busy times distributions, the MS-CSM
	machine looks at the time settings in the WAKEUP DATA A file.
	
	MORE INFORMATION
	================
	
	Here is an example of the WAKEUP DATA A file:
	
	************************************************************************
	* WAKEUP DATA   VERSION 1.00
	*
	* The format of this file is:
	*
	* DayOfWeek hh:mm:ss TimeStamp Function
	*
	* DayOfWeek - the day or days the function is to be executed.
	*             Valid values: ALL, M-F, S-S, MON, TUE, WED, THU, FRI,
	*                           SAT, SUN
	* hh:mm:ss  - the time the function is to be executed (24hr clock)
	* TimeStamp - used internally.
	*             Enter 'NEW' for new tasks.
	* Function  - PWABFDN to download PROFS/OV scheduling information.
	*             PWAMRCHK to check if Schedule+ meeting requests were
	*             added.
	*
	* For example:
	*
	* ALL   13:00:00   NEW  PWABFDN
	*
	* Will download scheduling information, everyday at 1:00pm
	************************************************************************
	
	* Download PROFS/OV Free/Busy information to Schedule+
	
	ALL  00:00:00  1993/06/30  PWABFDN
	ALL  01:00:00  1993/06/30  PWABFDN
	ALL  02:00:00  1993/06/30  PWABFDN
	ALL  03:00:00  1993/06/30  PWABFDN
	ALL  04:00:00  1993/06/30  PWABFDN
	ALL  05:00:00  1993/06/30  PWABFDN
	ALL  06:00:00  1993/06/30  PWABFDN
	ALL  07:00:00  1993/06/30  PWABFDN
	ALL  08:00:00  1993/06/30  PWABFDN
	ALL  09:00:00  1993/06/30 PWABFDN
	ALL  10:00:00  1993/06/30  PWABFDN
	ALL  11:00:00  1993/06/30  PWABFDN
	ALL  12:00:00  1993/06/30  PWABFDN
	ALL  13:00:00  1993/06/30  PWABFDN
	ALL  14:00:00  1993/06/30  PWABFDN
	ALL  15:00:00  1993/06/30  PWABFDN
	ALL  16:00:00  PENDING-WED  PWABFDN
	ALL  17:00:00  PENDING-WED  PWABFDN
	ALL  18:00:00  PENDING-WED  PWABFDN
	ALL  19:00:00  PENDING-WED  PWABFDN
	ALL  20:00:00  PENDING-WED PWABFDN
	ALL  21:00:00  PENDING-WED PWABFDN
	ALL  22:00:00  PENDING-WED  PWABFDN
	ALL  23:00:00  PENDING-WED  PWABFDN
	
	* Check PROFS/OV calendars to see if Schedule+ meeting requests were added.
	
	ALL  00:00:00  1993/06/30  PWAMRCHK
	ALL  01:00:00  1993/06/30  PWAMRCHK
	ALL  02:00:00  1993/06/30  PWAMRCHK
	ALL  03:00:00  1993/06/30  PWAMRCHK
	ALL  04:00:00  1993/06/30  PWAMRCHK
	ALL  05:00:00  1993/06/30  PWAMRCHK
	ALL  06:00:00  1993/06/30  PWAMRCHK
	ALL  07:00:00  1993/06/30  PWAMRCHK
	ALL  08:00:00  1993/06/30  PWAMRCHK
	ALL  09:00:00  1993/06/30 PWAMRCHK
	ALL  10:00:00  1993/06/30  PWAMRCHK
	ALL  11:00:00  1993/06/30 PWAMRCHK
	ALL  12:00:00  1993/06/30  PWAMRCHK
	ALL  13:00:00  1993/06/30  PWAMRCHK
	ALL  14:00:00  1993/06/30  PWAMRCHK
	ALL  15:00:00  1993/06/30  PWAMRCHK
	ALL  16:00:00  PENDING-WED  PWAMRCHK
	ALL  17:00:00  PENDING-WED  PWAMRCHK
	ALL  18:00:00  PENDING-WED  PWAMRCHK
	ALL  19:00:00  PENDING-WED  PWAMRCHK
	ALL  20:00:00  PENDING-WED PWAMRCHK
	ALL  21:00:00  PENDING-WED PWAMRCHK
	ALL  22:00:00  PENDING-WED  PWAMRCHK
	ALL  23:00:00  PENDING-WED  PWAMRCHK
	
	As the times are executed, the "pending" messages in column three are overwritten
	with the current date, and the MS-CSM machine ignores this time when next it
	views the file.
	
	REFERENCES
	==========
	
	"Microsoft Mail to PROFS and Office Vision, VM Administrator's Guide."
	
	Additional query words: mscsm schedplus
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS340
	Version           : :3.4
	
	=============================================================================
	
