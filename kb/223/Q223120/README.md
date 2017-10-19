---
layout: page
title: "Q223120: FIX: ReDim Preserve on Array of UDTs Causes Crash"
permalink: /kb/223/Q223120/
---

## Q223120: FIX: ReDim Preserve on Array of UDTs Causes Crash

	Article: Q223120
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbVBp600bug kbGrpDSVB kbVS600sp3fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to use Redim Preserve on an array of User Defined Types within a
	public object, a fatal error in OleAut32.dll might occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Select Add Project from the File menu to add an ActiveX Control project.
	
	3. Paste the following code into the General Declarations section of the
	  UserControl:
	
	  Public Type SomeType
	      SomeTest As String
	  End Type
	
	  Private UDTSomething() As SomeType
	
	  Public Sub ReDimUDT()
	      ReDim Preserve UDTSomething(0)
	  End Sub
	
	4. Close the ActiveX Control designer.
	
	5. Add an instance of the UserControl to Form1.
	
	6. Add a CommandButton to Form1.
	
	7. Paste the following code into the module of Form1:
	
	  Private Sub Command1_Click()
	      UserControl11.ReDimUDT
	  End Sub
	
	8. Run the project and click the CommandButton.
	
	You might see a fatal error in OleAut32.dll.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbVBp600bug kbGrpDSVB kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
