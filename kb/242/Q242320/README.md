---
layout: page
title: "Q242320: XFOR: Event ID 4122 from Exchange Server Internet Mail Service"
permalink: /kb/242/Q242320/
---

## Q242320: XFOR: Event ID 4122 from Exchange Server Internet Mail Service

{% raw %}

	Article: Q242320
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may be logged multiple times in the application
	event log, and e-mail messages may not be delivered or received:
	
	  Event ID - 4122
	  MSExchangeIMC
	  Description -
	  An error occurred while retrieving the originating address of a message to be
	  delivered. Since the originating address is needed for mail delivery, the
	  mail cannot be delivered. The message that was being processed has been moved
	  to the "BAD" folder. Use the appropriate utilities found in the SUPPORT
	  directory of your Exchange CD to view and manipulate these messages.
	
	CAUSE
	=====
	
	This problem can occur if the Network Associates GroupShield antivirus software
	is running. The GroupShield software scans e-mail messages at the same time that
	the Internet Mail Service is processing them. This results in malformed e-mail
	addresses and generates the error message in the "Symptoms" section of this
	article, Event ID 4122.
	
	RESOLUTION
	==========
	
	To resolve this problem, configure GroupShield to omit the Internet Mail Service
	from its scanning routines.
	
	Contact Network Associates for more information.
	
	MORE INFORMATION
	================
	
	For additional information about how to use the utilities mentioned in the
	description in Event ID 4122, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q165505 XFOR: How to View or Delete Messages in MTS-IN and MTS-OUT Queues
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : :5.0,5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
