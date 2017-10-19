---
layout: page
title: "Q90740: Color Values for MessageBackColor and MessageTextColor Setting"
permalink: /kb/090/Q90740/
---

## Q90740: Color Values for MessageBackColor and MessageTextColor Setting

	Article: Q90740
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-SEP-1999
	
	3.10 3.11
	
	WINDOWS
	
	kbreadme kbdisplay
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SYSINI.WRI, which is included with Windows 3.1, contains the following
	descriptions of the [386Enh] entries for MessageBackColor and MessageColorText:
	
	- 
	
	  MessageBackColor=<vga-color-attribute>
	
	  Default:  1 (for blue)
	  Purpose:  Specifies the background color of message screens,
	            such as the screen that appears when you press
	            CTRL+ALT+DEL.
	
	  To change:  Use Notepad to edit the SYSTEM.INI file.
	
	- 
	
	  MessageTextColor=<vga-color-attribute>
	
	  Default:  F (for white)
	  Purpose:  Specifies the color used to display text in
	            message screens, such as the screen that appears
	            when you press CTRL+ALT+DEL.
	  To change:  Use Notepad to edit the SYSTEM.INI file.
	
	MORE INFORMATION
	================
	
	The values that can be used for these settings to change the colors are not
	included in the SYSINI.WRI or with the Windows Resource Kit, they are as
	follows:
	
	  0 - Black                 8 - Gray
	
	  1 - Blue                  9 - Bright Blue
	
	  2 - Green                 A - Bright Green
	
	  3 - Cyan                  B - Bright Cyan
	
	  4 - Red                   C - Bright Red
	
	  5 - Magenta               D - Bright Magenta
	
	  6 - Yellow/Brown          E - Bright Yellow
	
	  7 - White                 F - Bright White
	
	Once you change the values in the SYSTEM.INI file, you must save changes to the
	file, exit Windows and restart Windows for the changes to take effect.
	
	Additional query words: 3.10 color control alternate delete window
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
