---
layout: page
title: "Q221422: XFOR: Incomplete Warning Event During LDAP Migration"
permalink: kb/221/Q221422/
---

## Q221422: XFOR: Incomplete Warning Event During LDAP Migration

	Article: Q221422
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a Lightweight Directory Access Protocol (LDAP) migration, you
	may receive an event similar to the following event, however, the event does not
	specify which object was skipped:
	
	  Event: 23006
	  Type: Warning
	  Source: MSExchangeMig
	  Description:
	  Error accessing data for 'LDAP://Servername' - object skipped.
	
	CAUSE
	=====
	
	To get the name of an object, the Migration Wizard has to open the object. The
	error message in this case occurs when the wizard attempts to open the object.
	Therefore, the name is not available.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Component         : Migration
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
