---
layout: page
title: "Q249609: Unable to Index PDF Files after Upgrading to Windows 2000"
permalink: /kb/249/Q249609/
---

## Q249609: Unable to Index PDF Files after Upgrading to Windows 2000

	Article: Q249609
	Product(s): Internet Information Server
	Version(s): ; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Indexing Service 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you upgrade to Windows 2000, the Indexing Service may no longer index .pdf
	files or other files associated with a third-party filter.
	
	CAUSE
	=====
	
	The Query.dll filter shipped with the Windows 2000 Indexing Service registers
	itself differently than the old version(s) used with Index Server 2.0 or Site
	Server 3.0 Search. The new registration method can override associations in the
	registry for filters using the old registration method.
	
	WORKAROUND
	==========
	
	To work around this issue, do the following:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Stop the Indexing Service
	
	2. Start Registry Editor (Regedt32.exe).
	
	3. Locate the following key in the registry:
	
	  hkey_local_machine\system\currentcontrolset\control\contentindex
	
	4. Open DllsToRegister and remove the entry pointing to Query.dll.
	
	5. Open hkey_classes_root\.pdf and remove the PersistentHandler registry key.
	
	6. Repeat the process for all other extensions.
	
	7. Restart the Indexing Service.
	
	8. Under your catalog, find the Directories folder and right-click the directory
	  containing your data.
	
	9. Select All Tasks, and then rescan (full) to force the re-indexing of the
	  documents.
	
	This keeps the filter from rewriting its registry associations when the Indexing
	Service starts.
	
	Additional query words: ntrelease win2000index
	
	======================================================================
	Keywords          :  
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbIdxServSearch kbAudDeveloper kbWinAdvServSearch kbIdxServ100
	Version           : :; WINDOWS:
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
