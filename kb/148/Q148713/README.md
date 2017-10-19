---
layout: page
title: "Q148713: PC WSPlus: How to View the Schedule of Resource Accounts"
permalink: /kb/148/Q148713/
---

## Q148713: PC WSPlus: How to View the Schedule of Resource Accounts

	Article: Q148713
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-SEP-1999
	
	1.00
	WINDOWS
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For users on different postoffices (POs), two methods exist for a Schedule+ 1.0
	user to view another Schedule+ 1.0 user's schedule information:
	
	- dynamically connecting to the target user's PO, thus accessing the user's
	  schedule data directly.
	
	- distributing a user's "free and busy" information using Schedule
	  distribution.
	
	These methods remain appropriate for resource accounts, but present additional
	considerations.
	
	MORE INFORMATION
	================
	
	Dynamic Connections
	-------------------
	
	Dynamic connections are the most direct and expedient means of viewing another
	user's schedule information. However, with many heavy Schedule+ users, dynamic
	connections may impact network bandwidth significantly.
	
	When you use dynamic connections, user1 chooses Open Another's Appointment Book
	and Schedule+ will: access the target user's schedule file; determine the
	"viewer's" permissions; and present the maximum permitted view of the target
	user's schedule data to user1. If user1 has been granted permission to create
	appointments, then user1 could create an appointment directly.
	
	Resource accounts can be managed in this way. However, this leaves arbitration of
	resource booking conflicts up to those who directly access the target resources
	schedule data file.
	
	Free and Busy Schedule Distribution
	-----------------------------------
	
	Another way of distributing "free and busy" information is by configuring
	Schedule Distribution. When a user makes or confirms a change to his or her
	schedule, he or she automatically update his or her portion of a special file on
	the postoffice (00000000.POF). This file is periodically distributed to other
	postoffices, and members of these other postoffices access this file to view the
	"free and busy" information of non-local postoffice users.
	
	When an appointment is requested in the Planner view: non-local attendee's "free
	and busy" information is read from that attendee(s) postoffice's distributed
	file (<hex-id>.POF), and a meeting request is sent to the invited
	attendees. They can respond to the request with Accept, Decline, or Tentative.
	
	An Accept or Tentative selection results in the meeting details being written to
	this attendees schedule data file; as well as, an update being written to the
	special distributed file of his or her postoffice that will be sent out to all
	other postoffices participating in Schedule Distribution at the next interval.
	
	NOTE: Information via Schedule Distribution remains less timely than dynamic
	connections.
	
	Resource Accounts
	-----------------
	
	Resource accounts present a unique case. Typically, resource accounts are
	assigned an assistant who receives a copy of all meeting requests (mail) sent to
	the resource account (optionally, mail can be forwarded to the assistant only).
	The assistant will then make the Accept, Decline, or Tentative action on behalf
	of the resource; therefore, he or she manages or arbitrates the resource's
	schedule.
	
	This "action on behalf of the resource" by the assistant updates the resource's
	schedule data file. However, this action does not result in updating the
	resource's section of the special distributed file (00000000.POF). Thus, any
	user who can dynamically connect to view the resource's schedule will see
	appointments, etc. The users who cannot dynamically connect will not see these
	appointments.
	
	In order for the distributed file to be updated, someone must sign in to
	Schedule+ 1.0 as the resource account, and make some modification to its
	schedule. This will cause a "refresh" of the resource's "free and busy"
	information in the 00000000.POF that should be distributed to other postoffices
	at the next scheduled interval.
	
	The Ideal Case
	--------------
	
	The ideal case would be where everyone can dynamically connect to view a
	resource's "free and busy times." However, users would not "book" the
	appointment directly, but would Invite the resource the same as they would
	invite other attendees. The resource's assistant would then select the Accept,
	Decline, or Tentative action as appropriate. As soon as the assistant completes
	that action, others would see the resource's updated schedule in the "free and
	busy" information.
	
	Alternatives
	------------
	
	If users cannot dynamically connect to view "free and busy" information, the
	assistant (or someone) should at least periodically sign in as the resource
	account and make some modification to its schedule so that its "free and busy"
	information will be updated in the 00000000.POF file and distributed via
	Schedule Distribution (SCHDIST).
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
