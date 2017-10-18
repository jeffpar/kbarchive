---
layout: page
title: "Q121367: INFO: Can't Watch Variables in Debugger - Nine Possible Causes"
permalink: kb/121/Q121367/
---

## Q121367: INFO: Can't Watch Variables in Debugger - Nine Possible Causes

	Article: Q121367
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,2.0,2.1,4.0,4.01,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kbtshoot kbCodeView kbDebug kbide kbVC100 kbVC150 kbVC151 kbVC200 kbVC210 kbVC400 kbVC5
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Visual Workbench Integrated Debugger, used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	   - Microsoft CodeView for MS-DOS, versions 4.0, 4.01, 4.1 
	   - Microsoft CodeView for Windows, versions 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article gives nine reasons why you may be having trouble watching
	variables. It covers each of the following nine symptoms:
	
	- Watch on Global Const Variable Gives CXX0030 or "Cannot watch variable"
	
	- Watch on Base Class Member Gives CXX0030 or -??? * = {...}
	
	- CV1255 or "Unable to expand expression"
	
	- Watch on Structure Data Member Produces Incorrect Result
	
	- Can't View Data When Watching Or Quick Watching Static Data Variable
	
	- Expansion of *Reference* to Object May Consist of Only a Blank Line
	
	- CV1255 When Trying to Watch Elements of a Structure (MASM 6.10a)
	
	- Arrays Expanded Incorrectly and Values Displayed Are Wrong
	
	- Watch on Struct Member Gives CXX0030 If Offset >= 32K (C++ only)
	
	MORE INFORMATION
	================
	
	Watch on Global Const Variable Gives CXX0030 or "Cannot watch variable"
	-----------------------------------------------------------------------
	
	When debugging a C++ program, watching a global const variable in the Watch
	window of Codeview or the Watch window of Visual Workbench IDE Debugger yields
	the following error:
	
	  CXX0030: Error: expression cannot be evaluated
	
	Using the QuickWatch tool button in Visual Workbench IDE Debugger gives a dialog
	box that says:
	
	  Cannot watch 'variable'.
	
	This is by design but is under review for future releases of Microsoft debug
	products. In Microsoft C++, storage of global constants is optimized for the
	purpose of saving space, so no debugging information is generated.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q115347 PRB: Debugger Cannot Watch Global Constants in C++ Programs
	
	Watch on Base Class Member Gives CXX0030 or -??? * = {...}
	----------------------------------------------------------
	
	An attempt to place a watch on a base class member variable within a derived
	class may fail. Microsoft Codeview for MS-DOS, Codeview for Windows, and the
	Visual Workbench IDE debugger may display one of the following messages in the
	Watch or Locals window:
	
	  CXX0030: Error: expression cannot be evaluated
	
	  -or-
	
	  -??? * = {...} which expands into the CXX0030 message
	
	  -or-
	
	  Just blank lines
	
	If you get these error messages, add a default constructor for the base class.
	
	IMPORTANT NOTE: If you get blank lines when expanding a member variable of a base
	class within a derived class, put a watch (or a Quick Watch) on the entire
	derived class object. Then expand it to see the base class members. This is
	often the case with base class member variables that are CStrings, and occurs
	even when there is a default constructor.
	
	CV1255 or "Unable to expand expression"
	---------------------------------------
	
	If forward class references are added to STDAFX.H and a project is compiled with
	/Zi /Yu"stdafx.h", attempts to expand objects (of the type forward referenced in
	STDAFX.H) in the locals or watch window do nothing. Instead, the status bar
	states "Unable to expand expression" in 32-bit Visual C++ or "CV1255:Error: no
	data members" in 16-bit Visual C++.
	
	If the forward references are removed from STDAFX.H, the objects can be expanded.
	The problem can also be corrected by rebuilding the project using either /YX or
	/Yc /Yd. In spite of the fact that the manuals state that /Yd is obsolete when
	used with /Zi, this is actually not the case.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q131147 BUG: CXX0033 Error in OMF Type from Forward Class Declaration
	
	Watch on Structure Data Member Produces Incorrect Result
	--------------------------------------------------------
	
	Setting a watch on a data member of a structure whose tag name is the same as the
	struct variable name produces an incorrect result. This problem occurs with C++
	programs in the Visual Workbench IDE Debugger for Windows, Codeview for Windows,
	and Codeview for MS-DOS. It also occurs with C programs in the Visual Workbench
	Debugger for Windows NT and Codeview for Win32s.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q106394 BUG: Struct Data Member Incorrectly Displayed in Watch Window
	
	Can't View Data When Watching or Quick Watching a Static Data Variable
	----------------------------------------------------------------------
	
	When trying to watch or quick watch a static data variable in the context of a
	static member function, or a static data member in a class, you may not be able
	to view the data. If this is the case, you can refer to the static data by
	prefixing it with the class name (for example, CLASS::staticdata).
	
	When trying to watch or quick watch a DLL exported static data member from the
	debug session of the .EXE, you may not be able to view the data. This is due to
	a bug in the debugger. The only workaround is to watch the data member in the
	DLL debug session using the syntax suggested above.
	
	
	Expansion of *Reference* to an Object May Consist of Only a Blank Line
	----------------------------------------------------------------------
	
	When trying to expand a reference to an object in the Watch or Locals window, the
	expansion may consist of only a blank line. This is due to a bug in both
	CodeView and the Visual C++ IDE debugger (16-bit version only). To work around
	the problem, cast the reference (in the watch window) as a pointer to the class.
	For example, if you are trying to expand a reference defined as "CRect
	&rect," in the watch window, type "(CRect*)rect" (without the quotation
	marks). Then expand it.
	
	CV1255 When Trying to Watch Elements Of a Structure (MASM 6.10a)
	----------------------------------------------------------------
	
	Using MASM version 6.10a, if you create a program with a structure and use the
	OPTION OLDSTRUCTS directive, you may get the error: CV1255 when trying to watch
	elements of the structure. There is no workaround for this version other than
	not using the OLDSTRUCTS option.
	
	Array Expanded Incorrectly and Values Displayed Are Wrong
	---------------------------------------------------------
	
	In C++ source files, passing an array as an argument to a function and then
	trying to watch that array in the function causes CodeView and the Visual
	WorkBench Debugger (16-bit) to expand the array incorrectly.
	
	To work around the problem, declare the function argument as a pointer rather
	than an array. For example, change a declaration which uses array syntax:
	
	  void Function( int Array[5] )
	
	to a declaration which uses pointer syntax:
	
	  void Function( int * Array )
	
	Watch on Struct Member Gives CXX0030 If Offset >= 32K (C++ only)
	----------------------------------------------------------------
	
	If a C++ application has a global struct containing member arrays that exceed 32K
	total, expanding a member of the struct in the watch window will give CXX0030 if
	the starting address of the member is over 0x7FFF from the beginning of the
	struct. This is a bug in Visual C++ version 1.5x (16-bit).
	
	The following code reproduces the problem:
	
	  // struc32k.CPP <- MUST use C++ compiler
	  struct test
	  {
	    char a[16384];
	    char b[16384];     // if changed to b[16383],
	    char c[10000];     // expanding c works correctly
	  } teststruct;
	
	  void main( void )
	  {
	   teststruct.c[0] = 'A';   // break here, set watch on teststruct,
	                            // expand c
	  }
	
	NOTE: There are no problems if this is a .C file.
	
	Additional query words: 9.00
	
	======================================================================
	Keywords          : kbtshoot kbCodeView kbDebug kbide kbVC100 kbVC150 kbVC151 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper
	Version           : :1.0,1.5,1.51,2.0,2.1,4.0,4.01,4.1,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
