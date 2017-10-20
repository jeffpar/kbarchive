---
layout: page
title: "Q170055: XCON: Unable to View MTA Queue"
permalink: /kb/170/Q170055/
---

## Q170055: XCON: Unable to View MTA Queue

{% raw %}

	Article: Q170055
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to view the Microsoft Message Transfer Agent (MTA) Queues in
	the Microsoft Exchange Administrator Program, the following error may occur:
	
	  Microsoft Exchange Administrator
	  You do not have the permissions required to complete the operation.
	  Microsoft Exchange Directory ID no: DS_E_INSUFFICIENT_ACCESS_RIGHTS
	
	CAUSE
	=====
	
	To view the MTA Queues in the MTA Properties, an administrator must have at
	least the 'Admin' role at the Site level. View-Only Admin does not have
	permission to view the MTA Queue.
	
	WORKAROUND
	==========
	
	To workaround this issue, grant the user the 'Admin' role at the Configuration
	or Server level.
	
	
	Additional query words: c103113c
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
