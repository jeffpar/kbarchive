---
layout: page
title: "Q133401: XFOR: Connector MTA Appears to Collect Mail It Shouldn't"
permalink: /kb/133/Q133401/
---

## Q133401: XFOR: Connector MTA Appears to Collect Mail It Shouldn't

{% raw %}

	Article: Q133401
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances, an MS Mail connector (PC) MTA on a Microsoft
	Exchange Server computer appears to collect messages that it shouldn't. An event
	entry similar to the following is logged:
	
	  Category:  Moved In
	  Description:
	  Date: 05/03/95
	  Time:  18:43
	  Message ID: 00000032
	  Size: 1235
	  FROM:  NETWORK/PO1/USER03
	  TO:    NETWORK/PO3/USER45
	
	CAUSE
	=====
	
	This is by product design.
	
	MORE INFORMATION
	================
	
	The log entry above is generated when a message is sent from PO1 to PO3,
	indirectly through PO2. In the example, PO2 also happens to be the hub
	connecting other postoffices to Microsoft Exchange.
	
	The sample message is in error since no mail was actually moved into the
	Microsoft Exchange server. A similar message will appear if the connector MTA
	polls a postoffice that has messages queued up, waiting to be moved by an
	additional instance of the MTA.
	
	Additional query words: message transfer agent MTA External
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
