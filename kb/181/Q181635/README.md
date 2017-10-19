---
layout: page
title: "Q181635: XWEB: End Date of Appointment or Meeting Changes Incorrectly"
permalink: /kb/181/Q181635/
---

## Q181635: XWEB: End Date of Appointment or Meeting Changes Incorrectly

	Article: Q181635
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you modify the Start Date or End Date fields of an appointment or meeting
	request in the Outlook Web Access (OWA) client, the month field of the End Date
	may incorrectly change to the next month.
	
	CAUSE
	=====
	
	This behavior only occurs when both of the following conditions are met:
	
	The current month has more days than the month in which the appointment or
	meeting request is being made. This will usually occur when the current month is
	one of the following: January, March, May, July, August, October, or December.
	All of these months have 31 days.
	
	-and-
	
	The current day of the month is greater than the last day of the month in which
	the appointment or meeting request is being created. For example, you might see
	this behavior if the current date is January 31 and you select a day in February
	to create a meeting request or appointment. If you then change any fields for
	the start or end dates, the month of the End Date changes to the following month
	(March, in this case).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Outlook Web Access
	version 5.5. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec modify
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	
	=============================================================================
	
