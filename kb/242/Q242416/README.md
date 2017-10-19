---
layout: page
title: "Q242416: HOWTO: Enumerate 16-bit Tasks on Window NT Using Visual Basic"
permalink: /kb/242/Q242416/
---

## Q242416: HOWTO: Enumerate 16-bit Tasks on Window NT Using Visual Basic

	Article: Q242416
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbOSWinNT400 kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 10-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There may be times when it is necessary to enumerate all of the 16-bit tasks
	that are running on a Windows NT system. To do this you use the
	VDMEnumProcessWOW and VDMEnumTaskWOWEx API functions. The MORE INFORMATION
	section to follow demonstrates how to use these functions within Visual Basic.
	Note, that it is also necessary to use call back functions to enumerate the
	16-bit processes. If you are unfamiliar with the use of callback functions from
	within Visual Basic, see the article mentioned in the REFERENCES section of this
	article.
	
	MORE INFORMATION
	================
	
	Steps to Create the Example
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add one CommandButton to the form.
	
	3. Set the forms AutoReDraw property to True.
	
	4. Select Project from the Menu and add a new module to the project. Module1 is
	  created by default.
	
	5. Copy the following code into the Code window of Module1:
	
	  Option Explicit
	
	  Declare Function VDMEnumProcessWOW Lib "VDMDBG.dll" _ 
	  (ByVal fp As Long, lparam As Long) As Integer 
	
	  Declare Function VDMEnumTaskWOWEx Lib "VDMDBG.dll " _ 
	  (dwProcessId As Long, ByVal fp As Long, lparam As Long) As Integer 
	
	  Declare Function lstrcpy Lib "kernel32" _ 
	  (ByVal lpString1 As Any, ByVal lpString2 As Any) As Long 
	
	  Public Function PROCESSENUMPROC _
	  (ByVal dwProcessId As Long, ByVal dwAttributes As Long, _
	  lpUserDefined As Long) As Boolean
	    
	      Form1.Cls
	      Form1.Print "dwProcessId: " & dwProcessId
	      Form1.Print "dwAttributes: " & dwAttributes & vbCrLf 
	  ' Pass the Process ID to this next function to enumerate that Process.
	      Call VDMEnumTaskWOWEx(ByVal dwProcessId, AddressOf TASKENUMPROCEX, 0)
	
	  End Function
	
	  Public Function TASKENUMPROCEX _ 
	  (ByVal dwThreadId As Long, ByVal hMod16 As Long, _ 
	  ByVal hTask16 As Long, ByVal pszModName As Long, _ 
	  ByVal pszFileName As Long, lpUserDefined As Long) As Boolean 
	
	  ' Print Enumerated task of the 16bit process
	      Form1.Print "dwThreadId: " & dwThreadId & vbCrLf & _
	      "hMod16: " & hMod16 & vbCrLf & "hTask16: " & hTask16 & vbCrLf & _
	      "pszModName: " & PointerToString(pszModName) & vbCrLf & _
	      "pszFileName: " & PointerToString(pszFileName) & vbCrLf & _
	      "lpUserDefined: " & lpUserDefined & vbCrLf
	  ' Return value is false until there are no more tasks to enumerate.  
	  End Function
	
	  Private Function PointerToString(lPtr As Long) As String
	  Dim sTemp As String * 255, Retval As Long
	  ' Parse String Values returned from function call. 
	
	      Retval = lstrcpy(sTemp, lPtr)
	      If (InStr(1, sTemp, Chr(0)) = 0) Then
	           PointerToString = ""
	      Else
	           PointerToString = Left(sTemp, InStr(1, sTemp, Chr(0)) - 1)
	      End If
	      
	  End Function
	
	6. Copy the following code into the Code window of Form1:
	
	  Private Sub Command1_Click() 
	
	  Dim Retval As Long 
	  ' Call VDMEnumProcessWOW to beging the enumeration
	     Retval = VDMEnumProcessWOW(AddressOf PROCESSENUMPROC, 0)
	
	  End Sub 
	
	7. Save the Project and then press F5 to run the project. The enumerated
	  processes will list on the form.
	
	REFERENCES
	==========
	
	  Q170570 HOWTO: Build a Windows Message handler with Addressof in VB
	
	  Q181578 HOWTO: CallBack Visual Basic Functions From a C Dll
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbOSWinNT400 kbSDKWin32 kbVBp kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbPTNotAssigned kbZNotKeyword2
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
