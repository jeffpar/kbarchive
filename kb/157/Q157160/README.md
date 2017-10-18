---
layout: page
title: "Q157160: HOWTO: Provide Edit Menu Functions in a Top-Level Form"
permalink: kb/157/Q157160/
---

## Q157160: HOWTO: Provide Edit Menu Functions in a Top-Level Form

	Article: Q157160
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnokeyword kbvfp500 kbvfp600
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how you can provide Edit menu functionality, such as Cut,
	Copy, and Paste, to a Top-Level form without actually using a visual menu bar
	and pad on the form.
	
	If you do not include any of the System menu items, the Top-Level Form loses the
	functionality of the System menu because it runs as a "separate" application
	outside of the Visual FoxPro environment.
	
	MORE INFORMATION
	================
	
	Sometimes, you may want to create an application that does not require a main
	menu, but you want to have the ability to cut, copy, or paste in a text box or
	edit box field from within the form. In previous versions of the FoxPro, you
	need to include the Edit menu in your application. However, this is no longer
	necessary in Visual FoxPro 5.0 or later.
	
	The following example shows how you can create a form that can invoke Cut, Copy,
	or Paste functionality without having the Edit menu visible.
	
	1. Create a Quick Menu.
	
	2. Delete all the menu pads and bars that you don't need and leave only Cut,
	  Copy and Paste.
	
	3. On the View menu, click General Options. Select the Top-Level Form check box
	  in the General Options dialog box.
	
	4. Generate the menu and save it as Sdieditmenu.mnx.
	
	5. Create a form and name it Sdieditform1.scx.
	
	6. Set the ShowWindow property for the form to "2 - As Top-Level Form" in the
	  Properties window.
	
	7. Add two text boxes to the form.
	
	8. In the Init method of the form, add the following code:
	
	        * This menu defines the edit menu functions like Cut/Copy/Paste
	        DO SdiEditMenu.mpr WITH THIS, .T.
	
	        * First you run the menu, then you DEACTIVATE it.
	        * The menu definition remains in memory so the shortcut keys are
	        * available
	        DEACTIVATE MENU (THIS.Name)
	
	9. Run the form. Type something in the first text box, then press Ctrl+X to cut
	  whatever you typed in, and then press Ctrl+V to paste it in the second text
	  box.
	
	NOTE: Only menu options with shortcut keys in the Visual FoxPro system menu work
	for the above example. In this case only Cut, Copy, and Paste have shortcut
	keys.
	
	Following is another example that uses the SYS(1500) function to accomplish the
	same behavior as above. SYS(1500), a new function, allows you to call a menu bar
	function without having the menu bar available:
	
	1. Create a form, set the ShowWindow property for the form to "2 - As Top-Level
	  Form", and name it SdiEditForm2.scx.
	
	2. Add two text boxes to the form.
	
	3. In the Init method of the form, add the following code:
	
	         *Activate the Paste menu bar when CTRL+V is press.
	         ON KEY LABEL CTRL+V SYS(1500, '_MED_PASTE', '_MEDIT')
	
	         *Activate the Copy menu bar when CTRL+C is press.
	         ON KEY LABEL CTRL+C SYS(1500,'_MED_COPY','_MEDIT')
	
	         *Activate the Cut menu bar when CTRL+X is press.
	         ON KEY LABEL CTRL+X SYS(1500,'_MED_CUT','_MEDIT')
	
	4. Run the form. Type something in the first text box, then press Ctrl+X to cut
	  whatever you typed in, and then press Ctrl+V to paste it in the second text
	  box.
	
	REFERENCES
	==========
	
	For more information about using the SYS(1500) function, please see the
	following article(s) in the Microsoft Knowledge Base:
	
	  Q155847 HOWTO: Activate a System Menu Item in Visual FoxPro 5.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
