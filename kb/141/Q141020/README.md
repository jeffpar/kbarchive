---
layout: page
title: "Q141020: How to Find Next Available Drive Letter (for Network Connect)"
permalink: /kb/141/Q141020/
---

## Q141020: How to Find Next Available Drive Letter (for Network Connect)

{% raw %}

	Article: Q141020
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbcode kbnetwork
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual Basic program in this article shows by example how to find the next
	available (unused) drive letter in Windows. This is useful when making network
	connections to a new drive letter.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	The Freedrive function defined below returns the next drive letter available in
	Windows, followed by a colon (:).
	
	1. Start Visual Basic. Form1 is created by default.
	
	2. Add the following code to the General Declarations section of Form1:
	
	  #If Win32 Then
	    Private Declare Function GetDriveType Lib "kernel32" Alias
	  "GetDriveTypeA" (ByVal nDrive As String) As Long
	  #Else
	    Private Declare Function GetDriveType Lib "kernel" (ByVal nDrive As
	  Integer) As Integer
	  #End If
	
	  Function Freedrive()
	        Dim DriveNum As Integer, FirstFreeDrive As String
	        Dim FirstDrive As Integer
	        DriveNum = -1
	        Do
	           DriveNum = DriveNum + 1   ' start at drive zero.
	           #If Win32 Then
	             NextDrive$ = Chr$(DriveNum + 65) + ":\"
	             FirstDrive% = GetDriveType(NextDrive$)
	           #Else
	             FirstDrive% = GetDriveType(DriveNum)
	           #End If
	           ' GetDriveType returns zero if it cannot determine drive
	           ' type or returns 1 if the specified drive does not exist.
	        #If Win32 Then
	          Loop Until FirstDrive% = 1
	        #Else
	          Loop Until FirstDrive% = 0
	        #End If
	        ' DriveNum of 0 means Drive A, 1=B, 2=C, 3=D, 4=E, 5=F, and so on:
	        FirstFreeDrive = Chr$(DriveNum + 65) + ":"
	        Freedrive = FirstFreeDrive
	  End Function
	
	3. In the Form_click event, add the following statements:
	
	     Private Sub Form_Click ()
	
	        Cls
	        Print "The next available (unused) drive letter is: "; Freedrive()
	
	        ' More handy tips: The "App" object below is found in VB 2.0
	        ' and 3.0 (but not 1.0).
	        Print "The title for the EXE in Windows Task Manager: "; app.Title
	        Print "The name of this EXE, or project in VB, is: "; app.EXEName
	        Print "The path to this application is: "; app.Path
	
	     End Sub
	
	4. Run the program, and click the form.
	
	Additional query words: 2.00 3.00 4.00 vb4win vb4all
	
	======================================================================
	Keywords          : kbcode kbnetwork 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	
	=============================================================================
	

{% endraw %}
