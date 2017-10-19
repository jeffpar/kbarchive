---
layout: page
title: "Q141804: How to Force Input to Uppercase in a Combo Box"
permalink: /kb/141/Q141804/
---

## Q141804: How to Force Input to Uppercase in a Combo Box

	Article: Q141804
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
	
	In Visual FoxPro window 3.0, no Format property is available for a combo box to
	force user input to the text box region to be in uppercase.
	
	MORE INFORMATION
	================
	
	Use the following sample code to force user input to be in upper case. Place the
	following code in the Keypress event of the combo box.
	
	      If Islower(Chr(nKeycode))
	         Nodefault
	         Keyboard Upper(Chr(nKeycode))
	      Endif
	
	Additional query words: VFoxWin all caps
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
