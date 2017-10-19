---
layout: page
title: "Q156089: PRB: Closing SDI (Top-Level) Form Does Not Release Menu"
permalink: /kb/156/Q156089/
---

## Q156089: PRB: Closing SDI (Top-Level) Form Does Not Release Menu

	Article: Q156089
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Top-Level, or single document interface (SDI), form uses a menu, this menu
	is not automatically released when the form is released.
	
	WORKAROUND
	==========
	
	In order for a menu to be released, you must issue the RELEASE MENUS command. If
	you want the menu to be released when the form is closed, issue the command as
	follows in the Destroy method of the form:
	
	     RELEASE MENUS <menuname> EXTENDED
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	With Visual FoxPro 5.0 or 6.0, you can create forms that appear outside of (or
	in lieu of) the FoxPro desktop and that appear in the task list or on the task
	bar. These forms are called Top-Level, or SDI, forms and require setting the
	form's ShowWindow property to "2 - As Top-Level Form." You can add menus,
	toolbars, and child forms to these forms the same way you add them to the Visual
	FoxPro desktop in this and previous versions of Visual FoxPro.
	
	There is a sample SDI form in the Solution sample application that displays these
	new capabilities.
	
	Access the Solution sample by clicking Sample Applications from the Help menu in
	the Visual FoxPro 5.0 or 6.0. This opens the Sample Applications Overview help
	topic. Start the Solution sample by clicking Run, which is to the right of
	Solutions Sample under Access.
	
	You can access the SDI form example within the Solution application by clicking
	Forms to expand the folder tree in the Visual FoxPro Solutions dialog box. Then
	click "Create an SDI form" and the Run Sample button to run the form.
	Alternately, you can click the See Code button to display the form in the Form
	Designer.
	
	You must explicitly release the menu so you can reuse the menu if desired.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form called Test.
	
	2. Set its ShowWindow property to "2 - As Top-Level Form" in the Form Designer.
	
	3. In the Init method of the form, add the following code:
	
	        DO TESTMENU.MPR with THIS, .T.
	
	4. Create a new menu. Click the Menu button, rather than the Shortcut button.
	
	5. On the Menu menu, click Quick Menu to create a default quick menu.
	
	6. On the View menu, click General Options. In the General Options dialog box,
	  select the Top-Level Form check box, then click OK.
	
	7. On the Menu menu, click Generate and Save the menu as Testmenu. Click the
	  Generate button to generate the default .mpr file.
	
	8. Run the Test form. Notice that the menu appears in the form itself.
	
	9. Close the form. Issue a DISPLAY MEMORY command, and notice that the menu
	  definition remains in memory.
	
	You can place the following code in the form's Destroy method, which causes the
	menu to be released when the form is closed:
	
	     RELEASE MENUS (This.Name) EXTENDED
	
	NOTE: This technique is explained in more detail in the header of any .mpr file
	created when you generate a Top-Level menu.
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	
