---
layout: page
title: "Q199171: XFOR: Notes Custom Recipients Not Synchronized w/out Domain Name"
permalink: /kb/199/Q199171/
---

## Q199171: XFOR: Notes Custom Recipients Not Synchronized w/out Domain Name

	Article: Q199171
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5, on platform(s):
	   - the hardware: DEC Alpha 
	   - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Lotus Notes Person documents are not included in directory synchronization
	(dirsync) if the Domain field is not populated.
	
	CAUSE
	=====
	
	Dirsync does not pick up anything without a domain field.
	
	WORKAROUND
	==========
	
	Populate the Domain field on all custom recipients created on the Notes side.
	
	MORE INFORMATION
	================
	
	Release notes state
	-------------------
	
	Known Limitations
	Microsoft Exchange Connector for Lotus Notes
	When adding non-Lotus Notes users to a Lotus Notes Name and Address Book (for
	example, users with Internet, X.400, or cc:Mail addresses), you must specify a
	user name and a domain name. While Lotus Notes does not require this
	information, the connector uses it when propagating directory information to
	Microsoft Exchange Server. Specify the domain to which the connector is
	attached.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : winnt:5.5
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
