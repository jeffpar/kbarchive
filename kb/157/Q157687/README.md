---
layout: page
title: "Q157687: XCLN: Switching Views on a Replicated Public Folder Fails"
permalink: /kb/157/Q157687/
---

## Q157687: XCLN: Switching Views on a Replicated Public Folder Fails

	Article: Q157687
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to change views on a Microsoft Exchange Public Folder (PF) that
	is a replica from another Microsoft Exchange Server and it contains a form that
	uses named properties, the following error message might appear:
	
	  The view could not be applied. Client operation failed. Microsoft Exchange
	  Information Store 1281 [8004005:000004FA]"
	
	CAUSE
	=====
	
	Some restrictions that have named properties fail to be loaded when the
	restriction is replicated to another Microsoft Exchange Server. The failure is
	due to the comment node in the restriction being lost that contains the mapping
	of the named properties to the ids.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange clients,
	version 4.0, listed at the beginning of this article. This problem was corrected
	in Microsoft Exchange Server 4.0 U.S. Service Pack 4. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	
