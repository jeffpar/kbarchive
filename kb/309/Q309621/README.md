---
layout: page
title: "Q309621: PRB: Index Server Cannot Query Documents Over 256 KB"
permalink: /kb/309/Q309621/
---

## Q309621: PRB: Index Server Cannot Query Documents Over 256 KB

	Article: Q309621
	Product(s): Internet Information Server
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Microsoft Index Server cannot query documents over 256 kilobytes (KB) in size
	that have unknown file name extensions.
	
	CAUSE
	=====
	
	The default limit for files with unknown file name extensions is 256 KB. This
	limit is set to prevent indexing of very large files.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	To work around this problem, follow these steps:
	
	1. Start the Registry Editor (Regedt32.exe).
	
	2. In the following registry key, set MaxFileSizeFiltered to a value larger than
	  256 KB in units of 1024 bytes:
	
	    hklm\system\currentcontrolset\control\contentindex\MaxFileSizeFiltered
	
	3. Close Registry Editor.
	
	4. Restart the Content Index Service.
	
	5. Rebuild the catalog.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : :2.0,3.0
	Issue type        : kbprb
	
	=============================================================================
	
