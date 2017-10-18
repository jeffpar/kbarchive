---
layout: page
title: "Q174037: XFOR: OLE Objects Larger Than 1 MB Not Migrated into Exchange"
permalink: kb/174/Q174037/
---

## Q174037: XFOR: OLE Objects Larger Than 1 MB Not Migrated into Exchange

	Article: Q174037
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are migrating user data from Novell GroupWise into Microsoft Exchange,
	messages with OLE objects or links greater than 1 MB in size will not be
	migrated. Larger OLE objects (>1 MB) do not migrate at all and register an
	error in the Event Log.
	
	CAUSE
	=====
	
	The Microsoft Exchange Migration Wizard is currently unable to process OLE
	objects larger than 1 MB when they originate from Novell GroupWise.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Smaller OLE objects (<1 MB), when imported into Exchange, will act
	differently, depending on the client and the operating system you use to view
	them.
	
	
	
	Additional query words: migwiz gwise ole
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
