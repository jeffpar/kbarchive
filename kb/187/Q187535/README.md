---
layout: page
title: "Q187535: HOWTO: Change Passwords Programmatically in Windows NT"
permalink: /kb/187/Q187535/
---

## Q187535: HOWTO: Change Passwords Programmatically in Windows NT

{% raw %}

	Article: Q187535
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbnetwork kbOSWinNT kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to change passwords on accounts in Windows NT or
	Windows 2000 using Visual Basic.
	
	MORE INFORMATION
	================
	
	WARNING: One or more of the following functions are discussed in this article;
	VarPtr, VarPtrArray, VarPtrStringArray, StrPtr, ObjPtr. These functions are not
	supported by Microsoft Technical Support. They are not documented in the Visual
	Basic documentation and are provided in this Knowledge Base article "as is."
	Microsoft does not guarantee that they will be available in future releases of
	Visual Basic:
	
	There are several considerations that apply when changing passwords:
	
	- Net function calls are Unicode only. All strings passed to and returned by
	  these functions are in Unicode form.
	
	- When targeting a domain controller for account update operations, be sure to
	  target the primary domain controller for the domain. The account settings are
	  replicated by the primary domain controller to each backup domain controller
	  as appropriate. The NetGetDCName() function call can be used to get the
	  primary domain controller computer name from a domain name.
	
	- If the caller is an administrator or account operator on the target
	  machine/domain, the NetUserSetInfo() function call at info-level 1003 can be
	  used to override the existing password. The caller does not need to know the
	  existing password. Note that passwords can be provided for accounts during
	  account creation time using NetUserAdd().
	
	- If the caller is a non-administrator on the target machine/domain, the
	  NetUserChangePassword() function call can be used to override the existing
	  password. In order for this call to succeed, the caller must supply the
	  correct current password. NetUserChangePassword() behaves differently than
	  other Net function calls with respect to the first parameter that specifies
	  either a domain name or machine name. If this parameter is NULL, the domain
	  name of the caller is used. Keep this in mind if you intend to change
	  passwords on accounts outside the domain of the logged-on caller. You should
	  explicitly provide the target domain name.
	
	Creating the Project
	--------------------
	
	1. Start a new Visual Basic Standard EXE Project, Form1 is created by default.
	
	2. Add four labels, four text boxes, and two command buttons to Form1 with the
	  following captions:
	
	     Name        Caption
	     -----       --------
	     Label1       UserName:
	     Label2       Machine/Domain:
	     Label3       Old Password:
	     Label4       New Password:
	     txtUser      <empty>
	     txtMachine   <empty>
	     txtOld       <empty>
	     txtNew       <empty>
	     cmdOK        &OK
	     cmdClose     &Close
	
	3. Set the Passwordchar property of txtOld and txtNew to "*".
	
	4. Paste the following code into the declarations section of Form1:
	
	      Option Explicit
	
	      Const FORMAT_MESSAGE_FROM_HMODULE = &H800
	      Const FORMAT_MESSAGE_FROM_SYSTEM = &H1000
	
	      Const NERR_BASE = 2100
	      Const MAX_NERR = NERR_BASE + 899 ' This is the last error in
	                                       ' NERR   range.
	      Const LOAD_LIBRARY_AS_DATAFILE = &H2
	
	      Private Declare Function LoadLibraryEx Lib "kernel32" Alias  _
	         "LoadLibraryExA" (ByVal lpLibFileName As String, _
	         ByVal hFile As Long, ByVal dwFlags As Long) As Long
	
	      Private Declare Function FreeLibrary Lib "kernel32" _
	         (ByVal hLibModule As Long) As Long
	
	      Private Declare Function NetApiBufferFree& Lib "netapi32" _
	         (ByVal Buffer As Long)
	
	      Private Declare Sub lstrcpyW Lib "kernel32" _
	         (dest As Any, ByVal src As Any)
	
	      Private Declare Function FormatMessage Lib "kernel32" Alias _
	         "FormatMessageA" (ByVal dwFlags As Long, _
	         ByVal lpSource As Long, _
	         ByVal dwMessageId As Long, _
	         ByVal dwLanguageId As Long, ByVal lpBuffer As String, _
	         ByVal nSize As Long, Arguments As Any) As Long
	
	      Private Declare Function NetUserSetInfo Lib "netapi32.dll" _
	         (ByVal ServerName As String, ByVal Username As String, _
	         ByVal Level As Long, UserInfo As Any, ParmError As Long) As Long
	
	      Private Declare Function NetGetDCName Lib "netapi32.dll" ( _
	         ServerName As Long, domainname As Byte, bufptr As Long) As Long
	
	      Private Declare Function NetUserChangePassword Lib "netapi32.dll" ( _
	         ByVal domainname As String, ByVal Username As String, _
	         ByVal OldPassword As String, ByVal NewPassword As String) As Long
	
	      Private Type USER_INFO_1003
	         usri1003_password As Long
	      End Type
	
	      Private Sub cmdClose_Click()
	        Unload Me
	      End Sub
	
	      Private Sub cmdOK_Click()
	        Dim sServer As String, sUser As String
	        Dim sNewPass As String, sOldPass As String
	        Dim UI1003 As USER_INFO_1003
	        Dim dwLevel As Long
	        Dim lRet As String
	        Dim sNew As String
	
	        ' StrConv Functions are necessary since VB will perform
	        ' UNICODE/ANSI translation before passing strings to the NETAPI
	        ' functions
	
	        MousePointer = vbHourglass
	        sUser = StrConv(txtUser, vbUnicode)
	        sNewPass = StrConv(txtNew, vbUnicode)
	
	        'See if this is Domain or Computer referenced
	        If Left(txtMachine, 2) = "\\" Then
	          sServer = StrConv(txtMachine, vbUnicode)
	        Else
	          ' Domain was referenced, get the Primary Domain Controller
	          sServer = StrConv(GetPrimaryDCName(txtMachine), vbUnicode)
	        End If
	
	        If txtOld = "" Then
	           ' Administrative over-ride of existing password.
	           ' Does not require old password
	
	           dwLevel = 1003
	           sNew = txtNew
	           UI1003.usri1003_password = StrPtr(sNew)
	           lRet = NetUserSetInfo(sServer, sUser, dwLevel, UI1003, 0&)
	        Else
	           ' Set the Old Password and attempt to change the user's password
	           sOldPass = StrConv(txtOld, vbUnicode)
	           lRet = NetUserChangePassword(sServer, sUser, sOldPass, sNewPass)
	        End If
	
	        MousePointer = vbDefault
	        If lRet <> 0 Then
	           DisplayError lRet
	        Else
	           MsgBox "Password Change was Successful"
	        End If
	
	      End Sub
	      Private Sub DisplayError(ByVal lCode As Long)
	         Dim sMsg As String
	         Dim sRtrnCode As String
	         Dim lFlags As Long
	         Dim hModule As Long
	         Dim lRet As Long
	
	          hModule = 0
	          sRtrnCode = Space$(256)
	          lFlags = FORMAT_MESSAGE_FROM_SYSTEM
	
	           ' if lRet is in the network range, load the message source
	
	           If (lCode >= NERR_BASE And lCode <= MAX_NERR) Then
	              hModule = LoadLibraryEx("netmsg.dll", 0&, _
	                        LOAD_LIBRARY_AS_DATAFILE)
	
	              If (hModule <> 0) Then
	                  lFlags = lFlags Or FORMAT_MESSAGE_FROM_HMODULE
	              End If
	
	           End If
	
	          ' Call FormatMessage() to allow for message text to be acquired
	          ' from the system or the supplied module handle.
	          '
	
	          lRet = FormatMessage(lFlags, hModule, lCode, 0&, _
	                               sRtrnCode, 256&, 0&)
	          If lRet = 0 Then
	             MsgBox "FormatMessage Error : "  & Err.LastDllError
	          End If
	
	          ' if you loaded a message source, unload it.
	          '
	          If (hModule <> 0) Then
	            FreeLibrary (hModule)
	          End If
	
	       '//... now display this string
	       sMsg = "ERROR: " & lCode & " - " & sRtrnCode
	
	       MsgBox sMsg
	
	      End Sub
	      Public Function GetPrimaryDCName(ByVal DName As String) As String
	
	         Dim DCName As String, DCNPtr As Long
	         Dim DNArray() As Byte, DCNArray(100) As Byte
	         Dim result As Long
	
	         DNArray = DName & vbNullChar
	         ' Lookup the Primary Domain Controller
	         result = NetGetDCName(0&, DNArray(0), DCNPtr)
	         If result <> 0 Then
	            Msgbox "Error: " & result
	            Exit Function
	         End If
	         lstrcpyW DCNArray(0), DCNPtr
	         result = NetApiBufferFree(DCNPtr)
	         DCName = DCNArray()
	         GetPrimaryDCName = Left(DCName, InStr(DCName, Chr(0)) - 1)
	
	      End Function
	
	5. Run the Application.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbOSWinNT kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
