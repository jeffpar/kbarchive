---
layout: page
title: "Q167191: PRB: &quot;Variable 'X' not found&quot; in a Visual FoxPro Menu"
permalink: /kb/167/Q167191/
---

## Q167191: PRB: &quot;Variable 'X' not found&quot; in a Visual FoxPro Menu

	Article: Q167191
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbprogramming kbtshoot kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp600kbfaq
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running a menu that uses a constant defined in a header file, the error
	message "Variable 'x' not found" is returned if the #include statement is in a
	program that calls the menu.
	
	CAUSE
	=====
	
	The constant must be available at menu generation time.
	
	RESOLUTION
	==========
	
	The following steps demonstrate adding a #include statement to the menu setup
	code:
	
	1. Open your "Menu.mnx" file in design mode, where "Menu.mnx" is the name of
	  your menu file.
	
	2. Select "General Options" from the View menu.
	
	3. Select the "Setup" check box.
	
	4. Click OK.
	
	5. Add your #include statement to the setup code area, for example:
	
	        #INCLUDE "C:\VFP\Foxpro.h"
	
	6. Close the Setup Code window.
	
	7. Your variables will be available to the menu after you generate and run your
	  menu file.
	
	The above steps resolve the "Variable 'X' not found" error message described
	above.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use any constant, such as Color_Dark_Red from the "Foxpro.h" header file, in
	  your menu.
	
	2. Generate your menu.
	
	Even if header is defined correctly in your main program, you will receive
	"Variable 'Color_Dark_Red' not found" when the menu is generated.
	
	REFERENCES
	==========
	
	For more information about "Variable not found," please see the following
	article in the Microsoft Knowledge Base:
	
	  Q156672 PRB: "Variable <variable> is not found" Using #INCLUDE Files
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbtshoot kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp600 kbfaq
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
