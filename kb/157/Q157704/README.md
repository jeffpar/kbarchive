---
layout: page
title: "Q157704: XCLN: Schedule+ Appointments Scheduled Time Incorrect"
permalink: /kb/157/Q157704/
---

## Q157704: XCLN: Schedule+ Appointments Scheduled Time Incorrect

{% raw %}

	Article: Q157704
	Product(s): Microsoft Schedule+ for Windows
	Version(s): 1.0,4.0,7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	- Microsoft Schedule+, versions 1.0, 7.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Appointments between Schedule+ 1.0 users and Schedule+ 7.0 users are scheduled
	incorrectly if the time the appointment was scheduled occurs before daylight
	savings time and the time of the appointment occurs after daylight savings
	time.
	
	For example, if the current date is October 15, 1996 (and daylight savings time
	occurs on October 27, 1996), and you send a meeting request for November 5,
	1996, at 12:00 PM from Microsoft Mail using Schedule+ 1.0 to a Microsoft
	Exchange user using Schedule+ 7.0 and the Microsoft Exchange user accepts the
	request, the meeting is scheduled for 11:00 AM.
	
	In contrast, if the current date is October 15, 1996, and you send a meeting
	request for October 16, 1996, at 12:00 PM from Microsoft Mail using Schedule+
	1.0 to a Microsoft Exchange user using Schedule+ 7.0, and the Exchange user
	accepts the request, the meeting is scheduled for 12:00 PM.
	
	CAUSE
	=====
	
	This problem occurs when the meeting request is sent by the Schedule+ 1.0 user
	to the Schedule+ 7.0 user, and vice versa. Schedule+ 1.0 is not aware of time
	zones or daylight savings time.
	
	NOTE: When you send a meeting request between two Schedule+ 1.0 clients across
	time zones the meeting times show the time the message was scheduled by the
	requester. There is no adjustment for time zone differences.
	
	Schedule+ 7.0 is aware of time zones and daylight savings time. When you send
	mail between two Schedule+ 7.0 clients (assuming each user has properly set
	their time zone and clock in Schedule+), across time zones or daylight savings
	time, the meetings times are correct for both clients.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article. This problem was corrected in Microsoft Exchange
	Server 4.0 U.S. Service Pack 4. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	If message conversion is being handled by the client, and the customer is using
	Schedule+ 7.0 and the Microsoft Mail Service Provider to get to a Microsoft Mail
	Post Office, the problem can still occur.
	
	If you are using Microsoft Mail and you use Schedule+ 7.0 to send a message, the
	message is converted on your computer. When the recipient receives the message,
	it is converted on the recipient's machine unless the Schedule+ 7.0 properties
	are already in the message.
	
	If you are using Microsoft Exchange and Schedule+ 7.0, if you send mail to a
	Microsoft Mail user, the Microsoft Mail Connector Interchange (MSMI) does the
	conversion.
	
	Basically, the message content is converted at the first Microsoft Exchange
	gateway (MSMI, IMC, and so forth). No process exists to override any previous
	conversion, so the conversion only happens once.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbSchedule100
	Version           : :1.0,4.0,7.0
	
	=============================================================================
	

{% endraw %}
