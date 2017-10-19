---
layout: page
title: "Q164400: XCON: Sockets Error 10022 When Connecting X.400 over TP4"
permalink: /kb/164/Q164400/
---

## Q164400: XCON: Sockets Error 10022 When Connecting X.400 over TP4

	Article: Q164400
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbtshoot kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the X.400 connector over the TP4 protocol stack to connect a
	Microsoft Exchange Server computer to another e-mail system, the following
	warning message may be generated in the Windows NT Application log:
	
	  Event ID 9215     MSExchangeMTA     Operating System
	
	  A sockets error 10022 on a connect() call was detected. The MTA will
	  attempt to recover the sockets connection. Control block index: 21.
	  [BASE IL TP4 DRIVER   10 273] (12)
	
	Sockets error 10022 is defined as "Invalid Arguments." As a result of this
	warning, the message you wanted to send does not leave the queue.
	
	CAUSE
	=====
	
	When setting up the X.400 Connector using TP4, the remote message transfer agent
	(MTA) address needs to be defined on the X.400 Connector properties Stack tab.
	This value can be either hexadecimal or text and must match the value defined in
	the remote MTA. If this value does not match, it generates the invalid argument
	error and the association to the remote MTA is not made.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Check the settings for the remote MTA and make sure that the address defined
	  on the Stack tab of the Exchange X.400 connector matches the NSAP address of
	  the remote MTA.
	
	Additional query words: x400
	
	======================================================================
	Keywords          : kbtshoot kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
