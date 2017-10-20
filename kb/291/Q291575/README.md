---
layout: page
title: "Q291575: HOWTO: Use Visual Basic to Locate CD-ROM Drives"
permalink: /kb/291/Q291575/
---

## Q291575: HOWTO: Use Visual Basic to Locate CD-ROM Drives

{% raw %}

	Article: Q291575
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbsample kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 31-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can find the drive letter of any CD-ROM drive on a local computer by using
	the Win32 API from Visual Basic. This can be useful during scenarios such as
	program setup and querying a user for media.
	
	MORE INFORMATION
	================
	
	You can use the GetDriveType API to determine the type of drive referenced by a
	drive letter. By combining this API with a list of the active drive letters on a
	computer, you can search for CD-ROM drives available on that computer. Note that
	the API does not distinguish between types of CD-ROM drives, so for example, a
	DVD drive is considered a CD-ROM drive.
	
	The following code sample demonstrates how to search for local CD-ROM drives by
	using Visual Basic.
	
	Sample Code
	-----------
	
	1. Start a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. Add a new command button (Command1) to Form1.
	
	3. Add the following code to Form1's code window:
	
	  Option Explicit
	
	  Private Declare Function GetDriveType Lib "kernel32" Alias "GetDriveTypeA" _
	      (ByVal nDrive As String) As Long
	
	  Private Declare Function GetLogicalDriveStrings Lib "kernel32" _
	      Alias "GetLogicalDriveStringsA" _
	      (ByVal nBufferLength As Long, ByVal lpBuffer As String) As Long
	
	  Const DRIVE_CDROM& = 5
	
	  Public Function GetDriveStrings() As String
	      ' Wrapper for calling the GetLogicalDriveStrings api
	      
	      Dim result As Long          ' Result of our API calls
	      Dim strDrives As String     ' String to pass to API call
	      Dim lenStrDrives As Long    ' Length of the above string
	      
	      ' Call GetLogicalDriveStrings with a buffer size of zero to
	      ' find out how large our stringbuffer needs to be
	      result = GetLogicalDriveStrings(0, strDrives)
	      
	      strDrives = String(result, 0)
	      lenStrDrives = result
	      
	      ' Call again with our new buffer
	      result = GetLogicalDriveStrings(lenStrDrives, strDrives)
	      
	      If result = 0 Then
	          ' There was some error calling the API
	          ' Pass back an empty string
	          ' NOTE - TODO: Implement proper error handling here
	          GetDriveStrings = ""
	      Else
	          GetDriveStrings = strDrives
	      End If
	  End Function
	
	  Private Sub Command1_Click()
	      Dim strDrives As String
	      
	      ' Find out what drives we have on this machine
	      strDrives = GetDriveStrings()
	      
	      If strDrives = "" Then
	          ' No drives were found
	          MsgBox "No Drives were found!", vbCritical
	      Else
	          ' Walk through the string and check the type of each drive
	          ' displaying any cd-rom drives we find
	          Dim pos As Long
	          Dim drive As String
	          Dim drivetype As Long
	          
	          pos = 1
	          
	          Do While Not Mid$(strDrives, pos, 1) = Chr(0)
	              drive = Mid$(strDrives, pos, 3)
	              pos = pos + 4
	              drivetype = GetDriveType(drive)
	              If drivetype = DRIVE_CDROM Then
	                  MsgBox "CD-ROM found at drive " & UCase(drive)
	              End If
	          Loop
	      End If
	  End Sub
	   
	
	4. Click Run or press the F5 key to run the project.
	
	Result: Any CD-ROM drives on the computer are displayed by drive letter in a
	message box.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q190000 HOWTO: Get Started Programming with the Windows API
	
	  Q180766 VBA: Sample Code to Determine CD-ROM Drive Letter
	
	  Q291573 HOWTO: Use Visual Basic to List Active Logical Drives
	
	The Visual Basic Programmer's Guide (available on MSDN Online,
	http://msdn.microsoft.com/default.asp)
	
	(c) Microsoft Corporation 2001, All Rights Reserved.
	Contributions by Gray McDonald, Microsoft Corporation
	
	
	Additional query words: VB CD CDROM Locate Drive Find List
	
	======================================================================
	Keywords          : kbsample kbAPI kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
