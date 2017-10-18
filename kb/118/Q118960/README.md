---
layout: page
title: "Q118960: Cannot Change Fonts for Windowed MS-DOS-Based Applications"
permalink: kb/118/Q118960/
---

## Q118960: Cannot Change Fonts for Windowed MS-DOS-Based Applications

	Article: Q118960
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changing the displayed font in an MS-DOS window to a TrueType font does not
	change the font on the screen.
	
	CAUSE
	=====
	
	Some MS-DOS-based applications run in graphics mode but display textual
	information, making it appear that you are running in text mode. When
	applications are in graphics mode, the font cannot be changed because graphical
	applications manage fonts directly.
	
	WORKAROUND
	==========
	
	- If the MS-DOS-based application supports text mode, run it in text mode.
	  Consult the application's documentation to see if this is possible.
	
	  -or-
	
	- Press ALT+ENTER to run the MS-DOS-based application in full-screen mode.
	
	MORE INFORMATION
	================
	
	There are several different methods you can use to change the font within an
	MS-DOS window. The following is one method:
	
	1. In the MS-DOS window, press ALT+SPACEBAR.
	
	2. On the Control menu, click Properties, then click the Font tab.
	
	3. Under Available Fonts, click Both Bitmap & TrueType.
	
	4. Click the Font size that you want to be displayed.
	
	  NOTE: TrueType fonts are designated with "TT." Fonts without "TT" are bitmap
	  fonts.
	
	Additional query words: true type true-type ttf msdos virtual machine vm wwt
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
