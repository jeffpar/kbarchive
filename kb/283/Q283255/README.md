---
layout: page
title: "Q283255: XIMS: Event ID 3010  and 3011 Report the Wrong Destination Name"
permalink: /kb/283/Q283255/
---

## Q283255: XIMS: Event ID 3010  and 3011 Report the Wrong Destination Name

	Article: Q283255
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
	
	In Microsoft Exchange Server Internet Mail Service, if you click the Connections
	tab, and set the Message Delivery option to "Forward all messages to host", if
	the Diagnostics Logging level is set to any level other than None for the SMTP
	interface events, the following events may be reported in the Event Viewer
	application log:
	
	  Event ID: 3010
	  Source: MSExchangeIMC
	  Type: Warning
	  Category: SMTP Interface Events
	  Description:
	  An attempt to connect to host <domain.com> failed.
	
	  Event ID: 3011
	  Source: MSExchangeIMC
	  Type: Warning
	  Category: SMTP Interface Events
	  Description:
	  An attempt to connect to host <X.X.X.X> for <domain.com> was
	  refused.
	
	All outbound messages that are sent through the Internet Mail Service include the
	same domain name that is listed in the event description regardless of the
	connection that is being attempted.
	
	CAUSE
	=====
	
	When the Internet Mail Service is started, it uses the first outbound mail
	message to populate these events. The service then uses that domain as the
	default for all mail that is delivered during the session with the relay host.
	This procedure decreases the workload of Exchange Server because Exchange Server
	does not look at the other outbound mail domains of any subsequent outbound
	mail.
	
	WORKAROUND
	==========
	
	To work around this issue, change the Diagnostics Logging level for SMTP
	interface events to None.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server 5.5.
	
	MORE INFORMATION
	================
	
	The domain that is displayed in each of these warning events remains the same
	until the Internet Mail Service is stopped and restarted. At that point, the
	domain name for the first piece of outbound mail is listed in each new warning
	event. This process occurs each time the Internet Mail Service is restarted.
	This issue does not interfere with mail flow and can be ignored.
	
	The host Internet protocol (IP) address listed in event 3011 is the address of
	the actual host that the Internet Mail Service is trying to connect with. The
	domain name should be ignored.
	
	The IP address portion of the event description should be correct for the host
	that is responsible for relaying the outbound SMTP mail. To verify the address,
	click the Connections tab of the Internet Mail Service.
	
	Event ID 3010 can be caused by the any of the following scenarios:
	
	- There is a name resolution issue to the relay host.
	
	- There are limitations of the relay host, such as inbound connections are
	  allowed.
	
	- There is a firewall issue.
	
	To continue troubleshooting, run Telnet to determine if the IP address that is
	listed in the event is correct. Next, verify that the IP address has a
	functioning SMTP port.
	
	Event ID 3011 can be reported if that relay host is not listening on port 25.
	
	You may also want to filter Event Viewer to display warnings and success audits.
	If an event ID 2003 is reported, a connection has been made to that relay host.
	If you are experiencing event 2003 in addition to the other events, you may need
	to troubleshoot this issue as an intermittent issue. This event can occur if the
	maximum number of inbound connections to the relay host has been reached.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q246580 XFOR: Event ID 2003 Displays the Wrong Destination Address
	
	Additional query words: IMS
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
