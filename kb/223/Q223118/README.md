---
layout: page
title: "Q223118: FIX: PSET Method Is Slower in Visual Basic 6.0"
permalink: /kb/223/Q223118/
---

## Q223118: FIX: PSET Method Is Slower in Visual Basic 6.0

{% raw %}

	Article: Q223118
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCompiler kbVBp500 kbVBp600bug kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS600sp
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A project created in Visual Basic 5.0 uses the PSet method to change the color
	of pixels in an object. The project is compiled into an executable file using
	Visual Basic 5.0. When the same project is compiled using Visual Basic 6.0, the
	executable file runs noticeably slower than the Visual Basic 5.0 version. The
	expected behavior is that the Visual Basic 6.0 application should run at least
	as fast as the Visual Basic 5.0 application.
	
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
	
	This section demonstrates how to create a sample project that reproduces the bug
	behavior. It assumes that you have Visual Basic 5.0 and 6.0 installed on the
	same or identical machines. It also assumes that you are familiar with the PSet
	Method and compiling projects. If you are not familiar with these tasks, see the
	REFERENCES section below for more information.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Visual Basic 5.0 Standard EXE project. Form1 is created by
	  default.
	
	2. Add a PictureBox, a CommandButton, and a Label control to Form1. Position the
	  Label control so that there is ample room to its right to accommodate 40
	  characters.
	
	3. Copy the following code to the General Declarations section of Form1:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	     Dim dStart As Double
	     Dim dEnd As Double
	     Dim intX As Integer
	     Dim intY As Integer
	     
	     Picture1.Cls
	     dStart = Timer
	     For intY = 1 To Picture1.ScaleHeight
	        For intX = 1 To Picture1.ScaleWidth
	           Picture1.PSet (intX, intY), vbBlue
	        Next
	     Next
	     dEnd = Timer
	     Label1.Caption = "Elapsed time: " & dEnd - dStart & " seconds."
	  End Sub
	
	  Private Sub Form_Load()
	     With Picture1
	        .ScaleMode = 3
	        .TabIndex = 1
	        .Top = 120
	        .Width = 4215
	     End With
	     Label1.AutoSize = True
	  End Sub
	
	4. Compile the project into an executable file. Run the executable file and
	  click the CommandButton. Note the time shown in the Label control.
	
	5. Open the same project in Visual Basic 6.0. Compile the project into an
	  executable file. Run the Visual Basic 6.0 executable file version and click
	  the Command Button.
	
	  BUG: The Visual Basic 6.0 version is slower the Visual Basic 5.0 version.
	
	REFERENCES
	==========
	
	Please see:
	
	- Topics on Compiling Applications in the Online Help, or the Microsoft Visual
	  Basic 6.0 Component Tools Guide, or the MSDN Web site at:
	  http://msdn.microsoft.com/library/devprods/vs6/vb/html/vbmscstepintocompilingyourapplication.htm
	  for more information about compiling your Visual Basic project.
	
	- PSet Method in the Online Help, or the Microsoft Visual Basic 6.0 Component
	  Tools Guide, or the MSDN Web site at:
	  http://msdn.microsoft.com/library/devprods/vs6/vb/html/vamthpset.htm explains
	  the PSet method.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbCompiler kbVBp500 kbVBp600bug kbGrpDSVB kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
