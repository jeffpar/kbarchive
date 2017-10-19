---
layout: page
title: "Q104056: DEFINE WINDOW Syntax and &quot;Position Off Screen&quot; Error"
permalink: /kb/104/Q104056/
---

## Q104056: DEFINE WINDOW Syntax and &quot;Position Off Screen&quot; Error

	Article: Q104056
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:1.2,2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	- Microsoft FoxPro for MS-DOS, versions 1.2, 2.0, 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The DEFINE WINDOW clause can use either the FROM ... TO syntax or the AT ...
	SIZE syntax to dimension the window.
	
	AT ... SIZE sizes the window according to the font of the defined window itself.
	
	FROM ... TO sizes the window according to the font of the window if there is not
	an explicit FONT clause on the DEFINE WINDOW command; FROM ... TO with an
	explicit FONT clause sizes the window according to the font of the screen or
	parent window.
	
	MORE INFORMATION
	================
	
	DEFINE WINDOW <window name> FROM <row1>,<col1> TO
	<row2>,<col2> uses the font of the screen or parent window to locate
	the upper/left corner (row1,col1). It then uses "foxfont",9 (the default font of
	a window) to position the lower/right corner (row2,col2). The same amount of
	information can be placed in the window as is possible in FoxPro for MS-DOS.
	
	If a FONT clause is included in the DEFINE WINDOW ... FROM ... TO command, the
	command uses the font of the screen or parent window to locate the lower/right
	corner (row2,col2). This behavior ensures that the dimensions of the window
	relate to other objects on the screen and other windows in the same way that
	they do in FoxPro for MS-DOS.
	
	DEFINE WINDOW <window name> AT <row1>,<col1> SIZE
	<row2>,<col2> also uses the font of the screen or parent window to
	locate the upper/left corner of the window (row1,col1). It always uses the font
	of the defined window to position the lower/right corner (row2,col2). This
	behavior ensures that the same amount of information can always be placed in the
	window regardless of its font.
	
	Potential Problems
	------------------
	
	When you are using the DEFINE WINDOW ... FROM ... TO syntax, if the window font
	is smaller than the screen font/parent window font, you may receive "position
	off screen" errors in code that appears to be correct. Remember that when
	writing to the window you always use the window font. If the window is sized
	according to the font of the parent window/screen and that font is smaller,
	there will be fewer usable rows and columns than you might expect.
	
	Platform Differences
	--------------------
	
	In FoxPro for Windows, the four corners of the window will be at the upper/left
	corners of the row/column coordinates. This is slightly different from FoxPro
	for MS-DOS, which uses the line-drawing characters and bisects the row/column
	coordinate.
	
	The window borders do not take up a row/column of their own as they do in FoxPro
	for MS-DOS.
	
	Additional query words: VFoxWin FoxDos FoxWin POSITION OFF SCREEN FROM TO AT SIZE
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : MS-DOS:1.2,2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
