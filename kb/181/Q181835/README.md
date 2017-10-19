---
layout: page
title: "Q181835: Unable to Start the Server Service"
permalink: /kb/181/Q181835/
---

## Q181835: Unable to Start the Server Service

	Article: Q181835
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you attempt to start the Server service, you may experience one of the
	following symptoms:
	
	- When you attempt to start the Server service from the Services tool in
	  Control Panel, you may receive the following error message:
	
	  Could not start the Server service on \\<Computer Name>. Error 1058: The
	  specified service is disabled and cannot be started.
	
	- When you attempt to start the Server service from a command prompt, you may
	  receive the following error message:
	
	  System error 1058 has occurred.
	  The specified service is disabled and cannot be started.
	
	- When you attempt to enable the Server service for the current hardware
	  profile, the current hardware profile may be missing from the list of
	  profiles or the Enable button may be unavailable.
	
	CAUSE
	=====
	
	This behavior can occur if you are running Windows NT on a Dell computer and
	Windows NT was preinstalled on your computer.
	
	NOTE: This behavior does not occur if you have Windows NT preinstalled on a Dell
	computer shipped from the factory that was manufactured after 4/6/99.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method:
	
	Method 1
	--------
	
	Contact Dell Computer Corp. to inquire about the availability of an update to
	address this issue. For information about how to contact Dell Computer Corp.,
	please see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q65416
	  TITLE : Hardware and Software Third-Party Vendor Contact List, A-K
	
	Method 2
	--------
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	Delete the following registry keys, and then restart Windows NT:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Enum\Root\LEGACY_BROWSER
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Enum\Root\LEGACY_LANMANSERVER
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Enum\Root\LEGACY_MESSENGER
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Enum\Root\LEGACY_SRV
	
	NOTE: To remove the keys noted in the article, you must increase security on
	"Everyone" to full control and then propagate throughout the subfolders using
	Regedt32.exe.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This issue occurs only on computers with the integrated Yamaha Sound System
	installed and is known to occur with the following computers:
	
	- Dell Dimension XPS H266
	
	- Dell Dimension XPS D300
	
	- Dell Dimension XPS R400
	
	- Dell Optiplex GX1P/T+ (P3/500)
	
	- Dell Optiplex GX1/m+ (PII/450)
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
