---
layout: page
title: "Q161300: HOWTO: Determine the Type of Drive Using Win32"
permalink: /kb/161/Q161300/
---

## Q161300: HOWTO: Determine the Type of Drive Using Win32

{% raw %}

	Article: Q161300
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
	
	There are many types of drives that Windows can detect and the Win32 API
	GetDriveType gives the Visual Basic programmer a simple way to differentiate
	between them. Below is a code sample showing how to use the API.
	
	MORE INFORMATION
	================
	
	1. Start a new Standard EXE project. Form1 is added by default.
	
	2. Add a DriveListBox to Form1.
	
	3. Add the code below to the General Declarations section of Form1:
	
	        Option Explicit
	
	        Private Declare Function GetDriveType Lib "kernel32" Alias _
	          "GetDriveTypeA" (ByVal sDrive As String) As Long
	
	        Private Function DriveType(sDrive As String) As String
	          Dim sDriveName As String
	          Const DRIVE_TYPE_UNDTERMINED = 0
	          Const DRIVE_ROOT_NOT_EXIST = 1
	          Const DRIVE_REMOVABLE = 2
	          Const DRIVE_FIXED = 3
	          Const DRIVE_REMOTE = 4
	          Const DRIVE_CDROM = 5
	          Const DRIVE_RAMDISK = 6
	          sDriveName = GetDriveType(sDrive & ":\")
	          Select Case sDriveName
	            Case DRIVE_TYPE_UNDTERMINED
	              DriveType = "has not been recognized"
	            Case DRIVE_ROOT_NOT_EXIST
	              DriveType = "specified doesn't exist"
	            Case DRIVE_CDROM
	              DriveType = "is a CD-ROM drive."
	            Case DRIVE_FIXED
	              DriveType = "cannot be removed I.E. Hard Disk"
	            Case DRIVE_RAMDISK
	              DriveType = "is a RAM disk."
	            Case DRIVE_REMOTE
	              DriveType = "is a remote I.E Network drive."
	            Case DRIVE_REMOVABLE
	              DriveType = "can be removed I.E. Floppy Disk."
	          End Select
	        End Function
	
	        Private Sub Drive1_Change()
	          MsgBox "The Drive Type " & DriveType(Left(Drive1.Drive, 1))
	        End Sub
	
	4. Press the F5 key to run the project, and select a drive from the Drive List
	  box. A message box will be displayed showing what type of drive it is.
	
	Additional query words: kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport KBWIN32SDK KBAPI
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
