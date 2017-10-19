---
layout: page
title: "Q165007: STOP: 0x0000001E After Installing IBM Domino Server"
permalink: /kb/165/Q165007/
---

## Q165007: STOP: 0x0000001E After Installing IBM Domino Server

	Article: Q165007
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	After you install IBM Domino Server (Lotus Notes) V4.5a to Windows NT computer,
	you may receive the following STOP error message during the initial restart of
	Windows NT:
	
	  STOP: 0x0000001E (C00000005, 0xA0036FC2, 0x00000000, 0x00000004)
	  K_MODE_EXCEPTION_NOT_HANDLED address 0xA0036FC2 in Win32K.sys
	
	-or-
	
	You may not be able to log on to the Windows NT Servers console.
	
	Looking at the System event log from a remote Windows NT computer reveals the
	following event log entry:
	
	  Event ID: 7000
	  Source: Service Control Manager
	  Description: Lotus Notes single logon service failed due to the
	               following error: The system cannot find the file specified.
	
	CAUSE
	=====
	
	If you chose the option to install the "Single Unified Logon" to allow for a
	single Windows NT and Lotus Notes logon it adds a new ginadll entry in the
	registry:
	
	This error message may occur if the following registry key, installed by IBM
	Domino server, exists:
	
	HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT
	\Current Version\Winlogon
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	Where the registry value is Ginadll:REG_SZ:NGINA.DLL
	
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
	
	If Windows NT is installed on a NTFS partition, install a second instance of
	Windows NT or move the Windows NT System drive to another NT computer and run
	Regedt32.exe to delete the Gina.dll entry from the failed Windows NT
	installation.
	
	If Windows NT is installed on a FAT partition, copy the SOFTWARE file located in
	the %SystemRoot%\System32\Config directory to a floppy disk and take it to
	another Windows NT computer and follow the below instructions.
	
	1. Start Registry Editor (Regedt32.exe)
	
	2. Go to the Hkey_Local_Machine window.
	
	3. Select the Hkey_local_machine key entry.
	
	4. From the Registry menu, click Load Hive.
	
	5. Browse and select the failed Windows NT installation path IE: Winnt
	
	6. Go to the System32\Config directory, and select the SOFTWARE file.
	
	  NOTE: Software file with no extension is the correct one.
	
	7. Click OK, and type a key name of test.
	
	8. Double-click the new test key and follow this path:
	
	  Microsoft\Windows NT\Current Version\Winlogon
	
	9. Remove the entry Ginadll:REG_SZ:NGINA.DLL
	
	10. Double-click the test key to collapse it.
	
	11. From registry menu, click unload hive.
	
	12. Restart into the original Windows NT installation.
	
	MORE INFORMATION
	================
	
	Lotus Notes Domino Server is manufactured by IBM Corp., a vendor independent of
	Microsoft; we make no warranty, implied of otherwise, regarding this products
	performance or reliability.
	
	Additional query words: stop 1E lotus notes
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
