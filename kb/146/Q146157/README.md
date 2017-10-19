---
layout: page
title: "Q146157: XFOR: Should Have Exclusive Access to Port 25"
permalink: /kb/146/Q146157/
---

## Q146157: XFOR: Should Have Exclusive Access to Port 25

	Article: Q146157
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Internet Mail Connector (IMC) requires exclusive use of
	TCP port 25 to successfully transport SMTP mail. If another program reserves
	port 25, the IMC may start without error, but no incoming mail will be accepted.
	
	CAUSE
	=====
	
	The Internet Mail Connector uses TCP port 25 for inbound SMTP mail as defined by
	RFC-821. For inbound SMTP mail, the IMC monitors port 25 for incoming
	connections from other SMTP hosts. The IMC will answer all incoming SMTP calls
	if it is the first or only SMTP service running.
	
	If another SMTP service is running and set to receive mail, the Internet Mail
	Connector will start without error, but incoming mail will not be delivered to
	the Information Store. Incoming SMTP mail may be delivered to the third party
	program's delivery queue, or it may be rejected and returnedto the originating
	host.
	
	The IMC may be able to deliver outbound mail even if another SMTP host is
	monitoring port 25 for incoming mail. Multiple outbound connections are
	possible, and when outbound mail is to be delivered, the IMC opens one or more
	connections to port 25 to connect to other SMTP hosts.
	
	RESOLUTION
	==========
	
	Do not run third party SMTP applications on any Microsoft Exchange server that
	is running the Internet Mail Connector service. You can verify if you have
	another SMTP service running by using the Windows NT telnet program.
	
	To test the connection, run telnet from the Windows NT command prompt specifying
	the IP address of the server running the Internet Mail Connector, for example:
	
	  telnet xxx.45.66.77 25
	
	By default, the IMC will respond with a greeting similar to:
	
	  220 imc.company.com service ready
	
	If the response is worded differenty, you may have a third party SMTP service
	that is running that you should disable to allow the Internet Mail Connector to
	transfer SMTP mail.
	
	
	Additional query words: imc port25
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
