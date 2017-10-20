---
layout: page
title: "Q166422: Some MicroChannel NIC Cards May Not Start On a Dual Bus System"
permalink: /kb/166/Q166422/
---

## Q166422: Some MicroChannel NIC Cards May Not Start On a Dual Bus System

{% raw %}

	Article: Q166422
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	A MicroChannel network interface card installed in an IBM 520 Server with a dual
	PCI and MicroChannel bus will not start properly and lists the following in the
	event log:
	
	  Event ID:    7000
	  Source:      Service Control Manager
	  Description: The <name of driver> service failed to start due to the
	               following error: A device attached to the system is not
	               functioning.
	
	CAUSE
	=====
	
	This may occur if the network card driver's installation routine incorrectly
	sets the BusType registry key to 5 (PCI) rather than to 3 (MicroChannel). This
	key is located in:
	
	HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\xxxy
	\Parameters
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	  BusType:REG_DWORD:value
	
	Where xxx is the driver name and y is the driver instance.
	
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Run Registry Editor (REGEDT32.EXE), find the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\xxxy\Parameters
	
	  Where xxx is the driver name and y is the driver instance.
	
	2. Select the Parameters key.
	
	3. Find and double-click the following Value Name:
	
	  Bustype:REG_DWORD:0x5
	
	4. Change the value to 0x3.
	
	5. Click OK and quit Registry Editor.
	
	6. Shutdown and restart Windows NT.
	
	Additional query words: mca
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
