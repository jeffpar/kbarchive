---
layout: page
title: "Q109989: PROFS: Location Field in Meeting Request Dropped"
permalink: /kb/109/Q109989/
---

## Q109989: PROFS: Location Field in Meeting Request Dropped

	Article: Q109989
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The LOCATION field in PROFS/OfficeVision meeting request is lost when a PROFS/OV
	user invites a version 1.0 of Microsoft Schedule+ for Windows user to a meeting.
	
	CAUSE
	=====
	
	Schedule+ does not have an equivalent LOCATION field so the LOCATION information
	is placed into the body of the meeting request. This is by design. When the
	Schedule+ accepts the meeting, only the subject field is added to the entry in
	the Schedule+ calendar.
	
	RESOLUTION
	==========
	
	The location information must be manually copied (using copy/paste) into the
	Schedule+ appointment.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.4 of Microsoft Mail
	Gateway to PROFS. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.40
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS340
	Version           : :3.4
	
	=============================================================================
	
