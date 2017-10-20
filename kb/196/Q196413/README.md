---
layout: page
title: "Q196413: XADM: Remove Connectors Before Running Move Server Wizard"
permalink: /kb/196/Q196413/
---

## Q196413: XADM: Remove Connectors Before Running Move Server Wizard

{% raw %}

	Article: Q196413
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Move Server Wizard does not move connectors and gateways for delivering
	messages to foreign mail systems. All third-party gateways must be removed
	before running the wizard. Also, you must remove all connectors installed on the
	server, unless you are moving the last server in a site. When you are moving the
	last server in a site, the directory replication connector and any mail
	connector that supports the directory replication connector can still be
	installed when you run the wizard.
	
	After the move, you will need to reconfigure connectors. If prompted, reinstall
	Microsoft Exchange Server 5.5 Service Pack 1 to your server. For more
	information on how the wizard handles connectors, see the section "Connectors
	and Replication" in the Move Server Wizard Help file (Mvexsrvr.hlp).
	
	MORE INFORMATION
	================
	
	NOTE: If you are moving a server from a multi-server site that has the Microsoft
	Mail Connector installed, remove the connector before installing it on another
	server in the original site. This will ensure that the Adminsch mailbox agent is
	installed on a server that is not moving.
	
	If you have directory synchronization configured with a foreign mail system, see
	"Directory Synchronization Issues" in the Move Server Wizard Help file for tasks
	that you must perform before the move.
	
	For more information on connectors and gateways, see the chapter for each
	connector or gateway in Microsoft Exchange Server Operations.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
