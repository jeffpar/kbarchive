---
layout: page
title: "Q266711: XFOR: CCMC Can't Route Mail with Headers Larger Than 4 KB"
permalink: kb/266/Q266711/
---

## Q266711: XFOR: CCMC Can't Route Mail with Headers Larger Than 4 KB

	Article: Q266711
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550sp4Fix kbExchange2000SP1Fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	A message that contains a message header that is larger than 4 kilobytes (KB),
	or 4,096 bytes, is returned by the Microsoft Exchange Connector for Lotus
	cc:Mail with a non-delivery report (NDR).
	
	CAUSE
	=====
	
	The Lotus cc:Mail Import/Export utility version 8.2x and earlier limits message
	headers to 4 KB (4,096 bytes). The Connector for cc:Mail uses the Import/Export
	utility to process messages and adheres to this limitation.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	With the Lotus cc:Mail Import/Export utility version 8.2x and later, the message
	header limit is raised to 160 KB (163,840 bytes).
	
	To make the Connector for cc:Mail recognize the new message header limitation,
	you must perform the following steps.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Ensure that the newer versions (8.2x or later) of the Lotus cc:Mail
	  Import/Export utility is in place on the Exchange Server computer that is
	  running the Connector for cc:Mail.
	
	2. Add the following registry key:
	
	  a. Start Registry Editor (Regedt32.exe).
	
	  b. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeCCMC\Parameters
	
	  c. On the Edit menu, click Add Value, and then add the following registry
	     value:
	
	  Value Name: Max Address Buffer Size
	  Data Type: REG_DWORD
	  Radix: Hexadecimal
	  Value: 28000
	
	  d. Quit Registry Editor.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: CCMC
	
	======================================================================
	Keywords          : exc55 kbExchange550sp4Fix kbExchange2000SP1Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
