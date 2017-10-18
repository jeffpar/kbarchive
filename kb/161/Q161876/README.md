---
layout: page
title: "Q161876: Problems After Removing Atria Clearcase Software"
permalink: kb/161/Q161876/
---

## Q161876: Problems After Removing Atria Clearcase Software

	Article: Q161876
	Product(s): Microsoft Windows NT
	Version(s): WINNT:3.5 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry  Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After you have removed Atria's Clearcase version control package, you may
	receive one of the following error messages when you log on and run certain
	Windows NT applications:
	
	  MPNotify: Cannot find libxdr.dll
	
	-or-
	
	  MPNotify: Cannot find libcmd.dll
	
	CAUSE
	=====
	
	Certain registry entries remain even after the Atria software has been removed.
	
	RESOLUTION
	==========
	
	To resolve this problem, you must make a modification to the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Open the Registry Editor and delete all entries pertaining to Atria or
	  Clearcase under the following two keys:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\MICROSOFT\WINDOWS\CurrentVersion\App Paths
	
	  -and-
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\MICROSOFT\WINDOWS\CurrentVersion\SharedDlls
	
	2. Close the Registry Editor and restart the computer.
	
	Additional query words: prodnt clear case deinstall deinstalled deinstallation uninstall uninstalled uninstallation reboot boot start install installed de un installation
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WINNT:3.5 3.51
	
	=============================================================================
	
