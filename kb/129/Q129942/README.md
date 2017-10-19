---
layout: page
title: "Q129942: PRB: Using TypeOf as Part of an If Statement Fails"
permalink: /kb/129/Q129942/
---

## Q129942: PRB: Using TypeOf as Part of an If Statement Fails

	Article: Q129942
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using TypeOf as part of an If statement fails when it is used it on a control
	that was passed to a server application.
	
	CAUSE
	=====
	
	To resolve the type of an object through the TypeOf interface, remoting is
	required for the actual control type. However, there is no remoting capability
	for controls.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Develop and run a container and a server application:
	
	Create the Container Application
	--------------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. From the Insert menu, choose Class Module to add Class1 to the project.
	
	3. Set the properties of Class1 as follows:
	
	  Property      Value
	  ------------------------------------
	  Instancing    1-Creatable SingleUse
	  Name          Class1
	  Public        True
	
	4. Add the following code to the general declarations section of Class1:
	
	     Public Sub DataLoadList(c)
	        If TypeOf c Is ComboBox Then
	           MsgBox "ComboBox"
	        Else
	           MsgBox "Not a ComboBox"
	        End If
	     End Sub
	
	5. From the File menu, choose Make EXE File, and name the executable as
	  Project1.
	
	Create the Server Application
	-----------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add the following code to the general declarations section of Form1:
	
	     Private Sub localcheck(c)
	        If TypeOf c Is ComboBox Then
	           MsgBox "ComboBox"
	        Else
	           MsgBox "Not a ComboBox"
	        End If
	     End Sub
	
	3. Add two command buttons (Command1 and Command2) and a ComboBox to Form1.
	
	4. Add the following code to the Command1_Click event procedure:
	
	     Private Sub Command2_Click()
	        Call localcheck(Combo1)
	     End Sub
	
	5. Add the following code to the Command2_Click event procedure:
	
	     Private Sub Command1_Click()
	        Dim x As Object
	        Set x = CreateObject("Project1.Class1")
	        Call x.DataLoadList(Combo1)
	        Set x = Nothing
	     End Sub
	
	6. Run PROJECT1.EXE from Program Manager or File Manager.
	
	7. Run Project2 from the Visual Basic design environment. Click the Command1
	  button for a local check of the TypeOf statement. The message "ComboBox" is
	  displayed in a message box. Click the Command2 button to test the TypeOf
	  statement across processes and the message "Not a ComboBox" is displayed in a
	  message box.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
