---
layout: page
title: "Q158014: XCLN: Seven Habits Commands Not Available on Tools Menu"
permalink: /kb/158/Q158014/
---

## Q158014: XCLN: Seven Habits Commands Not Available on Tools Menu

{% raw %}

	Article: Q158014
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0; winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	7.00
	WINDOWS
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, version 7.0 
	- the operating system: Microsoft Windows NT, versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	If you are logged on to a Microsoft Windows NT domain account that is different
	from the account you were logged on to when you installed Microsoft Schedule+,
	you will not be able to access the Seven Habits Tools or Seven Habits Quick
	Start commands on the Tools menu or the Seven Habits Help Topics command on the
	Help menu. You will also not have access to the Intellilink command on the
	Export or Import submenus on the File menu.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows NT. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the To Save a Registry Key
	and To Restore a Registry Key Help topics in Registry Editor (Regedt32.exe).
	Note that you should make a backup copy of the registry files (System.dat and
	User.dat) before you edit the registry.
	
	To make the Seven Habits commands and the Intellilink command available to the
	Windows NT user account, use the following steps:
	
	1. Click the Windows Start menu, and then click Shut Down.
	
	2. Click to select "Close all programs and log on as a different user."
	
	3. Log on using the account from which you installed Schedule+.
	
	4. Click the Windows Start button, and then click Run.
	
	5. In the Open box, type "regedt32" (without the quotation marks), and then
	  click OK.
	
	6. Select the following Registry key:
	
	HKEY_CURRENT_USER\Software\Microsoft\Schedule+
	
	7. On the Registry menu, click Save Key.
	
	8. In the Save Key dialog box, type a file name for the registry file, and then
	  click Save.
	
	9. Click the Windows Start menu, and then click Shut Down.
	
	10. Click to select "Close all programs and log on as a different user."
	
	11. Log on to the account from which you were having problems.
	
	12. Click the Windows Start button, and then click Run.
	
	13. In the Open box, type "regedt32" (without the quotation marks), and then
	  click OK.
	
	14. Select the following Registry key:
	
	HKEY_CURRENT_USER\Software\Microsoft\Schedule+
	
	15. On the Registry menu, click Restore.
	
	16. In the Restore Key dialog box, select the file you created in step 8, and
	  then click Open.
	
	The registry file you created in step 8 is copied to the current registry file.
	When you run Schedule+, the Seven Habits commands and the Intellilink command
	will be available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbOSWinNT400 kbOSWinNT351 kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbOSWinNTSearch
	Version           : WINDOWS:7.0; winnt:3.51,4.0
	
	=============================================================================
	

{% endraw %}
