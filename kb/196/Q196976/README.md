---
layout: page
title: "Q196976: INFO: Updated VB4dll.txt for Visual Basic 4.0"
permalink: /kb/196/Q196976/
---

## Q196976: INFO: Updated VB4dll.txt for Visual Basic 4.0

	Article: Q196976
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbVBp400 kbGrpDSVBDB
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following article contains the updated 'Passing and Returning Strings'
	section of the updated VB4dll.txt file distributed with Microsoft Visual Basic
	version 4.0 for Windows.
	
	The information contained in that section is correct, but somewhat confusing to
	someone that is not familiar with the inner workings of Visual Basic.
	
	Visual Basic does not pass a BSTR to a UNICODE string to a DLL unless a type
	library is used. The code in the MORE INFORMATION section demonstrates how to
	handle this issue in the .dll.
	
	MORE INFORMATION
	================
	
	Section four (4) correctly describes passing a BSTR to a .dll, but the method
	that it uses is confusing.
	
	Visual Basic 4.0 32-bit will not pass a 'proper' BSTR to the .dll. In Win32 OLE,
	a BSTR is described as pointing to a UNICODE string. Since most of the world is
	still ANSI, Visual Basic converts the string to ANSI before passing. It
	therefore, is not a 'proper' BSTR. It is completely valid to do this, but it is
	not what one might expect in the .dll. Since a BSTR is defined as ANSI in Win16
	OLE, this is not a problem with Visual Basic 4.0 16-bit.
	
	When Visual Basic 4.0 32-bit is going to pass a string to a .dll, it allocates
	some temporary memory, creates a new BSTR with a buffer half as large as the
	original. It then converts the UNICODE characters in the actual string into ANSI
	and copies them into the buffer pointed to by the new BSTR. This may sound like
	an odd thing to do, but is done to solve the following two problems:
	
	1. Most of the world is not yet using UNICODE. Most existing .dll's and API's
	  use ANSI strings. If Visual Basic did not convert the strings to ANSI, the
	  Visual Basic programmer would be locked out of the vast majority of existing
	  .dll functions.
	
	2. The 16-bit version passes the actual BSTR to the .dll. If the 32-bit did not
	  pass a BSTR then 16-bit .dll's would have to be entirely re-written so that
	  they did not use any BSTR functions. This would have run counter to one of
	  the main reasons for offering a 16-bit and 32-bit version [ASCII 150] easier
	  porting.
	
	The solution is to pass a BSTR that has an ANSI string stuffed in it. The code
	example in this section relies on this behavior. As properly documented in
	section 9 of the VB4dll.txt file, Visual Basic can not pass a BSTR that points
	to a UNICODE string to a .dll without a type library. It always converts the
	string to ANSI as described in the first sentence of this paragraph. To pass a
	BSTR pointing to a .dll, you should use a Type library. It is possible to do
	this other ways, but all of them rely on some language quirk or loophole that
	may not be available in future versions.
	
	The following section has been updated so that the preceding points are clear.
	The original version that ships with Visual Basic 4.0 is correct. The
	modifications below only clarify what is being done.
	
	4:  Passing and Returning Strings
	---------------------------------
	
	Visual Basic maintains variable-length strings internally as BSTRs. BSTRs are
	defined in the OLE header files as OLECHAR FAR *. An OLECHAR is a UNICODE
	character in 32-bit OLE and an ANSI character in 16-bit OLE. A BSTR can contain
	NULL values because a length is also maintained with the BSTR. BSTRs are also
	NULL terminated so they can be treated as an LPSTR. Currently this length is
	stored immediately prior to the string. This may change in the future, however,
	so you should use the OLE APIs to access the string length.
	
	You can pass a string from Visual Basic to a DLL in one of two ways. You can pass
	it "by value" (ByVal) or "by reference". When you pass a string ByVal, Visual
	Basic passes a pointer to the beginning of the string data (i.e. it passes a
	BSTR). When a string is passed by reference, Visual Basic passes a pointer to a
	pointer to the string data (i.e. it passes a BSTR *).
	
	The following table lists what Visual Basic will pass to a DLL function when
	passing a string.
	
	  Version      By Value   By Reference
	  -------------------------------------
	  3.0          LPSTR      HLSTR
	  4.0          BSTR       BSTR *
	
	NOTE: Visual Basic 4.0 32-bit BSTR's point to either ANSI or UNICODE strings
	depending on the method used to call them as illustrated in the following
	chart.
	
	  Declaration Method               By Value      By Reference
	  --------------------------------------------------------------
	  Declare Statement                ANSI          ANSI
	  Type Library (defined as BSTR)   BSTR          BSTR
	
	In Visual Basic 3.0, you could use the Visual Basic API routines to access and
	modify an HLSTR. In Visual Basic 4.0 you should use the OLE APIs to access a
	BSTR. The following table lists the Visual Basic 3.0 string- handling APIs, and
	the OLE equivalents.
	
	  Visual Basic API        OLE API
	  --------------------------------------------------------
	  VBCreateHlstr           SysAllocString/SysAllocStringLen
	  VBCreateTempHlstr       SysAllocString/SysAllocStringLen
	  VBDerefHlstr*           N/A
	  VBDerefHlstrLen*        N/A
	  VBDerefZeroTermHlstr    N/A
	  VBDestroyHlstr          SysFreeString
	  VBGetHlstrLen           SysStringLen
	  VBResizeHlstr           SysReAllocStringLen
	  VBSetHlstr              SysReAllocString
	
	NOTE: The BSTR is a pointer to the string, so you do not need to dereference it.
	
	16\32-Bit Example:
	
	The first function in this example takes a Visual Basic string by reference, and
	returns an uppercase copy of the string. The second function takes a Visual
	Basic string by value and also returns an uppercase copy of the string. This is
	similar to the UCase function in Visual Basic. In both cases, the .dll function
	modifies the passed string, which is reflected back in Visual Basic. This
	happens even when the Visual Basic string is passed ByVal because what is passed
	to the .dll function is a BSTR which is a char far *, and thus, it is possible
	to directly access the memory buffer pointed to by the BSTR.
	
	Sample Code:
	
	     #include <windows.h>
	     #include <ole2.h>
	
	     #ifdef _WIN32
	       #define CCONV _stdcall
	       #define NOMANGLE
	     #else
	       #define CCONV FAR PASCAL _export
	       #define NOMANGLE EXTERN_C
	       #include <stdlib.h>
	       #include <compobj.h>
	       #include <dispatch.h>
	       #include <variant.h>
	       #include <olenls.h>
	        #endif
	
	     NOMANGLE BSTR CCONV UpperCaseByRef(BSTR *pbstrOriginal)
	     {
	         BSTR bstrUpperCase;
	         int i;
	         int cbOriginalLen;
	         LPSTR strSrcByRef, strDst;
	
	         //This is code to allocate a BSTR that points to an
	         //ANSI string for 16 or 32 bit.
	         #if !defined(_WIN32)
	            // 16 bit uses ANSI strings to char = byte
	            cbOriginalLen = SysStringLen(*pbstrOriginal);
	         #else
	            //32 bit uses UNICODE strings char = 2 * byte
	              //but Visual Basic passed an ANSI string.
	                cbOriginalLen = SysStringByteLen(*pbstrOriginal);
	         #endif
	
	         bstrUpperCase = SysAllocStringLen(NULL, cbOriginalLen);
	
	         strSrcByRef = (LPSTR)*pbstrOriginal;
	         strDst = (LPSTR)bstrUpperCase;
	
	         //Using runtime function for ANSI strings
	         for(i=0; i<=cbOriginalLen; i++)
	             *strDst++ = toupper(*strSrcByRef++);
	
	         //Placing ANSI string in for return to Visual Basic
	         SysReAllocString (pbstrOriginal, (BSTR)"Good Bye");
	
	         return bstrUpperCase;
	     }
	
	     NOMANGLE BSTR CCONV UpperCaseByVal(BSTR bstrOriginal)
	     {
	         BSTR bstrUpperCase;
	         int i;
	         int cbOriginalLen;
	         LPSTR strSrcByVal, strDst;
	
	         // This is code to allocate a BSTR that points to an
	         // ANSI string for 16 or 32 bit.
	         #if !defined(_WIN32)
	            // 16-bit uses ANSI strings to char = byte
	            cbOriginalLen = SysStringLen(bstrOriginal);
	         #else
	            // 32-bit uses UNICODE strings char = 2 * byte
	            // but Visual Basic passed an ANSI string.
	               cbOriginalLen = SysStringByteLen(bstrOriginal);
	         #endif
	
	         bstrUpperCase = SysAllocStringLen(NULL, cbOriginalLen);
	
	         strSrcByVal = (LPSTR)bstrOriginal;
	         strDst = (LPSTR)bstrUpperCase;
	
	      // Using run-time function for ANSI strings
	      for(i=0; i<=cbOriginalLen; i++)
	          *strDst++ = toupper(*strSrcByVal++);
	      // Placing ANSI string in for return to Visual Basic.
	      SysReAllocString (&bstrOriginal, (BSTR)"Good Bye");
	
	      return bstrUpperCase;
	     }
	
	The following Visual Basic code calls the preceding two UpperCase functions:
	
	     #If Win32 Then
	
	         Private Declare Function UpperCaseByRef Lib "vb4dll32.dll" (Str _
	             As String) As String
	         Private Declare Function UpperCaseByVal Lib "vb4dll32.dll" _
	             (ByVal Str As String) As String
	
	     #Else
	
	         Private Declare Function UpperCaseByRef Lib "vb4dll16.dll" (Str _
	             As String) As String
	         Private Declare Function UpperCaseByVal Lib "vb4dll16.dll" _
	             (ByVal Str As String) As String
	
	     #End If
	
	     Private Sub StringTest ()
	
	        Dim Str As String, NewStr As String
	
	        Str = "Hello World!"
	        MsgBox "In VB, Before: " & Str
	        NewStr = UpperCaseByRef(Str)
	        MsgBox "In VB, After: " & Str
	        MsgBox "In VB, CapsStr: " & NewStr
	
	        Str = "Hello World!"
	        MsgBox "In VB, Before: " & Str
	        NewStr = UpperCaseByVal(Str)
	        MsgBox "In VB, After: " & Str
	        MsgBox "In VB, CapsStr: " & NewStr
	
	     End Sub
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998. All Rights Reserved. Contributions by Troy
	Cambra, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp400 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
