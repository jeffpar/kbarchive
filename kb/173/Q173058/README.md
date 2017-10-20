---
layout: page
title: "Q173058: How to Disable the Welcome Screen for All Users"
permalink: /kb/173/Q173058/
---

## Q173058: How to Disable the Welcome Screen for All Users

{% raw %}

	Article: Q173058
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	The Windows NT Welcome splash screen that appears after the initial installation
	and after each new user logs on to the computer may be removed if an
	administrator wants to prevent users from seeing it.
	
	MORE INFORMATION
	================
	
	To remove the Windows NT Welcome splash screen, use one of the following
	methods:
	
	Method One
	----------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Log on as a new user, and then log off. Log on a second time and click The
	  box that says:
	
	     Show this Welcome Screen next time you start Windows NT
	
	2. Run Regedt32. Go to:
	
	     HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion
	     \Explorer\Tips
	
	  NOTE: The above registry key is one path; it has been wrapped for
	  readability.
	
	  The contents of the Tips key should look like the following:
	
	     "DisplayInitialTipWindow"=dword:00000000
	     "Show"=hex:00,00,00,00
	     "Next"=hex:03,00
	
	3. Select the key, and then select Save Key from the Registry menu. Save the key
	  as %systemroot%\Profiles\default user\welcome.
	
	4. Open the Ntuser.dat file in Regedt32.exe by doing the following:
	
	  a. Go to the HKEY_LOCAL_MACHINE window and highlight HKEY_LOCAL_MACHINE.
	
	  b. From the Registry menu, select Load Hive. If the option is unavailable,
	     log off, and then log on as an administrator.
	
	  c. In the file dialog box, select:
	
	       %Systemroot%\Profiles\Default user\Ntuser.dat
	
	  d. Enter the key name Welcome, or any name not currently in use.
	
	5. Restore the Welcome key previously saved by doing the following:
	
	  a. Select the registry key:
	
	        HKEY_CURRENT_USER\Software\Microsoft\Windows
	        \CurrentVersion\Explorer
	
	     NOTE: The above registry key is one path; it has been wrapped for
	     readability.
	
	  b. Click Add Key from the Edit menu. Enter Key Name as Tips, and leave Class
	     field blank.
	
	6. Select the newly-created Tips, and then select Restore from the Registry
	  menu. Select %Systemroot%\Profiles\Default user\welcome" from Step 3 above.
	
	7. On the Registry menu, select Unload Hive.
	
	8. Quit Regedt32.exe.
	
	All new users who log on will not be prompted with the Welcome screen. You can
	still start it, however, by clicking Start, clicking Run, and then typing in
	Welcome.
	
	Method Two
	----------
	
	1. Rename %Systemroot%\System32\Welcome.exe.
	
	NOTE: You can enable the Welcome to Windows NT splash screen again by renaming
	Welcome.exe back to Welcome.exe in %Systemroot%, logging off, and then logging
	back on.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
