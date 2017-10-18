---
layout: page
title: "Q172167: ODE97: DOC: Code Example in NodeClick Event Help Topic Incorrect"
permalink: kb/172/Q172167/
---

## Q172167: ODE97: DOC: Code Example in NodeClick Event Help Topic Incorrect

	Article: Q172167
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbProgramming
	Last Modified: 01-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SYMPTOMS
	========
	
	When you paste the sample code from the NodeClick event into a form's class
	module and then compile it, you may receive the following error message:
	
	  Compile error:
	
	  Event procedure declaration does not match description of event having the
	  same name.
	
	This article assumes that you are familiar with Visual Basic for Applications and
	with creating Microsoft Access applications using the programming tools provided
	with Microsoft Access. For more information about Visual Basic for Applications,
	please refer to the "Building Applications with Microsoft Access 97" manual.
	
	CAUSE
	=====
	
	The code example contains the following procedure:
	
	     Private Sub TreeView1_NodeClick(ByVal Node As Node)
	     Form1.Caption = "Index = " & Node.Index & " Text:" & Node.Text
	     End Sub
	
	The data type of the argument that is passed to this procedure should be Object
	instead of Node. The subroutine also sets the Caption property of the undefined
	variable Form1.
	
	RESOLUTION
	==========
	
	Edit the TreeView1_NodeClick procedure so that it reads as follows:
	
	     Private Sub TreeView1_NodeClick(ByVal Node As Object)
	     Me.Caption = "Index = " & Node.Index & " Text:" & Node.Text
	     End Sub
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Microsoft Access and open the sample database Northwind.mdb.
	
	2. Open a new, blank form in Design view, and don't base it on any table or
	  query.
	
	3. On the Insert menu, click ActiveX Control.
	
	4. In the ActiveX Control dialog box, select Microsoft TreeView Control, and
	  then click OK.
	
	5. Set the Name property of the control to Treeview1.
	
	6. On the Help menu, click Contents And Index, and then click the Index tab.
	
	7. Search for "NodeClick event," and display the topic.
	
	8. In the NodeClick Event topic, click Example.
	
	9. Select the sample code and press CTRL+C to copy the code to the Clipboard;
	  then, minimize the Help window.
	
	10. Click View Code on the View menu.
	
	11. Press CTRL+V to paste the code into the form's class module.
	
	12. On the Run menu, click Compile Loaded Modules. Note that you receive the
	  following message:
	
	  Compile error:
	
	  Event procedure declaration does not match description of event having the
	  same name
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbProgramming 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Hardware          : x86
	
	=============================================================================
	
