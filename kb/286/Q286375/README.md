---
layout: page
title: "Q286375: XFOR: Slow Banner Response from Internet Mail Service with NDR"
permalink: /kb/286/Q286375/
---

## Q286375: XFOR: Slow Banner Response from Internet Mail Service with NDR

	Article: Q286375
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 10-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a host to connect to the Internet Mail Service, you must wait
	a long time (from five to twenty seconds) to receive the Simple Mail Transfer
	Protocol (SMTP) banner from Exchange Server 5.5. You may also receive a
	non-delivery response (NDR).
	
	CAUSE
	=====
	
	Slow banner response can be caused by any of the following reasons:
	
	- On a normal-to-heavily-used server that is running Exchange Server, the
	  Performance Optimizer Wizard (Perfwiz.exe) has not been run since you
	  installed Exchange Server 5.5.
	
	- A firewall or packet filtering software is delaying the banner response. In
	  this case, you should perform telnet tests from both sides of all routers to
	  measure the differences in banner response times.
	
	- If SMTP protocol logging is enabled, reverse-DNS lookups are performed on
	  each incoming connection. This functionality affects computer performance.
	
	Banner response can also be slow if the Exchange Server computer is querying a
	DNS server that is slow to respond.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q258745 XIMS: Internet Mail Service Displays SMTP Banner Slowly
	
	The NDR occurs because the connecting host has a lower wait threshold, and
	therfore may reset or retry the connection before the Internet Mail Service can
	display its banner. In this case, the host eventually sends an NDR for the
	original message back to the sender. However, most connecting hosts wait for the
	banner to be displayed before they submit messages to Exchange Server,
	
	RESOLUTION
	==========
	
	If slow banner response is caused by an unused Performance Optimizer Wizard,
	ensure that you run the Performance Optimizer Wizard after you install Exchange
	Server 5.5, any Exchange Server service pack, or any Exchange Server hotfix.
	
	MORE INFORMATION
	================
	
	The Exchange Internet Mail Service listens on TCP port 25 for incoming SMTP
	messages from other hosts. When other hosts connect, they always wait for the
	banner response to ensure that Exchange Server is ready to accept a message.
	
	For additional information about connecting and receiving the banner from the
	Internet Mail Service, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q153119 XFOR: Telnet to Port 25 of IMC to Test IMC Communication
	
	
	Additional query words: delay latency smtp banner slow response
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbprb
	
	=============================================================================
	
