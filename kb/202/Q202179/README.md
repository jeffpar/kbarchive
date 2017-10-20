---
layout: page
title: "Q202179: HOWTO: Call Windows APIs with Special Requirements from VB"
permalink: /kb/202/Q202179/
---

## Q202179: HOWTO: Call Windows APIs with Special Requirements from VB

{% raw %}

	Article: Q202179
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbSDKWin32 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some Microsoft Windows API functions require an extra workaround when they are
	called from Visual Basic because Visual Basic cannot handle pointer type
	variables. This behavior is very common when you call Microsoft Windows NT
	security and printer related APIs. This article discusses the following cases:
	
	- Case 1 - A function that returns a variable-length structure.
	
	- Case 2 - A function that returns a structure by using a second level of
	  indirection (requiring a pointer to a pointer as a parameter).
	
	- Case 3 - Using a structure returned with a second level of indirection.
	
	MORE INFORMATION
	================
	
	This article provides some sample code that uses Windows NT security APIs to
	illustrate the preceding three cases. A Windows NT computer is required to test
	the sample.
	
	Step-by-Step Example
	--------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a CommandButton control (Command1) to Form1.
	
	3. In the Command1_Click event, add the following line:
	
	      MySample
	
	4. From the Project menu, add a new .bas module.
	
	5. Paste the following code into the module:
	
	  Option Explicit
	
	  ' structures
	  Type ACL_SIZE_INFORMATION
	          AceCount As Long
	          AclBytesInUse As Long
	          AclBytesFree As Long
	  End Type
	
	  Type ACE_HEADER
	          AceType As Byte
	          AceFlags As Byte
	          AceSize As Integer
	  End Type
	
	  ' constants
	  Public Const ERROR_SUCCESS = 0&
	  Public Const ERROR_INSUFFICIENT_BUFFER = 122  ' dderror
	  Public Const HKEY_CLASSES_ROOT = &H80000000
	  Public Const FORMAT_MESSAGE_FROM_SYSTEM = &H1000
	  Public Const DACL_SECURITY_INFORMATION = &H4&
	  Public Const AclSizeInformation = 2  ' from the ACL_INFORMATION_CLASS enum
	
	  ' API function declarations
	  Declare Sub CopyMemory Lib "kernel32" Alias "RtlMoveMemory" _
	    (lpDest As Any, lpSrc As Any, ByVal Length As Long)
	  Declare Function RegGetKeySecurity Lib "advapi32.dll" _
	    (ByVal hKey As Long, ByVal SecurityInformation As Long, _
	    pSecurityDescriptor As Any, lpcbSecurityDescriptor As Long) As Long
	  Declare Function FormatMessage Lib "kernel32" Alias "FormatMessageA" _
	    (ByVal dwFlags As Long, lpSource As Any, ByVal dwMessageId As Long, _
	    ByVal dwLanguageId As Long, ByVal lpBuffer As String, _
	    ByVal nSize As Long, Arguments As Long) As Long
	  Declare Function GetSecurityDescriptorDacl Lib "advapi32.dll" _
	    (pSecurityDescriptor As Any, lpbDaclPresent As Long, pDacl As Long, _
	    lpbDaclDefaulted As Long) As Long
	  Declare Function GetAclInformation Lib "advapi32.dll" (pDacl As Any, _
	    pAclInformation As Any, ByVal nAclInformationLength As Long, _
	    ByVal dwAclInformationClass As Integer) As Long
	  Declare Function GetAce Lib "advapi32.dll" (pDacl As Any, _
	    ByVal dwAceIndex As Long, pAce As Any) As Long
	
	  Sub MySample()
	      Dim lErrorCode As Long
	      Dim lSdSize As Long
	      Dim bDaclExist As Long, bDaclPresent As Long ' booleans returned in API's
	      Dim pDacl As Long  ' to store the address of a DACL
	      Dim pAce As Long   ' to store the address of a ACE
	      Dim i As Long
	      Dim SecurityDescriptor() As Byte
	      Dim aclSizeInfo As ACL_SIZE_INFORMATION
	      Dim AceHeader As ACE_HEADER
	
	  '
	  '   CASE 1
	  '
	
	      ' initializing the buffer with a very low size
	      lSdSize = 0
	      ReDim SecurityDescriptor(lSdSize)
	      
	      ' first call is basically only to find out the required buffer size
	      lErrorCode = RegGetKeySecurity(HKEY_CLASSES_ROOT, _
	        DACL_SECURITY_INFORMATION, SecurityDescriptor(0), lSdSize)
	      If lErrorCode = ERROR_INSUFFICIENT_BUFFER Then
	          ' redimensioning the buffer and calling the function again
	          ' the lSdSize returned the required size from the previous call
	          ReDim SecurityDescriptor(lSdSize)
	          lErrorCode = RegGetKeySecurity(HKEY_CLASSES_ROOT, _
	            DACL_SECURITY_INFORMATION, SecurityDescriptor(0), lSdSize)
	      End If
	      ' display message error if not successful
	      If lErrorCode <> ERROR_SUCCESS Then
	          DisplayError lErrorCode, "RegGetKeySecurity"
	          Exit Sub
	      End If
	
	  '
	  '  CASE 2
	  '
	
	      ' get a pointer (pDacl) to the discretionary access-control list (ACL)
	      ' pDacl was declared as a variable of type Long and will store the 
	      ' address of the DACL list
	      lErrorCode = GetSecurityDescriptorDacl(SecurityDescriptor(0), _
	        bDaclPresent, pDacl, bDaclExist)
	      If lErrorCode = 0 Then
	          lErrorCode = Err.LastDllError
	          DisplayError lErrorCode, "GetSecurityDescriptorDacl"
	          Exit Sub
	      End If
	      
	      If pDacl = 0 Then
	          MsgBox "Key has a NULL DACL"
	          Exit Sub
	      End If
	      
	      ' retrieving DACL's information; information is returned in the 
	      ' aclSizeInfo structure
	      lErrorCode = GetAclInformation(ByVal pDacl, aclSizeInfo, _
	        Len(aclSizeInfo), AclSizeInformation)
	      If lErrorCode = 0 Then
	          lErrorCode = Err.LastDllError
	          DisplayError lErrorCode, "GetAclInformation"
	          Exit Sub
	      End If
	      
	      '
	      ' if Dacl is present, get ACE's information
	      ' for each ACE in the DACL list we are going to display the ACE's size
	      '
	      If bDaclPresent Then
	          MsgBox "DACL contains " & aclSizeInfo.AceCount & " ACEs"
	          If aclSizeInfo.AceCount > 0 Then
	              For i = 0 To aclSizeInfo.AceCount - 1
	                  ' The GetAce function obtains a pointer to an ACE in an ACL
	                  ' GetAce expects a reference to DACL in the first 
	                  ' parameter, thus we pass it ByVal
	                  ' GetAce returns the address of an ACE in the second 
	                  ' parameter, thus we pass pAce ByRef
	                  ' pAce was declared as a variable of type Long and will 
	                  ' store the address of an ACE
	                  lErrorCode = GetAce(ByVal pDacl, i, pAce)
	                  If lErrorCode = 0 Then
	                      lErrorCode = Err.LastDllError
	                      DisplayError lErrorCode, "GetAce"
	                  Else
	                      ' copying the memory block pointed by pAce to the 
	                      ' ACE_HEADER structure
	                      ' pAce stores the address of an ACE; we want this 
	                      ' address to be passed
	                      ' to the CopyMemory function, thus we pass this 
	                      ' parameter ByVal.
	                      CopyMemory AceHeader, ByVal pAce, Len(AceHeader)
	                      ' use the AceHeader variable to access structure members
	                      MsgBox "Size of ACE(" & i + 1 & ") is: " _
	                        & AceHeader.AceSize
	                  End If
	
	              Next i
	          End If
	      End If
	  End Sub
	
	  Sub DisplayError(ByVal dwError As Long, RelatedApi As String)
	      Dim ErrorMsg As String, SysMsg As String
	      Dim MsgSize As Long
	      
	      ' get the error's description
	      If dwError <> 0 Then
	          MsgSize = 1000
	          SysMsg = Space(MsgSize)
	          
	          MsgSize = FormatMessage(FORMAT_MESSAGE_FROM_SYSTEM, ByVal 0&, _
	            dwError, 0, SysMsg, MsgSize, ByVal 0&)
	          ' function returns number of characters in string; 0=function failed
	          If MsgSize = 0 Then
	              SysMsg = "System error code: " & Str$(dwError)
	          Else
	              ' resizing the string for output
	              SysMsg = Left$(SysMsg, MsgSize)
	          End If
	      Else
	          SysMsg = ""
	      End If
	      
	      ' including additional information in the string
	      ErrorMsg = "ErrorCode: " & Str$(dwError) & vbCrLf & "API: " _
	        & RelatedApi & vbCrLf & "System error: " & SysMsg
	      
	      MsgBox ErrorMsg
	  End Sub
	
	6. Save the project.
	
	7. Press the F5 key to run the project.
	
	8. Click Command1 to test the code.
	
	Case 1 - A Function Returns a Variable-Length Structure:
	
	For a function to return a structure with variable length, you need to pass to
	the function a pointer to a memory buffer large enough for the structure to be
	stored. Usually, functions that return a structure with variable length provide
	a way of finding out the size of the memory buffer to allocate. This is what the
	RegGetKeySecurity function illustrates in this case. The RegGetKeySecurity
	function retrieves a copy of the security descriptor of a registry key, which is
	a variable size structure. The third parameter is a memory buffer that is used
	to store the structure itself, and the fourth parameter is used as an in-and-out
	parameter. When you call the function, the fourth parameter contains the size of
	the allocated buffer. If this size is not large enough to store the structure,
	then the function fails, returns the following error message
	
	  ERROR_INSUFFICIENT_BUFFER
	
	and uses the fourth parameter to return the size required for the structure. This
	gives you a chance to allocate a larger buffer and call the function again.
	
	One important point to consider is the declaration of the function. You should
	always check the function declaration defined in the API Text Viewer and change
	it according to the way you are calling the function. In this case, the
	declaration is changed to:
	
	  Declare Function RegGetKeySecurity Lib "advapi32.dll" _
	    (ByVal hKey As Long, ByVal SecurityInformation As Long, _
	    pSecurityDescriptor As Any, lpcbSecurityDescriptor As Long) As Long
	
	Note that the third parameter is declared as pSecurityDescriptor As Any instead
	of being declared as a structure. This occurs because you should pass a
	reference to a memory buffer instead of a reference to the structure itself. In
	this case, the memory buffer is the SecurityDescriptor array that is an array of
	Bytes. You need to pass the memory buffer to the function by passing the first
	element of the array (SecurityDescriptor(0)) by reference.
	
	Case 2 - A Function Returns a Structure by Using a Second Level of Indirection (Requiring a Pointer to a Pointer as a Parameter):
	
	When a function requires a pointer to a pointer as an output parameter, this is
	the same as returning the address of a variable. Just as an address can be
	stored in a 4-bytes integer (a type Long in Visual Basic), you can replace this
	parameter with a Long parameter passed by reference.
	
	The most common situation when a function returns an address of a structure is
	when the function allocates the memory for the structure or when the function
	just retrieves the position of a given structure from an already allocated
	buffer. In the preceding sample, the GetSecurityDescriptorDacl function is used
	to retrieve a pointer to the discretionary access control list (DACL) from the
	security descriptor. Retrieving a pointer means retrieving an address, and to
	store an address you need a variable of type Long in Visual Basic. Again, it's
	very important to use the right function declaration. Note that the declaration
	used in the preceding sample declares the third parameter, the one that
	retrieves the pointer as a Long by reference.
	
	  Declare Function GetSecurityDescriptorDacl Lib "advapi32.dll" _
	    (pSecurityDescriptor As Any, lpbDaclPresent As Long, pDacl As Long, _
	    lpbDaclDefaulted As Long) As Long
	
	Case 3 - Using a Structure Returned with a Second Level of Indirection:
	
	Once you retrieve the pointer of a structure from a function, as in Case 2, you
	can face two types of problems. The first problem is how to pass this structure
	to another function which is expecting to receive the structure by reference.
	The second problem is the need to access elements of this structure directly in
	Visual Basic. Both problems can be solved by using the GetAce function. The
	GetAce function is used to retrieve the pointer of an ACE from a DACL list. The
	first parameter expects a reference to a DACL (in other words, the address of a
	DACL), and the second parameter returns the address of an ACE. The address of
	the DACL has been retrieved by the GetSecurityDescriptorDacl function and is
	stored in the pDacl variable. Because the GetAce function is expecting a
	reference to a DACL, you can just pass the pDacl parameter by value. Note the
	difference here; when you retrieve pDacl in the GetSecurityDescriptorDacl , you
	passed pDacl by reference, and now you are passing it by value. This solves the
	first problem, which is to pass a structure retrieved by a second level of
	indirection to another function.
	
	Take a look at the second parameter of GetAce, which returns the address of an
	ACE structure. As in Case 2, you are using a variable of type Long (pAce) to
	retrieve the structure's address. However, you cannot do anything with this
	variable in Visual Basic if you need to access members of this structure. Unlike
	C, Visual Basic doesn't provide you with any features to manipulate pointers.
	The workaround here is to allocate another variable of type UDT (user defined
	type) with the structure type you need, and copy into it the content of the
	structure you are trying to access. In the preceding sample, the type was
	declared as ACE_HEADER, and the variable was defined as AceHeader. You can copy
	the content of the structure pointed by pAce to AceHeader by using the
	CopyMemory function. Now you can access the members of the structure using the
	AceHeader variable. Note that pAce is passed ByVal to CopyMemory.
	
	General Comments:
	
	1. The RtlMoveMemory function (usually declared as CopyMemory) is a Win32 API.
	  It is not documented in the API Text Viewer, but is documented in MSDN.
	
	2. Always check the declarations for these types of functions carefully. A wrong
	  declaration may generate an exception.
	
	3. Always check the declaration of structures used in these types of functions
	  carefully.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbSDKWin32 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
