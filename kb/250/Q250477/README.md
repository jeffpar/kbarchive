---
layout: page
title: "Q250477: PRB: Terminate Events Fire in Reverse Order in VBCE/eVB"
permalink: /kb/250/Q250477/
---

## Q250477: PRB: Terminate Events Fire in Reverse Order in VBCE/eVB

	Article: Q250477
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600 kbOSWinCE100 kbGrpDSVB
	Last Modified: 05-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When two forms are shown and closed, the Terminate event of the second form
	fires prior to the Terminate event of the first form. The order of these events
	is opposite of what occurs in Microsoft Visual Basic 6.0. This behavior occurs
	in the emulation environment and on the remote device.
	
	RESOLUTION
	==========
	
	In cases where this behavior needs to be worked around, project level variables
	can be used to store when forms in the project are loaded and unloaded. Each
	form in the project can call a generic Terminate routine. When the generic
	Terminate event is called and all forms that had been loaded have been unloaded,
	the Terminate code can be executed.
	
	The following example demonstrates this concept:
	
	1. Create a new Windows CE project in either Visual Basic or eMbedded Visual
	  Basic. Form1 is created by default.
	
	2. Paste the following code into Form1:
	
	  Private Sub Form_Click()
	      Form2.Show
	  End Sub
	
	  Private Sub Form_Load()
	      Form1Unloaded = False
	  End Sub
	
	  Private Sub Form_Terminate()
	      TerminateHandler
	  End Sub
	
	  Private Sub Form_Unload(Cancel As Integer)
	      Form1Unloaded = True
	  End Sub
	
	3. Add a second form to the project.
	
	4. Paste the following code into Form2:
	
	  Private Sub Form_Load()
	      Form2Unloaded = False
	  End Sub
	
	  Private Sub Form_Terminate()
	      TerminateHandler
	  End Sub
	
	  Private Sub Form_Unload(Cancel As Integer)
	      Form2Unloaded = True
	  End Sub
	
	5. Add a module to the project.
	
	6. Paste the following code into Module1:
	
	  Dim Form1Unloaded
	  Dim Form2Unloaded
	  Dim ExecTerminateRoutine
	
	  Sub TerminateHandler()
	      If Form1Unloaded And Form2Unloaded And Not (ExecTerminateRoutine) Then
	          ExecTerminateRoutine = True
	          ' Execute termination code in
	          ' the order required.
	      End If
	  End Sub
	
	  Sub Main()
	      Form1Unloaded = True
	      Form2Unloaded = True
	      ExecTerminateRoutine = False
	      Form1.Show
	  End Sub
	
	7. In the Project Properties dialog box, change the Startup object to Sub Main.
	
	8. Press the F5 key to run the program.
	
	9. Click on Form1 and notice that Form2 is displayed.
	
	10. Close Form2.
	
	11. Close Form1.
	
	12. After closing Form1, the TerminateHandler routine is called and the code
	  within the If statement is executed once.
	
	MORE INFORMATION
	================
	
	This behavior only occurs in the Windows CE Platform.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Windows CE Project in Visual Basic. Form1 is created by default.
	
	2. On the Projects menu, select Components, and then select Microsoft CE File
	  System Control.
	
	3. Add a File control to Form1.
	
	4. Paste the following code into Form1:
	
	  Private Sub Form_Click()
	      Form2.Show
	  End Sub
	
	  Private Sub Form_Terminate()
	      File1.Open "terminate.txt", fsModeAppend
	      File1.WriteFields "Form1 Terminate"
	      File1.Close
	  End Sub
	
	5. Add a second form to the project.
	
	6. Add a File control to Form2.
	
	7. Add the following code behind Form2.
	
	  Private Sub Form_Terminate()
	      File1.Open "terminate.txt", fsModeAppend
	      File1.WriteFields "Form2 Terminate"
	      File1.Close
	  End Sub
	
	8. Press the F5 key to run the program.
	
	9. Click on Form1 and note that Form2 is displayed.
	
	10. Close Form2.
	
	11. Close Form1.
	
	12. Open the text file that has been created (terminate.txt) and note that the
	  Terminate event of Form2 has been executed prior to the Terminate event of
	  Form1.
	
	Additional query words: wince vbce vbce6 eVB
	
	======================================================================
	Keywords          : kbToolkit kbVBp600 kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbprb
	
	=============================================================================
	
