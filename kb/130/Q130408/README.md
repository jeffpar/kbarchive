---
layout: page
title: "Q130408: How to Create a Wallpaper Effect in Visual FoxPro"
permalink: /kb/130/Q130408/
---

## Q130408: How to Create a Wallpaper Effect in Visual FoxPro

	Article: Q130408
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Visual FoxPro, you can easily create a "wallpaper" effect by having a bitmap
	tiled through a user-defined window or the Visual FoxPro desktop.
	
	MORE INFORMATION
	================
	
	How to Wallpaper a Desktop or Window
	------------------------------------
	
	To wallpaper the desktop, issue this command:
	
	     _SCREEN.PICTURE = <bitmap file name>
	
	To wallpaper a user-defined window, issue commands similar to these:
	
	     DEFINE WINDOW x FROM 1,1 TO 10,10 FILL FILE <bitmap file name>
	     ACTIVATE WINDOW x
	
	To wallpaper a form or page within a form, use the picture property:
	
	     ThisForm.Picture = <bitmap file name>
	     ThisForm.PageFrame1.Page1.Picture = <bitmap file name>
	
	How to Clear the Wallpaper Pattern
	----------------------------------
	
	To clear the wallpaper from the desktop, issue these commands:
	
	     _SCREEN.PICTURE = ""
	     CLEAR
	
	A wallpaper pattern cannot be cleared from a user-defined window.
	
	To clear the wallpaper from a form or page, set the picture property to a null
	character string:
	
	     ThisForm.Picture = ""
	     ThisForm.PageFrame1.Page1 = ""
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
