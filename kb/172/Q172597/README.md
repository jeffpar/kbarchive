---
layout: page
title: "Q172597: How to Manually Uninstall the NT 4.0 Resource Kit"
permalink: /kb/172/Q172597/
---

## Q172597: How to Manually Uninstall the NT 4.0 Resource Kit

	Article: Q172597
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit ISBN 1-57231-344-7 
	- MSPRESS Microsoft Windows NT Workstation 4.0 Resource Kit ISBN 1-57231-343-9 
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit, Supplement One ISBN 1-57231-559-8 
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit, Supplement Two ISBN 1-57231-626-8 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SUMMARY
	=======
	
	This article describes the process of manually removing the Microsoft Windows NT
	4.0 Resource Kit from your computer.
	
	MORE INFORMATION
	================
	
	To manually remove the Microsoft Windows NT 4.0 Resource Kit from your computer,
	use the following process.
	
	Remove the Resource Kit Folder From the Hard Drive
	--------------------------------------------------
	
	1. Click Start, point to Programs, and then click Command Prompt.
	
	2. Type:
	
	  " RD /S /Q C:\NTRESKIT" (without the quotation marks)
	
	The default install location for the NT Resource Kit is typically C:\NTRESKIT. If
	necessary, replace C:\NTRESKIT with the correct location of the NT Resource Kit
	files.
	
	1. Close the Command prompt.
	
	Remove the Resource Kit Shortcuts
	---------------------------------
	
	1. Click Start, point to Settings, and then click Taskbar.
	
	2. Click the Start Menu Programs tab, and then click Remove.
	
	3. Click Resource Kit 4.0 and then click Remove. When asked to confirm the
	  folder deletion, click Yes.
	
	4. Close the Taskbar window.
	
	Remove the Resource Kit Entries From the Registry
	-------------------------------------------------
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows NT. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the Add and Delete
	Information in the Registry online Help topic in Registry Editor (Regedt32.exe).
	Note that you should make a backup copy of the registry files (System.dat and
	User.dat) before you edit the registry.
	
	1. Start the Registry Editor (Regedt32.exe).
	
	2. Find the following key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\MS Setup (ACME)\Table
	  Files\ResourceKit@v4.0.0.0059: REG_SZ: <Resource Kit Location>
	
	3. After selecting this key, choose Delete from the Edit menu.
	
	4. Find the following key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Reskit
	
	5. After selecting this key, choose Delete from the Edit menu.
	
	6. Find the following key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Resource Kit
	
	7. After selecting this key, choose Delete from the Edit menu.
	
	8. Find the following key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion
	  \Uninstall\Reskit
	
	9. Close the Registry Editor, and then shut down and restart your computer.
	
	Remove the Resource Kit Path References
	---------------------------------------
	
	1. Right-click My Computer, and then click Properties on the shortcut menu.
	
	2. Click the Environment Tab.
	
	3. In System Variables, click Path to select it.
	
	4. The value of the Path variable is listed in the Variable box near the bottom
	  of the window. Delete the following text string from the Path value:
	
	  "C:\reskit;C:\reskit\perl;"
	  NOTE: The above text string is the string that would appear if you chose the
	  default location during the Resource Kit installation process. If you changed
	  the installation path during the Resource Kit installation, this text string
	  may appear differently.
	
	5. Click Set, and then click OK.
	
	Additional query words: mspress press ms_press ntreskit ntrk 1-57231-344-7 1-57231-343-9 1-57231-559-8 1-57231-626-8
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword3
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
