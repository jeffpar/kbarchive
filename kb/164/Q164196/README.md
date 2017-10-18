---
layout: page
title: "Q164196: Kids Plus!: Desktop Icons do not Change with Different Users"
permalink: kb/164/Q164196/
---

## Q164196: Kids Plus!: Desktop Icons do not Change with Different Users

	Article: Q164196
	Product(s): Microsoft Home Kids Products
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbusage
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Plus! for Kids, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use desktop themes in Microsoft Plus! For Kids, the system icons (My
	Computer, Network Neighborhood, and Recycle Bin) will not change when a new user
	logs on. The default custom icons for the selected desktop theme will not change
	to the new user's preferred icons.
	
	WORKAROUND
	==========
	
	The following is a workaround for the problem:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click the Passwords icon.
	
	3. Click the User Profiles tab, verify that the "Include Start menu and program
	  groups in user settings" check box is selected. If the check box is not
	  selected, click to select it.
	
	4. Click OK or Close until you return to the Control Panel.
	
	5. Click the Start button, and then click Windows Explorer.
	
	6. From the View menu, click Options.
	
	7. On the File Types tab, select Desktop Theme File from the Registered File
	  Types list box, and then click Edit.
	
	8. In the Actions list box, select Apply Settings, and then click the Set
	  Default button.
	
	9. Click Close two times to return to Windows Explorer.
	
	10. Create a personal theme:
	  a. Click the Start button, point to Programs, Microsoft Kids, and then click
	     Desktop Themes.
	
	  b. Apply the theme that you want.
	
	  c. Click the Save As button, type a name for your Theme in the File Name box,
	     and then click Save.
	
	  NOTE: You may need to click OK to close the dialog box, and then restart the
	  Desktop Themes applet to access the Save As button. The Theme selection
	  should read, "Current Windows settings".
	
	11. Return to Windows Explorer and open the Microsoft Plus! For Kids folder. The
	  default themes folder is: \Program Files\Microsoft Kids\Plus! For
	  Kids\Themes
	
	12. Click once to select your newly created theme (.theme) file, and then from
	  the Edit menu click Copy.
	
	13. Open the \Windows\Profiles\<user name>\Start Menu\Programs\Startup
	  folder.
	
	14. Click once to select the Startup folder, and then from the Edit menu click
	  Paste Shortcut.
	
	For more information about performing these tasks in Windows, please see your
	Windows printed documentation or online Help.
	
	NOTE: This workaround may not work in conjunction with Protect It!, if Protect
	It! restrictions disable the Startup group.
	
	Each time you log on, your personal theme will be applied. Any changes you make
	during your Windows session will be saved, and they will be in effect the next
	time you log on to your computer.
	
	NOTE: If you choose to use a default Windows theme, or create a new personal
	theme, the changes you make will not be in effect the next time you log on.
	Windows will use the theme you placed in the Startup folder until you remove or
	replace it.
	
	MORE INFORMATION
	================
	
	Desktop icon registry entries are located in the Windows System.dat file, and
	the current user's icons are maintained by entries in the Windows User.dat file,
	located in the \Windows\Profiles\<user name> folder. Because the desktop
	icons are not stored as user-specific icons in the User.dat file, they are not
	changed when a new user logs on.
	
	Additional query words: kids kbmm homekids mskids kidsplus kidsplus! pack plus plus! login logon protect! protect!it protect
	
	======================================================================
	Keywords          : kbnetwork kbusage 
	Technology        : _IKkbbogus kbGamesSearch kbPlusKids kbPlusSearch
	Version           : 1.0
	Issue type        : kbprb
	
	=============================================================================
	
