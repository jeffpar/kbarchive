---
layout: page
title: "Q159975: BUG: FileCopy Does Not Reset Err if Floppy is Write-Protected"
permalink: kb/159/Q159975/
---

## Q159975: BUG: FileCopy Does Not Reset Err if Floppy is Write-Protected

	Article: Q159975
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00 | 4.00
	Operating System(s): 
	Keyword(s): kbnokeywordkbbuglist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Err object is not reset after you try to copy a file to a write- protected
	floppy disk and the FileCopy command fails with a "Permission Denied" error.
	This makes it impossible to copy the file again, even after you remove the
	write-protection on the floppy disk.
	
	WORKAROUND
	==========
	
	The Kill command is not affected in this way and can be carried out before the
	FileCopy command. This enables the Kill command to detect the "Permission
	Denied" error first and allows you to remove the write- protection on the floppy
	disk before you carry out the FileCopy command. Do the following:
	
	     Private Sub Command1_Click()
	     Dim source As String
	     Dim target As String
	
	        On Error GoTo err_handler
	
	        source = "c:\test.txt"
	
	        Open source For Output As #1
	        Write #1, "This is a test."
	        Close #1
	
	        target = "a:\test.txt"
	
	        If Dir(target) <> "" Then Kill target
	        FileCopy source, target
	
	     Exit Sub
	     err_handler:
	
	        If Err.Number = 70 Then
	            MsgBox "Permission denied. Please remove write-protection."
	            Resume
	        ElseIf Err.Number = 71 Then
	            MsgBox "Disk not ready. Please insert a disk."
	            Resume
	        End If
	
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in the Microsoft products listed at
	the beginning of this article. Microsoft is researching this issue and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Place a CommandButton, Command1, on Form1.
	
	3. Place the following code in the Command1_Click event:
	
	     Private Sub Command1_Click()
	     Dim source As String
	     Dim target As String
	
	        On Error GoTo err_handler
	
	        source = "c:\test.txt"
	
	        Open source For Output As #1
	        Write #1, "This is a test."
	        Close #1
	
	        target = "a:\test.txt"
	
	        FileCopy source, target
	
	     Exit Sub
	     err_handler:
	
	        If Err.Number = 70 Then
	            MsgBox "Permission denied. Please remove write-protection."
	            Resume
	        ElseIf Err.Number = 71 Then
	            MsgBox "Disk not ready. Please insert a disk."
	            Resume
	        End If
	
	     End Sub
	
	4. Run the project by pressing the F5 key.
	
	5. Insert a formatted disk in the floppy, and then click Command1. Text.txt is
	  copied to the floppy disk.
	
	6. Write-protect the disk and click Command1. An error message appears to remove
	  the write-protection.
	
	7. Remove write-protection and click Command1. Note that the same error message
	  appears.
	
	Additional query words: 4.00 vb4win vb416
	
	======================================================================
	Keywords          : kbnokeyword kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : 4.00 | 4.00
	Issue type        : kbbug
	
	=============================================================================
	
