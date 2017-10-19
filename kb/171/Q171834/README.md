---
layout: page
title: "Q171834: FIX: Crash When UserControl Accesses Members of ParentControls"
permalink: /kb/171/Q171834/
---

## Q171834: FIX: Crash When UserControl Accesses Members of ParentControls

	Article: Q171834
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a UserControl tries to access members of the ParentControls collection when
	it is not in UserMode (AmbientProperties.UserMode = False), the following error
	may occur:
	
	  "VB5 caused an invalid page fault in module VB5.EXE at 0137:004650a3."
	
	CAUSE
	=====
	
	Visual Basic 5.0 is not releasing the interfaces correctly.
	
	RESOLUTION
	==========
	
	Install Visual Studio 97 Service Pack 2 (SP2). Alternately, use a For...Next
	loop instead of a For...Each loop when looping through the ParentControls
	collection to avoid the error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic 5.0 ActiveX Control project.
	
	2. Add a Label control to the UserControl.
	
	3. Add the following code to the UserControl:
	
	        Public Property Let TheLoop(bLoop As Boolean)
	           Dim oObject As Object
	           Dim sName As String
	           For Each oObject In ParentControls
	               sName = oObject.Name
	               Debug.Print sName
	           Next
	        End Property
	
	        Public Property Get TheLoop() As Boolean
	
	        End Property
	
	4. Select File...Add Project from the menu bar and add a Standard EXE project.
	
	5. Place an instance of UserControl1 (UserControl11) on Form1.
	
	6. Place three or four other controls on Form1.
	
	7. Select UserControl11 and change the TheLoop property.
	
	8. Repeat step 7. Note that an invalid page fault in Visual Basic results.
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbVBp500 kbVS97sp2fix kbGrpDSVB kbvbp500sp2fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
