---
layout: page
title: "Q242599: XADM: Can't Uninstall Exchange Server Without Access to DC"
permalink: /kb/242/Q242599/
---

## Q242599: XADM: Can't Uninstall Exchange Server Without Access to DC

{% raw %}

	Article: Q242599
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 25-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to run Setup for Microsoft Exchange Server to uninstall Exchange
	Server on a computer that does not have access to a domain controller for the
	domain that the Exchange Server service account exists in, Setup stops working
	with an DS_E_INSUFFICIENT_ACCESS_RIGHTS message.
	
	CAUSE
	=====
	
	When Setup runs, it attempts to start the Exchange Server services, some of
	which will not work without access to the service account. This may cause Setup
	to stop.
	
	RESOLUTION
	==========
	
	Re-establish connectivity to a domain controller in the domain where the service
	account exists.
	
	WORKAROUND
	==========
	
	If it is not possible to access a domain controller that can authenticate the
	service account, you can get Setup to run by following these steps:
	
	1. If any Exchange Server services are currently running, stop them.
	
	2. In Control Panel, double-click Services, and set the Microsoft Exchange
	  System Attendant service to Disabled.
	
	3. Run Setup.
	
	MORE INFORMATION
	================
	
	When Exchange Server is installed, a service account is specified in order to
	control access to the Exchange Server directory and give the Exchange Server
	services a security context to function in. It is expected and recommended that
	the server have permanent access to this account. If access to the service
	account is lost (either if it is deleted or if access to the domain is
	permanently lost), it may be necessary to re-install Exchange Server and create
	a new directory database.
	
	This article can be useful in a situation where you need to uninstall Exchange
	Server on a member server that has been moved to a different domain. It is not
	intended for situations where you need to retain the data on the Exchange Server
	computer.
	
	
	Additional query words: un-install
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
