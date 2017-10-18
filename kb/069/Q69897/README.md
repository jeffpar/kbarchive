---
layout: page
title: "Q69897: Using Variable Argument Lists in DLL Functions"
permalink: kb/069/Q69897/
---

## Q69897: Using Variable Argument Lists in DLL Functions

	Article: Q69897
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using variable argument lists in functions in Windows dynamic-link libraries
	(DLLs) immediately suggests problems because the current data segment is not the
	same as the current stack segment (DS != SS). However, it is possible to create
	functions declared with the C calling convention (_cdecl) that can properly
	access variable argument lists from Windows DLLs using the Windows SDK version
	3.0 or later.
	
	MORE INFORMATION
	================
	
	In the STDARG.H file included with the Windows SDK, macros are defined to
	manipulate variable argument lists. Because DS != SS in DLLs containing code and
	data segments, the standard macros will not perform properly in small-model or
	medium-model DLLs. The standard macros assume that the stack segment (SS) and
	data segment (DS) are equal for far-data models and use NEAR pointers to access
	the arguments. However, small-model and medium-model DLLs containing code and
	data segments use the calling application's SS and the DLL's DS. The standard
	macros fail to account for this case.
	
	If the DLL is a code-only DLL where DS == SS (using the DATA NONE declaration),
	or if the DLL is large-model, the standard macros will work properly.
	
	One way to overcome the problems with the standard macros is to define a new set
	of macros for use with Windows' DLLs. For example:
	
	  //****************************************************************
	   *
	   *      File:  wstdarg.h
	   *
	   *   Remarks:  Macro definitions for variable argument lists
	   *             used in DLLs
	   *
	   ****************************************************************/ 
	
	  typedef char _far *wva_list ;
	
	  #define wva_start( ap, v )  (ap = (wva_list) &v + sizeof( v ))
	  #define wva_arg( ap, t )    (((t _far *)(ap += sizeof( t )))[-1])
	  #define wva_end( ap )       (ap = NULL)
	
	  /****************************************************************
	   *  End of File: wstdarg.h
	   ****************************************************************/ 
	
	When these macros are compiled, the stack segment is properly selected to access
	the arguments.
	
	Please note the following caveats concerning the use of variable argument lists
	in DLLs:
	
	1. When passing arguments by reference, always use FAR pointer declarations. The
	  compiler will synthesize FAR pointers by pushing the DS and the offset of the
	  memory location on to the stack. This will provide the DLL will the proper
	  information to access the application's data segment.
	
	  Also note: If the application under development will be run under real mode,
	  avoid calling functions that will yield control from the DLL. If yielding
	  occurs, the data segment could be moved. Movement would result in invalid
	  pointers.
	
	2. Because functions with variable arguments are defined using _cdecl, all
	  pointer arguments not declared in the parameter list must be typecast in the
	  function call. If this casting is not done, unpredictable results will occur
	  due to the lack of the function parameter prototype. For example:
	
	     void FAR _cdecl DebugPrint( LPSTR lpStr, LPSTR lpFmt, ... )
	
	      ...
	
	      DebugPrint( szValue, "%s, value passed: %d\r\n",
	                  (LPSTR) "DebugPrint() called", (int) 10 ) ;
	
	3. When the function is exported or imported, it must be declared with an
	  underscore (_) prefix in the .DEF file. It is also necessary to preserve
	  uppercase and lowercase letters in the function name.
	
	  Here is the declaration for the function above:
	
	      EXPORTS
	         WEP          @1   RESIDENTNAME
	         _DebugPrint  @2
	
	4. Variable argument C run-time library functions such as vsprintf() and
	  vfprintf() do not take into account that DS != SS. These functions are not
	  available in DLLs.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
