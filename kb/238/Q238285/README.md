---
layout: page
title: "Q238285: XFOR: GroupWise Migration Fails with Event ID 4012"
permalink: kb/238/Q238285/
---

## Q238285: XFOR: GroupWise Migration Fails with Event ID 4012

	Article: Q238285
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run the Microsoft Exchange Server Migration wizard to migrate users
	from a Novell GroupWise 5.5 post office, the migration fails and the following
	event is logged in the application event log:
	
	  Event ID: 4012
	  Source: MSExchangeMig
	  Type: Error
	  Category: None
	
	  Description: The following GroupWise users have not granted sufficient access
	  rights to the migration account.
	
	In addition, you have verified that the GroupWise users to be migrated have
	granted all appropriate proxy access rights to the GroupWise migration account
	responsible for the actual migration.
	
	CAUSE
	=====
	
	The GroupWise migration account may be residing in a different GroupWise post
	office than the GroupWise users being migrated.
	
	Because of limitations with inter-post office proxying in GroupWise, this
	configuration is not supported.
	
	RESOLUTION
	==========
	
	For each GroupWise post office involved with migration, select a GroupWise
	account local to that post office.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange Server
	Migration wizard.
	
	MORE INFORMATION
	================
	
	More information on GroupWise migration can be found at:
	
	  http://www.microsoft.com/exchange/techinfo/deployment/2000/GroupWise.asp
	
	Additional query words: groupwise; proxy
	
	======================================================================
	Keywords          : exc55 
	Component         : Migration
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
