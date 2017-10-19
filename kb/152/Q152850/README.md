---
layout: page
title: "Q152850: XADM: Local Group Permissions not Valid for Member Server"
permalink: /kb/152/Q152850/
---

## Q152850: XADM: Local Group Permissions not Valid for Member Server

	Article: Q152850
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 02-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Microsoft Exchange Server is installed on a Windows NT Member Server, not a
	Primary Domain Controller (PDC) or Backup Domain Controller (BDC), local group
	permissions do not work.
	
	
	MORE INFORMATION
	================
	
	There is no problem with local group permissions on a PDC or BDC.
	
	WORKAROUND
	==========
	
	Use Global Groups for the permissions.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
