---
layout: page
title: "Q193412: PDF Files Do Not Index after Adobe Filter Is Installed"
permalink: kb/193/Q193412/
---

## Q193412: PDF Files Do Not Index after Adobe Filter Is Installed

	Article: Q193412
	Product(s): Internet Information Server
	Version(s): WINNT:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After you install the .pdf (portable document format) filter from Adobe, you may
	notice that .pdf files stop indexing after you restart Index Server or restart
	the computer.
	
	CAUSE
	=====
	
	When Index Server starts, it re-registers all the filter DLLs One of these DLLs
	has a default association with the .pdf extension and therefore registers itself
	as the filter for these files.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	To resolve this problem, follow these steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\ContentIndex
	
	3. Add the path to the Pdffilt.dll to the DLLsToRegister key. The path to the
	  .pdf filter should be added as the last entry in this key.
	
	4. Quit Registry Editor.
	
	MORE INFORMATION
	================
	
	When Index Server starts, Query.dll is re-registered (it is first in the list).
	However, Query.dll recognizes the .pdf files and associates them with the null
	filter. When you add Pdffilt.dll to the end of the registry key, it is allowed
	to re-register the .pdf files with itself.
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : WINNT:2.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
