---
layout: page
title: "Q115452: SMTP: Date and Time Stamps Different in Inbox and Message"
permalink: kb/115/Q115452/
---

## Q115452: SMTP: Date and Time Stamps Different in Inbox and Message

	Article: Q115452
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you view messages received from SMTP through the Microsoft Mail Gateway to
	SMTP, the date and time stamps in the Inbox sometimes are different than those
	embedded in the message itself.
	
	MORE INFORMATION
	================
	
	The date and time fields in the Inbox and those in the message are stamped by
	different hosts, in accordance with RFC 822.
	
	For Incoming Messages
	---------------------
	
	The SMTP gateway stamps the date that you see in the "Date" column of the Inbox.
	The gateway computer uses the TZ variable to adjust the time for the set time
	zone. The date field you see when you open the message is stamped by the
	sender's mail client. The other RFC 822 header fields that include dates in them
	are stamped by the SMTP hosts that relay the message along to its destination.
	
	For Outgoing Messages
	---------------------
	
	The date field you see when you open the message is stamped by the sender's mail
	client with the client's local date and time. In this case, the client uses the
	TZ variable to adjust for the time zone.
	
	The SMTP gateway stamps the date that it gets from the gateway computer in an RFC
	822 header field and passes the message on to the mail routing host. Again, all
	other RFC 822 header fields with dates in them are stamped by the SMTP hosts who
	relay the message along to its destination.
	
	Additional query words: SMTP DATE TIME
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
