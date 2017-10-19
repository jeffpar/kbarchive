---
layout: page
title: "Q156086: HOWTO: Replace a Text Field Value from a Shortcut Menu"
permalink: /kb/156/Q156086/
---

## Q156086: HOWTO: Replace a Text Field Value from a Shortcut Menu

	Article: Q156086
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbBuilder kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows you how to place the value chosen from a shortcut menu choice
	into a text field of a form.
	
	MORE INFORMATION
	================
	
	The shortcut menu available in Visual FoxPro 5.0 provides a useful method to
	display choices to a user. Once the user makes a choice from the shortcut menu,
	the code places the text string from the menu bar into the text field. Because
	the shortcut menu disappears after a selection, this technique presents the user
	with choices while saving room on the form for other objects. This technique is
	useful if you simply want to present a user with choices and do not need all the
	functionality of a list or combo box object.
	
	The steps listed below illustrate how to create a shortcut menu that appears when
	the user right-clicks a text box object:
	
	1. Create a shortcut menu with the Menu Builder.
	
	2. Add a menu bar to this menu with the prompt titled "One" (without the
	  quotation marks).
	
	3. Change the Result to Command and add the following code:
	
	        _Screen.ActiveForm.Text1.Value=PRMBAR(POPUP(),BAR())
	
	4. Add another menu bar to the menu with the prompt "Two," change the Result to
	  Command, and add the same code listed in step 3.
	
	5. Generate the menu and name it "Testmenu."
	
	6. Create a form called Test.scx with the CREATE FORM command and add a text box
	  to it.
	
	7. In the RightClick event of the text box, place the following code:
	
	        Do Testmenu.mpr
	
	8. Execute the form with the DO command, position the cursor over the text box,
	  and click the right mouse button. When the menu appears, select the bar
	  titled "One." The text box now contains the string value of the shortcut menu
	  bar.
	
	A DEFINE POPUP command actually creates the shortcut menu; therefore, several
	Visual FoxPro functions return information useful to programmers. For example,
	the PRMBAR() function returns the text string of the menu bar.
	
	The syntax of the PRMBAR() function in step 3 needs some clarification. The
	PRMBAR() function requires the menu name as its first argument. The POPUP()
	function returns the name of the currently active menu. The BAR() function
	returns an integer representing the chosen menu bar item.
	
	"Shortcut" is the default name the Menu Builder assigns to the DEFINE POPUP
	command. If you need to change the name of the menu, simply choose Menu Options
	from the View menu in the Menu Builder. After you change the name of the menu
	and generate the menu code, the POPUP() function automatically resolves the new
	name.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbBuilder kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
