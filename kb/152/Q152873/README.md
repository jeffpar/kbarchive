---
layout: page
title: "Q152873: XFOR: Command Line Migration Crashes With no FldOwner Entry"
permalink: /kb/152/Q152873/
---

## Q152873: XFOR: Command Line Migration Crashes With no FldOwner Entry

{% raw %}

	Article: Q152873
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a command line migration of an SFS PO, the migration utility
	will crash if there is not a FldOwner entry in the control file. This will occur
	even if shared folders are not being migrated in the control file with "Public,
	FALSE" set.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
