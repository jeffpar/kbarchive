---
layout: page
title: "Q152671: XADM: Can't Create/Open the LoadSim Performance Registry Key"
permalink: kb/152/Q152671/
---

## Q152671: XADM: Can't Create/Open the LoadSim Performance Registry Key

	Article: Q152671
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
	
	The following error might be generated when you start the LoadSim application:
	
	  WARNING: Can't create/open the LoadSim Performance Registry Key.
	
	CAUSE
	=====
	
	This error will be generated if you are not logged in to the Windows NT Domain
	as a member of the Microsoft Exchange Server Administrator's group.
	
	RESOLUTION
	==========
	
	Run LoadSim when you are logged into the Windows NT Domain as a member of the
	Microsoft Exchange Server Administrator's group.
	
	MORE INFORMATION
	================
	
	The error has also been reported if you are logged in as a member of the Doman
	Admins group when Microsoft Exchange Server is running on a Windows NT Primary
	Domain Controller (PDC). You must at least belong to the Microsoft Exchange
	Server Administrator's group to successfully run Loadsim.
	
	Additional query words: LoadSim XSRVAdm Warning
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
