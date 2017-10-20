---
layout: page
title: "Q135063: XCON: Changing MTA Conformance on X.400 Connectors Fails"
permalink: /kb/135/Q135063/
---

## Q135063: XCON: Changing MTA Conformance on X.400 Connectors Fails

{% raw %}

	Article: Q135063
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the message transfer agent (MTA) conformance of a Microsoft Exchange Server
	X.400 connector is changed while the Microsoft Exchange MTA is running, messages
	will be either returned with a nondelivery report (NDR) or lost entirely.
	
	CAUSE
	=====
	
	When communication occurs between Microsoft Exchange sites, the X.400 connectors
	at both ends should be configured to use the same MTA conformance, either the
	1984 or 1988 standard. If the X.400 connector on one server uses one type of MTA
	conformance and the other server uses another type, the encoded message
	transfers between servers will not be interpreted correctly. This is because the
	reliable transfer service element (RTSE) settings defined by the 1984 and 1988
	standards are not compatible with each other.
	
	RESOLUTION
	==========
	
	Verify that the MTA conformance option found on the X.400 connector's advanced
	properties page matches what is used by the Exchange Server or other X.400
	system at the other end of the connection, either 1984 or 1988. If you need to
	make any changes, restart all the services on both servers. This will re-encode
	any messages in the queue waiting to be transmitted.
	
	
	Additional query words: mta
	
	======================================================================
	Keywords          : kbinterop kbnetwork 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	
	=============================================================================
	

{% endraw %}
