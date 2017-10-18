---
layout: page
title: "Q184325: XWEB: All Day Event Appears As Two Days Using OWA"
permalink: kb/184/Q184325/
---

## Q184325: XWEB: All Day Event Appears As Two Days Using OWA

	Article: Q184325
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5; winnt:5.5 SP1
	Operating System(s): 
	Keyword(s): exc55sp1
	Last Modified: 05-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Active Server Components, version 5.0 
	- Microsoft Exchange Server, version 5.5 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create an "All Day Event" using the Microsoft Outlook Web Access
	client, the appointment appears to span two days. The start time appears as
	12:00 A.M. on the scheduled day and the end time appears as 12:00 A.M. on the
	following day.
	
	CAUSE
	=====
	
	This is by design. When you select an All day Event, the default setting is
	12:00 A.M. of the scheduled day to 12:00 A.M. of the following day, spanning a
	full 24 hour period.
	
	MORE INFORMATION
	================
	
	When an appointment is set as an All Day Event, its title is displayed in a
	heading bar at the top of the schedule window.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp1 
	Technology        : kbOutlookSearch kbZNotKeyword6 kbExchangeSearch kbZNotKeyword2 kbOWASearch kbOWA550 kbExchange550SP1 kbExchangeActiveServComp500
	Version           : WINDOWS:5.0,5.5; winnt:5.5 SP1
	Issue type        : kbprb
	
	=============================================================================
	
