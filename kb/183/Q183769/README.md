---
layout: page
title: "Q183769: Search Against Index Server May Contain Deleted Documents"
permalink: /kb/183/Q183769/
---

## Q183769: Search Against Index Server May Contain Deleted Documents

	Article: Q183769
	Product(s): Internet Information Server
	Version(s): WINNT:1.0,1.1,2.0
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
	
	When you issue a search against Index Server, you may be returned links to
	documents that have recently been deleted from the server. Clicking on these
	links will return "file not found" errors.
	
	CAUSE
	=====
	
	This problem occurs when you index and then delete files that contain long file
	names. When these files are created, Windows NT creates an 8.3 short file name
	so that older applications can access the document. When Index Server catalogs
	these files, it stores the information on both the long and short file names;
	however, when the file is deleted, it only removes the short file name
	information from the catalog. Queries that match the document still return hits
	to the long file name entry in the catalog. This entry usually is removed when a
	master merge occurs.
	
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
	
	To work around this problem, follow these steps:
	
	1. Start the Registry Editor (Regedt32.exe).
	
	2. Set the NtfsDisable8dot3NameCreation value to 1 in the following registry
	  key:
	
	     HKEY_LOCAL_MACHINESYSTEM\currentcontrolset\control\filesystem\ 
	
	3. Restart the computer.
	
	This prevents Windows NT from creating short file names for previous
	applications.
	
	STATUS
	======
	
	This problem has been corrected in Windows 2000 Indexing Service.
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ100 kbIdxServ110 kbIdxServ200
	Version           : WINNT:1.0,1.1,2.0
	Issue type        : kbprb
	
	=============================================================================
	
