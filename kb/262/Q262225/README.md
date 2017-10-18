---
layout: page
title: "Q262225: XADM: Unable to Limit Logons When You Use the Exmerge Utility"
permalink: kb/262/Q262225/
---

## Q262225: XADM: Unable to Limit Logons When You Use the Exmerge Utility

	Article: Q262225
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 19-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Exmerge utility, you must start the information store. This may
	cause a problem because you may want to prevent users from accessing their
	mailboxes while you run this utility.
	
	One solution that has been posed is to edit the registry to limit users from
	logging on to the information store. When you edit the registry, you can allow a
	specific account to log on to the Exchange Server computer (such as the Site
	Service account) but you cannot run the Exmerge utility.
	
	After you edit the registry and the Exmerge utility attempts to access the
	information store to display a list of the users on the local server, you
	receive an error message that says the information store cannot be accessed and
	that a user with administrator rights to the private information store must be
	used.
	
	WORKAROUND
	==========
	
	To work around this issue, log on to the Exchange Server computer as the Site
	Service account administrator, start the Exchange Administrator program, and
	then disconnect the Exchange Server computer from the network by unplugging the
	network cable while you run the Exmerge utility.
	
	Note that when you unplug the Exchange Server computer you may cause a backup in
	the queues of the other Exchange Server computers that connect to this server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a limitation of the Exmerge utility.
	
	MORE INFORMATION
	================
	
	For additional information about editing the registry to prevent users from
	logging on, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q218920 XADM: How to Prevent Logons during Move Mailbox
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Component         : Utilities,System
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
