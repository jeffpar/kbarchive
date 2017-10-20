---
layout: page
title: "Q170007: XCON: 9224 Sockets Error 10053 Connecting to a Retix 1.41 MTA"
permalink: /kb/170/Q170007/
---

## Q170007: XCON: 9224 Sockets Error 10053 Connecting to a Retix 1.41 MTA

{% raw %}

	Article: Q170007
	Product(s): Microsoft Exchange
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When transferring messages between a Retix 1.41 Message Transfer Agent (MTA) and
	the Microsoft Exchange MTA, the following error may be logged in the Windows NT
	Event Viewer Application log.
	
	  NMI9224: Internal Operating System Error;
	  severity 12 (BASE IL TP4 DRIVER (13) Proc 272)
	  10-02-96 01:22:31pm send() call failed on CB 22
	  Socket error 10053
	
	Messages will flow between the Exchange and Retix MTAs.
	
	CAUSE
	=====
	
	The NMI9224 error indicates that after some sort of timeout condition, the
	Microsoft Exchange Server computer tries to initiate an association recovery
	over TP4 to the Retix server.
	
	The Retix server drops the connection before the Microsoft Exchange Server
	recovery operation is complete. This error is non-critical because when the
	connection is dropped, a new association will be created between the two MTAs.
	
	This behavior is by product design.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : 1.00
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
