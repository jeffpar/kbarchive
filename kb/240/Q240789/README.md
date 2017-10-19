---
layout: page
title: "Q240789: XADM: Directory Service Does Not Start with Error -1911"
permalink: /kb/240/Q240789/
---

## Q240789: XADM: Directory Service Does Not Start with Error -1911

	Article: Q240789
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows NT 4.0 
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Exchange Server directory service may not start, and the following events
	may be logged:
	
	  Source: MSExchangeDS
	  Event ID: 1166
	  Description: "Error -1911 has occurred. Internal ID 2030148"
	
	  Source: MSExchangeDS
	  Event ID: 1002
	  Description: "The MS Exchange database EDB could not be initialized and
	  returned error -1911"
	
	CAUSE
	=====
	
	This issue can occur if one or more dynamic-link library (DLL) files that are
	associated with the operating system are damaged, missing, or modified.
	
	RESOLUTION
	==========
	
	To resolve this issue, reapply the current service pack for the operating system
	and any fixes that were previously installed.
	
	Additional query words: 0x1EFA44, ERD, 0xFFFFF889, JET_errEntryPointNotFound, 4294965385
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbWinNTsearch kbWinNTSsearch kbExchangeSearch kbExchange550 kbExchange400 kbZNotKeyword2 kbGraph500
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
