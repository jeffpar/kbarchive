---
layout: page
title: "Q215554: XADM: How to Change the POP3-Download Order"
permalink: /kb/215/Q215554/
---

## Q215554: XADM: How to Change the POP3-Download Order

	Article: Q215554
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbFEA exc55 EXC55SP3Fea
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Currently, there is no mechanism in Exchange Server 5.5 to control the download
	order of POP3 messages. In Exchange Server 5.0, the download order for messages
	was from old to new. In Exchange Server 5.5, the download order for messages is
	reversed and changed from new to old.
	
	MORE INFORMATION
	================
	
	This feature is available in the latest service pack for Exchange Server version
	5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this feature should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-----------------------+
	| File name  | Version  | 
	+-----------------------+
	| Gapi32.dll | 5.5.2542 | 
	+-----------------------+
	| Mdbmsg.dll | 5.5.2542 | 
	+-----------------------+
	| Store.exe  | 5.5.2542 | 
	+-----------------------+
	
	This feature was first included in Exchange Server 5.5 Service Pack 3.
	
	
	In addition to the new files noted above, the following registry changes must be
	made to enable this functionality. To make the registry changes, perform the
	following steps:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Stop the Microsoft Exchange Information Store service.
	
	2. Apply the fixed files noted above.
	
	3. Start Registry Editor (Regedt32.exe).
	
	4. Go to the following location in the registry:
	
	  HKEY_LOCAL_MACHINE\CurrentControlSet\Services\MSExchangeIS\ParametersSystem
	
	5. On the Edit menu, click Add Value.
	
	  Value Name: POP3 Compatibilty
	  Data Type: REG_DWORD
	  Value: 0x0, 0x40
	  Default: 0x0 (not in registry by default)
	
	  Description: This parameter control the download order for the POP3 messages,
	  Set this value to 0x40 and you will get the message download order of new to
	  old. Set this value to 0x0 and you will get the message download order of old
	  to new.
	
	6. Click OK, and quit Registry Editor.
	
	7. Restart the Microsoft Exchange Information Store service.
	
	Additional query words: OL OL98
	======================================================================
	Keywords          : kbFEA exc55 EXC55SP3Fea 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
