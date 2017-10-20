---
layout: page
title: "Q175806: How to Remove IntranetWare Client for Windows NT"
permalink: /kb/175/Q175806/
---

## Q175806: How to Remove IntranetWare Client for Windows NT

{% raw %}

	Article: Q175806
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbhowto kbinfo kbArtTypeINF
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the
	"Restoring the Registry" online Help topic in Regedit.exe or the
	"Restoring a Registry Key" online Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	You may want or need to remove the Novell IntranetWare Client for Windows NT.
	
	MORE INFORMATION
	================
	
	To remove the Novell IntranetWare Client for Windows NT, perform the following
	steps:
	
	1. Click the Start button, point to Settings, click Control Panel, and then
	  double-click Network.
	
	2. Click the Services tab.
	
	3. Select Novell IntranetWare Client for Windows NT.
	
	4. Click Remove, then click OK.
	
	5. Restart your workstation or server after the client is removed.
	
	After the client has been removed, open the Control Panel Services tool and look
	for any of the following services:
	
	- Netware IPX/SPX Transport Interface
	
	- Netware Resource Manager
	
	- Novell Netware Client for Windows NT
	
	- Netware Bus Interface (stopped)
	
	- Netware LSL (stopped)
	
	- Netware ODIMAC Driver Loader (stopped)
	
	- Netware ODI Source Routing Support (stopped)
	
	- ODI Support for NDIS Protocols Driver (stopped)
	
	One or all of these entries may be present after you uninstall the IntranetWare
	client. If this is the case, use Registry Editor to remove them from the
	registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" of the online Help topic in Registry Editor (Regedit.exe) or the "Add
	and Delete Information in the Registry" and "Edit Registry Data" online Help
	topics in Regedt32.exe. Note that you should back up the registry before you
	edit it.
	
	To remove any of the above services, perform the following steps:
	
	1. Start Registry Editor (Regedt32.exe), and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CCS\SERVICES
	
	2. Locate and delete the following subkeys:
	
	  LSL
	  NetwareWorkstation
	  NWPOPUP
	  WSLPX32
	  ODILOAD
	  ODINSUP
	  ODINSUP2
	  ODISourceRouting
	  ResMgr
	
	3. Quit Registry Editor and restart your computer.
	
	Additional query words: intranetware client32 netware remove
	======================================================================
	Keywords          : kbhowto kbinfo kbArtTypeINF 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	
	=============================================================================
	

{% endraw %}
