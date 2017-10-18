---
layout: page
title: "Q214674: PRB: Cannot Simultaneously Write to Disk File and Have It Opened"
permalink: kb/214/Q214674/
---

## Q214674: PRB: Cannot Simultaneously Write to Disk File and Have It Opened

	Article: Q214674
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbDLL kbVBp kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to write to the file number of a file that was opened in an
	ActiveX DLL or vice versa, the following run-time error is generated:
	
	  Error '52' Bad File name or number
	
	CAUSE
	=====
	
	The file number created when a file is opened cannot be shared between separate
	projects or executable modules.
	
	RESOLUTION
	==========
	
	If a file must be accessed by both an EXE and an associated DLL, wrap all of the
	file access activities in a class module in the ActiveX DLL.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an ActiveX DLL project. Class1 is added by default.
	
	2. From the Project menu, click Project Properties. Change the Project Name to
	  DllFileNumber and click OK.
	
	3. Add the following code to the General Declarations section of Class1:
	
	  Option Explicit
	
	  Private m_Fn As Integer
	
	  Public Sub WriteFile(Fn As Variant)
	     Write #Fn, "This is a text from the DLL."
	  End Sub
	
	  Public Sub OpenFile()
	     m_Fn = FreeFile
	     Open "C:\DllTEST.txt" For Append As #m_Fn
	  End Sub
	
	  Private Sub Class_Initialize()
	     m_Fn = 0
	  End Sub
	
	  Public Property Get DLLFileNum() As Variant
	     DLLFileNum = m_Fn
	  End Property
	
	  Public Sub CloseFile()
	     If m_Fn <> 0 Then
	        Close #m_Fn
	        m_Fn = 0
	     End If
	  End Sub
	
	4. Save the ActiveX Dll project.
	
	5. From the File menu, click Add Project and add a Standard EXE project. Form1
	  is added by default.
	
	6. In the project window, set the Standard EXE project as the Start Up project
	  by right-clicking on the project name and clicking "Set as Start Up" in the
	  pop-up menu.
	
	7. From the Project menu, click References and check the DllFileNumber entry.
	
	8. Add two CommandButtons to Form1: Command1 and Command2 will be added by
	  default. If a size larger than the default is used, the captions will be more
	  readable.
	
	9. Add the following code to the General Declarations section of Form1:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	     Dim objvar As New DllFileNumber.Class1
	     Dim sVar As String
	
	     sVar = "This is text from the main program."
	     objvar.OpenFile
	     objvar.WriteFile objvar.DLLFileNum
	     Write #objvar.DLLFileNum, sVar 'Error 52 occurs here.
	     objvar.CloseFile
	  End Sub
	
	  Private Sub Command2_Click()
	
	     Dim FileNumber As Variant
	     Dim objvar As New DllFileNumber.Class1
	
	     FileNumber = FreeFile
	
	     Open "C:\TEST.txt" For Append As #FileNumber
	     Write #FileNumber, "This is text from the main program."
	
	     objvar.WriteFile FileNumber  'Error 52 occurs here.
	
	     Close #FileNumber
	  End Sub
	
	  Private Sub Form_Load()
	     Command1.Caption = "Write to a file opened in the DLL"
	     Command2.Caption = "Write to a file opened in the main program"
	  End Sub
	
	10. Run the program and click on the button labeled "Write to a file opened in
	  the DLL." A Run-Time error 52 will occur on the line of Write statement. End
	  the program.
	
	11. Run the program again and click on the button labeled "Write to a file
	  opened in the main program." A Run-Time error 52 will occur on the line
	  containing the WriteFile method.
	
	Resolution
	----------
	
	1. Comment out the code lines containing the following comment:
	
	  ' Error 52 occurs here.
	
	2. Run the program again and click each CommandButton. No error will occur.
	
	Additional query words: kbGrpVB
	
	======================================================================
	Keywords          : kbActiveX kbDLL kbVBp kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
