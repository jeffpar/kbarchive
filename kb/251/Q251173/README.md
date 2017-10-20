---
layout: page
title: "Q251173: XADM: Move Server Wizard Does Not Check For Private IS"
permalink: /kb/251/Q251173/
---

## Q251173: XADM: Move Server Wizard Does Not Check For Private IS

{% raw %}

	Article: Q251173
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp2 exc55sp3
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server Move Server Wizard may stop responding if it is
	run on a dedicated Exchange Server public folder server that the private
	information store has been removed from (by using the Exchange Server
	Administrator program).
	
	CAUSE
	=====
	
	The Move Server Wizard does not verify that a private information store exists
	before the wizard runs.
	
	WORKAROUND
	==========
	
	To work around this issue, stop the Exchange Server Information Store service,
	rename the current Mdbdata folder to Mdbdata.old, and then create a new folder
	with the name Mdbdata. This is acceptable in this case because the Move Server
	Wizard is used to change only the Dir.edb databases; the Move Server Wizard does
	not modify or move the public folders. In addition, this server does not use the
	private information store.
	
	After you create the new empty Mdbdata folder and restart the Microsoft Exchange
	Server Information Store service, Exchange Server creates a new private database
	(Priv.edb) and public database (Pub.edb), and may also create log files if
	logging is set to the same drive as the databases.
	
	MORE INFORMATION
	================
	
	Before you run the Move Server Wizard on a dedicated public folder server, make
	sure that you create a verified full online backup and use the Microsoft
	Exchange Client or Microsoft Outlook to copy the public folder contents.
	
	If the sole purpose of a server is to be a dedicated public folder server, you
	can remove the private information store from the server. The primary function
	of the Move Server Wizard is to update objects in the directory and private
	information store. If the private information store has been removed, the Move
	Server Wizard only modifies the directory database. You do not receive any error
	messages until the end of the move, when the wizard tries to start the
	information store. When Exchange Server tries to restart the information store,
	the following error message is displayed several times:
	
	  Microsoft Exchange Move Server Wizard
	  The service did not respond to the start or control request in a timely
	  fashion.
	  Microsoft Windows NT
	  ID no 0xc002041d
	
	The following error message may also be displayed:
	
	  Microsoft Exchange Move Server Wizard
	  A fatal error occurred. Exchange move server was unable to recover from this
	  error. You must restore this server from backup. Error c002041d.
	
	When you open Services in Control Panel, the Information Store service is not
	running. When you try to start the Information Store service, the following
	error message is displayed:
	
	  The Microsoft Exchange Information Store Service returned service specific
	  error 1276.
	
	The following event may also be logged in the application event log:
	
	  Event Type: Error
	  Event Source: Service Control Manager
	  Event Category: None
	  Event ID: 7024
	  Description: "The Microsoft Exchange Information Store Service returned
	  service specific error 1276."
	
	Additional query words: move server wizard public folder
	
	======================================================================
	Keywords          : exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2 kbExchange550SP3
	Version           : :5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
