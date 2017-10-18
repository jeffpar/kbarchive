---
layout: page
title: "Q273073: XADM: Services Are Not Started When You Use the Restore Wizard"
permalink: kb/273/Q273073/
---

## Q273073: XADM: Services Are Not Started When You Use the Restore Wizard

	Article: Q273073
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg exc55
	Last Modified: 08-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the NTBackup tool to restore Exchange Server 5.5 databases, the
	Restore Wizard does not start the information store or the directory service
	after a restore operation even if you selected these options in the wizard.
	However, if you use the Restore tab to manually restore the information store
	and the directory service, the services start as expected.
	
	WORKAROUND
	==========
	
	To work around this issue, manually start the services after the restore
	operation is completed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange 2000 Server.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
