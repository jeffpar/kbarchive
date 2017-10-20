---
layout: page
title: "Q246580: XFOR: Event ID 2003 Displays the Wrong Destination Domain"
permalink: /kb/246/Q246580/
---

## Q246580: XFOR: Event ID 2003 Displays the Wrong Destination Domain

{% raw %}

	Article: Q246580
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the Microsoft Exchange Server Internet Mail Service has Message Delivery
	configured for Forward all messages to host on the Connections tab and
	Diagnostics Logging is set to any level other than None for the SMTP Interface
	Events, you will receive the following event in the Event Viewer Application
	Log:
	
	  Event ID: 2003
	  Source: MSExchangeIMC
	  Category: SMTP Interface Events
	  Description: A new TCP/IP connection has been made to host x.x.x.x (for
	  domain.com).
	  Logfile: L0000000.LOG
	
	All messages sent out through the Internet Mail Service show the same domain name
	in the description.
	
	If SMTP Protocol Log is also turned on, the event listed above will display the
	name of the log file where this SMTP transaction was recorded. This can be found
	in the \exchsrvr\imcdata\log folder. If SMTP Protocol Log is set to None the
	value for Logfile in this event will display None.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	5.5.
	
	
	MORE INFORMATION
	================
	
	The domain that is displayed in each of these Success Audit events will remain
	the same until the Internet Mail Service is stopped and restarted. At that point
	the domain name for the first piece of mail that is forwarded to the specified
	host on the Connections tab will be used for each new Success Audit event 2003.
	This process will continue each time the Internet Mail Service is restarted.
	This will not cause problems with mail flow and can be ignored. The IP address
	portion of the event description should be correct for the host that is
	responsible for relaying the outbound SMTP mail.
	
	Additional query words: IMS
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
