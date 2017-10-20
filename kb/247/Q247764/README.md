---
layout: page
title: "Q247764: XFOR: Testing POP3 Does Not Work, Generates Event 13003"
permalink: /kb/247/Q247764/
---

## Q247764: XFOR: Testing POP3 Does Not Work, Generates Event 13003

{% raw %}

	Article: Q247764
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to test Post Office Protocol (POP3) on Microsoft Exchange
	Server 5.5 through telnet, the connection may not succeed and the following
	event may appear in the application log of Event Viewer:
	
	  Event ID: 13003
	  Source: MSExchangePOP3
	  Type: Error
	  Category: Authentication
	  Description: Hr lookup credentials () call failed with error logon failure.
	  Unknown user name or bad password.
	
	CAUSE
	=====
	
	This behavior can occur when Exchange Server services, the Exchange service
	account, or both lack the necessary permissions and rights.
	
	RESOLUTION
	==========
	
	To resolve this issue, make sure that the Exchange service account has all
	container level permissions and all necessary user rights in User Manager for
	Domains. Also, make sure that all Exchange services start by using the service
	account. Follow these steps:
	
	1. In Exchange Administrator, make sure the Exchange service account has
	  permissions at the site, configuration, and server levels.
	
	2. In Control Panel, double-click Services and make sure all Exchange services
	  start by using this account:
	
	  a. Select an Exchange service, and then click Startup.
	
	  b. Make sure that Log On As is selected, and that the Exchange service
	     account is listed.
	
	3. In User Manager for Domains, make sure that this account has the following
	  user rights:
	
	   - Act as part of the operating system
	
	   - Log on as a service
	
	   - Log on locally
	
	   - Restore files and directories
	
	4. Stop the information store, and then restart it.
	
	5. To test the new configuration, use telnet to connect to port 110.
	
	MORE INFORMATION
	================
	
	For additional information about using telnet, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q165186 XFOR: Verifying Basic POP3 Connectivity Using Telnet
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
