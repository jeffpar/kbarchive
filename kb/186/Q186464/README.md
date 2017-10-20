---
layout: page
title: "Q186464: &quot;Registry Service Subkey Already Exists&quot; When Adding NetBEUI"
permalink: /kb/186/Q186464/
---

## Q186464: &quot;Registry Service Subkey Already Exists&quot; When Adding NetBEUI

{% raw %}

	Article: Q186464
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	You are unable to add the NetBEUI protocol to a Windows NT computer. Instead,
	you get the following error:
	
	  Registry Service Subkey already exists.
	
	CAUSE
	=====
	
	The problem is because of corrupted registry entries. These entries can become
	corrupted by an incomplete installation.
	
	RESOLUTION
	==========
	
	To correct the problem follow the directions below:
	
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
	
	1. Back up the registry.
	
	2. Remove the following entries in the Registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CCS\Services\NBF
	  HKEY_LOCAL_MACHINE\System\CCS\Enum\Root\Legacy_NBF
	
	3. Restart the computer.
	
	4. Install NetBEUI.
	
	NOTE: Removing these additional keys requires manipulation of the rights on those
	keys. The default rights for Everyone is READ. To change the rights, log on as
	Administrator, take ownership of the keys, and then give Full Control to
	Everyone (NOTE: You may need to select Replace permission on existing subkey).
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
