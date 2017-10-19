---
layout: page
title: "Q148138: Enabling MouseKeys Feature Causes Invalid VxD Error in ENABLE2"
permalink: /kb/148/Q148138/
---

## Q148138: Enabling MouseKeys Feature Causes Invalid VxD Error in ENABLE2

	Article: Q148138
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you enable the MouseKeys feature in Windows 95, you may receive the
	following error message on a blue screen:
	
	  Invalid VxD dynamic link call from ENABLE2(01) + 00000A38 to device <mouse
	  driver name>, service 3.
	
	  Your Windows configuration is invalid. Run the Windows Setup program again to
	  correct this problem.
	
	CAUSE
	=====
	
	This problem can occur if a reference to "*Vmouse" is missing in the [386Enh]
	section of the System.ini file.
	
	RESOLUTION
	==========
	
	To correct this problem, follow these steps:
	
	1. Boot your computer to a command prompt. To do so, restart your computer,
	  press the F8 key when you see the "Starting Windows 95" message, and then
	  choose Safe Mode Command Prompt Only from the Startup menu.
	
	2. Type the following line to change to the Windows folder, and then press
	  ENTER
	
	  " cd <windows> " (without the quotation marks)
	
	  where <windows> is the Windows folder.
	
	3. Type the following line and then press ENTER:
	
	  " edit system.ini " (without the quotation marks)
	
	4. Edit the "mouse=" line in the [386Enh] section of the file. Add "*Vmouse"
	  (without the quotation marks) after the equal sign (=).
	
	5. Save the System.ini file and then quit the editor.
	
	6. Restart your computer.
	
	If the mouse does not work after you restart the computer, reinstall the mouse
	driver. To do so, follow these steps:
	
	1. Press CTRL+ESC to open the Start menu.
	
	2. Press UP ARROW until Settings is selected, press RIGHT ARROW, and then press
	  ENTER to open Control Panel.
	
	3. Use the ARROW keys to select the Mouse icon, and then press ENTER.
	
	4. Press SHIFT+TAB, and then press RIGHT ARROW until the General tab is
	  selected.
	
	5. Press TAB until the Change button is selected, and then press SPACE BAR.
	
	6. Press TAB until Show Compatible Devices is selected, and then press DOWN
	  ARROW to select Show All Devices.
	
	7. Use the ARROW keys to select the correct manufacturer in the Manufacturers
	  box, press TAB, and then use the ARROW keys to select the correct model in
	  the Models box.
	
	8. Press TAB until OK is selected, and then press SPACE BAR.
	
	9. Press TAB until the Close button is selected, and then press SPACE BAR.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
