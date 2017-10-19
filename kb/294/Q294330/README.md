---
layout: page
title: "Q294330: XADM: &quot;Exchange Computer Is Unavailable&quot; Msg in Server Monitor"
permalink: /kb/294/Q294330/
---

## Q294330: XADM: &quot;Exchange Computer Is Unavailable&quot; Msg in Server Monitor

	Article: Q294330
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Server Monitor component of the Exchange Server 5.5 Administrator
	program to monitor the status of an Exchange Server computer, the Comment column
	may display the server status as follows:
	
	  Microsoft Exchange Computer is Unavailable.
	
	If you double-click the Server Monitor object and then click the Actions tab, all
	monitored Exchange Server services display a status of Running.
	
	CAUSE
	=====
	
	This behavior may occur if the Microsoft Exchange System Attendant service is
	running under the security context of the System account.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Services.
	
	2. Locate the Microsoft Exchange System Attendant service, and then click
	  Startup.
	
	3. Click This Account, and then specify the correct Exchange Server service
	  account and password.
	
	4. Stop and then restart the System Attendant service.
	
	WARNING: If you stop the System Attendant service, this also stops all Exchange
	Server services that are running on the server. You may want to do this during a
	scheduled maintenance period or after business hours to avoid interruption of
	messaging service.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
