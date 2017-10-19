---
layout: page
title: "Q199309: XFOR: Unable to Access Mailbox After Migration"
permalink: /kb/199/Q199309/
---

## Q199309: XFOR: Unable to Access Mailbox After Migration

	Article: Q199309
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you perform a one- or two-step migration of Microsoft Mail or Lotus
	cc:Mail using the Microsoft Exchange Migration wizard, you cannot access the
	mailboxes that were migrated from an Outlook or Exchange Client.
	
	When you try to access a mailbox, you receive the following error message:
	
	  Unable to display the folder. You do not have Permissions to log on.
	
	CAUSE
	=====
	
	The information store caches information contained in the directory store and by
	default, it re-reads it every 120 minutes. Therefore, any change to a directory
	object (for example, a primary Windows NT account change) is not reflected in
	the information store for two hours.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	To have changes to directory objects picked up immediately by the information
	store:
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. Go to the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ParametersSystem
	
	3. On the Edit menu, click Add Value.
	
	4. Type "Mailbox Cache Age Limit" (without the quotation marks) for the Value
	  name.
	
	5. Select REG_DWORD for the Data type.
	
	6. Type "1" (without the quotation marks) for the Data of type HEX, and then
	  click OK.
	
	7. Restart the Information Store service.
	
	The information store will now update its mailbox cache frequently by rereading
	the directory every minute.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q179065 XADM: Changes to Primary Windows NT Account Do Not Take Effect
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
