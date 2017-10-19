---
layout: page
title: "Q130657: HOWTO: Change the Font of Menu Items"
permalink: /kb/130/Q130657/
---

## Q130657: HOWTO: Change the Font of Menu Items

	Article: Q130657
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbvfp300 kbvfp500 kbvfp600
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To change the font for a menu item (for example, the Open command under File),
	add a SKIP FOR clause with the appropriate font information. The font for an
	menu pad (for example, File) cannot be changed through the Menu Designer.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	To change the font of a menu item, follow these steps:
	
	1. Open the menu designer, and select Quick Menu under Menu.
	
	2. In the Prompt column, click a menu item (for example, Open) under File.
	
	3. Press the Options button to display the Prompt Options dialog box.
	
	4. Select the Skip For box to display the Expression Builder.
	
	5. In the Skip For box, type the following:
	
	  " .f. FONT "Courier New", 14 style "BI" " (without the quotation marks)
	
	6. Choose OK twice to return to the Menu Designer.
	
	7. Choose Generate under Menu, and run the menu.
	
	Now the Open choice in the File menu is much larger and displays bold italic.
	
	WARNING: This function is undocumented, so it may be changed or omitted without
	notice from future releases of Visual FoxPro.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
