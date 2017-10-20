---
layout: page
title: "Q269431: Cannot Print with Error: The Network Name Cannot Be Found"
permalink: /kb/269/Q269431/
---

## Q269431: Cannot Print with Error: The Network Name Cannot Be Found

{% raw %}

	Article: Q269431
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to print to a printer connected to a local port, you may
	receive the following error message:
	
	  Error writing to "printer_port": for document "document_name:" The network
	  name cannot be found.
	
	CAUSE
	=====
	
	This behavior can occur when the local printer port is mapped as a network
	drive.
	
	RESOLUTION
	==========
	
	To resolve this issue, delete the relevant key in the registry.
	
	MORE INFORMATION
	================
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32).
	
	2. Navigate to the following registry location:
	
	  HKEY_CURRENT_USER\Network
	
	3. Select the printer port (LPT or COM port) that is mapped as a network drive.
	
	4. Click Edit, and then click Delete. When you are prompted to confirm deletion
	  of the registry key, click Yes.
	
	5. Quit Registry Editor, and then restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
