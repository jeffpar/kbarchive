---
layout: page
title: "Q153757: XCON: Dynamic RAS Connector Ignores Defined Prefix and Suffix"
permalink: kb/153/Q153757/
---

## Q153757: XCON: Dynamic RAS Connector Ignores Defined Prefix and Suffix

	Article: Q153757
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 31-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Microsoft Exchange Dynamic RAS Connector dials to create a connection,
	it will ignore any prefix or suffix defined in the Phone Number Settings entry
	in the NT RAS phone book. This causes the dial attempt to fail if the prefix or
	the suffix is required for the connection.
	
	WORKAROUND
	==========
	
	To resolve this problem, enter the required prefix or suffix on the Phone Number
	line in the phone book entry.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of Microsoft
	Exchange. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: RAS prefix suffix pbx pots
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
