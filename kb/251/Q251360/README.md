---
layout: page
title: "Q251360: XFOR: No cc:Mail 8.5 Import and Export w. Connector for cc:Mail"
permalink: /kb/251/Q251360/
---

## Q251360: XFOR: No cc:Mail 8.5 Import and Export w. Connector for cc:Mail

{% raw %}

	Article: Q251360
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Connector for Lotus cc:Mail may not synchronize properly
	with Lotus cc:Mail Release 8.5.
	
	CAUSE
	=====
	
	This problem can occur because the Connector for cc:Mail does not support the
	new versions of the Import32.exe and Export32.exe programs that are included
	with cc:Mail Release 8.5.
	
	WORKAROUND
	==========
	
	To work around this problem, change following registry entries (this registry
	change has been tested with limited language platforms):
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the Import value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeCCMC\Parameters
	
	3. On the Edit menu, click REG_SZ, type "Import32.exe" (without the quotation
	  marks), and then click OK.
	
	4. Locate the Export value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeCCMC\Parameters
	
	5. On the Edit menu, click REG_SZ, type "Export32.exe" (without the quotation
	  marks), and then click OK.
	
	6. Locate the "cc:Mail Admin file path" value under the following key in the
	  registry:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeCCMC\Parameters
	
	7. On the Edit menu, click REG_SZ, type the path to Import32.exe, Export32.exe,
	  Impexp.ri, and the dynamic-link libraries (DLLs) (not the path the Exchange
	  Server Administrator program), and then click OK.
	
	8. Quit Registry Editor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
