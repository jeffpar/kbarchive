---
layout: page
title: "Q247934: XADM: Events 1000 and 4096 Starting InterOrg Sync Tool"
permalink: /kb/247/Q247934/
---

## Q247934: XADM: Events 1000 and 4096 Starting InterOrg Sync Tool

{% raw %}

	Article: Q247934
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Inter-organization synchronization does not occur and the following errors are
	written to the application Event Log when the Microsoft Exchange InterOrg Sync
	tool is started:
	
	  Event Type: Error
	  Event Source: Userenv
	  Event Category: None
	  Event ID: 1000
	  Date: 11/24/1999
	  Time: 11:51:52 AM
	  User: N/A
	  Computer: Computername
	  Description: Your profile was not successfully loaded, but you have been
	  logged on with
	  the default system profile. Please correct the problem and log off. (5)
	
	  Event Type: Warning
	  Event Source: _Exchange Inter-Org Synch
	  Event Category: None
	  Event ID: 4096
	  Date: 11/24/1999
	  Time: 11:51:55 AM
	  User: N/A
	  Computer: Computername
	  Description:
	  InterOrg: CConfigData::Initialize DAPIStart Alias/Display Name Generation
	  disabled. 80001010
	
	CAUSE
	=====
	
	The service is not starting with the Exchange Server service account.
	
	RESOLUTION
	==========
	
	Change the startup parameter of the Microsoft Exchange InterOrg Sync Tool
	service:
	
	1. In Control Panel, double-click Services, and then click the Microsoft
	  Exchange InterOrg Sync Tool service.
	
	2. Click Startup, change the Log On As option to This Account, and then specify
	  the Exchange Server service account and password.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
