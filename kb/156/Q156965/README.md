---
layout: page
title: "Q156965: XFOR: SMTP Header Time Conflicts with Sent Time on Message"
permalink: kb/156/Q156965/
---

## Q156965: XFOR: SMTP Header Time Conflicts with Sent Time on Message

	Article: Q156965
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 13-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The time displayed as the Sent time for a Microsoft Exchange message is
	incorrect by one or more hours. More specifically, the date/time stamp shown in
	the SMTP Header information of a message is not the same time as that shown in
	the Sent field in the message.
	
	MORE INFORMATION
	================
	
	When the originator transmits a message, Microsoft Exchange will attach the
	date, time, and Greenwich Mean Time (GMT) offset. These values reflect the time
	that the message left the originator's Outbox. However, when a Microsoft
	Exchange client displays the message in the recipient's mailbox, it converts the
	time that the message was sent to the equivalent time in the recipient's time
	zone. For example, if I am located in Seattle and send a message to you at 1:00
	PM (13:00) Pacific Daylight Time and you receive the message in Charlotte within
	15 seconds, the time showing in the Sent field of the message will be 4:00:15 PM
	(16:00:15). Depending on the time settings of the respective Microsoft Exchange
	clients and Microsoft Exchange Servers involved, the SMTP Header information on
	the originating message will show: 13:00:00 (-07:00) or 13:00:00 (PDT) and the
	time stamp from the receiving server will show 16:00:15 (-04:00) or 16:00:15
	(EDT). Note that the GMT offset may be expressed as either a numeric value, -
	04:00, or an alphabetic label, EDT.
	
	Microsoft Exchange accomplishes this conversion in a two step process. First, it
	converts the time that the message was sent to GMT. Second, it converts the GMT
	time of the message to the local time of the recipient. In the example above, it
	would first convert the 13:00 PST sent time to 20:00 GMT and then the 20:00 GMT
	to 16:000 EDT. The 15 second actual transmission time is also added to the Sent:
	time to produce the final time displayed on the message.
	
	Time zone offsets West of Greenwich are expressed as negative numbers and time
	zone offsets East of Greenwich are expressed as positive numbers. The Microsoft
	Exchange client does not recognize all alphabetic time zone labels. In fact, it
	can only convert ten alphabetic time zone labels to their numeric equivalents.
	The recognized time zones are:
	
	  Time Zone Label      Numeric Offset
	  ===============      ==============
	       GMT                +  0:00
	       UT                 +  0:00
	       EST                - 05:00
	       EDT                - 04:00
	       CST                - 06:00
	       CDT                - 05:00
	       MST                - 07:00
	       MDT                - 06:00
	       PST                - 08:00
	       PDT                - 07:00
	
	All other alphabetic time zone labels are ignored. For those time zones, the
	result will be that the message time will be off by the exact amount of the GMT
	offset for that time zone.
	
	Why does Microsoft Exchange handle time zone values this way? Because that's the
	way RFC 822 defines time zones. According to the RFC, the only time zones with
	recognized, or official, time zone labels are the ones listed above. So
	Microsoft Exchange is functioning in a way that is literally compliant with the
	applicable RFC. To do otherwise would take us out of compliance.
	
	WORKAROUND
	==========
	
	Ensure that all Microsoft Exchange Servers handling mail express time with
	numeric offsets rather than alphabetic labels.
	
	Additional query words: SMTP IMC Time Zone Sent
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
