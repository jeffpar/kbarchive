---
layout: page
title: "Q71817: Windows Err Msg: No Fonts Installed (Control Panel)"
permalink: /kb/071/Q71817/
---

## Q71817: Windows Err Msg: No Fonts Installed (Control Panel)

	Article: Q71817
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run Microsoft Windows 3.0 with no screen fonts specified in the [FONTS]
	section of your WIN.INI file and you choose the Fonts icon in the Control Panel
	window, Windows generates the message:
	
	  No Fonts Installed
	
	If you choose OK in this dialog box, Windows the Add Font Files menu is
	displayed. When you try to add fonts, the following inaccurate error message is
	displayed:
	
	  Font Already Installed
	
	You are not allowed to add any fonts.
	
	RESOLUTION
	==========
	
	To add fonts, you must first edit the [FONTS] section of your WIN.INI file to
	contain at least one font (adding the Modern font is recommended because this
	font is installed in every Windows installation).
	
	Follow these steps:
	
	1. Using any text editor, edit the [FONTS] section of WIN.INI by adding the
	  following line:
	
	  Modern (All res)=MODERN.FON
	
	2. Exit the text editor, then use Control Panel to add fonts.
	
	3. Restart (reboot) Windows to save your changes.
	
	Additional query words: 3.00 3.00a win30 err msg errmsg winfont
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
