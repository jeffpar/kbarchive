---
layout: page
title: "Q166256: XFOR: Directory You Have Selected Is Not a cc:Mail Post Office"
permalink: /kb/166/Q166256/
---

## Q166256: XFOR: Directory You Have Selected Is Not a cc:Mail Post Office

	Article: Q166256
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtshoot kbusage exc5
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Migration Wizard for cc:Mail, nothing happens if you select the
	root of the cc:Mail post office, using the Browse option. If you manually type
	the path to the root in the selector box, the following error message is
	displayed:
	
	  The directory you have selected is not a cc:Mail post office.
	
	CAUSE
	=====
	
	The post office selected is a DB8 cc:Mail post office. The Exchange 5.0
	Migration Wizard does not migrate cc:Mail DB8 (version 2.x) post offices, only
	DB6 (version 6.x). Presently, there is not a true migration path from a DB8
	cc:Mail post office to Microsoft Exchange Server. Customers needing to migrate
	from DB8 post offices must upgrade to Exchange Server version 5.5.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- To migrate cc:Mail users from a DB8 post office to Exchange Server, move the
	  users to a DB6 post-office, and then perform the migration.
	
	
	Additional query words: ccmail
	
	======================================================================
	Keywords          : kberrmsg kbtshoot kbusage exc5 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	
	=============================================================================
	
