---
layout: page
title: "Q192689: HOWTO: Get UNC Path From a Mapped Network Share's Drive Letter"
permalink: /kb/192/Q192689/
---

## Q192689: HOWTO: Get UNC Path From a Mapped Network Share's Drive Letter

{% raw %}

	Article: Q192689
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 5.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Most network client software allows you to refer to network drives through the
	use of mapped drive letters or the use of syntax known as UNC notation
	(Universal Naming Convention). Use of UNC notation requires that you know the
	name of the server and share, while a mapped drive letter only requires the
	drive letter once the connection has been established. At times, it may be
	necessary to determine the UNC path to a server given only it's mapped drive
	letter. This article demonstrates a method for obtaining this information.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Map a drive letter to any available network share and make note of the letter
	  assigned.
	
	2. Create a new Visual Basic project. Form1 is created by default.
	
	3. Add a CommandButton to Form1.
	
	4. Paste the following code into Form1's code window:
	
	        Option Explicit
	
	        Private Const RESOURCETYPE_ANY = &H0
	        Private Const RESOURCE_CONNECTED = &H1
	
	        Private Type NETRESOURCE
	           dwScope As Long
	           dwType As Long
	           dwDisplayType As Long
	           dwUsage As Long
	           lpLocalName As Long
	           lpRemoteName As Long
	           lpComment As Long
	           lpProvider As Long
	        End Type
	
	        Private Declare Function WNetOpenEnum Lib "mpr.dll" Alias _
	           "WNetOpenEnumA" (ByVal dwScope As Long, ByVal dwType As Long, _
	           ByVal dwUsage As Long, lpNetResource As Any, lphEnum As Long) _
	           As Long
	
	        Private Declare Function WNetEnumResource Lib "mpr.dll" Alias _
	           "WNetEnumResourceA" (ByVal hEnum As Long, lpcCount As Long, _
	           lpBuffer As Any, lpBufferSize As Long) As Long
	
	        Private Declare Function WNetCloseEnum Lib "mpr.dll" ( _
	           ByVal hEnum As Long) As Long
	
	        Private Declare Function lstrlen Lib "kernel32" Alias "lstrlenA" _
	           (ByVal lpString As Any) As Long
	
	        Private Declare Function lstrcpy Lib "kernel32" Alias "lstrcpyA" _
	           (ByVal lpString1 As Any, ByVal lpString2 As Any) As Long
	
	        Private Sub Command1_Click()
	           MsgBox LetterToUNC("F:") ' <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	        End Sub
	
	        Function LetterToUNC(DriveLetter As String) As String
	           Dim hEnum As Long
	           Dim NetInfo(1023) As NETRESOURCE
	           Dim entries As Long
	           Dim nStatus As Long
	           Dim LocalName As String
	           Dim UNCName As String
	           Dim i As Long
	           Dim r As Long
	
	           ' Begin the enumeration
	           nStatus = WNetOpenEnum(RESOURCE_CONNECTED, RESOURCETYPE_ANY, _
	              0&, ByVal 0&, hEnum)
	
	           LetterToUNC = "Drive Letter Not Found"
	
	           'Check for success from open enum
	           If ((nStatus = 0) And (hEnum <> 0)) Then
	              ' Set number of entries
	              entries = 1024
	
	              ' Enumerate the resource
	              nStatus = WNetEnumResource(hEnum, entries, NetInfo(0), _
	                 CLng(Len(NetInfo(0))) * 1024)
	
	              ' Check for success
	              If nStatus = 0 Then
	                 For i = 0 To entries - 1
	                    ' Get the local name
	                    LocalName = ""
	                    If NetInfo(i).lpLocalName <> 0 Then
	                       LocalName = Space(lstrlen(NetInfo(i).lpLocalName) + 1)
	                       r = lstrcpy(LocalName, NetInfo(i).lpLocalName)
	                    End If
	
	                    ' Strip null character from end
	                    If Len(LocalName) <> 0 Then
	                       LocalName = Left(LocalName, (Len(LocalName) - 1))
	                    End If
	
	                    If UCase$(LocalName) = UCase$(DriveLetter) Then
	                       ' Get the remote name
	                       UNCName = ""
	                       If NetInfo(i).lpRemoteName <> 0 Then
	                          UNCName = Space(lstrlen(NetInfo(i).lpRemoteName) _
	                             + 1)
	                          r = lstrcpy(UNCName, NetInfo(i).lpRemoteName)
	                       End If
	
	                       ' Strip null character from end
	                       If Len(UNCName) <> 0 Then
	                          UNCName = Left(UNCName, (Len(UNCName) _
	                             - 1))
	                       End If
	
	                       ' Return the UNC path to drive
	                       LetterToUNC = UNCName
	
	                       ' Exit the loop
	                       Exit For
	                    End If
	                 Next i
	              End If
	           End If
	
	           ' End enumeration
	           nStatus = WNetCloseEnum(hEnum)
	        End Function
	
	5. Change the code in Command1's Click event to refer to the drive letter
	  created by step 1.
	
	6. Run the sample.
	
	7. Click the CommandButton. The UNC path to the mapped drive is shown in a
	  message box.
	
	Additional query words: kbDSupport kbDSD kbVBp kbVBp400 kbVBp500 kbVBp600 KbVBA kbAPI kbSDKWin32 kbWNet
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : :4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
