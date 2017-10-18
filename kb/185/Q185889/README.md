---
layout: page
title: "Q185889: HOWTO: Access Host Objects and Controls Using the ScriptControl"
permalink: kb/185/Q185889/
---

## Q185889: HOWTO: Access Host Objects and Controls Using the ScriptControl

	Article: Q185889
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbActiveX kbScript kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to access the methods and properties of the host
	application using the ScriptControl. It also contains sample code that
	manipulates the controls and user-defined classes present in the host
	application.
	
	MORE INFORMATION
	================
	
	The objects of the host application can be accessed by the ScriptControl using
	the AddObject method. AddObject creates a reference to an existing object. The
	reference name is passed as a parameter to the AddObject method.
	
	Step-by-Step Example
	--------------------
	
	1. Start Visual Basic and invoke a new project. Form1 is created by default.
	
	2. Add two CommandButtons, a List box, a Text box, and a ScriptControl to Form1.
	
	3. Paste the following code in the General Declarations section of Form1:
	
	        Private Sub Command1_Click()
	          Dim sObjName As String
	          sObjName = InputBox("Enter the the name for the control " _
	                     & List1.Text, "AddObject Example", List1.Text)
	          ScriptControl1.AddObject sObjName, Form1.Controls(List1.ListIndex)
	          MsgBox "Now you can use the keyword """ & sObjName & """" & _
	                 vbCrLf &  "to access the properties and methods of " & _
	                 List1.Text & vbCrLf & vbCrLf & "Write some statements " & _
	                 "in the textbox and click on ""Text Script""", vbInformation
	        End Sub
	
	        Private Sub Command2_Click()
	          ScriptControl1.ExecuteStatement Text1.Text
	        End Sub
	
	        Private Sub Form_Load()
	          Dim C as Control
	          For Each c In Form1.Controls
	            List1.AddItem c.Name
	          Next
	          List1.ListIndex = 0
	          Command1.Caption = "Add the " & vbCrLf & List1.Text & " object" _
	                             & vbCrLf & "for scripting"
	          Command2.Caption = "Test script"
	          ScriptControl1.AddObject "ctrls", Form1.Controls
	          Text1 = "msgbox ""The number of controls is: "" & ctrls.count"
	        End Sub
	
	        Private Sub List1_Click()
	          Command1.Caption = "Add the " & vbCrLf & List1.Text & " object" _
	                             & vbCrLf & "for scripting"
	        End Sub
	
	4. Run the project. In the Form load, the controls collection is already
	  exported by using AddObject. Click the "Test Script" button to execute the
	  statement in the Text box and to display the number of controls on the form.
	
	5. The List box shows the names of controls present in the form. Click to select
	  "Command1," and click the "Add Command1 object" button. Press OK in the Input
	  box. Type the following text in the Text box and then click "Test Script" to
	  display the caption:
	
	  Msgbox Command1.Caption
	
	6. In the List box, click to select "List1. "Click the "Add List1 object,"
	  button and, in the Input box, change the name to "MyList." Type the following
	  text in the Text box and click "Text Script" to move the List box:
	
	  MyList.Left = 1000
	
	As the remaining steps illustrate, the reference to the objects can be made
	global to the script. When the reference is global, the methods can be called
	just by naming the method without using the
	<Object>.<Method/Property> syntax. The ScriptControl can access
	objects defined by user-defined classes as well.
	
	1. Using the project you created in the previous steps, add another Command
	  button to Form1.
	
	2. Add the following code to Form1:
	
	        Private Sub Command3_Click()
	          Dim MyObj As New Class1, bGlobal
	          bGlobal = MsgBox("The object Myobj is added for scripting. " _
	                    & vbCrLf & "Do you want its members to be global?", _
	                    vbYesNo + vbInformation, "AddObject example")
	          If bGlobal = vbYes Then
	            ScriptControl1.AddObject "MyObject", MyObj, True
	          Else
	            ScriptControl1.AddObject "MyObject", MyObj, False
	          End If
	          MsgBox "Now you can use the keyword ""MyObject"" to access " & _
	                 "all its members" ,vbInformation
	        End Sub
	
	3. Add a new class module, and paste the following code into the class module:
	
	        Public Sub Test()
	          MsgBox "The is Test method in Class1"
	        End Sub
	
	4. Run the project. Click the Command3 button. A Message box appears to
	  determine if the reference is to be set as global or not. Select Yes, and, in
	  the Text box, enter the word "Test" without the quotes. Click "Test Script."
	
	REFERENCES
	==========
	
	For information about obtaining the Script control, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q184739 INFO: Where to Obtain the Script Control
	
	Additional query words: kbDSupport kbDSD kbScript kbCtrl kbVBp500 kbVBp600 kbVBp
	
	======================================================================
	Keywords          : kbActiveX kbScript kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	
