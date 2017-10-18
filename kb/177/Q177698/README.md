---
layout: page
title: "Q177698: HOWTO: Call WNetConnectionDialog1 and WNetDisconnectDialog1"
permalink: kb/177/Q177698/
---

## Q177698: HOWTO: Call WNetConnectionDialog1 and WNetDisconnectDialog1

	Article: Q177698
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2000,3.51,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbOSWinNT351 kbOSWinNT400 kbOSWin2000 kbVBp500 kbVBp600 kbOSWin95 kbOSWin98 kbWNet kbGr
	Last Modified: 06-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Win32 Software Development Kit (SDK) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The functions WNetConnectionDialog1 and WNetDisconnectDialog1 are very useful
	for connecting and disconnecting from remote resources. The functions take
	parameters that allow you to change the default values of the connect and
	disconnect dialogs before calling them.
	
	They also provide a common set of error-handling messages to the user
	automatically.
	
	This article demonstrates how to use some of these functions from 32-Bit Visual
	Basic. These functions are available on Windows 2000, Windows NT, Windows 95,
	Windows 98, and Windows Me.
	
	MORE INFORMATION
	================
	
	The hardest part of getting these functions working is getting the strings and
	the NETRESOURCE structure setup in the CONNECTDLGSTRUCT. Fortunately, there are
	only a few strings in the DISCDLGSTRUCT structure.
	
	1. Create a new project with two CommandButtons on the main form.
	
	2. Name the buttons "cmdConnectDlg" (without the quotation marks) and
	  "cmdDisconnectDlg" (without the quotation marks).
	
	3. Add a Textbox to the form and name it "txtDisconnect" (without the quotation
	  marks).
	
	4. Place the following code in the form:
	
	        Option Explicit
	
	        Private Const CONNDLG_RO_PATH = &H1    'Resource path should be
	                                               'read-only.
	        Private Const CONNDLG_CONN_POINT = &H2 'Netware-style movable
	                                               'connection-point enabled.
	        Private Const CONNDLG_USE_MRU = &H4    'Use MRU combobox
	        Private Const CONNDLG_HIDE_BOX = &H8   'Hide persistent connect
	                                               'check box.
	        '/*
	        ' * NOTE:  Set, at most, one of the below flags. If neither flag is
	        ' *        set, then the persistence is set to whatever the user
	        ' *        chose during a previous connection.
	        '
	        Private Const CONNDLG_PERSIST = &H10     'Force persistent
	                                                 'connection.
	        Private Const CONNDLG_NOT_PERSIST = &H20 'Persistent not allowed.
	        ' */ 
	
	        Private Const DISC_UPDATE_PROFILE = &H1  'Remove persistent
	                                                 'connection.
	        Private Const DISC_NO_FORCE = &H40       'Don't force the disconnect
	                                                 'if files are still open.
	        Private Const RESOURCETYPE_DISK = &H1
	        Private Const NO_ERROR = 0
	        Private Const WN_SUCCESS = NO_ERROR
	
	        Private Declare Function MapDrive Lib "mpr.dll" Alias _
	           "WNetConnectionDialog1A" ( _
	           lpConnectDlgStruct As Any) As Long
	        Private Declare Function UnMapDrive Lib "mpr.dll" Alias _
	           "WNetDisconnectDialog1A" ( _
	           lpDiscDlgStruct As Any) As Long
	
	        Private Type CONNECTDLGSTRUCT
	           cbStructure As Long
	           hwndOwner As Long
	           lpConnRes As Long
	           dwFlags As Long
	           dwDevNum As Long
	        End Type
	
	        Private Type DISCDLGSTRUCT
	           cbStructure As Long
	           hwndOwner As Long
	           lpLocalName As String
	           lpRemoteName As String
	           dwFlags As Long
	        End Type
	
	        Private Type NETRESOURCE
	           dwScope As Long
	           dwType As Long
	           dwDisplayType As Long
	           dwUsage As Long
	           lpLocalName As Long
	           lpRemoteName As String
	           lpComment As Long
	           lpProvider As Long
	        End Type
	
	        'Memory Management Routines & Constants
	        Private Const GMEM_FIXED = &H0
	        Private Const GMEM_ZEROINIT = &H40
	        Private Const GPTR = (GMEM_FIXED Or GMEM_ZEROINIT)
	        Private Declare Function GlobalAlloc Lib "kernel32" ( _
	           ByVal wFlags As Long, _
	           ByVal dwBytes As Long) As Long
	        Private Declare Function GlobalFree Lib "kernel32" ( _
	           ByVal hMem As Long) As Long
	        Private Declare Sub CopyMemory Lib "kernel32" Alias "RtlMoveMemory" _
	           (lpOut As Any, _
	           lpIn As Any, _
	           ByVal cbCopy As Long)
	
	        Private Sub cmdConnectDlg_Click()
	           Dim cs As CONNECTDLGSTRUCT, nr As NETRESOURCE, res As Long
	           'Setup the NETRESOURCE structure.
	           nr.lpRemoteName = "\\servername\sharename"
	           nr.dwType = RESOURCETYPE_DISK
	
	           With cs 'Setup the connection dialog structure.
	              .cbStructure = LenB(cs)
	              .hwndOwner = Me.hWnd
	              .lpConnRes = GlobalAlloc(GPTR, LenB(nr))
	              CopyMemory ByVal .lpConnRes, nr, LenB(nr)
	              .dwFlags = CONNDLG_USE_MRU Or _
	                         CONNDLG_HIDE_BOX Or _
	                         CONNDLG_NOT_PERSIST
	           End With
	
	           res = MapDrive(cs) 'Call WNetConnectionDialog1.
	           If res = WN_SUCCESS Then
	              MsgBox "MapDrive Succeeded."
	              txtDisconnect.Text = Chr$(cs.dwDevNum + 64) & ":"
	           Else
	              MsgBox "Error: " & Err.LastDllError
	           End If
	           GlobalFree (cs.lpConnRes)
	        End Sub
	
	        Private Sub cmdDisconnectDlg_Click()
	           Dim ds As DISCDLGSTRUCT, res As Long
	           'Setup the disconnect dialog structure.
	           ds.cbStructure = LenB(ds)
	           ds.hwndOwner = Me.hWnd
	           ds.lpLocalName = txtDisconnect.Text
	           ds.dwFlags = DISC_NO_FORCE Or DISC_UPDATE_PROFILE
	
	           res = UnMapDrive(ds) 'Call WnetDisconnectDialog1.
	           If res = WN_SUCCESS Then
	              MsgBox "UnMapDrive Succeeded."
	           Else
	              MsgBox "Error: " & Err.LastDllError
	           End If
	        End Sub
	
	5. Run the program. Click the cmdConnectDlg button, and connect to a network
	  share. The drive letter that is connected is placed in the txtDisconnect text
	  box. Now click the cmdDisconnectDlg button. The mapped drive will be
	  disconnected.
	
	6. Click the cmdDisconnectDlg button again: On Windows NT and Windows 2000, an
	  error will be displayed and then the error value will be returned by the
	  WNetDisconnectDialog1 function.
	
	7. Click the cmdConnectDlg button, and pass an invalid server name to the
	  dialog. Another error message will appear explaining the problem and, again,
	  passing the error back to the program.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWinNT351 kbOSWinNT400 kbOSWin2000 kbVBp500 kbVBp600 kbOSWin95 kbOSWin98 kbWNet kbGrpDSVB kbOSWinME 
	Technology        : kbVBSearch kbWin32SDKSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbSDKSearch kbWin32sSearch
	Version           : :2000,3.51,4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
