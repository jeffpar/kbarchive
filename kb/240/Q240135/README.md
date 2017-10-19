---
layout: page
title: "Q240135: XFOR: Creating WinNT Account in Win2000 Domain Stops Migration"
permalink: /kb/240/Q240135/
---

## Q240135: XFOR: Creating WinNT Account in Win2000 Domain Stops Migration

	Article: Q240135
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 05-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server 5.5 Migration Wizard may fail to create Windows NT accounts
	after selecting a Microsoft Windows NT domain from the list of available
	domains.
	
	CAUSE
	=====
	
	The Windows NT domain you selected may be a Windows 2000 domain that has a
	two-way trust with a Windows NT 4.0 domain. The Migration wizard incorrectly
	sees this domain and performs the usual Windows NT 4.0 account creation.
	
	RESOLUTION
	==========
	
	Do not select a Windows 2000 domain when running the Exchange Server 5.5
	Migration wizard even though it is visible in the list of available Windows NT
	domains.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 5.5
	Migration Wizard.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
