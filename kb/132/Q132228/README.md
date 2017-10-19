---
layout: page
title: "Q132228: Why Combobox Style Properties Have Discontinous Values"
permalink: /kb/132/Q132228/
---

## Q132228: Why Combobox Style Properties Have Discontinous Values

	Article: Q132228
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Combo box Style property presets have discontinuous numeric values.
	
	MORE INFORMATION
	================
	
	Choices are "0 - Dropdown Combo" and "2 - Dropdown List" when you might expect
	"0 - Dropdown Combo" and "1 - Dropdown List" instead.
	
	This is by design. Microsoft did this for Visual Basic compatibility. Visual
	Basic has three settings for this value. The Simple Combo, which is setting 1 in
	Visual Basic, is not available in Visual FoxPro.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Place a combo box control on a form.
	
	2. Double-click the Style property to cycle through the preset options.
	
	REFERENCES
	==========
	
	For more information about The Style Property, search for Style Property in the
	Visual FoxPro Help menu.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
