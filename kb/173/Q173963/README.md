---
layout: page
title: "Q173963: Index Server Queries Don't Run"
permalink: /kb/173/Q173963/
---

## Q173963: Index Server Queries Don't Run

	Article: Q173963
	Product(s): Internet Information Server
	Version(s): WinNT:1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 1.1 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	The first query run against the Microsoft Index Server functions properly and
	returns results. On all subsequent queries, the browser times out waiting for a
	reply and Index Server never finishes processing the request. In most cases no
	error messages are generated.
	
	CAUSE
	=====
	
	In the following registry value:
	
	  HKEYLocalMachine\System\CurrentControlSet\Services\W3SVC\Parameters
	
	CacheExtensions is set to 0 (zero).
	
	RESOLUTION
	==========
	
	Upgrade to Index Server version 2.0 or later.
	
	WORKAROUND
	==========
	
	To resolve this problem, modify the CacheExtensions registry value:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe or Regedit.exe as appropriate for your
	  version of Windows NT).
	
	2. Go to the following key in the registry:
	
	     HKEY_LOCAL_ LOCAL_MACHINE/System/CurrentControlSet/Services
	     /W3SVC/Parameters/CacheExtensions
	
	3. Highlight the value and select Edit, DWORD. Enter 1 in the Data field, and
	  then click OK.
	
	4. Exit Registry Editor.
	
	5. Stop and restart all Internet Information Server (IIS) services.
	
	MORE INFORMATION
	================
	
	The CacheExtensions registry value controls the caching of Internet Server APIs
	(ISAPI) extensions. If the value is set zero, the extensions are not cached in
	memory and are loaded each time the extension is called.
	
	If the CacheExtensions value is set to the default value of 1, after loading they
	are cached in memory until the computer or service is shutdown. This value
	should only be changed from the default value of 1 for debugging purposes and
	should not be set to a value of zero in a production environment.
	
	During setup Index Server will check the setting of this value. If the value is
	set to 0 (zero), the install will abort with the following error message:
	
	The Microsoft Index Server will not work with the IIS registry parameter
	CacheExtensions set to 0.
	
	A check for this value is not performed after Index Server is installed.
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ110
	Version           : WinNT:1.1
	Issue type        : kbprb
	
	=============================================================================
	
