---
layout: page
title: "Q193693: Queries Return Documents That No Longer Exist"
permalink: kb/193/Q193693/
---

## Q193693: Queries Return Documents That No Longer Exist

	Article: Q193693
	Product(s): Internet Information Server
	Version(s): winnt:1.0,1.1,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server versions 1.0, 1.1, 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After you remove files, queries against Index Server still return links to the
	deleted files.
	
	CAUSE
	=====
	
	When Index Server catalogs a document, if the document has both a long filename
	and a short (8.3) filename, both filename entries are indexed. However, when you
	delete a file from the file system, only a notification to remove the short
	filename from the catalog occurs. The entries for the long filename stay in the
	catalog.
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Windows 2000 Indexing Service.
	
	WORKAROUND
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
	
	To work around this problem, change the value of
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Filesystem\DisableNTFS
	8dot3NameCreation to 1. This disables the creation of 8.3 (short) filename
	entries for long filename entries. Be aware that this may have a negative effect
	on Legacy applications.
	
	STATUS
	======
	
	This problem has been corrected in Windows 2000 Indexing Service.
	
	MORE INFORMATION
	================
	
	WARNING: Legacy clients (particularly Windows 95 SR1 and earlier) will stop
	responding when accessing a network share on the server where the
	Disablentfs8dot3namecreation registry change has been applied. For more
	information, please see the following article in the Microsoft Knowledge Base:
	
	  
	
	  Q181866 Fatal Exception Error Accessing Windows NT Share From Windows 95
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ100 kbIdxServ110 kbIdxServ200
	Version           : winnt:1.0,1.1,2.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
