---
layout: page
title: "Q183903: HOWTO: Display the Find All Files Dialog Box"
permalink: /kb/183/Q183903/
---

## Q183903: HOWTO: Display the Find All Files Dialog Box

{% raw %}

	Article: Q183903
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you select "Files or Folders..." from "Find" on the Windows "Start" menu,
	the Find All Files dialog box appears, enabling you to search for a specified
	file. This article shows you how to display that same dialog box from within
	your Visual Basic program.
	
	MORE INFORMATION
	================
	
	The Find All Files dialog box allows you to search for a specific file by it's
	name, modification date, file type, size, or contents. You can launch this
	dialog box from your Visual Basic program by using the ShellExecute Windows API
	function with the Find operation specifier.
	
	The results of the search operation will be displayed in the Find All Files
	dialog box.
	
	The next section shows you how to create a sample project that uses the
	ShellExecute function to display the Find All Files dialog box.
	
	Create the Sample Project
	-------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a Command Button, a Drive ListBox, and a Directory ListBox to the form.
	
	3. Copy the following code to the Code window of Form1:
	
	        Private Declare Function ShellExecute Lib "shell32.dll" _
	              Alias "ShellExecuteA" _
	              (ByVal hwnd As Long, _
	              ByVal lpOperation As String, _
	              ByVal lpFile As String, _
	              ByVal lpParameters As String, _
	              ByVal lpDirectory As String, _
	              ByVal nShowCmd As Long) As Long
	
	        Private Const SW_SHOWNORMAL = 1
	        Private Const SW_SHOWMINIMIZED = 2
	        Private Const SW_SHOWMAXIMIZED = 3
	        Private Const SW_SHOW = 5
	        Private Const SW_MINIMIZE = 6
	        Private Const SW_SHOWMINNOACTIVE = 7
	        Private Const SW_SHOWNA = 8
	        Private Const SW_RESTORE = 9
	        Private Const SW_SHOWDEFAULT = 10
	
	        Private Sub Command1_Click()
	           Call ShellExecute(Me.hwnd, _
	                             "find", _
	                             Dir1.Path, _
	                             vbNullString, _
	                             vbNullString, _
	                             SW_SHOWNORMAL)
	        End Sub
	
	        Private Sub Drive1_Change()
	           Dir1.Path = Drive1.Drive
	        End Sub
	
	        Private Sub Form_Load()
	           Command1.Caption = "Search Selected Path"
	        End Sub
	
	4. On the Run menu, click Start or press the F5 key to start the program. Select
	  a drive and a path within the drive and click Search Selected Path. The Find
	  All Files dialog box appears ready to search the specified path.
	
	Additional query words: kbVBp500 kbVBp600 kbAPI kbWin32 kbVBp kbdsd kbDSupport
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
