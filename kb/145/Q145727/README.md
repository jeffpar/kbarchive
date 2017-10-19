---
layout: page
title: "Q145727: HOWTO: Call the Unicode Version of an API Function with VB"
permalink: /kb/145/Q145727/
---

## Q145727: HOWTO: Call the Unicode Version of an API Function with VB

	Article: Q145727
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Solely declaring and calling the Unicode versions of 32-bit API functions in the
	same way that the ANSI versions are used will not work. This article shows one
	way that the Unicode version of an API function can be used without the need to
	create a type library.
	
	MORE INFORMATION
	================
	
	Visual Basic, like Windows NT and Windows 2000, is based internally on the
	double-byte Unicode standard. However, Visual Basic assumes that the world
	outside of itself still uses the single-byte ANSI model. Any strings passed as
	parameters to an external function will be converted by Visual Basic from their
	internal Unicode representation to an ANSI representation before the call to the
	function is made. In the same way, all strings that return to Visual Basic from
	an external function are assumed to be in an ANSI representation, and Visual
	Basic will attempt to make the conversion to a Unicode representation for
	internal use. This behavior makes it impossible to call an external function
	that expects or returns a Unicode string in the same way as a function that
	deals only with ANSI strings.
	
	One way to call a Unicode function is to create a type library referring to the
	Unicode function to be called, refer to this type library from within Visual
	Basic, and then make all calls to the Unicode function via the type library.
	
	For more information on this approach, see the text file VB4DLL.TXT or
	VB5DLL.Doc, located in the same directory as your Visual Basic executables.
	
	Unicode functions can also be accessed by using Visual Basic ability to create
	arrays of the new Byte data type. If the string(s) that are passed to and from
	the external function are represented in Visual Basic as byte arrays, then
	Visual Basic will not do any conversion when passing or receiving data to or
	from the outside world.
	
	The following code shows how to declare and call both the ANSI
	(GetWindowsDirectoryA) and Unicode (GetWindowsDirectoryW, for Wide) versions of
	the GetWindowsDirectory API call:
	
	     Declare Function GetWindowsDirectoryA Lib "Kernel32" _
	         (ByVal lpBuffer As String, ByVal nSize As Long) As Long
	     Declare Function GetWindowsDirectoryW Lib "Kernel32" _
	         (lpBuffer As Any, ByVal nSize As Long) As Long
	
	     Sub mainA()
	         Dim sBuf As String
	         Dim cSize As Long
	         Dim retval As Long
	
	         sBuf = String(255, 0)
	         cSize = 255
	
	         retval = GetWindowsDirectoryA(sBuf, cSize)
	
	         sBuf = Left(sBuf, retval)
	         Debug.Print sBuf
	     End Sub
	
	     Sub mainW()
	         Dim Buf() As Byte, sBuf As String
	         Dim cSize As Long
	         Dim retval As Long
	
	         ReDim Buf(254)
	         cSize = 255
	
	         retval = GetWindowsDirectoryW(Buf(0), cSize)
	
	         sBuf = Left(Buf, retval)
	         Debug.Print sBuf
	     End Sub
	
	The mainA() procedure makes a call to the ANSI version of GetWindowsDirectory,
	while the mainW() procedure does the same for the Unicode version. Both
	procedures output the same result, although the method they use to do so
	differs.
	
	The call to the ANSI version is done in the same way that has always existed for
	passing and returning strings to and from an external DLL. A Visual Basic string
	is dimensioned and padded with a certain number of spaces, and the function is
	called with this string and the length of the string as parameters. After the
	function returns, the extra spaces are stripped off of the returned string and
	the value is printed out. The ByVal in front of the string in the Declare for
	GetWindowsDirectoryA indicates that a reference to a null-terminated string
	should be given to the DLL, not that a copy of the Visual Basic string should be
	passed.
	
	The call to the Unicode version works a bit differently. In addition to
	dimensioning a string variable, sBuf, we also dimension a dynamic array of
	bytes. The ReDim statement then sizes the byte array to be 255 bytes large
	(indexed from 0). When GetWindowsDirectoryW is called, it is passed a reference
	to the first element of the byte array and the size of the array.
	
	The call fills in the Buf array with the Unicode codes for the characters
	representing the Windows directory and returns the number of bytes it has
	modified. Remember that, since the function is returning Unicode info, each
	character will take two bytes to store. For example, if your Windows directory
	is 'C:\WINNT' then Buf(0) will be 67 and Buf(1) will be 0, Buf(2) will be 58,
	while Buf(3) is 0, and so on. The values may differ if a non- English code page
	is used.
	
	The line of code immediately following the call to GetWindowsDirectoryW uses
	Visual Basic byte array-string coercion features to coerce the byte array into a
	string. When assigning a byte array to a string Visual Basic assumes that the
	information stored in the byte array is in a Unicode format. From then on, the
	sBuf variable holds a Visual Basic string representing the current Windows
	directory and can be manipulated as such.
	
	The example above shows how to pass an uninitialized and empty byte array to a
	function. A byte array initialized with some string can also be passed to an
	external function. For example, the following code snippet declares,
	initializes, and passes a byte array to a function called MyPassFunction:
	
	     Dim bArray() As Byte
	     bArray = "Hello" & vbNullChar
	     MyPassFunction bArray(0)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
