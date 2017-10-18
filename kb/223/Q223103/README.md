---
layout: page
title: "Q223103: FIX: Memory Leak with Command Button on Japanese Windows 95C"
permalink: kb/223/Q223103/
---

## Q223103: FIX: Memory Leak with Command Button on Japanese Windows 95C

	Article: Q223103
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbFarEast kbIntl kbOSWin95OSR250 kbVBp kbVBp500bug kbVBp600bug kbOSWin95
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A memory leak might occur on Japanese Windows 95C (OSR 2.5) when unloading a
	Form that contains a CommandButton.
	
	CAUSE
	=====
	
	This problem occurs when the CommandButton's TabIndex property = "0" and its
	TabStop property = "TRUE."
	
	RESOLUTION
	==========
	
	Set the TabIndex of the CommandButton to a value greater than 0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Visual Basic Standard EXE Project. Form1 is created by default.
	
	2. Add a CommandButton and Timer control to Form1.
	
	3. Add the following code to the General Declarations section of Form1:
	
	  Option Explicit
	  Private f As Boolean
	
	  Private Sub Command1_Click()
	     Timer1.Enabled = True
	  End Sub
	
	  Private Sub Form_Load()
	     Timer1.Interval = 500
	     Timer1.Enabled = False
	  End Sub
	
	  Private Sub Timer1_Timer()
	     f = Not f
	     If f Then
	        Form2.Show
	     Else
	        Unload Form2
	        Set Form2 = Nothing
	     End If
	  End Sub
	
	4. On the Project menu, click Add Form to add a new form to the project. Form2
	  is created by default.
	
	5. Add a CommandButton to Form2.
	
	6. Compile the Application to an EXE file.
	
	7. Run the compiled EXE on Japanese Windows 95C.
	
	8. Start the System Monitor tool, which is located in the System Tools folder in
	  the Accessories folder. (If the System Monitor tool is not available, it can
	  be installed from the Control Panel Add/Remove Programs option.) On the Edit
	  menu, click Add Item. Click the Memory Manager Category, click the Allocated
	  Memory Item, and click OK.
	
	9. Click Command1 to start loading/unloading Form2.
	
	  Result: The "Allocated Memory" will steadily increase as the application is
	  running and might eventually cause the application to crash.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbFarEast kbIntl kbOSWin95OSR250 kbVBp kbVBp500bug kbVBp600bug kbOSWin95 kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbIntlDev 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
