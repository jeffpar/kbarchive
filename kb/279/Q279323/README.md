---
layout: page
title: "Q279323: XFOR: How to Forward SMTP Mail to Multiple Hosts"
permalink: /kb/279/Q279323/
---

## Q279323: XFOR: How to Forward SMTP Mail to Multiple Hosts

	Article: Q279323
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use the "Forward all messages to host" option to deliver outbound Simple
	Mail Transfer Protocol (SMTP) messages, you can configure the Exchange Internet
	Mail Service so that it sends messages to multiple hosts.
	
	MORE INFORMATION
	================
	
	When you configure the Internet Mail Service for multiple hosts, use a comma to
	separate the names of the hosts that you want the Internet Mail Service to
	forward mail to. For example:
	
	  "<host1>,<host2>,<host3>" (without the quotation marks)
	
	SMTP messages are then delivered in a round-robin style. The first message is
	sent to <host1>, the second message is sent to <host2>, the third
	message is sent to <host3>, the fourth message is sent to <host1>,
	and so on. Use the IP address rather than the computer name for the best
	performance.
	
	If one of the hosts is unavailable, outbound messages are not queued up for this
	host. Messages are delivered only to the available hosts on the list.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
