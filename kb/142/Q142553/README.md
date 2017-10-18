---
layout: page
title: "Q142553: How to Create an Engraved Effect on a Form"
permalink: kb/142/Q142553/
---

## Q142553: How to Create an Engraved Effect on a Form

	Article: Q142553
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Visual FoxPro, you can create an engraved effect around a command group of
	command buttons on a form. This article demonstrates how to emulate the same
	engraved look any place on a form.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	The following steps create a form with a group of command buttons on the form to
	demonstrate the engraved look. Then a single command button is placed on the
	form with a shape to achieve an identical effect.
	
	1. Create a new form, and change its BackColor property to light gray:
	  192,192,192.
	
	2. From the Format menu, clear the Snap to Grid check box.
	
	3. Place a command group on the form, and change its BackStyle property to 0 -
	  Transparent. Ensure that the SpecialEffect property is set to 0 - 3D, and the
	  BorderStyle property is set to 1 - Fixed Single. This shows the engraved
	  effect around the command group.
	
	4. Place a command button on the form.
	
	5. Place a Shape object on the form from outside the top-left corner of the
	  command button to outside the bottom-right corner of the command button. The
	  goal is to make the Shape slightly larger than the command button.
	
	6. Change the BackStyle property of the Shape to 0 - Transparent and its
	  SpecialEffect property to 0 - 3D. Ensure that the BorderColor property is
	  black: 0,0,0. Also ensure that the BorderWidth property is 1.
	
	7. With Shape1 as the selected object on the form, click Send to Back on the
	  Format menu. Because the Shape object was placed on the form after the
	  command button, the Shape is actually be on top of the command button unless
	  this step has been taken. If the Shape is left on top of the command button,
	  you wouldn't be able to click the command button when the form is run.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
