---
layout: page
title: "Q221578: HOWTO: Play Unix Audio Files (.AU) From Visual Basic"
permalink: kb/221/Q221578/
---

## Q221578: HOWTO: Play Unix Audio Files (.AU) From Visual Basic

	Article: Q221578
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbmm kbActiveX kbVBp kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to create a Visual Basic project that plays audio
	files with the AU file extension. The project uses the DirectShow run-time file,
	Quartz.dll, version 5.1.18.1024 or later. This DirectShow run-time file is
	shipped with Internet Explorer 4.01 and Visual Studio 6.0.
	
	MORE INFORMATION
	================
	
	This section assumes you are familiar with using objects and references in your
	Visual Basic project and that you have a .AU file to use with the project. If
	you are not familiar with using objects and references in your Visual Basic
	project, see the REFERENCES section of this article.
	
	Steps to Create the Project
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, select References, and add a reference to the
	  DirectShow runtime file, quartz.dll. You may need to Browse for this file in
	  your System directory. After you make a reference to this file, the
	  ActiveMovie Control type library appears in the Available References list box
	  of the References dialog box.
	
	3. Add a CommandButton to Form1.
	
	4. Paste the following code to the Code window of Form1. Change the String
	  variable MyFile to the path and filename of your AU file:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	     Static PMC As Object
	     Dim MyFile As String
	
	     MyFile = "<Path and Filename of the AU file>"
	     Set PMC = New FilgraphManager
	     PMC.RenderFile MyFile
	     PMC.Run
	  End Sub
	
	5. On the Run menu, select Start, or press the F5 key to start the program.
	  Click on Command1 and the AU file will start playing.
	
	REFERENCES
	==========
	
	For more information on using objects and references in your Visual Basic
	project, see the following topics in the Visual Basic Online Help or the MSDN
	Web Site:
	
	- Creating a Reference to an Object
	- Assigning an Object Reference to a Variable
	- Declaring an Object Variable
	
	Additional query words:
	
	======================================================================
	Keywords          : kbmm kbActiveX kbVBp kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
