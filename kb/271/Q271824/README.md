---
layout: page
title: "Q271824: XADM: After Applying Service Pack Rerun Performance Optimizer"
permalink: /kb/271/Q271824/
---

## Q271824: XADM: After Applying Service Pack Rerun Performance Optimizer

	Article: Q271824
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 23-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft recommends that you run the Performance Optimizer (Perfwiz.exe) on an
	Exchange Server computer after you perform a service pack update.
	
	MORE INFORMATION
	================
	
	There are generally modifications and improvements to the Performance Optimizer
	(Perfwiz.exe) in each service pack.
	
	The Performance Optimizer is a very sophisticated tuning and balancing tool that
	you should also use in the following situations:
	
	- After every new installation of Exchange Server or upgrade of Exchange
	  Server, before you put the server into production.
	
	- After you add components (such as connectors) to a server, including
	  directory replication connectors.
	
	- When the number of users on your server, site, or organization changes
	  significantly.
	
	NOTE: Before you run the Performance Optimizer, please make sure to save any
	customized registry settings to the Microsoft Exchange Services because
	Perfwiz.exe will replace these settings.
	
	After you run Perfwiz.exe, there may be occasions when some or all of these
	settings may be imported once again into the registry for additional
	optimization of the Exchange server.
	
	Additional query words: resources Q195006 MSExchangeIS 1160 perfwiz exe
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
