---
layout: page
title: "Q190634: PRB: Activate Event Is Not Triggered with Child Form of MDI Form"
permalink: /kb/190/Q190634/
---

## Q190634: PRB: Activate Event Is Not Triggered with Child Form of MDI Form

{% raw %}

	Article: Q190634
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Activate event for an MDIChild form is only triggered the first time the
	form is shown. For example, when an MDIChild form is displayed using the Show
	Method, then hidden using the Hide method, and then shown again using the Show
	method, the Activate event is triggered only the first time the form is shown.
	
	CAUSE
	=====
	
	The Activate and Deactivate events occur for MDI child forms only when the focus
	changes from one child form to another. In an MDIForm object with two child
	forms, the child forms receive these events when the focus moves between them.
	However, when the focus changes between a child form and a non-MDI child form,
	the parent MDIForm receives the Activate and Deactivate events.
	
	RESOLUTION
	==========
	
	To work around this behavior, create a custom method in Form1 to handle showing
	the form. In the custom method, place code to show the form as well as code you
	would have placed in the Activate event. To display the child form, call the
	custom method instead of using the form's Show method. An example custom method
	to show a child form and simulate an Activate event would be:
	
	     Public Sub MyShow()
	        Form1.Show
	        MsgBox "MyShow - simulation of Activate event"
	     End Sub
	
	The call to invoke this custom method would be:
	
	     Form1.MyShow  'Call the custom method created in Form1
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new standard EXE project. Form1 is created by default.
	
	2. Choose Project, Add MDI Form, to add an MDI form.
	
	3. Choose Project, Project1 Properties, and then set MDIForm1 to be Project1's
	  Startup Object.
	
	4. Select Form1 and change the Name and Caption properties of Form1 to frmChild.
	  Set frmChild's MDIChild property to True.
	
	5. In the Activate event of frmChild, place the following code:
	
	        MsgBox "MDIChild Activate Event"
	
	6. Place a CommandButton on frmChild. In the Click event for the CommandButton,
	  place the following code:
	
	        Me.Hide
	
	7. Select MDIForm1 (the parent form). Open the Visual Basic Menu Editor to place
	  a menu item on the MDI form. Set the Caption of the menu item to "Show
	  MDIChild." Set the Name of the menu item to "mnuShow." In the Click event for
	  the mnuShow menu item, place the following code:
	
	         rmChild.Show
	
	8. Press the F5 key to run the application. Click the Show MDIChild menu item.
	  The message box appears as the child form is displayed. Click the
	  CommandButton on frmChild to hide the child. Click the Show MDIChild menu
	  item again. The message box does not appear, indicating that the MDIchild's
	  Activate event did not fire.
	
	9. Select frmChild. Open the form's code window and place the following
	  workaround code:
	
	        Public Sub MyShow()
	           Me.Show
	           MsgBox "MyShow acting as Activate event"
	        End Sub
	
	10. Select MDIForm1. In the Click event for the mnuShow menu item, replace the
	  previous code with:
	
	        frmChild.MyShow
	
	11. Press the F5 key to run the application. Click the Show MDIChild menu item.
	  The message box appears as the child form is displayed. Click the
	  CommandButton on frmChild to hide the child. Click the Show MDIChild menu
	  item again. The message box appears again.
	
	REFERENCES
	==========
	
	For documentation on this behavior, search for "Activate event" in Visual Basic
	Online Help Index. Select "Activate,Deactivate Events."
	
	Additional query words: kbMDI kbVBp600 kbVBp500 kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
