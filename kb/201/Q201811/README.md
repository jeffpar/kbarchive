---
layout: page
title: "Q201811: XADM: Arcserve User Account Affects Database Restore"
permalink: /kb/201/Q201811/
---

## Q201811: XADM: Arcserve User Account Affects Database Restore

	Article: Q201811
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 27-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Arcserve services under the security context of the local
	system account and restore a database to a remote Microsoft Exchange Server
	computer, you may receive the following error message when you try to restore
	the Exchange database:
	
	  HRRestoreRegister failed
	
	The HRRestoreRegister function is called to create the "Restore in Progress"
	registry key. This key is used to alter the normal Exchange Server computer
	startup routines after an online restore.
	
	If the service account that is used by the Arcserve services does not have proper
	rights to the remote registry, the function call and the restore fails.
	
	MORE INFORMATION
	================
	
	Note that you may be able to successfully back up the databases with the
	Archserve agents by using the local system account.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
