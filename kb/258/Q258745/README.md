---
layout: page
title: "Q258745: XIMS: Internet Mail Service Displays SMTP Banner Slowly"
permalink: /kb/258/Q258745/
---

## Q258745: XIMS: Internet Mail Service Displays SMTP Banner Slowly

	Article: Q258745
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you make a connection to an Exchange Server computer Internet Mail Service
	on port 25, the Simple Mail Transfer Protocol (SMTP) banner may not be displayed
	quickly, which may cause certain SMTP applications to time out.
	
	CAUSE
	=====
	
	This issue can occur because Exchange Server performs a reverse lookup on all
	connections. A reverse lookup may take several seconds because of a lack of or
	incorrectly configured Domain Name System (DNS) servers.
	
	RESOLUTION
	==========
	
	To resolve this issue, increase Internet Mail Service performance by disabling
	reverse resolution. To do this, you need to edit the registry.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	If you use Regedit.exe:
	
	1. Start Registry Editor (Regedt.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIMC\Parameters
	
	3. On the Edit menu, click New DWORD Value.
	
	4. Type "DisableReverseResolve" (without the quotation marks).
	
	5. Under "Value data", type "1" (without the quotation marks).
	
	6. Quit Registry Editor.
	
	If you use Regedt32.exe:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIMC\Parameters
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: DisableReverseResolve
	  Data Type: REG_DWORD
	  Radix: Binary
	  Value: 1
	
	4. Quit Registry Editor.
	
	MORE INFORMATION
	================
	
	Reverse resolution occurs when the name of the host that delivered an incoming
	SMTP message is resolved and placed in the message header by the Internet Mail
	Service. When reverse resolution is disabled, the Internet Mail Service does not
	resolve the host name in the upper-most Received From field of the SMTP message
	header. If the address is in Internet Protocol (IP) form, it remains in IP form.
	
	Additional query words: Smart Host, IMS
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
