---
layout: page
title: "Q271545: XCON: Message Timeouts and Open Retry Timeouts"
permalink: /kb/271/Q271545/
---

## Q271545: XCON: Message Timeouts and Open Retry Timeouts

{% raw %}

	Article: Q271545
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 13-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This KB article discusses the differences between message timeouts, and Open
	Retry timeouts.
	
	MORE INFORMATION
	================
	
	As an example of how these two issues may be confusing, look at the following
	two articles in the Microsoft Knowledge Base:
	
	  Q157630 XCON: Adjustment of Connection Retry Values on Override Tab
	
	  Q178539 XCON: How to Adjust Message Timeouts for the Exchange MTA
	
	At first glance, these articles can seem contradictory; it is unclear whether
	mail is returned undeliverable after 24 hours, or after seven days (in the case
	of Normal priority mail).
	
	Message timeouts define how long a message has to live within the message
	transfer system before the system returns the message undeliverable. A concept
	that is very similar to the Time to Live (TTL) value in IP packets. Open Retry
	intervals, on the other hand, define the length of time during which the message
	transfer agent (MTA) tries to connect to another MTA to deliver a message before
	giving up, and then returning the message as undeliverable.
	
	Consider these two different hypothetical scenarios, assuming the simplest
	configuration of only two servers (MTA1 and MTA2):
	
	Scenario 1:
	
	MTA1 attempts to send a message to MTA2, but MTA2 is down. Because MTA1 cannot
	open a connection to MTA2, MTA1 falls into a state of Open Retry, and the Max
	Open Retry counter starts to increment. By default, the retry interval (the
	length of time between connection attempts) is 600 seconds, or five minutes. By
	default, MTA1 tries to make a connection to MTA2 144 times before it giving up,
	and then returning any messages, which were queued for MTA2, to their
	originators as undeliverable. 144 retries multiplied by 600 seconds is equal to
	86,400 seconds, which is approximately 24 hours. Thus, if MTA1 has mail to send
	to MTA2, and MTA2 is down for 24 hours, all mail, regardless of the priority,
	that was bound for MTA2 is returned as undeliverable. For additional
	information, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q157630 XCON: Adjustment of Connection Retry Values on Override Tab
	
	Scenario 2:
	
	MTA1 has mail queued for MTA2, but before it completes the delivery of all the
	mail, MTA1 shuts down; after a while, MTA1 is back online. The mail that is in
	the MTA1 queue does not timeout until the MTA on MTA1 detects that the default
	timeout period for the priority of a given message has elapsed. The defaults are
	two days for High priority, seven days for Normal priority, and ten days for Low
	priority messages. Thus, if MTA1 has mail queued for MTA2, and MTA1 shuts down
	completely for five days, when MTA1 is back online, all of the High priority
	mail that MTA1 had queued for all destinations is returned as undeliverable to
	the message originators. However, messages with a Low or Normal priority remain
	in the queue until they are delivered. For additional information, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q178539 XCON: How to Adjust Message Timeouts for the Exchange MTA
	
	The importance of this issue is determined by which server is down: the server
	that has the mail queued (the Source), or the server that should receive the
	mail (the Destination).
	
	If you have more than two MTAs in the site, or more than one route, which a
	message can use for delivery, then message rerouting factors into the equation.
	Remember that the MTA can reroute mail that is queued to non-secured queues,
	such as the X.400 Connector, Site Connector, Dynamic RAS Connector, and other
	MTAs. The MTA cannot reroute mail that has been queued to secured queues, such
	as the Internet Mail Service, and the Microsoft Exchange Connectors for MS Mail,
	cc:Mail, Lotus Notes, GroupWise, SNADS, and PROFS.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Component         : MTA
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
