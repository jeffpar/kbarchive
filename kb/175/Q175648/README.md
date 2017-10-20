---
layout: page
title: "Q175648: Event ID 20120: Could Not Open IPX SAP Socket..."
permalink: /kb/175/Q175648/
---

## Q175648: Event ID 20120: Could Not Open IPX SAP Socket...

{% raw %}

	Article: Q175648
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinfo kbArtTypeINF
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After installing Routing and Remote Access Service on a computer that previously
	had RAS installed, you may receive the following message in Event Viewer:
	
	  Event Id 20120 - "Could Not Open IPX SAP Socket for Exclusive Access".
	
	CAUSE
	=====
	
	This error is caused by an old Nwsap.dll being read instead of the updated RRAS
	Ipxsap.dll.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To make sure there is not some conflict between Nwsap.dll and Ipxsap.dll, perform
	the following steps:
	
	1. Back up and delete Nwsap.dll from %windir%\system32.
	
	2. Make sure that HKLM\SYS\CCS\Services\NwSapAgent\ImagePath is pointing to
	  Mprouter.exe.
	
	3. Make sure that Ipxsap.dll is present in the %windir%\system32 folder.
	======================================================================
	Keywords          : kberrmsg kbinfo kbArtTypeINF 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
