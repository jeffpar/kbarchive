---
layout: page
title: "Q156243: PRB: Closing SDI Form with Menu Causes Objects to Shift Upward"
permalink: /kb/156/Q156243/
---

## Q156243: PRB: Closing SDI Form with Menu Causes Objects to Shift Upward

{% raw %}

	Article: Q156243
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbui kbvfp
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Single-Document Interface (SDI) or Top-Level form (form with the ShowWindow
	property set to 2 - As Top-Level Form) has a menu, releasing the form causes the
	controls contained within the form to momentarily shift upward before the form
	disappears.
	
	WORKAROUND
	==========
	
	Set the form's Visible property to .F. - False before releasing the form. See
	the MORE INFORMATION section below for details on implementing this.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Visual FoxPro 5.0 gives you the ability to create forms that can appear outside
	of (or in lieu of) the FoxPro desktop, and appear in the task list or on the
	task bar. These forms are called Top-Level, or SDI, forms, and require setting
	the form's ShowWindow property to "2 - As Top-Level Form." You can add menus,
	toolbars, and child forms to these forms in the same way you add them to the
	Visual FoxPro desktop in this and previous versions of Visual FoxPro.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form called Test.
	
	2. Set the form's ShowWindow property to 2 - As Top-Level Form in the Form
	  Designer Property window.
	
	3. Add a command button to the form, and set its Caption property to Close.
	  Place the following code in the Click method of this command button:
	
	        THISFORM.Release()
	
	4. In the Init method of the form, add the following code:
	
	        DO TESTMENU.MPR WITH THIS, .T.
	
	5. Create a new menu. Make it a Menu rather than a Shortcut.
	
	6. Select Menu then Quick Menu from the FoxPro menu bar to create a default
	  quick menu.
	
	7. On the View menu, click General Options. In the General Options dialog box,
	  select the Top-Level Form check box, then click OK.
	
	8. On the Menu menu, click Generate. Save the menu as Testmenu, then select the
	  Generate button to generate the default .mpr file.
	
	9. Run the Test form, then click the Close button. The Close button shifts
	  upward on the form, then the form closes. This shift also occurs if the form
	  is closed in any of the following ways: Clicking Close on the File menu;
	  clicking the Close button [X] in the upper right corner of the form under
	  Windows 95 or NT 4.0; or pressing Alt+F4 or clicking Close on the Control
	  menu.
	
	The workaround is to make the form invisible immediately before releasing it.
	Because a form may be closed in several different ways, the workaround must be
	incorporated in several places. Here is sample code to demonstrate this.
	
	To handle when the form is closed by clicking a command button, place the
	following in the Click method code for your Quit or Close command button:
	
	     * Close button Click() code
	     THISFORM.Visible = .F.
	     THISFORM.Release()
	
	To handle when the form is closed by clicking the Close [X] button under Windows
	95 or NT 4.0, or pressing Alt+F4 or clicking Close on the Control menu, place
	the following in the QueryUnload() method code for the form:
	
	     * Form.QueryUnload() code
	     THIS.Visible = .F.
	
	To handle when the form is released by clicking Exit (or equivalent) from the
	menu on the SDI form, add this to a procedure for the Exit bar of your menu:
	
	     * Menu Exit bar code
	     LOCAL oForm
	     oForm = _screen.ActiveForm
	     _screen.ActiveForm.Visible = .F.
	     oForm.Release()
	     SET SYSMENU TO DEFAULT    && Resets VFP menu back to default
	
	Additional query words:
	
	======================================================================
	Keywords          : kbui kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
