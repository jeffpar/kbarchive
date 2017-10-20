---
layout: page
title: "Q243408: XADM: Move Server Wizard Stops Working, Event ID 264"
permalink: /kb/243/Q243408/
---

## Q243408: XADM: Move Server Wizard Stops Working, Event ID 264

{% raw %}

	Article: Q243408
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Move Server Wizard stops working with the following error message:
	
	  One or more errors were encountered while importing objects into the
	  directory. Please see the Application Event Log for details.
	
	  Microsoft Exchange Move Server Wizard
	  Id no: c103757c
	
	The following event also appears in the application log.
	
	  Event ID:264
	  Source: MSExchangeDSImp
	  Type: Error
	  Category: None
	  Description: The Attribute ADC-Global-Name is unknown.
	
	CAUSE
	=====
	
	ADC-Global-Name is a new attribute added to the Exchange Server 5.5 schema in
	Service Pack 3 (SP3). Versions of the Mover Server Wizard from previous service
	packs do not recognize this attribute and cannot import the schema properly.
	
	RESOLUTION
	==========
	
	Install the latest version of the Move Server Wizard. It is located in the
	Server\40bit\Eng\Server\Support\Movesrvr folder on the Exchange Server 5.5 SP3
	CD.
	
	MORE INFORMATION
	================
	
	A warning is also displayed when you click the "I understand" button at the
	beginning of the Move Server Wizard process. The warning reads:
	
	  Warning: The Move Server Wizard detected that this server is running a more
	  recent version of Microsoft Exchange Server. The Move Server Wizard was
	  designed to run on Microsoft Exchange Server version 5.5 Service Pack 1.
	  Check to see if a more recent version of the Move Server Wizard is available.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
