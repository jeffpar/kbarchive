---
layout: page
title: "Q176392: FIX: Can't Assign an Object to an ActiveX Tag Property"
permalink: /kb/176/Q176392/
---

## Q176392: FIX: Can't Assign an Object to an ActiveX Tag Property

	Article: Q176392
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCtrl kbVBp kbVBp500bug kbVBp600fix kbGrpDSVB kbDSupport
	Last Modified: 27-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to set the Tag property of an object in the Comctl32.ocx
	ActiveX Control, you will receive run-time error 424:
	
	  "Object required"
	
	The following examples cause the error:
	
	     Set TabStrip1.Tabs(1).Tag = Text1
	     Set Toolbar1.Buttons(1).Tag = Text1
	     Set StatusBar1.Panels(1).Tag = Text1
	     Set TreeView1.Nodes(1).Tag = Text1
	     Set ListView1.ListItems(1).Tag = Text1
	     Set ImageList1.ListImages(1).Tag = Text1
	
	If you assign an object to one of these Tag properties without using the "Set"
	statement, the default property of the object is correctly assigned to the Tag
	property. For instance, the following examples result in the Text property of
	Text1 being assigned to the Tag properties:
	
	     TabStrip1.Tabs(1).Tag = Text1
	     Toolbar1.Buttons(1).Tag = Text1
	     StatusBar1.Panels(1).Tag = Text1
	     TreeView1.Nodes(1).Tag = Text1
	     ListView1.ListItems(1).Tag = Text1
	     ImageList1.ListImages(1).Tag = Text1
	
	If the object you are assigning to the Tag property with this method does not
	have a default property, you correctly get error 438 "Object doesn't support
	this property or method." The following examples would result in this error
	because forms do not have default properties:
	
	     TabStrip1.Tabs(1).Tag = Me
	     Toolbar1.Buttons(1).Tag = Me
	     StatusBar1.Panels(1).Tag = Me
	     TreeView1.Nodes(1).Tag = Me
	     ListView1.ListItems(1).Tag = Me
	     ImageList1.ListImages(1).Tag = Me
	
	If the object you are assigning to the Tag property with this method is un-
	initialized, Visual Basic incorrectly attempts to navigate to the default
	property, which causes a crash. The following examples will cause an
	"Application error" under NT 4.0, or a "This Program has performed an illegal
	operation" error under Windows 95, Windows 98, or Windows Me:
	
	     Dim t As TextBox
	     TabStrip1.Tabs(1).Tag = t
	     Toolbar1.Buttons(1).Tag = t
	     StatusBar1.Panels(1).Tag = t
	     TreeView1.Nodes(1).Tag = t
	     ListView1.ListItems(1).Tag = t
	     ImageList1.ListImages(1).Tag = t
	
	Similarly, setting the Tag property to "Nothing" causes the same crash.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	MORE INFORMATION
	================
	
	The online Help for the ActiveX Tag Property says the following:
	
	  "The Tag property is of type Variant for ActiveX control collections such as
	  Toolbar Button objects, TreeView Node objects, ListView ListItem and
	  ColumnHeader objects, ImageList ListImage objects, TabStrip Tab objects, and
	  StatusBar Panel objects. This is a powerful language feature that enables you
	  to pass, for example, objects (such as a selected Node) as a Tag."
	
	However, if you try to Set a Tag Property to an Object you will receive a
	run-time error 424 "Object required." You can, however, assign an object to a
	Tag Property and it will store the default property of the object to the Tag.
	You cannot store the Object itself in the Tag Property.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE Project. Form1 is created by default.
	
	2. From the Project menu, select Components.
	
	3. In the Controls Tab of the Components dialog box, make sure that the
	  Microsoft Windows Common Controls 5.0 is checked.
	
	4. Click OK to Close the Components dialog box.
	
	5. Add a TreeView Control, Text Box, and three CommandButtons to Form1.
	
	6. Add the following Code to Form1:
	
	        'Start Code
	        Private Sub Command1_Click()
	           'try to set the Tag of a node to an Object
	           ' This will give error number 424
	           Set TreeView1.Nodes(1).Tag = Text1
	        End Sub
	
	        Private Sub Command2_Click()
	           'This will store the default property of an object
	           'to the Tag of a node
	           TreeView1.Nodes(1).Tag = Text1
	           Print "Nodes(1).Tag = " & TreeView1.Nodes(1).Tag
	        End Sub
	
	       Private Sub Command3_Click()
	          'This will cause a crash
	           Dim t As TextBox
	          'Set t = Text1
	          TreeView1.Nodes(1).Tag = t
	          Debug.Print TreeView1.Nodes(1).Tag
	       End Sub
	
	        Private Sub Form_Load()
	           ' Set Treeview control properties.
	           TreeView1.LineStyle = tvwRootLines  ' Linestyle 1
	
	           ' Add Node objects.
	           Dim nodX As Node    ' Declare Node variable.
	           ' First node with 'Root' as text.
	           Set nodX = TreeView1.Nodes.Add(, , "r", "Root")
	
	           ' This next node is a child of Node 1 ("Root").
	           Set nodX = TreeView1.Nodes.Add("r", tvwChild, "child1", "Child")
	        End Sub
	        'End Code
	
	7. Save the project.
	
	8. Press the F5 key to run the project, and then Click Command1. You will get
	  run-time error 424. If you Click Command2, you will see that the default
	  property of your text box (Text1) is stored in the Tag property. If you click
	  Command3, you will crash.
	
	NOTE: In order for the code in the Command3_Click event to work properly after
	the fix is applied, the comment must be removed from the line of code that
	performs the Set operation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCtrl kbVBp kbVBp500bug kbVBp600fix kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
