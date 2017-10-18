---
layout: page
title: "Q218965: HOWTO: Obtain the Owner of a File on Windows NT"
permalink: kb/218/Q218965/
---

## Q218965: HOWTO: Obtain the Owner of a File on Windows NT

	Article: Q218965
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbAPI kbKernBase kbOSWinNT kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbCodeSnippet
	Last Modified: 05-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- the operating system: Microsoft Windows NT, versions 3.5, 3.51, 4.0 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Retrieving the owner of a file requires obtaining the security descriptor for
	the file, then using the security descriptor to get a pointer to the owner's
	Security Identifier (SID). Finally, you use the owner's SID to obtain the owner
	and domain name of the file.
	
	This article provides a Visual Basic sample code that obtains the owner of a file
	on Microsoft Windows NT.
	
	MORE INFORMATION
	================
	
	The following sample code retrieves the owner of the file notepad.exe, which is
	located in the default Windows folder.
	
	NOTE: If the file is on an NTFS partition, this code returns the assigned owner
	of the file, but if it is on a FAT partition, the owner will be "Everyone".
	
	1. Start a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. Place a command button (Command1) on Form1.
	
	3. Paste the following code into the General Declarations section of Form1:
	
	     Option Explicit
	
	     Private Declare Function GetFileSecurity Lib "advapi32.dll" _
	        Alias "GetFileSecurityA" ( _
	        ByVal lpFileName As String, _
	        ByVal RequestedInformation As Long, _
	        pSecurityDescriptor As Byte, _
	        ByVal nLength As Long, _
	        lpnLengthNeeded As Long _
	        ) As Long
	
	     Private Declare Function GetSecurityDescriptorOwner Lib "advapi32.dll" _
	        (pSecurityDescriptor As Any, _
	        pOwner As Long, _
	        lpbOwnerDefaulted As Long) As Long
	
	     Private Declare Function LookupAccountSid Lib "advapi32.dll" _
	        Alias "LookupAccountSidA" ( _
	        ByVal lpSystemName As String, _
	        ByVal Sid As Long, _
	        ByVal name As String, _
	        cbName As Long, _
	        ByVal ReferencedDomainName As String, _
	        cbReferencedDomainName As Long, _
	        peUse As Long) As Long
	
	     Private Declare Function GetWindowsDirectory Lib "kernel32" _
	        Alias "GetWindowsDirectoryA" ( _
	        ByVal lpBuffer As String, _
	        ByVal nSize As Long) As Long
	
	     Private Const OWNER_SECURITY_INFORMATION = &H1
	     Private Const ERROR_INSUFFICIENT_BUFFER = 122&
	     Private Const MAX_PATH = 255
	
	     Sub Command1_Click()
	
	        Dim szfilename As String   ' File name to retrieve the owner for
	        Dim bSuccess As Long       ' Status variable
	        Dim sizeSD As Long         ' Buffer size to store Owner's SID
	        Dim pOwner As Long         ' Pointer to the Owner's SID
	        Dim name As String         ' Name of the file owner
	        Dim domain_name As String  ' Name of the first domain for the owner
	        Dim name_len As Long       ' Required length for the owner name
	        Dim domain_len As Long     ' Required length for the domain name
	        Dim sdBuf() As Byte        ' Buffer for Security Descriptor
	        Dim nLength As Long        ' Length of the Windows Directory
	        Dim deUse As Long          ' Pointer to a SID_NAME_USE enumerated 
	                                   ' type indicating the type of the account
	
	      ' Initialize some required variables.
	
	        bSuccess = 0
	        name = ""
	        domain_name = ""
	        name_len = 0
	        domain_len = 0
	        pOwner = 0
	        szfilename = Space(MAX_PATH)
	
	     ' Obtain the path to the Windows Directory and use the notepad.exe file
	     ' as it should be on the system.
	
	     nLength = GetWindowsDirectory(szfilename, Len(szfilename))
	     If nLength = 0 Then
	       MsgBox "Unable to Obtain the Windows Directory"
	     End If
	     szfilename = Left$(szfilename, nLength) & "\notepad.exe"
	
	     ' Call GetFileSecurity the first time to obtain the size of the
	     ' buffer required for the Security Descriptor.
	
	     bSuccess = GetFileSecurity( _
	             szfilename, _
	             OWNER_SECURITY_INFORMATION, _
	             0, _
	             0&, _
	             sizeSD)
	
	     If (bSuccess = 0) And _
	        (Err.LastDllError <> ERROR_INSUFFICIENT_BUFFER) Then
	           MsgBox "GetLastError returned  : " & Err.LastDllError
	     End If
	
	     ' Create a buffer of the required size and call GetFileSecurity again.
	
	        ReDim sdBuf(0 To sizeSD - 1) As Byte
	
	     ' Fill the buffer with the security descriptor of the object specified
	     ' by the szfilename parameter. The calling process must have the right
	     ' to view the specified aspects of the object's security status.
	
	     bSuccess = GetFileSecurity( _
	             szfilename, _
	             OWNER_SECURITY_INFORMATION, _
	             sdBuf(0), _
	             sizeSD, _
	             sizeSD)
	
	     If (bSuccess <> 0) Then
	
	     ' Obtain the owner's SID from the Security Descriptor.
	     '
	        bSuccess = GetSecurityDescriptorOwner(sdBuf(0), pOwner, 0&)
	        If (bSuccess = 0) Then
	            MsgBox "GetLastError returned : " & Err.LastDllError
	        End If
	
	     ' Retrieve the name of the account and the name of the first
	     ' domain on which this SID is found.  Passes in the Owner's SID
	     ' obtained previously.  Call LookupAccountSid twice, the first time
	     ' to obtain the required size of the owner and domain names.
	
	        bSuccess = LookupAccountSid(vbNullString, pOwner, name, name_len, _
	                                    domain_name, domain_len, deUse)
	        If (bSuccess = 0) And _
	           (Err.LastDllError <> ERROR_INSUFFICIENT_BUFFER) Then
	           MsgBox "GetLastError returned : " & Err.LastDllError
	        End If
	
	     '  Allocate the required space in the name and domain_name string
	     '  variables. Allocate 1 byte less to avoid the appended NULL character.
	     '
	        name = Space(name_len - 1)
	        domain_name = Space(domain_len - 1)
	
	     '  Call LookupAccountSid again to actually fill in the name of the owner
	     '  and the first domain.
	     '
	        bSuccess = LookupAccountSid(vbNullString, pOwner, name, name_len, _
	                                    domain_name, domain_len, deUse)
	        If bSuccess = 0 Then
	            MsgBox "GetLastError returned : " & Err.LastDllError
	        End If
	
	        MsgBox "The Owner of " & szfilename & " is " & name
	
	        End If
	
	     End Sub
	
	4. Press F5 to run the application and then click Command1 to display the owner
	  of the file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbKernBase kbOSWinNT kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbCodeSnippet 
	Technology        : kbOSWin2000 kbVBSearch kbAudDeveloper kbOSWinSearch kbOSWinNT350 kbOSWinNT400 kbOSWinNT351 kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbOSWinNTSearch
	Version           : WINDOWS:4.0,5.0,6.0; winnt:3.5,3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
