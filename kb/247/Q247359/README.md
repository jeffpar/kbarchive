---
layout: page
title: "Q247359: BUG: WindowList Menu Does Not Always Show MDIChild Forms"
permalink: /kb/247/Q247359/
---

## Q247359: BUG: WindowList Menu Does Not Always Show MDIChild Forms

{% raw %}

	Article: Q247359
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbMDI kbMenu kbVBp kbVBp400bug kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open an MDIChild Form, it does not show in the WindowList. This occurs
	if you have a MDIChild form that is hidden, and the Windowstate of the MDIChild
	forms is Maximized.
	
	RESOLUTION
	==========
	
	Since this problem only occurs when closing maximized MDIChild forms, you need
	to set the form's Windowstate property to Normal for each MDIChild form before
	it is closed. This can be done in the MDIChild form's Unload event by setting
	its Visible property to False. Doing this sets the Windowstate of the form to
	Normal, while preserving the Windowstate of the MDIChild windows. This method is
	better than explicitly setting the Windowstate, because doing so also changes
	the WindowState of the other MDIChild Forms. Please refer to the sample code in
	the "More Information" section for a workaround.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new Standard EXE project in Visual Basic. Form1 is created by default
	
	2. From the Project menu add two more forms to the project (Form2 and Form3).
	
	3. Set the MDIChild property to True and the WindowState property to Maximized
	  for Form1, Form2 and Form3.
	
	4. From the Project menu add an MDI Form to the project.
	
	5. Choose Menu Editor from the Tools menu in the Visual Basic IDE. Add a top
	  level menu to the MDI Form. Give it the following property settings:
	
	  Caption <A0><A0>Open
	  Name <A0><A0><A0><A0><A0>mnuMaster
	  Index <A0><A0><A0><A0><A0>0
	
	6. Under this top level menu, create two submenus. Give the first submenu the
	  following property settings:
	
	  Caption <A0><A0>Form1
	  Name <A0><A0><A0><A0><A0>mnuOpen
	  Index <A0><A0><A0><A0><A0>0
	
	  Give the second submenu the properties:
	
	  Caption <A0><A0>Form2
	  Name <A0><A0><A0><A0><A0>mnuOpen
	  Index <A0><A0><A0><A0><A0>1
	
	7. Add another top level menu, giving it the following properties:
	
	  Caption <A0><A0><A0><A0><A0><A0><A0><A0>Window
	  Name <A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0>mnuMaster
	  Index <A0><A0><A0><A0><A0><A0><A0><A0><A0><A0><A0>1
	  WindowList <A0><A0><A0>Checked
	
	  At this point you should have a menu that looks like the following:
	
	  Open
	  ...Form1
	  ...Form2
	  Window
	
	8. Paste the following code into the General Declarations section of the MDI
	  form's code window.
	
	  Private Sub MDIForm_Load()
	      Load Form1
	      Load Form2
	      Load Form3
	      Form3.Hide
	  End Sub
	
	  Private Sub mnuOpen_Click(Index As Integer)
	      Select Case Index
	          Case 0
	              Form1.Show
	          Case 1
	              Form2.Show
	      End Select
	  End Sub
	
	9. Run the Application. See Form1 and Form2 in the Windowlist, and Form2 will be
	  the active window. Now close Form2.
	
	10. From the Open menu, select Form2. Form2 opens, but notice it is not showing
	  in the Windowlist. Only Form1 shows in the WindowList.
	
	11. To work around the problem, add the following code to the form Unload event
	  for each MDIChild Form. In our example, do this for Form1, Form2, and
	  Form3.
	
	  Me.Visible = False
	
	REFERENCES
	==========
	
	For more information on creating menus, see the "Menu Basics" section in the
	MSDN.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMDI kbMenu kbVBp kbVBp400bug kbVBp500bug kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
