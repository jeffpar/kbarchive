---
layout: page
title: "Q258233: PRB: Problem Reloading a UserControl File with an Add-In"
permalink: /kb/258/Q258233/
---

## Q258233: PRB: Problem Reloading a UserControl File with an Add-In

{% raw %}

	Article: Q258233
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbAddIn kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 10-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have a Visual Basic add-in component that calls the VBComponent.Reload
	method of the Visual Basic Add-In model to reload a UserControl (.ctl) file. If
	an instance of the UserControl is currently sited on a container (form or
	control) that is part of the project, you get the following error message when
	the Reload method is called:
	
	  Run-time error '5':Invalid procedure call or argument.
	
	CAUSE
	=====
	
	This behavior is by design. The Reload method needs to unload (remove) and then
	load (add) the .ctl file. Because an instance of the control is on a container,
	the removal of the control from the project is not allowed. This is analogous to
	the situation in which you site a UserControl on a form, and then try to remove
	the .ctl file manually, in which case you get the following error message:
	
	  Can't remove control or reference; in use.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Create a Visual Basic 6.0 Add-In project with a default form (frmAddIn) and a
	  default designer (Connect).
	
	2. Replace the code in the OKButton_Click event handler on frmAddIn with the
	  following:
	
	  VBInstance.ActiveVBProject.VBComponents.Item("usercontrol1").Reload
	  MsgBox "UserControl has been reloaded."
	
	3. Compile the add-in project (MyAddIn.dll).
	
	4. Create a new standard EXE project. Form1 is created automatically.
	
	5. Add a UserControl (UserControl1) to the project and save the project.
	
	6. On the Add-Ins menu, select Add-In Manager.... Select My Add-In, and check
	  the Loaded/Unloaded check box under Load Behavior on the Add-In Manager
	  dialog box. Click OK.
	
	7. On the Add-Ins menu, select My Add-in, and the dialog box (frmAddin) of the
	  MyAddIn project appears.
	
	8. Click OK, and note that a message box appears indicating that the control has
	  been reloaded.
	
	9. Add an instance of the control to Form1 and click OK on the dialog box again.
	  Note that the following error message appears:
	
	  Run-time error '5': Invalid procedure call or argument.
	
	Additional query words: MyAddIn 5 can t run time
	
	======================================================================
	Keywords          : kbAddIn kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
