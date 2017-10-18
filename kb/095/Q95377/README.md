---
layout: page
title: "Q95377: Drive Popup of Prompt Files Popup Not in Same Font"
permalink: kb/095/Q95377/
---

## Q95377: Drive Popup of Prompt Files Popup Not in Same Font

	Article: Q95377
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An @ ... GET-List command from a Prompt Files popup does not display the drive
	popup in the font specified by the FONT clause.
	
	MORE INFORMATION
	================
	
	On page L3-75 of the "Language Reference" manual, the Font section of the @ ...
	GET-List command mentions that a font can be specified for a list. The list
	itself will be displayed in the font specified, but the drive popup (which is
	displayed by selecting the first option in the list) will not be displayed in
	the specified font.
	
	The following code demonstrates this behavior:
	
	     CLEAR
	     SET TALK OFF
	     STORE 1 TO mchoice
	
	     DEFINE POPUP scrollopts FROM 0, 0 PROMPT FILES LIKE *.DBF MARGIN ;
	     SCROLL
	
	     @ 2,2 GET mchoice POPUP scrollopts SIZE 8, 20 font "ROMAN",16
	
	     READ && Activate the list.
	
	The font used for the drive popup cannot be specified because it is a "true"
	popup (that is, a popup created with the DEFINE POPUP command). True popups use
	whatever font is specified as the Windows system font.
	
	The Windows system font is the font used in title bars and menu bars for all
	applications running under Windows. For more information about the Windows
	system font, please see the following article(s) in the Microsoft Knowledge
	Base:
	
	  Q97160 How to Change the Font of FoxPro for Windows Menu Bar
	
	  Q80153 How to Change Windows System Font
	
	Additional query words: VFoxWin FoxWin 2.50
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
