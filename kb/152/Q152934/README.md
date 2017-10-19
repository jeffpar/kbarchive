---
layout: page
title: "Q152934: XCON: X.400 Connector Stack Property Page Behavior"
permalink: /kb/152/Q152934/
---

## Q152934: XCON: X.400 Connector Stack Property Page Behavior

	Article: Q152934
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the behavior of the X400 Connector Stack Property Page
	with respect to the Outgoing and Incoming OSI Address Information.
	
	MORE INFORMATION
	================
	
	The OSI Protocol Information that is present on the Stack Property Page refers
	to how a remote system should be contacted (Outgoing T/S/P selectors), and how
	they will advertise themselves when they contact the local X.400 Connector
	(Incoming T/S/P selectors). These selector values always refer to the remote
	system. In general, a Remote X400 system will advertise itself with the same OSI
	information Outgoing as Incoming. Exchange stores its own "advertising
	name/address" in the Transport Stack page.
	
	If the Incoming OSI Protocol Information is left blank with no values entered,
	then it will DEFAULT to the values specified in the Outgoing OSI Protocol
	Information field. That is to say, the X.400 Connector will expect to be
	contacted with the same T/S/P selector values (Incoming) as defined in the
	Outgoing.
	
	For instance, consider the example configuration below for the following OSI
	address information.
	
	OSI Protocol Information:
	
	Outgoing:
	    T     FOREIGN
	    S     FOREIGN
	    P     <blank>
	
	Incoming:
	    T     <blank>
	    S     <blank>
	    P     <blank>
	
	When the X.400 Connector receives an incoming X.400 connection, it will expect
	the T and S Selectors to have a value of FOREIGN, and the P Selector to be
	blank. This is because the Incoming information is <blank>, and the
	default behavior is to assume the same Incoming as Outgoing if the Incoming
	values are not overridden.
	
	Here is an example where the Incoming values differ from the Outgoing.
	
	OSI Protocol Information:
	
	Outgoing:
	    T     FOREIGN
	    S     FOREIGN
	    P     <blank>
	
	Incoming:
	    T     FOREIGN
	    S     <blank>
	    P     <blank>
	
	In this example, the X.400 Connector will connect to the remote X.400 entity with
	a T and S Selector of FOREIGN, but expects to receive only a T Selector of
	FOREIGN as a reply (with the S Selector being blank).
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
