---
layout: page
title: "Q297267: How to Configure the Windows Exit Screen Saver Tool"
permalink: /kb/297/Q297267/
---

## Q297267: How to Configure the Windows Exit Screen Saver Tool

	Article: Q297267
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbfile kbhowto
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes the steps to configure the Windows Exit Screen Saver tool
	(Winexit.scr), which is located in the Windows NT Server Resource Kit.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The Logoff screen saver can be used with the Windows Exit Screen Saver tool to
	lock the server when a user that has logged on to the server does not use the
	server for a set period of time. This feature must be configured for every user.
	To configure a default user profile to avoid the need for individual
	configurations:
	
	1. Log on to the server as an administrator.
	
	2. Make a backup copy of the Ntuser.dat file from the Winnt\Profiles\Default
	  User folder before you make any changes on the servers.
	
	3. To avoid any permissions issues for users who are not administrators, refer
	  to the following article:
	
	  Q156677 Logoff Screen Saver Does Not Function in Windows NT
	
	4. Run Regedt32.
	
	5. Click the "HKEY_USERS on Local Machine" window.
	
	6. Click the HKEY_USERS registry key, and then click "Registry/load hive" from
	  the menu.
	
	7. Click the Ntuser.dat file that is located in the Winnt\Profiles\Default
	  User\Ntuser.dat folder.
	
	8. Enter any name (for example, temp_defaultuser) in the Key Name dialog box
	  that is displayed.
	
	9. Click and expand .default.
	
	10. Click and expand Control Panel.
	
	11. From the menu, click Edit/Add.
	
	12. Add the "Screen Saver.Logoff" key. A class value is not required.
	
	13. Change the value in HKEY_USER\Control Panel\Desktop\ScreenSaveActive to 1.
	
	14. Change the value in HKEY_USER\Control Panel\Desktop\ScreenSaverlsSecure to
	  zero (0). By default, this value is already zero (0).
	
	15. Change the value in HKEY_USER\Control Panel\Desktop\ScreenSaveTimeOut to 60.
	  This value is in seconds. You can enter any number up to 3600 seconds.
	
	16. Change the value in HKEY_USER\Control Panel\Desktop\Scrnsave.exe to the
	  value in C:\Ntreskit\Winexit.scr if you have this file in the
	  C:\Ntreskit\Winexit.scr folder on your server.
	
	17. Unload the Temp_defaultuser hive: Click the .default hive, click Registry
	  from the menu, and then click Unload Hive. The changes are saved.
	
	18. Log off the server, and then log on to the server as a normal user (for
	  example, test1) who does not have a profile.
	
	19. When the test1 profile is created, click Control Panel.
	
	20. Double-click Display, and then click the Screen Saver tab.
	
	21. Click Logoff from Screen Saver.
	
	22. Click Preview to verify that the Windows Exit Screen Saver tool
	  (Winexit.scr) has been configured for this user.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbfile kbhowto 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbhowto
	
	=============================================================================
	
