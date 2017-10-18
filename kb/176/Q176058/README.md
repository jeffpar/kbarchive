---
layout: page
title: "Q176058: HOWTO: Pass String Data Between Applications Using SendMessage"
permalink: kb/176/Q176058/
---

## Q176058: HOWTO: Pass String Data Between Applications Using SendMessage

	Article: Q176058
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp500 kbVBp600
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are many ways to achieve inter-process communication using Visual Basic.
	Unless you establish an OLE Automation client server relationship, string data
	is difficult to handle cleanly. The main reason is that 32-bit applications run
	in a separate address space, so the address of a string in one application is
	not meaningful to another application in a different address space. Using the
	SendMessage() API function to pass a WM_COPYDATA message avoids this problem.
	
	This article demonstrates how to pass string data from one application to another
	by using the SendMessage API function with the WM_COPYDATA message.
	
	MORE INFORMATION
	================
	
	WARNING: One or more of the following functions are discussed in this article;
	VarPtr, VarPtrArray, VarPtrStringArray, StrPtr, ObjPtr. These functions are not
	supported by Microsoft Technical Support. They are not documented in the Visual
	Basic documentation and are provided in this Knowledge Base article "as is."
	Microsoft does not guarantee that they will be available in future releases of
	Visual Basic.
	
	Visual Basic does not support pointers and castings in the manner of Visual C++.
	In order to pass string data from one Visual Basic application to another, the
	Unicode string must be converted to ASCII prior to passing it to the other
	application. The other application must then convert the ASCII string back to
	Unicode.
	
	The following summarizes how to pass string data from one application to
	another.
	
	Step-by-Step Example 
	--------------------
	
	1. Convert the string to a byte array using the CopyMemory() API.
	
	2. Obtain the address of the byte array using the VarPtr() intrinsic function
	  and copy the address and length of the byte array into a COPYDATASTRUCT
	  structure.
	
	3. Pass the COPYDATASTRUCT to another application using the WM_COPYDATA message,
	  setting up the other application to receive the message.
	
	4. Unpack the structure on the target system using CopyMemory(), and convert the
	  byte array back to a string using the StrConv() intrinsic function.
	
	The next section shows you how to create a sample program that demonstrates
	passing string data from one application to another.
	
	Steps to Create the Sample
	--------------------------
	
	To create this sample, you create two separate projects; a sending project and a
	target project.
	
	Create the target application:
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default. This project will be your target application.
	
	2. Add a Label control to Form1.
	
	3. Copy the following code to the Code window of Form1:
	
	        Private Sub Form_Load()
	            gHW = Me.hWnd
	            Hook
	            Me.Caption = "Target"
	            Me.Show
	            Label1.Caption = Hex$(gHW)
	        End Sub
	
	        Private Sub Form_Unload(Cancel As Integer)
	            Unhook
	        End Sub
	
	4. Add a module to the project and paste the following code in the Module1 code
	  window:
	
	       Type COPYDATASTRUCT
	                dwData As Long
	                cbData As Long
	                lpData As Long
	        End Type
	
	        Public Const GWL_WNDPROC = (-4)
	        Public Const WM_COPYDATA = &H4A
	        Global lpPrevWndProc As Long
	        Global gHW As Long
	
	        'Copies a block of memory from one location to another.
	
	        Declare Sub CopyMemory Lib "kernel32" Alias "RtlMoveMemory" _
	           (hpvDest As Any, hpvSource As Any, ByVal cbCopy As Long)
	
	        Declare Function CallWindowProc Lib "user32" Alias _
	           "CallWindowProcA" (ByVal lpPrevWndFunc As Long, ByVal hwnd As _
	           Long, ByVal Msg As Long, ByVal wParam As Long, ByVal lParam As _
	           Long) As Long
	
	        Declare Function SetWindowLong Lib "user32" Alias "SetWindowLongA" _
	           (ByVal hwnd As Long, ByVal nIndex As Long, ByVal dwNewLong As _
	           Long) As Long
	
	        Public Sub Hook()
	            lpPrevWndProc = SetWindowLong(gHW, GWL_WNDPROC, _
	            AddressOf WindowProc)
	            Debug.Print lpPrevWndProc
	        End Sub
	
	        Public Sub Unhook()
	            Dim temp As Long
	            temp = SetWindowLong(gHW, GWL_WNDPROC, lpPrevWndProc)
	        End Sub
	
	        Function WindowProc(ByVal hw As Long, ByVal uMsg As Long, _
	           ByVal wParam As Long, ByVal lParam As Long) As Long
	            If uMsg = WM_COPYDATA Then
	                Call mySub(lParam)
	            End If
	            WindowProc = CallWindowProc(lpPrevWndProc, hw, uMsg, wParam, _
	               lParam)
	        End Function
	
	        Sub mySub(lParam As Long)
	            Dim cds As COPYDATASTRUCT
	            Dim buf(1 To 255) As Byte
	
	            Call CopyMemory(cds, ByVal lParam, Len(cds))
	
	            Select Case cds.dwData
	             Case 1
	                Debug.Print "got a 1"
	             Case 2
	                Debug.Print "got a 2"
	             Case 3
	                Call CopyMemory(buf(1), ByVal cds.lpData, cds.cbData)
	                a$ = StrConv(buf, vbUnicode)
	                a$ = Left$(a$, InStr(1, a$, Chr$(0)) - 1)
	                Form1.Print a$
	            End Select
	        End Sub
	
	5. Save the project and minimize the Visual Basic IDE.
	
	Create the Sending Application
	------------------------------
	
	1. Start a second instance of the Visual Basic IDE and create a new Standard EXE
	  project in Visual Basic. Form1 is created by default.
	
	2. Add a CommandButton to Form1.
	
	3. Copy the following code to the Code window of Form1:
	
	        Private Type COPYDATASTRUCT
	                dwData As Long
	                cbData As Long
	                lpData As Long
	        End Type
	
	        Private Const WM_COPYDATA = &H4A
	
	        Private Declare Function FindWindow Lib "user32" Alias _
	           "FindWindowA" (ByVal lpClassName As String, ByVal lpWindowName _
	           As String) As Long
	
	        Private Declare Function SendMessage Lib "user32" Alias _
	           "SendMessageA" (ByVal hwnd As Long, ByVal wMsg As Long, ByVal _
	           wParam As Long, lParam As Any) As Long
	
	        'Copies a block of memory from one location to another.
	        Private Declare Sub CopyMemory Lib "kernel32" Alias "RtlMoveMemory" _
	           (hpvDest As Any, hpvSource As Any, ByVal cbCopy As Long)
	
	        Private Sub Command1_Click()
	            Dim cds As COPYDATASTRUCT
	            Dim ThWnd As Long
	            Dim buf(1 To 255) As Byte
	
	        ' Get the hWnd of the target application
	            ThWnd = FindWindow(vbNullString, "Target")
	            a$ = "It Works!"
	        ' Copy the string into a byte array, converting it to ASCII
	            Call CopyMemory(buf(1), ByVal a$, Len(a$))
	            cds.dwData = 3
	            cds.cbData = Len(a$) + 1
	            cds.lpData = VarPtr(buf(1))
	            i = SendMessage(ThWnd, WM_COPYDATA, Me.hwnd, cds)
	        End Sub
	
	        Private Sub Form_Load()
	        ' This gives you visibility that the target app is running
	        ' and you are pointing to the correct hWnd
	            Me.Caption = Hex$(FindWindow(vbNullString, "Target"))
	        End Sub
	
	4. Save the project.
	
	Running the Sample
	------------------
	
	1. Restore the target application and press the F5 key to run the project. Note
	  that the value of the hWnd displayed in the label.
	
	2. Restore the sending application and press the F5 key to run the project.
	  Verify that the hWnd in the form caption matches the hWnd in the label on the
	  target application. Click the CommandButton and the text message should be
	  displayed on the form of the target application.
	
	REFERENCES
	==========
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q168795 HOWTO: Hook Into a Window's Messages Using AddressOf
	
	  Q129947 INFO: Win32 Replacement for the hmemcpy Function
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp500 kbVBp600 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
