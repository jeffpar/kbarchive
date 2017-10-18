---
layout: page
title: "Q164846: XCLN: Schedule+ Invitees Are Not Informed When Removed from Appt"
permalink: kb/164/Q164846/
---

## Q164846: XCLN: Schedule+ Invitees Are Not Informed When Removed from Appt

	Article: Q164846
	Product(s): Microsoft Exchange
	Version(s): Windows:5.0
	Operating System(s): 
	Keyword(s): kbother kbusage
	Last Modified: 13-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, versions 7.0, 7.5 
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Invited attendees, including resource accounts, are not sent a cancellation
	notice when they are removed from the list of invited attendees for an
	appointment.
	
	For example, John invites Robin to a meeting in Conference Room 1.
	
	John creates a new appointment and places Robin in the Required List and places
	Conference Room 1 in the Resource List. Robin receives the meeting request and
	accepts. The conference room is set up to automatically accept all meeting
	requests and does so.
	
	Later, John decides he would like to move the meeting to Conference Room 2
	because he also wishes to invite his whole team.
	
	John edits the appointment and adds the group, JohnsTeam, to the Required List.
	He removes Conference Room 1 and adds Conference Room 2 to the Resource List.
	The team members are sent a meeting invitation and so is the resource Conference
	Room 2, which is also set up to automatically accept all meeting requests.
	
	The James decides that he would like to meet Marian on this same day but is
	unable to find a meeting place. The only two conference rooms seem to be booked;
	Conference Room 1 never received a cancellation message from John's Schedule+
	client.
	
	CAUSE
	=====
	
	Cancellation messages are not sent to individual users or resource accounts when
	they are removed from the list of invitees of an appointment.
	
	WORKAROUND
	==========
	
	To work around this problem, you must cancel the entire appointment and then
	create a new appointment with the new list of invitees and resources. Canceling
	the appointment causes a cancellation message to be sent to all invitees.
	
	
	======================================================================
	Keywords          : kbother kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbSchedule750
	Version           : Windows:5.0
	Issue type        : kbprb
	
	=============================================================================
	
