---
layout: page
title: "Q146562: XFOR: Some Connection Parameters Not Configurable Per Domain"
permalink: kb/146/Q146562/
---

## Q146562: XFOR: Some Connection Parameters Not Configurable Per Domain

	Article: Q146562
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can specify some Microsoft Exchange Internet Mail Connector (IMC) options on
	a per e-mail domain basis using the Microsoft Exchange Administrator program.
	These include message delivery and message content. However, the following
	connection parameters cannot be specified on a per e- mail domain basis:
	
	  Max no. of Inbound Connections
	  Max no. of Outbound Connections
	  Max no. of Connections to a single host
	  Max no. of Messages sent in a connection
	
	These four values can be configured in the IMC properties page using the Advanced
	button on the Connections tab.
	
	MORE INFORMATION
	================
	
	The ability to set these four values on a per e-mail domain basis is very
	important to some people who want interoperability with single-threaded SMTP
	gateways like the Microsoft Mail 3.x SMTP gateway.
	
	However, the only current solution, to send SMTP mail directly to a Mail 3.x
	gateway, would hinder overall performance. This gateway runs on MS-DOS and can
	only support one connection at a time. This will cause a problem when an outside
	host tries to make multiple connections to the MS-DOS computer because it could
	result in:
	
	- Many retries initiated as the IMC tries to open multiple threads to a
	  single-threaded SMTP gateway.
	
	- Lock-ups of single-threaded SMTP gateways.
	
	- Loss of overall IMC performance because the "maximum number of connections to
	  a single host" must be set to 1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
