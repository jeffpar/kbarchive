---
layout: page
title: "Q147878: Difference of WorkSpace in VB4 and SetDefaultWorkSpace in VB3"
permalink: /kb/147/Q147878/
---

## Q147878: Difference of WorkSpace in VB4 and SetDefaultWorkSpace in VB3

{% raw %}

	Article: Q147878
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Visual Basic version 4.0 for Windows the DAO (Data Access Object)
	model was changed with the addition of WorkSpace objects. Thus you can now
	program the default Workspace(0) or work with multiple Workspaces. In Microsoft
	Visual Basic version 3.0 for Windows, you were only allowed to work with the
	default Workspace with the SetDefaultWorkSpace statement, mostly used for
	security purposes. Now, with this new addition in Visual Basic 4.0 you can use
	WorkSpace objects for improved Transaction support.
	
	This article demonstrates how to use the new WorkSpace object in Visual Basic 4.0
	for Windows.
	
	MORE INFORMATION
	================
	
	According to information from the Visual Basic Online Help, the description of
	the WorkSpace Object is as follows:
	
	A Workspace object defines a session for a user. It contains open databases and
	provides mechanisms for simultaneous transactions and for a secure workgroup.
	The Workspaces collection contains all active, unhidden Workspace objects of the
	DBEngine object.
	
	According to the Visual Basic Online help, you use the CreateWorkSpace method to
	create a new Workspace object.
	
	Step-by-Step Example
	--------------------
	
	1. Start Visual Basic or on the File menu, click New Project (ALT, F, N) if
	  Visual Basic is already running. Form1 is created by default.
	
	2. Add two Command buttons (Command1, and Command2) to Form1.
	
	3. Add the following code to the Command1_Click event:
	
	     Private Sub Command1_Click()
	       Dim ws As Workspace
	       Dim db As Database
	       Dim tbl As Recordset
	       Set ws = Workspaces(0)
	       Set db = ws.OpenDatabase("biblio.mdb")
	       Set tbl = db.OpenRecordset("titles", dbOpenTable)
	       Do Until tbl.EOF
	         Print tbl("title")
	         tbl.MoveNext
	       Loop
	     End Sub
	
	4. Add the following code to the Command2_Click event:
	
	     Private Sub Command2_Click()
	       Dim NewSpace As Workspace
	       DBEngine.IniPath = "C:\windows\vb.INI"
	       Set NewSpace = DBEngine.CreateWorkspace("New", "Admin", "")
	       DBEngine.Workspaces.Append NewSpace
	     End Sub
	
	5. On the Run menu, click Start (ALT, R, S), or press the F5 key to run the
	  program. Click the Command1 button to open the default workspace similar to
	  the Visual Basic 3.0 default workspace, then click the Command2 button to
	  create a new Workspace.
	
	Additional query words: kbVBp400 kbVBp500 kbdse kbDSupport kbVBp kbODBC
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	
	=============================================================================
	

{% endraw %}
