---
layout: page
title: "Q143117: HOWTO: Determine if Windows 95/98/Me Taskbar Is Visible/Hidden"
permalink: kb/143/Q143117/
---

## Q143117: HOWTO: Determine if Windows 95/98/Me Taskbar Is Visible/Hidden

	Article: Q143117
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 28-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows 95, Windows 98, Windows Me, Windows NT 4.0, and Windows 2000 taskbar
	allow you to easily launch Windows application programs and to determine which
	applications are currently executing. The taskbar can also display status
	information, such as the current time. This article will explain how you can
	determine, from within a Visual Basic program, if the taskbar is visible or
	hidden.
	
	MORE INFORMATION
	================
	
	Windows 95/98/Me Taskbar
	------------------------
	
	The taskbar in Windows 95, Windows 98, Windows Me, Windows NT 4.0, and Windows
	2000 is an area of the screen that contains icons that let you easily switch
	from one application to another, launch new applications, or display status
	information.
	
	You can customize certain aspects of the taskbar. From the Start menu, select
	Settings/Taskbar and Start menu. Windows 95, Windows 98, Windows Me, Windows NT
	4.0, or Windows 2000 will display the current settings for the taskbar. For
	example, if you set the AutoHide option, the taskbar is always hidden from view.
	To see the taskbar, you simply move the mouse pointer over that area of the
	screen where the taskbar is located. The taskbar immediately pops into view.
	
	In a Visual Basic program, you can use the SHAppBarMessage function to determine
	if the taskbar is visible or hidden. To use the SHAppBarMessage function in your
	program, you must include the following declare statement in the general
	declarations section of your program:
	
	     Private Declare Function SHAppBarMessage Lib "shell32.dll" (ByVal
	     dwMessage As Long, pData As APPBARDATA) As Long
	
	The SHAppBarMessage function requires two arguments. The first argument
	identifies the appbar message you want to send. The dwMessage argument may be
	set to one of the following values:
	
	Value                 Description
	------------------------------------------------------------------
	ABM_ACTIVATE          Notifies the system that an appbar has been
	                     activated.
	
	ABM_GETAUTOHIDEBAR    Retrieves the handle of the autohide appbar
	                     associated with a particular edge of the screen
	
	ABM_GETSTATE          Retrieves the autohide and always-on-top states of
	                     the windows taskbar
	
	ABM_GETTASKBARPOS     Retrieves the bounding rectangle of the Windows
	                     taskbar.
	
	ABM_NEW               Registers a new appbar and specifies the message
	                     identifier that the system should use to send
	                     notification messages to the appbar.
	
	ABM_QUERYPOS          Requests a size and screen position for an appbar
	ABM_REMOVE            Unregisters an appbar, removing bar from the
	                     system's internal list
	
	ABM_SETAUOTOHIDEBAR   Registers or unregisters an autohide appbar for an
	                     edge of the screen
	
	ABM_SETPOS            Sets the size and screen position of an appbar
	ABM_WINDOWPOSCHANGED  Notifies the system when an appbar's position has
	                     changed
	
	The second argument required by the SHAppBarMessage function is a pointer to an
	APPBARDATA structure. The actual contents of this structure depends on the
	message you send to the system. Because you are retrieving the state of the
	taskbar, you do not need to set any of the fields in the APPBARDATA structure.
	Just set the dwMessage argument to the constant value ABM_GETSTATE to retrieve
	the current state of the taskbar.
	
	After you call the SHAppBarMessage function, a value is returned indicating the
	state of the taskbar. If this value is zero, you know the taskbar is not in
	auto-hide or always-on-top mode. If the value returned is &H1, the taskbar
	is in auto-hide mode. If the value returned is &H2, the taskbar is in
	always-on-top mode. If the value returned is &H3, the taskbar is both in
	auto-hide mode and always-on-top.
	
	How to Create the Demonstration Program
	---------------------------------------
	
	The demonstration program below shows how to determine if the taskbar in Windows
	95, Windows 98, Windows Me, Windows NT 4.0, or Windows 2000 is visible or
	hidden.
	
	1. Create a new project in Visual Basic. Form1 is created by default.
	
	2. Add the following constant and declare statements to the general declarations
	  section of Form1:
	
	        Private Declare Function SHAppBarMessage Lib "shell32.dll" (ByVal _
	        dwMessage As Long, pData As APPBARDATA) As Long
	        Const ABS_ALWAYSONTOP = &H2
	        Const ABS_AUTOHIDE = &H1
	        Const ABS_BOTH = &H3
	        Const ABM_GETSTATE = &H4
	
	3. Add a CommandButton control to Form1.
	
	4. Add the following code to the Click event for Command1:
	
	        Private Sub Command1_Click()
	            Dim IsThere As Integer
	
	            IsThere = BarExists()
	            If IsThere = 0 Then
	                Text1.Text = "TaskBar not in auto-hide or always-on-top mode"
	            End If
	            If IsThere = ABS_ALWAYSONTOP Then
	                Text1.Text = "TaskBar always-on-top"
	            End If
	            If IsThere = ABS_AUTOHIDE Then
	                Text1.Text = "TaskBar in auto-hide"
	            End If
	            If IsThere = ABS_BOTH Then
	                Text1.Text = "TaskBar is always-on-top and auto-hide"
	            End If
	        End Sub
	
	5. Create a new function called BarExists. Add the following code to the General
	  Declarations section of Form1.
	
	        Public Function BarExists() As Integer
	            Dim Bardata As APPBARDATA
	            BarExists = SHAppBarMessage(ABM_GETSTATE, Bardata)
	        End Function
	
	6. Add a Text Box control to Form1. Set its MultiLine property to True.
	
	7. Add a new Module to the project.
	
	8. Add the following Type structures to Module1.Bas:
	
	        Type RECT
	                Left As Long
	                Top As Long
	                Right As Long
	                Bottom As Long
	        End Type
	        Type APPBARDATA
	                cbSize As Long
	                hwnd As Long
	                uCallbackMessage As Long
	                uEdge As Long
	                rc As RECT
	                lParam As Long '  message specific
	        End Type
	
	Execute the demonstration program by pressing the F5 key. Click on the Command
	Button. If the Windows 95, Windows 98, Windows Me, Windows NT 4.0 or Windows
	2000 taskbar is visible on the screen, a message to that effect is displayed in
	the Text Box. On the other hand, if the taskbar is currently hidden, the Text
	Box will display the text "Taskbar is auto-hide." If both the Auto-Hide and
	Always-on-Top properties of the taskbar are set, then the Text Box will display
	the message "TaskBar is always-on-top and auto-hide." If neither the Auto-Hide
	and Always-on-Top properties of the taskbar are set, then the Text Box will
	display the message "Taskbar is not in auto-hide or always-on-top mode."
	
	REFERENCES
	==========
	
	Product Documentation, SDKs, Win32 SDK, Win32, Reference, Messages.
	ABM_GETSTATE.
	
	Product Documentation, SDKs, Win32 SDK, Win32, Reference, Structures, ABC to
	CWPRETSTRUCT. APPBARDATA.
	
	Product Documentation, SDKs, Win32 SDK, Guides, Programmer's Guide to Windows 95.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
