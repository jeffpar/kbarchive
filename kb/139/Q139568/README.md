---
layout: page
title: "Q139568: How to Dock a Toolbar that Is Part of a Formset"
permalink: /kb/139/Q139568/
---

## Q139568: How to Dock a Toolbar that Is Part of a Formset

	Article: Q139568
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using the Dock method of the ToolBar class, you can cause the toolbar to dock
	automatically when the formset is displayed.
	
	MORE INFORMATION
	================
	
	To have a toolbar that was added to your formset automatically dock when the
	formset is run, place code in the Init event of the toolbar to call the Dock
	method to dock the toolbar.
	
	Either of the following commands can be placed in the Init event of the toolbar
	to force the toolbar to dock at the top of the screen:
	
	     This.Dock(0)
	
	-or-
	
	     ThisFormSet.<name property of toolbar object>.Dock(0)
	
	You can also dock the toolbar to the left, right, top, bottom, or a set of
	coordinates by using a different number or set of numbers. To undock the
	toolbar, use the -1 parameter, as in this example:
	
	     This.Dock(-1)
	
	For information on how to add a toolbar to your form or formset, please refer to
	page 345 of the "Microsoft Visual FoxPro Developer's Guide," in the "Adding
	Custom Toolbars to Form Sets" section. You can also drag a toolbar that you have
	created from your project's Classes tab to the form. If the form is not a
	formset, a dialog box will appear that asks:
	
	  A formset object is required to add a form. Create one?
	
	Clicking Yes will create the necessary formset, and you will have a form with a
	toolbar.
	
	Syntax of the Dock Method
	-------------------------
	
	  ToolBar.Dock [nLocation [, X, Y]]
	
	nLocation - Specifies where the ToolBar is docked. The values for nLocation are:
	
	Value   Constant         Description
	--------------------------------------------------------------------------
	- 1    TOOL_NOTDOCKED   Undocks the Toolbar.
	  0    TOOL_TOP         Docks the toolbar at the top of the main Visual
	                        FoxPro window.
	  1    TOOL_LEFT        Docks the toolbar at the left side of the main
	                        Visual FoxPro window.
	  2    TOOL_RIGHT       Docks the toolbar at the right side of the main
	                        Visual FoxPro window.
	  3    TOOL_BOTTOM      Docks the toolbar at the bottom of the main Visual
	                        FoxPro window.
	X, Y                     Specifies the horizontal and vertical coordinates
	                        of the docked position of the toolbar.
	
	When a toolbar is docked, its title bar is hidden and its border is changed to a
	single line. The toolbar is also resized to a single row of buttons. The window
	is resized so that the toolbar does not obscure any information on the screen.
	
	For example, if the toolbar is docked at the top, the screen is moved down by the
	height of the toolbar. Use the Move method to undock a toolbar. When using the
	Move method, specify coordinates that lie outside the dock area.
	
	Additional query words: VFoxWin tool bar
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
