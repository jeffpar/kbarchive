---
layout: page
title: "Q139744: Desktop Themes Does Not List Available Themes"
permalink: kb/139/Q139744/
---

## Q139744: Desktop Themes Does Not List Available Themes

	Article: Q139744
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you are choosing a desktop theme, the only selections are:
	
	- Current Windows settings
	
	- Other...
	
	CAUSE
	=====
	
	The list of available desktop themes is maintained in the Program Files\
	Plus!\Themes folder by default. The problem described in this article can occur
	if this folder is missing or damaged, or if the registry key for the desktop
	themes folder is incorrectly set.
	
	RESOLUTION
	==========
	
	If the desktop themes files cannot be located or are damaged, follow these steps
	to reinstall the Desktop Themes component of Microsoft Plus!:
	
	1. In Control Panel, double-click the Add/Remove Programs icon.
	
	2. On the Install/Uninstall tab, click Microsoft Plus! For Windows 95, and then
	  click Add/Remove.
	
	3. Click Add/Remove.
	
	4. Click the Desktop Themes check box to clear it, and then click Continue.
	
	5. Repeat steps 1-3.
	
	6. Click the Desktop Themes check box to select it, and then click Continue.
	
	If you can locate the desktop themes files and they are not damaged, follow these
	steps:
	
	1. In Control Panel, double-click the Desktop Themes icon.
	
	2. In the Theme box, click Other.
	
	3. In the Look In box, specify the path for the desktop themes files.
	
	4. Apply the theme you want, and then click OK.
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	If the steps above do not work, you can specify the themes folder by modifying
	the following registry key:
	
	  HKEY_CURENT_USER\Software\Microsoft\Plus!\Themes\Current
	
	Modify the key to reflect the correct name and path for a valid theme and themes
	folder. For example,
	
	  C:\Program Files\Plus!\Themes\Sports (256 color).Theme
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Plus! version 1.0 for
	Windows 95. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The problem described in this article may occur if you install Desktop Themes,
	apply a theme, uninstall Desktop Themes, and then reinstall Desktop Themes to a
	different folder.
	
	When this occurs, the registry key points to the original themes folder instead
	of the current themes folder.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
