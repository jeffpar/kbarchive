---
layout: page
title: "Q199824: HOWTO: Get the Address of Variables in Visual Basic"
permalink: /kb/199/Q199824/
---

## Q199824: HOWTO: Get the Address of Variables in Visual Basic

{% raw %}

	Article: Q199824
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is uncommon for a Visual Basic programmer to need to obtain low level
	information on a variable, such as its memory address. However, there are some
	API functions that require such information. This article describes the
	following Visual Basic functions that may help a Visual Basic programmer obtain
	this information:
	
	  VarPtr - Returns the address of a variable.
	
	  VarPtrArray - Returns the address of an array.
	
	  StrPtr - Returns the address of the UNICODE string buffer.
	
	  VarPtrStringArray - Returns the address of an array of strings.
	
	  ObjPtr - Returns the pointer to the interface referenced by an object
	  variable.
	
	MORE INFORMATION
	================
	
	WARNING: One or more of the following functions are discussed in this article;
	VarPtr, VarPtrArray, VarPtrStringArray, StrPtr, ObjPtr. These functions are not
	supported by Microsoft Technical Support. They are not documented in the Visual
	Basic documentation and are provided in this Knowledge Base article "as is."
	Microsoft does not guarantee that they will be available in future releases of
	Visual Basic.
	
	VarPtr
	------
	
	This function can be used to get the address of a variable or an array element.
	It takes the variable name or the array element as the parameter and returns the
	address. However, you should be aware that unlocked Dynamic Arrays may be
	reallocated by Visual Basic, so you must be very careful when you use VarPtr to
	get the address of an array element.
	
	The following example gets the address of a variable:
	
	  Dim lngVariableAddress as Long
	  Dim dblMyVariable as Double
	  lngVariableAddress = VarPtr(dblMyVariable)
	
	This example gets the address of the fourth element of an array:
	
	  Dim lngElementAddress as Long
	  Dim lngArrayOfLongs(9) as Long
	  ' following will get address of 4th element
	  lngElementAddress = VarPtr(lngArrayOfLongs(3))
	
	Limitations: The VarPtr function cannot be used to get the address of an array.
	For more information, see the VarPtrArray function.
	
	VarPtrArray
	-----------
	
	Arrays in Visual Basic are stored as SAFEARRAYs. To get the address of the
	SAFEARRAY structure, you need to use the VarPtrArray function. The following are
	the Visual Basic 5.0 and Visual Basic 6.0 declarations respectively:
	
	  Declare Function VarPtrArray Lib "msvbvm50.dll" Alias "VarPtr" _
	  (Var() as Any) As Long
	
	  Declare Function VarPtrArray Lib "msvbvm60.dll" Alias "VarPtr" _
	  (Var() as Any) As Long
	
	To get the address of a SAFEARRAY, pass the SAFEARRAY name (including the
	parenthesis) to the VarPtrArray function:
	
	  Dim lngSafeArrayAddress as Long
	  Dim lngArrayOfLongs(9) as Long
	  lngSafeArrayAddress = VarPtrArray(lngArrayOfLongs())
	
	Limitations: The VarPtrArray function cannot be used to get the address of an
	array of Strings, because Visual Basic does UNICODE/ANSI conversion for Strings.
	If you use VarPtrArray on an array of Strings, you will get the address of a
	temporary ANSI copy of the array. For more information, see the
	VarPtrStringArray function.
	
	StrPtr
	------
	
	Strings in Visual Basic are stored as BSTR's. If you use the VarPtr on a variable
	of type String, you will get the address of the BSTR, which is a pointer to a
	pointer of the string. To get the address of the string buffer itself, you need
	to use the StrPtr function. This function returns the address of the first
	character of the string. Take into account that Strings are stored as UNICODE in
	Visual Basic.
	
	To get the address of the first character of a String, pass the String variable
	to the StrPtr function.
	
	Example:
	
	  Dim lngCharAddress as Long
	  Dim strMyVariable as String
	  strMyVariable = "Some String"
	  lngCharAddress = StrPtr(strMyVariable)
	
	You can use this function when you need to pass a pointer to a UNIOCODE string to
	an API call.
	
	VarPtrStringArray
	-----------------
	
	VarPtrStringArray gets the address of an array of Strings. To avoid the intrinsic
	UNICODE/ANSI conversion performed by Visual Basic, the declaration has to be
	defined in a type library.
	
	
	Alternatively, you could use the MIDL compiler to compile your own type library
	from the following .odl files.
	
	For Visual Basic 6.0, create a text file named VB6ptrlib.odl with the content
	below:
	
	  #define RTCALL _stdcall
	  [
	  uuid(C6799410-4431-11d2-A7F1-00A0C91110C3),
	  lcid (0), version(6.0), helpstring("VarPtrStringArray Support for VB6")
	  ]
	  library PtrLib
	  {
	  importlib ("stdole2.tlb");
	  [dllname("msvbvm60.dll")]
	  module ArrayPtr
	     {
	     [entry("VarPtr")]
	     long RTCALL VarPtrStringArray([in] SAFEARRAY (BSTR) *Ptr);
	     }
	  }
	
	For Visual Basic 5.0, create a text file named VB5ptrlib.odl with the content
	below:
	
	  #define RTCALL _stdcall
	  [
	  uuid(6E814F00-7439-11D2-98D2-00C04FAD90E7),
	  lcid (0), version(5.0), helpstring("VarPtrStringArray Support for VB5")
	  ]
	  library PtrLib
	  {
	  importlib ("stdole2.tlb");
	  [dllname("msvbvm50.dll")]
	  module ArrayPtr
	     {
	     [entry("VarPtr")]
	     long RTCALL VarPtrStringArray([in] SAFEARRAY (BSTR) *Ptr);
	     }
	  }
	
	Use the following command lines to compile the preceding .odl files with the MIDL
	compiler to create a Visual Basic 6.0 or Visual Basic 5.0 type library (.tlb)
	file respectively:
	
	  MIDL /t VB6ptrlib.odl MIDL /t VB5ptrlib.odl
	
	To use the VarPtrStringArray function in your project, you need to create a
	reference to the type library you just created.
	
	Example:
	
	  Dim MyArrayOfStrings(2) As String
	  Dim AddressOfArray As Long
	  MyArrayOfStrings(0)="AAA"
	  MyArrayOfStrings(1)="BBB"
	  AddressOfArray = VarPtrStringArray ( MyArrayOfStrings() )
	
	ObjPtr
	------
	
	ObjPtr takes an object variable name as a parameter and obtains the address of
	the interface referenced by this object variable.
	
	One scenario of using this function is when you need to do a collection of
	objects. By indexing the object using its address as the key, you can get faster
	access to the object than walking the collection and using the Is operator. In
	many cases, the address of an object is the only reliable thing to use as a
	key.
	
	Example:
	
	  objCollection.Add MyObj1, CStr(ObjPtr(MyObj1))
	  ...
	  objCollection.Remove CStr(ObjPtr(MyObj1))
	
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbVBp kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
