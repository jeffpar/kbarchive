---
layout: page
title: "Q148992: XADM: Cannot Perform Forklift Upgrade Using UPDATE.EXE"
permalink: /kb/148/Q148992/
---

## Q148992: XADM: Cannot Perform Forklift Upgrade Using UPDATE.EXE

	Article: Q148992
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbsetup kbusage
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Service Pack installer, Update.exe, the forklift update option does not
	function (update /R). The forklift update may be required in disaster recovery
	scenarios that involve restoring databases from previous versions of Microsoft
	Exchange Server.
	
	CAUSE
	=====
	
	The /R switch was not enabled in the Service Pack installer, Update.exe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange 5.0
	Server U.S. Service Pack. For information on obtaining the service pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The forklift update allows Microsoft Exchange Server files to be copied to the
	installation drive and the appropriate registry entries to be made, but does not
	start the core Microsoft Exchange services. This allows a restore of the
	databases to take place before the services are started and the server is put
	back into production.
	
	Additional query words: crash restore
	
	======================================================================
	Keywords          : kbsetup kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	
	=============================================================================
	
