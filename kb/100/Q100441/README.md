---
layout: page
title: "Q100441: PRB: Windows Are in Different Positions When Executable Is Run"
permalink: /kb/100/Q100441/
---

## Q100441: PRB: Windows Are in Different Positions When Executable Is Run

	Article: Q100441
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a; WINDOWS:2.5x,2.6a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6a 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows appear in different positions when an executable file is run under the
	run-time version of FoxPro than when the executable file is run under the
	development version of FoxPro.
	
	CAUSE
	=====
	
	The executable file uses FoxFont for the desktop font if no font is specified.
	The desktop font affects a window's size and position. In the FoxPro development
	environment, the executable file and the application use the desktop font that
	is currently in effect. This font is determined by the font setting in the
	FOXPRO.INI file; therefore, FoxFont may not be the font in use in the
	development environment.
	
	To achieve the correct result, the following four conditions must all be true:
	
	a. You must have determined your window positions in the Screen Layout dialog
	  box in the Screen Builder.
	
	b. The default font that you have specified in the Screen Layout dialog box must
	  match your current screen font.
	
	c. The point sizes on both the development machine and the machine running the
	  executable file must be the same.
	
	d. Both machines must be using the same resolution (for example, 640 x 480 or
	  1024 x 768).
	
	RESOLUTION
	==========
	
	There are two ways to resolve this problem:
	
	- Change the desktop font in FoxPro to FoxFont before designing the screen. To
	  do this, either hold down the SHIFT key and choose Font from the Text menu,
	  or issue the following command:
	
	     MODIFY WINDOW SCREEN FONT "Foxfont",9
	
	  -or-
	
	- Specify the desktop font that will be used by the executable outside the
	  development environment by entering the following lines in the Setup code for
	  the screen set:
	
	     #SECTION 1            && places code at the beginning of the SPR
	     MODIFY WINDOW SCREEN FONT "Arial"  && specifies desktop font
	
	  You can use other fonts besides Arial. If the executable is to be run under
	  Windows 3.0, use a font available to Windows 3.0 and Windows 3.1. To verify
	  that the correct font is being used, add the line:
	
	     WAIT WINDOW WFONT(1)
	
	Additional query words: VFoxWin FoxMac FoxWin 2.50 2.50a 2.50b 2.50c 2.60 arrange exe screen position font
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbFoxPro260a kbVFP300
	Version           : MACINTOSH:2.5x,2.6a; WINDOWS:2.5x,2.6a,3.0
	
	=============================================================================
	
