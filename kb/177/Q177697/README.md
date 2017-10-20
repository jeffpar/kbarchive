---
layout: page
title: "Q177697: HOWTO: List Local Network Connections with WNetEnumResources"
permalink: /kb/177/Q177697/
---

## Q177697: HOWTO: List Local Network Connections with WNetEnumResources

{% raw %}

	Article: Q177697
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2000,3.51,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbOSWinNT351 kbOSWinNT400 kbOSWin2000 kbVBp400 kbVBp500 kbVBp600 kbOSWin95
	Last Modified: 06-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	- the operating system: Microsoft Windows NT, versions 3.51, 4.0 
	- the operating system: Microsoft Windows 95 
	- Microsoft Win32 Software Development Kit (SDK) 
	- the operating system: Microsoft Windows 2000 
	- the operating system: Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	WNetOpenEnum and WNetEnumResources can be used to list the local drives, printer
	ports that have been redirected, and any UNC connections on a machine running
	Windows 2000, Windows NT, Windows Me, Windows 98, or Windows 95.
	
	The code below demonstrates how to do this from Visual Basic by first calling
	WNetOpenEnum with the dwType parameter set to RESOURCETYPE_ANY. A valid handle
	returned via the last parameter is passed to WNetEnumResources. This function
	fills a temporary buffer with an array of NETRESOURCE structures, which includes
	information about the local network connections.
	
	Note that this functionality will not list the resources that are redirected on a
	remote machine. No such functionality exists in either operating system.
	
	MORE INFORMATION
	================
	
	The sample includes one form and one module. Follow the steps below to create
	the sample.
	
	1. Create a new project and add the following code to the form:
	
	        Option Explicit
	
	        Private Const GMEM_FIXED = &H0
	        Private Const GMEM_ZEROINIT = &H40
	        Private Const GPTR = (GMEM_FIXED Or GMEM_ZEROINIT)
	
	        Private Declare Function GlobalAlloc Lib "KERNEL32" ( _
	           ByVal wFlags As Long, ByVal dwBytes As Long) As Long
	        Private Declare Function GlobalFree Lib "KERNEL32" ( _
	           ByVal hMem As Long) As Long
	
	        Private Declare Sub CopyMemory Lib "KERNEL32" Alias "RtlMoveMemory" _
	          (hpvDest As Any, hpvSource As Any, ByVal cbCopy As Long)
	
	        Private Declare Function CopyPointer2String Lib "KERNEL32" _
	           Alias "lstrcpyA" ( _
	           ByVal NewString As String, ByVal OldString As Long) As Long
	
	        Private Sub Form_click()
	           Dim hEnum As Long, lpBuff As Long, nr As NETRESOURCE
	           Dim cbBuff As Long, cCount As Long
	           Dim p As Long, res As Long, i As Long
	
	           'Setup the NETRESOURCE input structure.
	           nr.dwUsage = RESOURCEUSAGE_CONTAINER
	           nr.lpRemoteName = 0
	           cbBuff = 1000
	           cCount = &HFFFFFFFF
	
	           'Open a Net enumeration operation handle: hEnum.
	           res = WNetOpenEnum(RESOURCE_CONNECTED, RESOURCETYPE_ANY, _
	                              0, nr, hEnum)
	           If res = 0 Then
	              'Create a buffer large enough for the results.
	              '1000 bytes should be sufficient.
	              lpBuff = GlobalAlloc(GPTR, cbBuff)
	              'Call the enumeration function.
	              res = WNetEnumResource(hEnum, cCount, lpBuff, cbBuff)
	              If res = 0 Then
	                 p = lpBuff
	                 Cls
	                 'WNetEnumResource fills the buffer with an array of
	                 'NETRESOURCE structures. Walk through the list and print
	                 'each local and remote name.
	                 For i = 1 To cCount
	                    CopyMemory nr, ByVal p, LenB(nr)
	                    p = p + LenB(nr)
	                    Print PointerToString(nr.lpLocalName), _
	                          PointerToString(nr.lpRemoteName)
	                 Next i
	              Else
	                 MsgBox "Error: " & Err.LastDllError, vbOKOnly, _
	                        "WNetEnumResources"
	              End If
	              If lpBuff <> 0 Then GlobalFree (lpBuff)
	              WNetCloseEnum (hEnum) 'Close the enumeration
	           Else
	              MsgBox "Error: " & Err.LastDllError, vbOKOnly, "WNetOpenEnum"
	           End If
	        End Sub
	
	        Private Function PointerToString(p As Long) As String
	           'The values returned in the NETRESOURCE structures are pointers to
	           'ANSI strings so they need to be converted to Visual Basic
	     Strings.
	           Dim s As String
	           s = String(255, Chr$(0))
	           CopyPointer2String s, p
	           PointerToString = Left(s, InStr(s, Chr$(0)) - 1)
	        End Function
	
	2. Add a new module to the project and add the following code:
	
	        Option Explicit
	
	        Public Type NETRESOURCE
	                dwScope As Long
	                dwType As Long
	                dwDisplayType As Long
	                dwUsage As Long
	                lpLocalName As Long
	                lpRemoteName As Long
	                lpComment As Long
	                lpProvider As Long
	        End Type
	
	        Public Declare Function WNetOpenEnum Lib "mpr.dll" Alias _
	            "WNetOpenEnumA" ( _
	            ByVal dwScope As Long, _
	            ByVal dwType As Long, _
	            ByVal dwUsage As Long, _
	            lpNetResource As Any, _
	            lphEnum As Long) As Long
	
	        Public Declare Function WNetEnumResource Lib "mpr.dll" Alias _
	            "WNetEnumResourceA" ( _
	            ByVal hEnum As Long, _
	            lpcCount As Long, _
	            ByVal lpBuffer As Long, _
	            lpBufferSize As Long) As Long
	
	        Public Declare Function WNetCloseEnum Lib "mpr.dll" ( _
	            ByVal hEnum As Long) As Long
	
	        'RESOURCE ENUMERATION.
	        Public Const RESOURCE_CONNECTED = &H1
	        Public Const RESOURCE_GLOBALNET = &H2
	        Public Const RESOURCE_REMEMBERED = &H3
	
	        Public Const RESOURCETYPE_ANY = &H0
	        Public Const RESOURCETYPE_DISK = &H1
	        Public Const RESOURCETYPE_PRINT = &H2
	        Public Const RESOURCETYPE_UNKNOWN = &HFFFF
	
	        Public Const RESOURCEUSAGE_CONNECTABLE = &H1
	        Public Const RESOURCEUSAGE_CONTAINER = &H2
	        Public Const RESOURCEUSAGE_RESERVED = &H80000000
	
	3. Run the program. When you click on the form, a list of all the local network
	  connections should be displayed, along with the shares they are connected to.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbOSWinNT351 kbOSWinNT400 kbOSWin2000 kbVBp400 kbVBp500 kbVBp600 kbOSWin95 kbOSWin98 kbWNet kbGrpDSVB kbOSWinME 
	Technology        : kbOSWin2000 kbOSWin95 kbVBSearch kbWin32SDKSearch kbAudDeveloper kbOSWinME kbOSWinSearch kbOSWinNT400 kbOSWinNT351 kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbSDKSearch kbVB400Search kbVB400 kbWin32sSearch kbOSWinNTSearch
	Version           : :2000,3.51,4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
