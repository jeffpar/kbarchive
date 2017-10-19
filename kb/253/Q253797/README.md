---
layout: page
title: "Q253797: XCLN: Outlook 97, Outlook 98 May Allow Overlapping Appointments"
permalink: /kb/253/Q253797/
---

## Q253797: XCLN: Outlook 97, Outlook 98 May Allow Overlapping Appointments

	Article: Q253797
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a user acting as your meeting planner has at least Read access permission to
	your calendar and your calendar contains any "placeholder" appointments (to
	block off time and schedule a private appointment, for example, a doctor's
	appointment), the user planning a meeting in Outlook 97 or Outlook 98 cannot see
	the nested private appointment that exists behind your placeholder appointment,
	especially if the placeholder appointment is marked as free time. This may
	result in unintentional double booking of your calendar during the time that the
	private meeting was scheduled.
	
	CAUSE
	=====
	
	Outlook 97 and Outlook 98 are designed not to publish or expose private
	appointments.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Microsoft Outlook 2000. Blocks of time are
	displayed as a generic block in Outlook 2000.
	
	WORKAROUND
	==========
	
	To work around this problem, have users who act as meeting planners use meeting
	request e-mail messages. There are several ways you can avoid conflicts when you
	make appointments, but this is the preferred workaround. It allows you to check
	the free and busy information for the intended attendees when you set up a
	meeting, and allows you to e-mail the request to the attendees. It also allows
	the intended attendees to accept or decline the invitation to the meeting, in
	case there are last minute changes that were not reflected in the free and busy
	information at the time that you created the meeting request. When the meeting
	is accepted, it is posted to the calendar. This workaround works for all
	versions of Outlook.
	
	To review meeting requests before you accept them, turn off the default setting
	to automatically accept meeting requests and cancellations. To do this, click
	Options on the Tools menu, click Preferences, click Calendar Options, and then
	click Resource Scheduling. Click to clear the "Automatically accept meeting
	requests and cancellations" check box. This leaves the response to the meeting
	invitation marked as "Tentative" and allows you to check for conflicts, and you
	still retain the option of final approval.
	
	MORE INFORMATION
	================
	
	Microsoft Schedule+ users can see private appointments, but this was changed for
	the release of Outlook 97 and Outlook 98. In Outlook 2000, private appointments
	are displayed as a generic block labeled "Private" in the Calendar view.
	
	Background History of Private Appointments
	------------------------------------------
	
	Schedule+ Clients:
	
	For additional information about private appointments in Schedule+, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q183650 Schedule + Won't Print Outlook Private Appointments
	
	This article describes the inability of Schedule+ 7.0, Schedule+ 7.5, and
	Schedule+ 95 (Schedule+ 7.x) users to print or preview private appointments that
	are contained in an Outlook calendar. A utility, Msoutl32.dll, is available that
	provides the ability to view the Calendar folder, but you cannot directly book
	meetings to the calendar with the Msoutl32.dll utility installed on the
	Schedule+ client computer. Meeting requests are still necessary for
	interoperability between Schedule+ and Outlook when you book meetings. For
	additional information about how to download the Msoutl32.dll utility, see
	Q183650.
	
	Outlook 97 and Outlook 98 Information:
	
	For additional information about private appointments in Outlook 97, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q170578 Details of Private Appointments Can Be Viewed by Others
	
	This article describes the ability of other Outlook users to view private
	appointments. This behavior was changed in Outlook 97 release 8.01, so that
	other Outlook users could not view private appointments, and that behavior
	continued through Outlook 98.
	
	Outlook 2000 Information:
	
	For additional information about private appointments in Outlook 2000, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q249324 How to Give Access to Private Items for Delegate
	
	This article describes the ability of delegates in Outlook 2000 to view private
	appointments as a new feature, and describes how to allow a delegate to view
	items that have been marked as private in the manager's mailbox.
	
	In Outlook 2000, you can directly "book" an appointment in the same manner that
	you originally could in Schedule+, by making appointments directly to the
	calendar without the use of meeting requests and confirmation e-mail messages.
	
	
	Additional query words: Conflicting Overlapping Private Appointments Nested OL97 OL98 OL2000
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
