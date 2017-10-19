---
layout: page
title: "Q142395: CommandButton FontSize Can Affect Button Size"
permalink: /kb/142/Q142395/
---

## Q142395: CommandButton FontSize Can Affect Button Size

	Article: Q142395
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The physical size of a Microsoft Visual FoxPro command button is based on the
	FontSize property of that command button when AutoSize is set to True.
	
	MORE INFORMATION
	================
	
	The size of a command button that contains only a picture may be affected by the
	FontSize property of that CommandButton if the AutoSize property is set to
	true.
	
	Steps to Demonstrate Behavior
	-----------------------------
	
	1. Add a command button to a form.
	
	2. Change the Picture property to a valid bitmap so the command button displays
	  a picture.
	
	3. Select the Caption property and press the DELETE key to remove the caption.
	
	4. Set the AutoSize property of the command button to True (.T.).
	
	5. Change the FontSize property of the command button and notice the affect on
	  the command button.
	
	6. Set the AutoSize property to False (.F.).
	
	7. Adjust the FontSize property to size your button appropriately.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
