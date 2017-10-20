---
layout: page
title: "Q188641: XADM: Mailbox Cleanup Agent Service Fails to Start with 1069"
permalink: /kb/188/Q188641/
---

## Q188641: XADM: Mailbox Cleanup Agent Service Fails to Start with 1069

{% raw %}

	Article: Q188641
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Exchange Mailbox Cleanup Agent version 1.9 service fails to start with the
	following error message:
	
	  Could not start the Microsoft Exchange Mailbox Cleanup Agent
	  Service on \\<server name>
	  Error 1069. The service did not start due to a logon failure.
	
	CAUSE
	=====
	
	This is by design. The Mailbox Cleanup Agent must first be configured in the
	Microsoft Exchange Administrator (Admin.exe) program.
	
	WORKAROUND
	==========
	
	Configure the Mailbox Cleanup Agent in the Microsoft Exchange Server
	Administrator program by performing the following steps:
	
	1. Select the Mailbox Cleanup Agent object in the Recipients container.
	
	2. Configure a container, schedule, and notification.
	
	3. In Control Panel Services, start the Mailbox Cleanup Agent service.
	
	MORE INFORMATION
	================
	
	In the System log of Event Viewer, the following events from Service Control
	Manager will also be logged:
	
	  7000 - The Microsoft Exchange Mailbox Cleanup Agent service
	  failed to start due to the following error:
	  The service did not start due to a logon failure.
	
	  7013 - Logon attempt with current password failed with the
	  following error:
	  Logon failure: unknown user name or bad password.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
