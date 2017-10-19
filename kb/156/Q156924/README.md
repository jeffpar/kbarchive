---
layout: page
title: "Q156924: PRB: Menu with Internal Names in SDI Form Changes System Menu"
permalink: /kb/156/Q156924/
---

## Q156924: PRB: Menu with Internal Names in SDI Form Changes System Menu

	Article: Q156924
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a single-document interface (SDI), or Top-Level, form is run with its own
	menu, which uses Visual FoxPro's internal menu names, any modifications made to
	the menu in the SDI form also change the corresponding pop-up or pad in the
	Visual FoxPro system menu.
	
	WORKAROUND
	==========
	
	Issue the following command after the SDI form is closed:
	
	     SET SYSMENU TO DEFAULT
	
	  -or-
	
	Do not use internal menu names.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	This behavior occurs because there is only one System menu. If the menu code
	used in your SDI form is doing an explicit DEFINE POPUP _mfile, which redefines
	the File menu--a Quick menu does this--the definition supersedes any existing
	definition of the File menu, regardless of whether the System menu appears in an
	SDI form or the Visual FoxPro desktop. In Visual FoxPro version 5.0, you can use
	System menus in SDI forms as well as on the Visual FoxPro desktop. If internal
	System menu names are used in a menu definition, the system menu changes,
	regardless of where it appears, after that menu definition becomes effective.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form called "Test" (without the quotation marks).
	
	2. Set the form's ShowWindow property to 2 in the Form Designer Property window.
	
	3. In the Init method of the form, add the following code:
	
	        DO TESTMENU.MPR WITH This, .T.
	
	4. Create a new menu. Make it a Menu rather than a Shortcut.
	
	5. On the Menu menu, click Quick Menu to create a default quick menu.
	
	6. On the View menu, click General Options. In the General Options dialog box,
	  click the Top-Level Form check box, then OK.
	
	7. In the Menu Designer, click the File prompt, then the Edit button.
	
	8. With New under Prompt selected, click on the Result drop-down list. Click
	  Command. Click Yes in the Delete Bar Number dialog box.
	
	9. Tab to the empty text box to the right of the Result box, type the following,
	  then press enter:
	
	        =MESSAGEBOX('From SDI Menu',0)
	
	10. On the Menu menu, click Generate. Save the menu as "Testmenu" (without the
	  quotation marks), then select the Generate button to generate the default
	  .mpr file.
	
	11. Run the Test form. On the SDI form, click File then New from the menu. The
	  message box appears; click OK to close it.
	
	12. Click the Close button [X] in the upper right corner of the form under
	  Windows 95 or NT 4.0, or select Alt+F4 or Close from the control menu to
	  close the SDI form.
	
	13. On the File menu, click New. The message box again appears. Typing "SET
	  SYSMENU TO DEFAULT" (without the quotation marks) in the Command window
	  restores the default menu functionality.
	
	NOTES
	-----
	
	- Often, the SDI form is the main window in your application. In this scenario,
	  since the Visual FoxPro desktop is hidden, it makes no difference how the
	  menu in the Visual FoxPro desktop appears. You can add a SET SYSMENU TO
	  DEFAULT command in the Destroy() or Unload() methods of your form to reset
	  the System menu when you exit your SDI form or application. This allows the
	  menu to appear as expected when you return to the Visual FoxPro development
	  environment.
	
	- There may be other situations where you wish to simultaneously have an SDI
	  form or forms and the Visual FoxPro desktop open in your application with
	  different menus. In this case, you can rename the menu names to something
	  other than the FoxPro internal menu names.
	
	Use the following steps to incorporate this change into the original example
	above:
	
	1. Open Testmenu in the Menu Designer.
	
	2. In the Menu Designer, click the File prompt, then the Edit button.
	
	3. On the View menu, click Menu.
	
	4. In the Menu Options dialog box, change the contents of the Name text box from
	  _mfile to myfilemenu.
	
	5. On the Menu menu, click Generate. Click Yes to save the changes, then click
	  the Generate button, and click Yes to overwrite the old version of the .mpr
	  file.
	
	6. Repeat steps 11 through 13 from the original example. After step 13, the New
	  File dialog box opens, rather than the message box.
	
	Likewise, you can change the menu names for all the menu names, rather than just
	_mfile, to allow customization of each.
	
	REFERENCES
	==========
	
	Visual FoxPro 5.0 Help file; search on topic: System Menu Names
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	
