---
layout: page
title: "Q235414: PRB: ParentControls Property May Not Work with Some Containers"
permalink: /kb/235/Q235414/
---

## Q235414: PRB: ParentControls Property May Not Work with Some Containers

{% raw %}

	Article: Q235414
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCtrlCreate kbVBp500 kbVBp600 kbGrpDSO kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ParentControls Collection of a Visual Basic UserControl is empty when the
	control is placed in a non-Visual Basic Container.
	
	CAUSE
	=====
	
	The ParentControls property is designed to return a Collection of all the
	controls situated on a Form, UserDocument, or other UserControl. This property
	is exposed by the Visual Basic extender object, and it is the responsibility of
	the host container to implement the code needed to fill the collection. Not all
	containers will support this feature. Consequently, this property might return
	an empty collection in containers that do not support it.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Build Control
	----------------------
	
	1. Start Visual Basic and select New ActiveX Control. UserControl1 is created by
	  default.
	
	2. Change the name of the UserControl1 to MyControl and the Project name to
	  MyControlServer.
	
	3. Place a listbox and a CommandButton on the control, and in the click event of
	  the CommandButton, put the following code:
	
	      List1.Clear
	      Dim x As Object
	      For Each x In UserControl.ParentControls
	          List1.AddItem x.Name
	      Next
	
	4. Save the project and compile to build an OCX.
	
	Steps to Create a Visual Basic Container
	----------------------------------------
	
	1. Start Visual Basic and select New Standard EXE. Form1 is created by default.
	
	2. Place a few controls on Form1. (The type of controls is not important.)
	
	3. From the Project menu, select Components. From the Components list, select
	  MyControlServer to add your custom control to the control toolbox.
	
	4. Insert an instance of this control on Form1.
	
	5. Run the project by pressing the F5 key. When you click on the CommandButton
	  of MyControl1, the list box will be filled with all the names of the controls
	  on Form1 (including your custom control).
	
	Steps to Create a Visual Basic for Applications Container
	---------------------------------------------------------
	
	1. Start Microsoft Word and go to the Visual Basic Editor (ALT+F11).
	
	2. Insert a UserForm in your project.
	
	3. Place a few controls on the form. (The type of controls is not important.)
	
	4. Click the right-mouse button on the Toolbox Controls and select Additional
	  Controls.
	
	5. Select MyControlServer.MyControl from the list.
	
	6. Insert an instance of this control on the form.
	
	7. Run the form and click on the CommandButton of your custom control. You will
	  notice that the list box is not filled because the ParentControls Collection
	  is empty. The Collection is empty because VBA does not implement this
	  property.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Harsha Bennur, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrlCreate kbVBp500 kbVBp600 kbGrpDSO kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
