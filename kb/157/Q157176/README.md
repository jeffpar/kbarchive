---
layout: page
title: "Q157176: XCLN: Using Auto Accept Meeting Requests / Auto Remove"
permalink: /kb/157/Q157176/
---

## Q157176: XCLN: Using Auto Accept Meeting Requests / Auto Remove

	Article: Q157176
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 12-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Auto Accept Meeting Requests and Auto Remove Canceled Meetings features
	allow meetings to be automatically created or removed from your calendar when no
	conflicting appointments exist. These automatic features function even if the
	account is not configured as a resource account.
	
	NOTE: This functionality is different from earlier versions of Schedule+.
	
	MORE INFORMATION
	================
	
	The Auto Accept Meeting Requests and Auto Remove Canceled Meetings features are
	client processes that function while the Schedule+ or Microsoft Exchange Inbox
	are running. While the Schedule+ and Microsoft Exchange Inbox are inactive (not
	running), these processes wait until you start the programs.
	
	NOTE: When you select the "This Account is for a Resource" option in the General
	Options dialog box (accessed by clicking General Options on the Options menu),
	meetings are accepted or removed automatically when the Schedule+ or Microsoft
	Exchange Inbox is not running for that resource account.
	
	The originator of a meeting request can view another attendee's Schedule+ file
	(assuming he or she has access privileges). The originator can see the meetings
	being added to the calendar, the scheduled and non-scheduled times from the
	Planner, and the status of the meeting requests (a question mark if the
	appointment has not been replied to or is tentative, a red X if the appointment
	was declined, or a green check mark if the meeting was accepted by each
	attendee.
	
	NOTE: When the "Work Primarily from Local file" option is selected, the
	originator can not see the meeting being added to the calendar automatically.
	(To locate this option, on the Tools menu, click Options, and click the
	Synchronize tab.) The originator of the meeting request must close and then
	reopen the attendee's schedule to see the updated calendar.
	
	These Auto Accept Meeting Requests and Auto Remove Canceled Meetings features are
	not affected by the default access permissions. For example, a user who has
	Delegate Owner permissions does not have permission to automatically create or
	remove meetings from the calendar unless the Schedule+ account is open. The
	default access permission is set to None.
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	
	=============================================================================
	
