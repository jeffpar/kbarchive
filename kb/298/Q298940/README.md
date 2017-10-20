---
layout: page
title: "Q298940: Err Msg: Won't Route Until the Admin Installs Handler"
permalink: /kb/298/Q298940/
---

## Q298940: Err Msg: Won't Route Until the Admin Installs Handler

{% raw %}

	Article: Q298940
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install the Routing Wizard, you may receive the following
	error message:
	
	  The Route Map was successfully installed but won't run until a Route Agent is
	  installed.
	
	The following error message then appears:
	
	  The handler assigned to this agent is not present on this server, your agent
	  will not run until an administrator installs it.
	
	RESOLUTION
	==========
	
	To resolve this issue, check the following issues:
	
	- Make certain that the Event Service is installed on both the server that
	  contains the user's mailbox and the server that contains the folder to be
	  routed.
	
	- Make certain that the mailbox that creates the folder to be routed has Owner
	  permissions on eventConfig_<servername>.
	
	- View the following log file to determine the status of the Event Service
	  installation:
	
	  "<drive>:\Program Files\Microsoft Exchange Routing Wizard\St5unst.log"
	  (without the quotation marks)
	
	If the Event Service is not properly installed, reinstall the Event Service from
	the Exchange Server 5.5 compact disc, and then reapply the relevant service
	pack.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
