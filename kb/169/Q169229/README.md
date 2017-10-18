---
layout: page
title: "Q169229: How to Remove and Reinstall DHCP and Keep the DHCP Config"
permalink: kb/169/Q169229/
---

## Q169229: How to Remove and Reinstall DHCP and Keep the DHCP Config

	Article: Q169229
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is sometimes necessary to remove and then reinstall the DHCP Server service.
	This article explains how to perform this procedure and maintain your DHCP
	server settings.
	
	MORE INFORMATION
	================
	
	To ensure that the defined DHCP scope and global properties are not lost, you
	must make a backup copy of the following file before you reinstall DHCP.
	
	  %SystemRoot%\System32\Dhcp\Backup\Dhcpcfg
	
	This file contains a copy of the registry entries for the configuration of the
	DHCP server. The file is automatically updated by the DHCP Manager every time
	the DHCP server is shutdown.
	
	To restore the previous configuration with this file, perform the following
	procedure:
	
	1. Remove and reinstall the Microsoft DHCP Server service.
	
	2. Before restarting, reapply any service packs that are installed.
	
	3. Restart the server to allow the installation to finish.
	
	4. Click the Start button, point to Settings, and then click Control Panel.
	  Double-click the Services icon, and select DHCP server from the Services
	  dialog box. Click Stop, and then click Close.
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	5. Start Registry Editor (Regedt32.exe) and find the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \DHCP Server\Configuration
	
	6. Select the Configuration key, then from the Registry menu, click Restore.
	  Type the path to the backup copy of the Dhcpcfg file.
	
	7. Click Yes at the warning message dialog box.
	
	8. Exit Registry Editor.
	
	9. Click the Start button, point to Settings, and then click Control Panel.
	  Double-click the Services icon, and then select DHCP Server in the Services
	  dialog box. Click Start, and then click Close.
	
	The previously defined DHCP properties should now be in place. You may then need
	to reconcile the database information using the steps outlined in the Reconcile
	DHCP Information section in the following article in the Microsoft Knowledge
	base:
	
	  Q173396 How to Restore a Corrupt DHCP Database File
	
	Additional query words: tcp ip tcpip
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
