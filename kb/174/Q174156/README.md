---
layout: page
title: "Q174156: HOWTO: Programmatically Launch the Default Internet Browser"
permalink: /kb/174/Q174156/
---

## Q174156: HOWTO: Programmatically Launch the Default Internet Browser

	Article: Q174156
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 24-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic for Applications version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the Windows API to start the default Internet browser on your
	system. To do so, you must first determine what Internet browser is registered
	as the default on your system, and then start that application.
	
	MORE INFORMATION
	================
	
	The following Visual Basic example will launch whatever Internet browser is
	registered as the default on your system. Obviously, at least one Internet
	browser must be successfully installed and set up on the system for this to
	work. Also, since this code is highly dependent on the application-file type
	associations in the HKEY_CLASSES_ROOT hive of the registry, this can lead to
	unexpected results and exceptions if the registry is damaged. File types and
	extensions may also be associated with applications other than the browser. For
	example, HTM or HTML files may be associated with web development software
	instead of the browser.
	
	Note that both API functions in the following sample return a value of 32 or less
	on failure, but the error constants are not included in this article. Full error
	trapping is recommended for any production use of this technique.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a Command button to Form1. Command1 is created by default.
	
	3. Copy the following code into the Form's module:
	
	         Private Const SW_SHOW = 5       ' Displays Window in its current size
	                                        ' and position
	        Private Const SW_SHOWNORMAL = 1 ' Restores Window if Minimized or
	                                        ' Maximized
	
	        Private Declare Function ShellExecute Lib "shell32.dll" Alias _
	           "ShellExecuteA" (ByVal hwnd As Long, ByVal lpOperation As _
	           String, ByVal lpFile As String, ByVal lpParameters As String, _
	           ByVal lpDirectory As String, ByVal nShowCmd As Long) As Long
	
	        Private Declare Function FindExecutable Lib "shell32.dll" Alias _
	           "FindExecutableA" (ByVal lpFile As String, ByVal lpDirectory As _
	           String, ByVal lpResult As String) As Long
	
	        Private Sub Command1_Click()
	        Dim FileName As String, Dummy As String
	        Dim BrowserExec As String * 255
	        Dim RetVal As Long
	        Dim FileNumber As Integer
	
	        ' First, create a known, temporary HTML file
	        BrowserExec = Space(255)
	        FileName = "C:\temphtm.HTM"
	        FileNumber = FreeFile                    ' Get unused file number
	        Open FileName For Output As #FileNumber  ' Create temp HTML file
	            Write #FileNumber, "<HTML> <\HTML>"  ' Output text
	        Close #FileNumber                        ' Close file
	        ' Then find the application associated with it
	        RetVal = FindExecutable(FileName, Dummy, BrowserExec)
	        BrowserExec = Trim(BrowserExec)
	        ' If an application is found, launch it!
	        If RetVal <= 32 Or IsEmpty(BrowserExec) Then ' Error
	            MsgBox "Could not find associated Browser", vbExclamation, _
	              "Browser Not Found"
	        Else
	            RetVal = ShellExecute(Me.hwnd, "open", BrowserExec, _
	              "www.microsoft.com", Dummy, SW_SHOWNORMAL)
	            If RetVal <= 32 Then        ' Error
	                MsgBox "Web Page not Opened", vbExclamation, "URL Failed"
	            End If
	        End If
	        Kill FileName                   ' delete temp HTML file
	        End Sub
	
	4. Press the F5 key to run the project. Click on Command1 and your default
	  Internet Browser will start.
	
	REFERENCES
	==========
	
	For more information, please Search on the following topics in either the Win32
	Programmer's Reference or The Microsoft Developer Network (MSDN) Library
	CD-ROM:
	
	- ShellExecute
	
	- FindExecutable
	
	Additional query words: IE Internet Explorer Netscape Navigator kbVBp500 kbVBp600 kbVBp 
	kbdsd kbDSupport kbVBp400 kbVBA500 kbInternet Communicator KBWIN32SDK KBAPI
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVB500 kbVB600 kbVB400Search kbVB400 kbVBASearch kbZNotKeyword3
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
