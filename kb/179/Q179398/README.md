---
layout: page
title: "Q179398: HOWTO: Subclass a UserControl"
permalink: /kb/179/Q179398/
---

## Q179398: HOWTO: Subclass a UserControl

	Article: Q179398
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Windows programming terminology, subclassing is the process of creating a
	message handling procedure to intercept messages for a given window, handling
	those messages, and passing any remaining messages to the window's original
	message handler.
	
	This article demonstrates how to subclass a UserControl in Visual Basic using the
	AddressOf operator.
	
	MORE INFORMATION
	================
	
	WARNING: One or more of the following functions are discussed in this article;
	VarPtr, VarPtrArray, VarPtrStringArray, StrPtr, ObjPtr. These functions are not
	supported by Microsoft Technical Support. They are not documented in the Visual
	Basic documentation and are provided in this Knowledge Base article "as is."
	Microsoft does not guarantee that they will be available in future releases of
	Visual Basic.
	
	In Visual Basic, the AddressOf operator is used to specify which function in a
	code module (.BAS file) will be the message handling procedure. The subclass
	procedure is basically a message filter that performs non-default processing for
	a few key messages, and passes other messages to a default window procedure
	using CallWindowProc API. The CallWindowProc API function passes a message to
	the Windows system, which, in turn, sends the message to the specified window
	procedure.
	
	When subclassing a UserControl with the AddressOf operator, you must take into
	account that multiple instances of the control utilize the same code module and
	its functions. In order for the UserControl to maintain its "own" message
	handling function, the common procedure in the module needs to forward the
	messages to the proper instance of the UserControl.
	
	To implement a function for each instance of a UserControl, you need to create a
	function in the UserControl to process the messages. The current requirement of
	Visual Basic is that the AddressOf operator can only be used for functions
	residing in a .BAS module. Therefore, the function in the .BAS module must
	forward the message to the correct instance of the UserControl.
	
	Subclassing using the AddressOf operator is very efficient, but makes debugging a
	project difficult. If the window you are subclassing receives a message when you
	are in break mode, Visual Basic will crash. The DBGWPROC.DLL (Debug Object for
	AddressOf Subclassing) enables you to debug normally while a subclass is active
	without adding any unnecessary overhead to your finished product or distributing
	an extra component. This file is available from the Visual Basic Owner's Area at
	the following location;
	
	http://www.microsoft.com/vstudio/owner/
	
	Although it is not necessary, you may want to obtain the Debug Object for
	AddressOf Subclassing from the Owners Area before proceeding.
	
	The following steps show how to create a UserControl that detects mouse
	activation at design-time and run-time.
	
	WARNING: ANY USE BY YOU OF THE CODE PROVIDED IN THIS ARTICLE IS AT YOUR OWN RISK.
	Microsoft provides this code "as is" without warranty of any kind, either
	express or implied, including but not limited to the implied warranties of
	merchantability and/or fitness for a particular purpose.
	
	WARNING: Failure to unhook a window before its imminent destruction will result
	in application errors, Invalid Page Faults, and data loss. This is due the fact
	that the new WindowProc function being pointed to no longer exists, but the
	window has not been notified of the change. Always unhook the sub-classed window
	upon unloading the sub-classed UserControl or exiting the application. This is
	especially important while debugging an application that uses this technique
	within the Microsoft Visual Basic Development Environment. Pressing the End
	button or selecting End from the Run menu without unhooking will cause an
	Invalid Page Fault and close Microsoft Visual Basic.
	
	Step-by-Step Example
	--------------------
	
	1. Start Visual Basic and create a new ActiveX Control Project. "UserControl1"
	  is created by default.
	
	2. Add the following code to the UserControl1 code module:
	
	        Option Explicit
	
	        'mWndProcOrg holds the original address of the
	        'Window Procedure for this window. This is used to
	        'route messages to the original procedure after you
	        'process them.
	        Private mWndProcOrg As Long
	
	        'Handle (hWnd) of the subclassed window.
	        Private mHWndSubClassed As Long
	
	        'Constant for Windows Message used in sample.
	        Private Const WM_MOUSEACTIVATE = &H21
	
	        Private Sub SubClass()
	           '-------------------------------------------------------------
	           'Initiates the subclassing of this UserControl's window (hwnd).
	           'Records the original WinProc of the window in mWndProcOrg.
	           'Places a pointer to the object in the window's UserData area.
	           '-------------------------------------------------------------
	
	           'Exit if the window is already subclassed.
	           If mWndProcOrg Then Exit Sub
	
	              'Redirect the window's messages from this control's default
	              'Window Procedure to the SubWndProc function in your .BAS
	              'module and record the address of the previous Window
	              'Procedure for this window in mWndProcOrg.
	              mWndProcOrg = SetWindowLong(hWnd, GWL_WNDPROC, _
	                                           AddressOf SubWndProc)
	
	              'Record your window handle in case SetWindowLong gave you a
	              'new one. You will need this handle so that you can unsubclass.
	              mHWndSubClassed = hWnd
	
	              'Store a pointer to this object in the UserData section of
	              'this window that will be used later to get the pointer to
	              'the control based on the handle (hwnd) of the window getting
	              'the message.
	              Call SetWindowLong(hWnd, GWL_USERDATA, ObjPtr(Me))
	        End Sub
	
	        Private Sub UnSubClass()
	           '-----------------------------------------------------------
	           'Unsubclasses this UserControl's window (hwnd), setting the
	           'address of the Windows Procedure back to the address it was
	           'at before it was subclassed.
	           '-----------------------------------------------------------
	
	           'Ensures that you don't try to unsubclass the window when
	           'it is not subclassed.
	           If mWndProcOrg = 0 Then Exit Sub
	
	           'Reset the window's function back to the original address.
	           SetWindowLong mHWndSubClassed, GWL_WNDPROC, mWndProcOrg
	           '0 Indicates that you are no longer subclassed.
	           mWndProcOrg = 0
	        End Sub
	
	        Friend Function WindowProc(ByVal hWnd As Long, _
	           ByVal uMsg As Long, ByVal wParam As Long, _
	           ByVal lParam As Long) As Long
	           '--------------------------------------------------------------
	           'Process the window's messages that are sent to your UserControl.
	           'The WindowProc function is declared as a "Friend" function so
	           'that the .BAS module can call the function but the function
	           'cannot be seen from outside the UserControl project.
	           '--------------------------------------------------------------
	
	           'Start Demo Code: Changes the color of the UserControl each
	           'time the control is clicked in design-time from red to blue
	           'or from blue to red.
	              If uMsg = WM_MOUSEACTIVATE Then
	                 If UserControl.BackColor = vbRed Then
	                    UserControl.BackColor = vbBlue
	                 Else
	                    UserControl.BackColor = vbRed
	                 End If
	              End If
	              'End Demo Code.
	
	              'Forwards the window's messages that came in to the original
	              'Window Procedure that handles the messages and returns
	              'the result back to the SubWndProc function.
	              WindowProc = CallWindowProc(mWndProcOrg, hWnd, _
	                            uMsg, wParam, ByVal lParam)
	        End Function
	
	        Private Sub UserControl_Initialize()
	           'Occurs the first time a UserControl is placed on a container.
	           UserControl.BackColor = vbRed
	              SubClass
	        End Sub
	
	        Private Sub UserControl_Terminate()
	           UnSubClass
	        End Sub
	
	3. Add new Standard Module (.BAS) to the project and add the following code:
	
	        Option Explicit
	
	        'API Declarations used for subclassing.
	        Public Declare Sub CopyMemory _
	           Lib "kernel32" Alias "RtlMoveMemory" _
	              (pDest As Any, _
	              pSrc As Any, _
	              ByVal ByteLen As Long)
	
	        Public Declare Function SetWindowLong _
	           Lib "user32" Alias "SetWindowLongA" _
	              (ByVal hWnd As Long, _
	              ByVal nIndex As Long, _
	              ByVal dwNewLong As Long) As Long
	
	        Public Declare Function GetWindowLong _
	           Lib "user32" Alias "GetWindowLongA" _
	              (ByVal hWnd As Long, _
	              ByVal nIndex As Long) As Long
	
	        Public Declare Function CallWindowProc _
	           Lib "user32" Alias "CallWindowProcA" _
	              (ByVal lpPrevWndFunc As Long, _
	              ByVal hWnd As Long, _
	              ByVal Msg As Long, _
	              ByVal wParam As Long, _
	              ByVal lParam As Long) As Long
	
	        'Constants for GetWindowLong() and SetWindowLong() APIs.
	        Public Const GWL_WNDPROC = (-4)
	        Public Const GWL_USERDATA = (-21)
	
	        'Used to hold a reference to the control to call its procedure.
	        'NOTE: "UserControl1" is the UserControl.Name Property at
	        '      design-time of the .CTL file.
	        '      ('As Object' or 'As Control' does not work)
	        Dim ctlShadowControl As UserControl1
	
	        'Used as a pointer to the UserData section of a window.
	        Dim ptrObject As Long
	
	        'The address of this function is used for subclassing.
	        'Messages will be sent here and then forwarded to the
	        'UserControl's WindowProc function. The HWND determines
	        'to which control the message is sent.
	        Public Function SubWndProc( _
	           ByVal hWnd As Long, _
	           ByVal Msg As Long, _
	           ByVal wParam As Long, _
	           ByVal lParam As Long) As Long
	
	           On Error Resume Next
	
	           'Get pointer to the control's VTable from the
	           'window's UserData section. The VTable is an internal
	           'structure that contains pointers to the methods and
	           'properties of the control.
	           ptrObject = GetWindowLong(hWnd, GWL_USERDATA)
	
	           'Copy the memory that points to the VTable of our original
	           'control to the shadow copy of the control you use to
	           'call the original control's WindowProc Function.
	           'This way, when you call the method of the shadow control,
	           'you are actually calling the original controls' method.
	           CopyMemory ctlShadowControl, ptrObject, 4
	
	           'Call the WindowProc function in the instance of the UserControl.
	           SubWndProc = ctlShadowControl.WindowProc(hWnd, Msg, _
	              wParam, lParam)
	
	           'Destroy the Shadow Control Copy
	           CopyMemory ctlShadowControl, 0&, 4
	           Set ctlShadowControl = Nothing
	        End Function
	
	NOTE: If your UserControl is not named UserControl1, you need to change the "Dim
	ctlControl As UserControl1" line of code to indicate the correct name of your
	UserControl as specified by its Name property.
	
	4. Close all the project windows that may be open and save the project.
	
	NOTE: During subclassing, you do not want to stop the executing code or it will
	cause an exception. Always save your project before testing any subclassing
	code.
	
	5. From the File menu, select "Add Project..." and add a Standard EXE project.
	  This will be your test project. It is named Project2 by default.
	
	6. Open the default form (Form1) of Project2 and place an instance of the
	  UserControl on the form. It should appear as a red rectangle.
	
	7. Each time the mouse is clicked on the UserControl, it should toggle its color
	  between red and blue.
	
	8. Place a second instance of the UserControl on the form. Note that the
	  subclassing works independently on each control, sending the messages to the
	  appropriate control.
	
	REFERENCES
	==========
	
	"Visual Basic 5.0 Programmer's Guide to the Win32 API", by Dan Appleman,
	published by Ziff-Davis Press, 1997
	
	The Win32 SDK Online Help
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	Q168795 HOWTO: Hook Into a Window's Messages Using AddressOf
	
	Q170570 HOWTO: Build a Windows Message Handler with AddressOf in VB5
	
	(c) Microsoft Corporation 2000, All Rights Reserved.
	Contributions by Mike Dixon, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
