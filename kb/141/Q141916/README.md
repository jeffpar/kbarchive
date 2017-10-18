---
layout: page
title: "Q141916: Command Button Properties Differ Between Versions"
permalink: kb/141/Q141916/
---

## Q141916: Command Button Properties Differ Between Versions

	Article: Q141916
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The default values of the FontSize, FontName, and FontBold properties of command
	buttons differs between Far East versions of Visual FoxPro and other versions of
	Visual FoxPro 3.0 and 3.0b.
	
	MORE INFORMATION
	================
	
	The following table describes how the FontName, FontBold, and FontSize default
	values between Far East versions and the versions offered in other countries.
	
	Property      World     Far East
	FontName      Arial     Country specific
	FontBold      .T.       .F.
	FontSize      10        9
	
	The following code displays the FontName, FontSize, and FontBold property values
	on the Visual FoxPro desktop. The different property values between versions may
	be of concern if developing an international version of an application. These
	differences could potentially cause a display problem , such as, "Position is
	off of screen" message, if the variance is not taken into account.
	
	     tform = CreateObject("form")
	     tform.AddObject("C1","commandbutton")
	     ACTIVATE SCREEN
	     ? "Fontname of commandbutton = "
	     ?? tform.c1.FontName
	     ? "Fontsize of commandbutton = "
	     ?? tform.c1.FontSize
	     ? "Fontbold of commandbutton = "
	     ?? tform.c1.FontBold
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
