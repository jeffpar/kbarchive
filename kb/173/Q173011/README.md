---
layout: page
title: "Q173011: HOWTO: Add and Remove Network Connections"
permalink: kb/173/Q173011/
---

## Q173011: HOWTO: Add and Remove Network Connections

	Article: Q173011
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
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
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to programmatically create and remove network
	connections by using Windows API functions. The following example will add a
	connection to a network share and will disconnect from the same share.
	
	MORE INFORMATION
	================
	
	NOTE: This code only includes minimal error trapping. It only reports success or
	failure of the API calls. Any production use of this code should examine the
	values returned by the API functions and handle the errors appropriately. The
	most common error constants are listed for this purpose.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE project.
	
	2. Add a module to the project.
	
	3. Copy and paste the following Declares and Type into the module: (NOTE: If you
	  add this to a Form module, make all entries Private.)
	
	        Declare Function WNetAddConnection2 Lib "mpr.dll" Alias _
	        "WNetAddConnection2A" (lpNetResource As NETRESOURCE, _
	        ByVal lpPassword As String, ByVal lpUserName As String, _
	        ByVal dwFlags As Long) As Long
	
	        Declare Function WNetCancelConnection2 Lib "mpr.dll" Alias _
	        "WNetCancelConnection2A" (ByVal lpName As String, _
	        ByVal dwFlags As Long, ByVal fForce As Long) As Long
	
	        Type NETRESOURCE
	          dwScope As Long
	          dwType As Long
	          dwDisplayType As Long
	          dwUsage As Long
	          lpLocalName As String
	          lpRemoteName As String
	          lpComment As String
	          lpProvider As String
	        End Type
	
	        Public Const NO_ERROR = 0
	        Public Const CONNECT_UPDATE_PROFILE = &H1
	        ' The following includes all the constants defined for NETRESOURCE,
	        ' not just the ones used in this example.
	        Public Const RESOURCETYPE_DISK = &H1
	        Public Const RESOURCETYPE_PRINT = &H2
	        Public Const RESOURCETYPE_ANY = &H0
	        Public Const RESOURCE_CONNECTED = &H1
	        Public Const RESOURCE_REMEMBERED = &H3
	        Public Const RESOURCE_GLOBALNET = &H2
	        Public Const RESOURCEDISPLAYTYPE_DOMAIN = &H1
	        Public Const RESOURCEDISPLAYTYPE_GENERIC = &H0
	        Public Const RESOURCEDISPLAYTYPE_SERVER = &H2
	        Public Const RESOURCEDISPLAYTYPE_SHARE = &H3
	        Public Const RESOURCEUSAGE_CONNECTABLE = &H1
	        Public Const RESOURCEUSAGE_CONTAINER = &H2
	        ' Error Constants:
	        Public Const ERROR_ACCESS_DENIED = 5&
	        Public Const ERROR_ALREADY_ASSIGNED = 85&
	        Public Const ERROR_BAD_DEV_TYPE = 66&
	        Public Const ERROR_BAD_DEVICE = 1200&
	        Public Const ERROR_BAD_NET_NAME = 67&
	        Public Const ERROR_BAD_PROFILE = 1206&
	        Public Const ERROR_BAD_PROVIDER = 1204&
	        Public Const ERROR_BUSY = 170&
	        Public Const ERROR_CANCELLED = 1223&
	        Public Const ERROR_CANNOT_OPEN_PROFILE = 1205&
	        Public Const ERROR_DEVICE_ALREADY_REMEMBERED = 1202&
	        Public Const ERROR_EXTENDED_ERROR = 1208&
	        Public Const ERROR_INVALID_PASSWORD = 86&
	        Public Const ERROR_NO_NET_OR_BAD_PATH = 1203&
	
	4. Add two CommandButtons to Form1. These will be Command1 and Command2 by
	  default.
	
	5. Add the following code to Form1, substituting a valid share name for
	  "\\ServerName\ShareName":
	
	        Option Explicit
	
	        Private Sub Command1_Click()
	        Dim NetR As NETRESOURCE
	        Dim ErrInfo As Long
	        Dim MyPass As String, MyUser As String
	
	        NetR.dwScope = RESOURCE_GLOBALNET
	        NetR.dwType = RESOURCETYPE_DISK
	        NetR.dwDisplayType = RESOURCEDISPLAYTYPE_SHARE
	        NetR.dwUsage = RESOURCEUSAGE_CONNECTABLE
	        NetR.lpLocalName = "X:" ' If undefined, Connect with no device
	        NetR.lpRemoteName = "\\ServerName\ShareName"   ' Your valid share
	        'NetR.lpComment = "Optional Comment"
	        'NetR.lpProvider =    ' Leave this undefined
	
	        ' If the MyPass and MyUser arguments are null (use vbNullString), the
	        ' user context for the process provides the default user name.
	        ErrInfo = WNetAddConnection2(NetR, MyPass, MyUser, _
	        CONNECT_UPDATE_PROFILE)
	        If ErrInfo = NO_ERROR Then
	          MsgBox "Net Connection Successful!", vbInformation, _
	          "Share Connected"
	        Else
	          MsgBox "ERROR: " & ErrInfo & " - Net Connection Failed!", _
	          vbExclamation, "Share not Connected"
	        End If
	        End Sub
	
	        Private Sub Command2_Click()
	        Dim ErrInfo As Long
	        Dim strLocalName As String
	
	        ' You may specify either the lpRemoteName or lpLocalName
	        'strLocalName = "\\ServerName\ShareName"
	        strLocalName = "X:"
	        ErrInfo = WNetCancelConnection2(strLocalName, _
	        CONNECT_UPDATE_PROFILE, False)
	        If ErrInfo = NO_ERROR Then
	          MsgBox "Net Disconnection Successful!", vbInformation, _
	          "Share Disconnected"
	        Else
	          MsgBox "ERROR: " & ErrInfo & " - Net Disconnection Failed!", _
	          vbExclamation, "Share not Disconnected"
	        End If
	        End Sub
	
	Run the project and click on Command1. You will get a Message dialog indicating
	success or failure. If successful, you should be able to look in Windows
	Explorer and see the new connection (unless you left lpLocalName undefined, in
	which case the connection does not show in Explorer). Click Command2 and go to
	Explorer, where you should see that the connection has been removed.
	
	REFERENCES
	==========
	
	For information about limitations using WNetAddConnection2 on different Windows
	platforms, please see the following article in the Microsoft Knowledge Base:
	
	  Q183366 : INFO: WNetAddConnection2 and Multiple User Credentials
	
	
	For more information, please Search on the following topics in either the Win32
	Programmer's Reference or The Microsoft Developer Network Library CD-ROM:
	
	- WNetAddConnection2
	
	- WNetCancelConnection2
	
	- NETRESOURCE
	
	Additional query words: kbDSupport kbdsd kbVBp400 kbVBp500 kbNetGrp kbnetwork kbAPI kbWNet KBWIN32SDK kbVBp600 kbVBp 
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
