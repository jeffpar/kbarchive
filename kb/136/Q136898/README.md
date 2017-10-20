---
layout: page
title: "Q136898: Desktop Icons Do Not Change When Different Users Log on"
permalink: /kb/136/Q136898/
---

## Q136898: Desktop Icons Do Not Change When Different Users Log on

{% raw %}

	Article: Q136898
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
	
	SYMPTOMS
	========
	
	When you log on to a Windows 95-based computer running Microsoft Plus! for
	Windows 95 on which user profiles are enabled, the system icons (the icons for
	My Computer, Network Neighborhood, and Recycle Bin) on the desktop may not
	change to the default custom icons included with the selected desktop theme.
	
	CAUSE
	=====
	
	When you are using user profiles, the registry entries for the desktop icons are
	located in the System.dat file. The current user's icons are maintained in
	entries in the User.dat file in the Windows\Profiles\ <user> folder.
	
	Because the desktop icons are not stored as user-specific icons in the User.dat
	file, they are not changed for different users.
	
	RESOLUTION
	==========
	
	To work around this problem, follow these steps:
	
	1. In Control Panel, double-click Passwords.
	
	2. On the User Profiles tab, make sure that the "Include Start menu and program
	  groups in user settings" check box is selected. If the check box does not
	  contain a check mark, click the check box to select it.
	
	3. Click OK or Close until you return to Control Panel.
	
	4. Use the right mouse button to click the Start button, and then click Explore
	  on the menu that appears.
	
	5. On the View menu, click Options.
	
	6. On the File Types tab, click Desktop Theme File in the Registered File Types
	  box, and then click Edit.
	
	7. In the Actions box, click Apply Settings, and then click Set Default.
	
	8. Click Close twice to return to Windows Explorer.
	
	9. Create a personal theme. To do so, follow these steps:
	
	  a. Click the Start button, click Help, and then double-click Microsoft Plus!
	     For Windows 95 on the Contents tab.
	
	  b. Double-click Using New Desktop Features, and then double-click Creating
	     Your Own Desktop Theme.
	
	  c. Create a personal theme using the instructions in the Help topic. Note
	     that you can select Microsoft Plus! desktop themes before you begin this
	     step.
	
	10. Return to Windows Explorer, and then open the Microsoft Plus! themes folder.
	  The default themes folder for Microsoft Plus! is:
	
	  Program Files\Plus!\Themes
	
	11. Use the right mouse button to click the theme you created, and then click
	  Copy on the menu that appears.
	
	12. Open the Windows\Profiles\<user>\Start Menu\Programs\Startup folder,
	  where <user> is your user name.
	
	13. Use the right button to click in the Startup folder, and then click Paste
	  Shortcut on the menu that appears.
	
	Your personal theme is applied each time you log on. Any changes you make will be
	saved and will be in effect the next time you log on.
	
	NOTE: If you choose to use a default Windows theme, or create a new personal
	theme, these modifications will not be in effect the next time you log in.
	Windows 95 is using the theme you placed in the Startup folder.
	
	To return to using the default themes, you must remove your personal theme
	shortcut from the Startup folder.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
