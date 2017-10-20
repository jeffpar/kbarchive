---
layout: page
title: "Q196162: XADM: Free/Busy Info Doesn't Work After Running Move Server"
permalink: /kb/196/Q196162/
---

## Q196162: XADM: Free/Busy Info Doesn't Work After Running Move Server

{% raw %}

	Article: Q196162
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After running the Microsoft Exchange Server Move Server Wizard on a particular
	server, some users' Free/Busy information may not be available to other users.
	
	CAUSE
	=====
	
	As the Move Server Wizard is carrying out its cleanup tasks, it will access each
	mailbox's private store and delete the Free/Busy folder. If this action fails,
	the Event ID listed below will be placed in the event log. At this point, others
	will not be able to access this user's Free/Busy information.
	
	  Event ID: 9502
	  Source: MSExchangeMvServer
	  Type: Warning
	  Category: General
	  Description: Unable to completely cleanup mailbox
	  '/o=Organization/ou=Site/cn=Recipients/cn=User'.
	
	WORKAROUND
	==========
	
	The only workaround is to move the user in question to another server in the
	site. That user can then be moved back to the original server, if desired.
	
	Additional query words: Attendee Availability Schedule MSW
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
