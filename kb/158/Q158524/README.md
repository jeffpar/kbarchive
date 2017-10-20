---
layout: page
title: "Q158524: Gateway Services for NetWare States that &quot;Subkey Already Exist&quot;"
permalink: /kb/158/Q158524/
---

## Q158524: Gateway Services for NetWare States that &quot;Subkey Already Exist&quot;

{% raw %}

	Article: Q158524
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Gateway Services for NetWare (GSNW) is removed from the list of
	Installed Network Software in the Control Panel Network tool, and all the
	registry entries are not removed properly, the following error will occur when
	trying to reinstall the software component.
	
	  The subkey already exists.
	
	RESOLUTION
	==========
	
	If the above symptoms appear, check to make sure all registry keys for GSNW have
	been removed before reinstalling the service. To correct this problem, you may
	need to modify the Registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the use of the Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe) and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\
	
	2. Remove the NWCWorkstation key and its subkeys.
	
	3. Go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	
	4. Remove the NWCWorkstation key and its subkeys.
	
	5. Go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Enum
	  \Root\Legacy_NWCWorkstation
	
	6. Remove the Legacy_NWCWorkstation key and its subkeys.
	
	NOTE: In order to delete this key and its subkeys, the user must go to To
	security and give themselves Full Control. The default is EVERYONE = READ and
	SYSTEM = FULL CONTROL. If the user does not change the rights, They will not
	have access to this key.
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	

{% endraw %}
