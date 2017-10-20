---
layout: page
title: "Q232705: XADM: Error 87 Starting Information Store after Online Restore"
permalink: /kb/232/Q232705/
---

## Q232705: XADM: Error 87 Starting Information Store after Online Restore

{% raw %}

	Article: Q232705
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After an online restore completes, the Information Store service does not start
	and generates an error 87. In the application, you also see the following
	event:
	
	  Event ID: 1081
	  Source: MSExchangeIS
	  Description: MSExchangeIS is unable to recover the database because error
	  0x00000057 occurred after a restore operation.
	
	CAUSE
	=====
	
	When the information store tries to start after an online restore, it attempts
	to read the Restore In Progress registry key to determine how to handle the
	online restore. If any portion of the Restore In Progress key is incorrect, the
	above error in the "Symptoms" section is logged.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Open the registry and verify the data paths and log numbers in the Restore In
	Progress key. This key is located at
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Service\MSExchangeIS\Restore In
	  Progress.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q169859 XADM: Event ID 1081 and Service Specific Error 0x00000057
	
	WORKAROUND
	==========
	
	The Restore In Progress key is created during the restoration from an online
	Exchange Server-aware backup. This key is created based on data retrieved during
	the backup process. You need to scrutinize incorrect entries in the Restore In
	Progress keys. After you find the cause of the discrepancy, you can either
	delete the Restore In Progress key and restore the database again, or rebuild
	the Restore In Progress key manually to reflect the correct paths and attempt to
	start the information store.
	
	
	Additional query words: RIP
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
