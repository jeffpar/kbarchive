---
layout: page
title: "Q84188: Idlewild May Cause Desktop Screen Saver Option Not to Save"
permalink: kb/084/Q84188/
---

## Q84188: Idlewild May Cause Desktop Screen Saver Option Not to Save

	Article: Q84188
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Idlewild is active from Microsoft Windows version 3.1, it may keep the screen
	saver selected in the Control Panel Desktop option from being saved as the
	default screen saver.
	
	When you exit Windows and then restart it, the Desktop's Screen Saver setting
	will be None, even if you saved the Screen Saver setting.
	
	WORKAROUND
	==========
	
	Disable the Idlewild screen saver application, then try to save the setting for
	the Screen Saver option in the Desktop dialog box.
	
	To disable Idlewild:
	
	1. From the Program Manager File menu, choose Run.
	
	2. On the command line, type "sysedit" (without the quotation marks) and press
	  ENTER.
	
	3. In SysEdit, open your WIN.INI file, and find the LOAD= and RUN= lines.
	
	4. Delete all references to \\WEP\IDLEWILD.EXE.
	
	5. From the File menu, choose Exit.
	
	6. When prompted to save your changes, choose Yes.
	
	
	Additional query words: 3.10 3.11 idle wild screensaver
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
