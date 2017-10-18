---
layout: page
title: "Q282939: XFOR: Installation of Lotus Notes E-mail Address Generator Fails"
permalink: kb/282/Q282939/
---

## Q282939: XFOR: Installation of Lotus Notes E-mail Address Generator Fails

	Article: Q282939
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you run Setup for the Lotus Notes e-mail addressing component, Setup may
	fail, and you may receive the following error message:
	
	  The Organization and/or Site does not exist. Setup is exiting.
	
	CAUSE
	=====
	
	This issue can occur if an incorrect site name is included in a registry setting
	for the system attendant.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeSA\Parameters
	
	3. Double click the Site value.
	
	4. Enter the folder name of the Exchange Server site and click OK.
	
	5. Quit Registry Editor.
	
	6. Install the Lotus Notes E-mail address generator.
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          : kberrmsg exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
