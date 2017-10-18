---
layout: page
title: "Q317212: &quot;Error 718&quot; Err Msg While Waiting For Response From NAC"
permalink: kb/317/Q317212/
---

## Q317212: &quot;Error 718&quot; Err Msg While Waiting For Response From NAC

	Article: Q317212
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you send a request through Network Access Server (NAC) from a Windows
	NT-based computer, you may receive the following error message:
	
	  Error 718 - Timeout while waiting for valid response from remote peer
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, increase the PPP Maximum Configure and Failure Timeout
	values in the registry. To do this, follow these steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and then select the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\RasMan\PPP:MaxConfigure
	
	3. On the Edit menu, click Modify, and then type "20" (without the quotation
	  marks) in the Value Data field. Make sure that Hexadecimal is selected under
	  Base.
	
	4. Click OK.
	
	5. Locate and then select the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\RasMan\PPP:MaxFailure
	
	6. On the Edit menu, click Modify, and then type "20" (without the quotation
	  marks) in the Value Data field. Make sure that Hexadecimal is selected under
	  Base.
	
	7. Click OK.
	
	8. Quit Registry Editor.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
