---
layout: page
title: "Q184773: XADM: Public Folder Doesn't Follow Replication Schedule"
permalink: kb/184/Q184773/
---

## Q184773: XADM: Public Folder Doesn't Follow Replication Schedule

	Article: Q184773
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	
	SYMPTOMS
	========
	
	Public folder replication of certain public folders may not be following the
	replication schedule for all public folders.
	
	CAUSE
	=====
	
	This problem can occur if you have the correct public folder replication
	schedule set in the properties of the public information store, while a
	different replication schedule exists on a specific public folder.
	
	The replication schedule on a specific public folder overrides the global
	replication schedule on the properties of the public information store.
	
	RESOLUTION
	==========
	
	To resolve this problem, be sure to check the properties of the individual
	public folder that is being replicated.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
