---
layout: page
title: "Q137800: Batch Installation Over Windows 95 May Disable Network Client"
permalink: kb/137/Q137800/
---

## Q137800: Batch Installation Over Windows 95 May Disable Network Client

	Article: Q137800
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet msnets win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	If you use the Msbatch.inf batch installation file to install Windows 95 over an
	existing version of Windows 95, you may no longer be able to connect to the
	network.
	
	CAUSE
	=====
	
	If the "clients=" setting in the Msbatch.inf file is set to the correct network
	type, Setup installs the correct network client. However, Setup then detects the
	network type installed in the previous version of Windows 95, and tries to
	install the client again. Installing the client software again causes the
	corresponding registry entry to be damaged.
	
	RESOLUTION
	==========
	
	Follow these steps to correct the problem:
	
	1. Edit the registry and delete either of the following registry keys:
	
	     HKEY_LOCAL_MACHINE\Enum\Network\VREDIR (for the Microsoft Network
	     client)
	
	     -or-
	
	     HKEY_LOCAL_MACHINE\Enum\Network\NWREDIR (for the NetWare client)
	
	  For information about how to edit the registry, view the Changing Keys And
	  Values online Help topic in Registry Editor (Regedit.exe). Note that you
	  should make a backup copy of the registry files (System.dat and User.dat)
	  before you edit the registry.
	
	  WARNING: Using Registry Editor incorrectly can cause serious problems that may
	  require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	  resulting from the incorrect use of Registry Editor can be solved. Use
	  Registry Editor at your own risk.
	
	2. Without restarting your computer, double-click the Network icon in Control
	  Panel. You may receive an error message about an incomplete network setup.
	
	3. Click Add, click Client, click Add, click Microsoft, and the click the
	  appropriate network client.
	
	4. Click OK until you return to Control Panel.
	
	5. When you are prompted to restart your computer, do so.
	
	MORE INFORMATION
	================
	
	You cannot simply specify the network client type in the Msbatch.inf batch
	installation file. Windows 95 Setup detects and installs the previously
	installed client. The "clients=" line in the .inf file should contain no client
	IDs.
	
	======================================================================
	Keywords          : 3rdpartynet msnets win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
