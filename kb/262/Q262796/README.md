---
layout: page
title: "Q262796: XADM: Unable to Log On When Running Replication Configurator"
permalink: /kb/262/Q262796/
---

## Q262796: XADM: Unable to Log On When Running Replication Configurator

{% raw %}

	Article: Q262796
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft Exchange Replication Configurator (Exscfg.exe)
	version 5.5.2650, you may receive the following error message:
	
	  Unable to logon to local machine using NT account information
	
	You may receive this error message on a Microsoft Windows NT 4.0 domain
	controller with Service Pack 6a and on Windows 2000. You may receive this error
	message when you attempt to log on to the publishing server from the Session
	Site List dialog box in the Exchange Replication Configurator.
	
	CAUSE
	=====
	
	This behavior occurs because Exscfg.exe is unable to connect to the local SAM
	database when Exchange Replication Configurator is installed on a domain
	controller.
	
	RESOLUTION
	==========
	
	To resolve this behavior, the replication service account needs to be in the
	local administrators group for Exscfg.exe to properly validate the service
	accounts credentials.
	
	To do this, run Exscfg.exe on a Windows NT 4.0 stand-alone server or on a Windows
	2000 server without Active Directory.
	
	MORE INFORMATION
	================
	
	No information regarding this error is logged in the server's Application Log.
	Exscfg.exe, if configured for logging, does not record any information on this
	error.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
