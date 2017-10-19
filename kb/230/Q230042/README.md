---
layout: page
title: "Q230042: XADM: How to Make Mailbox Cleanup Agent a Dependant Service"
permalink: /kb/230/Q230042/
---

## Q230042: XADM: How to Make Mailbox Cleanup Agent a Dependant Service

	Article: Q230042
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Exchange Server, version 5.5 Service Packs 1, 2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Mailbox Cleanup Agent (MBClean) installs as a manually starting service. If it
	is set as an automatically starting service, it may fail to start during reboot
	because the Microsoft Exchange information store service has not started. This
	is because MBClean has no dependencies set and attempts to start before the
	Microsoft Exchange information store service.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To set the MBClean service as a dependant service on the information store
	service, add the following registry entry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeMCA
	
	  Value: DependOnService
	  DataType: REG_MULTI_SZ
	  Data: MSExchangeIS
	
	This will make the MBClean service dependant on the Microsoft Exchange
	information store service, forcing the MBClean service to wait for the
	information store service to start before starting itself.
	
	Additional query words: MCA
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword8 kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
