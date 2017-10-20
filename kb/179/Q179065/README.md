---
layout: page
title: "Q179065: XADM: Changes to Primary Windows NT Account Do Not Take Effect"
permalink: /kb/179/Q179065/
---

## Q179065: XADM: Changes to Primary Windows NT Account Do Not Take Effect

{% raw %}

	Article: Q179065
	Product(s): Microsoft Exchange
	Version(s): 5.5
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
	
	If the primary Windows NT account for a mailbox is changed, the new primary
	Windows NT account does not have immediate access to the mailbox and the
	previous primary Windows NT account still maintains access for some period of
	time.
	
	This problem may also occur after a move mailbox operation.
	
	CAUSE
	=====
	
	The information store caches information contained in the directory store and,
	by default, it re-reads it every 120 minutes. Therefore, any change to a
	directory object (for example, a primary Windows NT account change) is not
	reflected in the information store for two hours.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To have changes to directory objects picked up immediately by the information
	store, follow these steps:
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. Go to the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\Parame
	  tersSystem
	
	3. On the Edit menu, click Add Value.
	
	4. Enter Mailbox Cache Age Limit for the Value name.
	
	5. Enter REG_DWORD for the Data type.
	
	6. Enter 1 for the Data of type HEX, and then click OK.
	
	  NOTE: This registry entry is not a switch, or toggle, it is a setting. If it
	  is set to 1 the server rereads the cache every minute; if it is set to 2 the
	  server rereads the cache every 2 minutes, and so forth.
	
	7. Stop the information store service.
	
	8. Restart the information store service.
	
	The information store now updates its mailbox cache frequently by rereading the
	directory every minute.
	
	STATUS
	======
	
	In Microsoft Exchange Server 4.0 and 5.0, the information store rereads the
	directory every time there is a change to a directory object. This process was
	not optimized and did not offer the best performance. In an effort to optimize
	performance, Microsoft Exchange Server 5.5 caches the directory information and
	rereads the directory every two hours by default.
	
	Additional query words: resources ntaccount permissions delay latency latent
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
