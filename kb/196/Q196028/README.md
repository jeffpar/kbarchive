---
layout: page
title: "Q196028: PRB: FileListBox Control May Not List File Names Properly"
permalink: kb/196/Q196028/
---

## Q196028: PRB: FileListBox Control May Not List File Names Properly

	Article: Q196028
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbCtrl kbListBox kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbGrpDSVBDB kbCodeSam
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under some conditions, file names may not appear or may be listed improperly in
	the FileListBox control.
	
	RESOLUTION
	==========
	
	To work around this problem, you can use the Dir() function to obtain a list of
	files in a directory and programmatically populate a Listbox with the file
	names. When a user double-clicks a file name in the Listbox, you may retrieve
	the name in the Listbox's dblClick event.
	
	Steps to Resolve
	----------------
	
	1. Open a new Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Add a DriveListBox, DirListBox, and a ListBox to the form.
	
	3. Add the following code to the form's code window:
	
	        Option Explicit
	
	        Private Sub Drive1_Change()
	          ' Inform the DirListBox of the Drive change.
	          Dir1.Path = Drive1.List(Drive1.ListIndex)
	        End Sub
	
	        Private Sub Dir1_Change()
	         ' Obtain the file names from the new directory and populate
	         ' the ListBox.
	         Dim strCurrentPath As String
	         Dim strFileName As String
	
	         If Right(Dir1.Path, 1) = "\" Then
	             strCurrentPath = Dir1.Path
	         Else
	             strCurrentPath = Dir1.Path & "\"
	         End If
	
	         ' Clear the Listbox.
	         List1.Clear
	
	         ' Populate the Listbox with the file names.
	         strFileName = Dir(strCurrentPath)
	
	         Do While strFileName <> ""
	             List1.AddItem strFileName
	             strFileName = Dir
	         Loop
	
	        End Sub
	
	        Private Sub List1_DblClick()
	         ' Retrieve the text from the currently selected item.
	         MsgBox List1.List(List1.ListIndex)
	        End Sub
	
	4. Run the project. As you change drives and directories, the Listbox will
	  populate with the names of any files in the directory. Double-clicking a file
	  name in the Listbox will cause a message box to display the chosen file name.
	
	MORE INFORMATION
	================
	
	Problems with the FileListBox has been know to occur with shares on Netware
	Servers and on NT Servers where the 8.3 filenames have been disabled.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q196141 PRB: Problems Using Intrinsic File System Controls
	
	Visual Basic Help, search on: "Dir function"
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbCtrl kbListBox kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbGrpDSVBDB kbCodeSam 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
