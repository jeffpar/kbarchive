---
layout: page
title: "Q176988: Programs Folder Empty in Windows NT 4.0 with System Policies"
permalink: /kb/176/Q176988/
---

## Q176988: Programs Folder Empty in Windows NT 4.0 with System Policies

{% raw %}

	Article: Q176988
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	After you implement System Policies for Windows NT 4.0, you find that your
	Programs Folder is empty or shows the wrong contents when viewed from the Start
	Menu. This may also be the case with your Startup Folder, Desktop, Start Menu,
	or Network Neighborhood folders.
	
	CAUSE
	=====
	
	The registry entry or entries that point(s) to the proper location is either
	incorrect or missing.
	
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
	
	Go to the following location in the Registry and verify the data for each of the
	following values. The default values are listed below:
	
	\HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	\Explorer\User Shell Folders
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	Name: Desktop
	Type: REG_EXPAND_SZ
	Data: %USERPROFILE%\Desktop
	
	Name: NetHood
	Type: REG_EXPAND_SZ
	Data: %USERPROFILE%\NetHood
	
	Name: Programs
	Type: REG_EXPAND_SZ
	Data: %USERPROFILE%\Start Menu\Programs
	
	Name: Start Menu
	Type: REG_EXPAND_SZ
	Data: %USERPROFILE%\Start Menu
	
	Name: Startup
	Type: REG_EXPAND_SZ
	Data: %USERPROFILE%\Start Menu\Programs\Startup
	
	MORE INFORMATION
	================
	
	If this problem persists, remove your system policy and repeat the above
	procedure.
	
	
	Additional query words: editor remove uncheck un-check clear poledit spe
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
