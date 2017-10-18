---
layout: page
title: "Q262451: XCLN: Workaround for Events That Span Two Days Across Time Zones"
permalink: kb/262/Q262451/
---

## Q262451: XCLN: Workaround for Events That Span Two Days Across Time Zones

	Article: Q262451
	Product(s): Microsoft Exchange
	Version(s): ; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	- Microsoft Outlook 97 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create an appointment in Outlook and set it as an all day event, the
	appointment appears to span across two days when you view it in another time
	zone.
	
	CAUSE
	=====
	
	When you click the All Day Event option, the appointment is scheduled from
	midnight on the first day to midnight on the next day. When you view the
	calendar in a different time zone than the one in which the appointment was
	created, the time is adjusted for that time zone based on the regional time
	settings on that computer. This makes the appointment appear to span over two
	days when you view it from another time zone.
	
	NOTE: Computers that are running Exchange Server store all calendar events in
	Greenwich mean time and shift the events based on the regional settings of the
	computer that is accessing each event.
	
	For additional information about how to create an Outlook profile, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q195718 OL2000: How to Create a New Mail Profile for Outlook
	
	  Q181142 OL98: How to Create a New Mail Profile for Outlook
	
	  Q171376 OL97: How to Create a New Mail Profile for Outlook
	
	WORKAROUND
	==========
	
	To work around this problem, schedule the event for the beginning and end of
	your normal workday instead of choosing the All Day option, and then mark the
	event as needed (Free, Tentative, or Busy). Also, Microsoft recommends that you
	not create events that span over the midnight time frame unless your normal
	working hours include those times.
	
	NOTE: When you use this workaround, the top section of the calendar does not
	display the date of the event, but it does display the event as a single event
	that fills the hours for that workday.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about this problem, click the article numbers below
	to view the articles in the Microsoft Knowledge Base:
	
	  Q197718 OL2000: All Day Events Indicate Two Days Across Time Zones
	
	  Q180041 OL98: All Day Events Indicate Two Days Across Time Zones
	
	  Q176793 OL97: All Day Events Indicate Two Days Across Time Zones
	
	For additional information about the date format in Regional Settings and how
	Outlook calculates Greenwich mean time, click the article numbers below to view
	the articles in the Microsoft Knowledge Base:
	
	  Q254592 OL2000: How the Date Format in Regional Settings Affects Outlook
	
	  Q254811 OL98: How the Date Format in Regional Settings Affects Outlook
	
	  Q254810 OL97: How the Date Format in Regional Settings Affects Outlook
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : :; WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
