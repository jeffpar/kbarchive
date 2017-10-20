---
layout: page
title: "Q165709: Error Message from Hotfix.exe: The Fix Is Already Installed"
permalink: /kb/165/Q165709/
---

## Q165709: Error Message from Hotfix.exe: The Fix Is Already Installed

{% raw %}

	Article: Q165709
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	Registry" Help topic in Regedit.exe or the "Restoring a Registry Key" Help
	topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	You may receive the following error message when you attempt to reapply a hotfix
	that is more recent than the service pack after you reapply the service pack:
	
	  Hotfix: The fix is already installed.
	  Hotfix: Internal consistency error: Invalid Tree pointer = <garbage
	  characters displayed>.
	
	If you then try to remove the hotfix by using the /R switch, you may receive the
	following error message:
	
	  Hotfix: Fix <"hotfix name"> was not removed.
	
	CAUSE
	=====
	
	Hotfix.exe checks the Hotfix key in the registry to determine if the hotfix
	being applied has already been installed.
	
	When you remove a hotfix using the /R switch, Hotfix.exe checks the New Link Date
	key stored in the Hotfix key in the registry. If the link date of the current
	file listed in the New File key is older than the date contained in the New Link
	Date key, then Hotfix.exe does not remove the file and replace it with the
	original file stored in the %SystemRoot%\Hotfix folder on your hard disk.
	
	RESOLUTION
	==========
	
	When you apply a hotfix, Hotfix.exe adds a registry value that indicates the
	hotfix has been applied. Perform the following steps to successfully reapply the
	hotfix after reapplying the service pack:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Run Registry Editor (Regedt32.exe), and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\ 
	  CurrentVersion\Hotfix
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	2. Select the hotfix key you wish to delete, and then click Delete on the Edit
	  menu.
	
	3. Reinstall all applicable hotfixes.
	
	Additional query words: hot-fix
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
