---
layout: page
title: "Q260538: XADM: Service Pack Unsuccessful with &quot;LODCTR DSACTRS.INI&quot; Error"
permalink: kb/260/Q260538/
---

## Q260538: XADM: Service Pack Unsuccessful with &quot;LODCTR DSACTRS.INI&quot; Error

	Article: Q260538
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
	
	Exchange Server service pack upgrade may be unsuccessful and you may receive the
	following error message:
	
	  The command LODCTR DSACTRS.INI FAILED ERROR CODE <183>
	
	You may also receive the following error message:
	
	  Processing file <path>\server.ins at or near line 153.
	  An internal component has failed.
	  Id NO. C103798a
	
	RESOLUTION
	==========
	
	To resolve this issue, perform the steps found in the following article in the
	Microsoft Knowledge Base:
	
	  Q251181 XADM: Service Pack Upgrade Is Unsuccessful with 'Lodctr Dsactrs.ini'
	  Error Message
	
	If the information provided in the preceding Microsoft Knowledge Base article
	does not resolve the problem, perform the steps in the "Workaround" section of
	this article.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this problem, follow these steps:
	
	1. Back up and then remove the following registry entries:
	
	  HEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\EDB\Peformance
	
	  HEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\ESE\Peformance
	
	  HEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeDS\Peformance
	
	  HEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\Peformance
	
	  HEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeMTA\Peformance
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC\Peformance
	
	2. Run the service pack again to complete the installation.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
