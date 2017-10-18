---
layout: page
title: "Q190210: PRB: Passing ActiveX Control to Component Gives &quot;Type Mismatch&quot;"
permalink: kb/190/Q190210/
---

## Q190210: PRB: Passing ActiveX Control to Component Gives &quot;Type Mismatch&quot;

	Article: Q190210
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you pass an ActiveX control to another ActiveX component in Visual Basic, a
	Type Mismatch error might occur. The problem does not occur on your development
	computer, but it does occur after the control is installed on another computer.
	This problem occurs even if you used the Setup Wizard to install the .ocx and
	the .ocx has been properly registered.
	
	CAUSE
	=====
	
	ActiveX controls are private objects that belong to the form class and they
	should not be passed out to external components. By design, Visual Basic wraps
	each .ocx in an extended control, which provides the basic services offered by
	the container to the programmer. When you pass a control object to another
	component, you are in fact passing the Extender object. If your component
	expects an interface pointer that is early bound as the base control, a type
	mismatch error occurs because the interface IDs of the base control and the
	Extender object do not match.
	
	For example, if you pass a TreeView control as a method to another control and
	attempt to set it to a variable declared as TreeView, an error occurs when the
	control is executed on a non-development computer.
	
	RESOLUTION
	==========
	
	If possible, do not pass ActiveX controls to other components in your project.
	If the component needs a specific control to function correctly, include that
	control as part of the component. Microsoft does not recommend that you pass
	private objects to components outside of the current project.
	
	If you must pass ActiveX controls to your component, do not attempt to use early
	binding, use late binding instead. If you pass the control as a variable of type
	Object, any late bound calls to the base control will succeed since the extender
	is designed to forward unrecognized property or method calls to the internal
	base control.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new ActiveX Control project in Visual Basic. UserControl1 is created
	  by default.
	
	2. From the Project menu, click Components and select Microsoft Windows Common
	  Controls.
	
	3. Add the following code to the UserControl:
	
	        Dim m_tree As TreeView
	        Public Property Set tree(obj As Object)
	          ' You must use obj as a late bound object.
	          ' The next line causes the error.
	           Set m_tree = obj
	        End Property
	
	4. Change the project name to PassTree.
	
	5. From the File menu, click Make PassTree.ocx.
	
	6. Start a new Standard EXE project. Form1 is created by default.
	
	7. From the Project menu, click Components and select Microsoft Windows Common
	  Controls.
	
	8. Select PassTree, and click OK. PassTree is added to the Toolbox.
	
	9. Add an instance of the TreeView control and the PassTree control to Form1.
	
	10. Add a CommandButton to Form1. Insert the following code in the
	  Command1_Click event:
	
	        Set Me.UserControl11.Tree = Treeview1
	
	11. Run the project and click the CommandButton. Note that you should not see an
	  error message.
	
	12. Copy the PassTree.ocx to another computer that has Visual Basic installed.
	
	13. Register the OCX on the second computer. The command line is similar to the
	  following:
	
	  Regsvr32.exe <path>\PassTree.ocx
	
	14. Repeat steps 6 through 11 on the second computer.
	
	15. You should see:
	
	  Error 13: Type Mismatch error.
	
	REFERENCES
	==========
	
	Visual Basic Help, version 6.0; topic: Data Types Allowed in Properties and
	Methods
	
	Visual Basic 5.0 Books Online: Data Types Allowed in Properties and Methods
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
