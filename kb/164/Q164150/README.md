---
layout: page
title: "Q164150: DOC: C4237 Online Help Contains Wrong Information on &quot;bool&quot;"
permalink: /kb/164/Q164150/
---

## Q164150: DOC: C4237 Online Help Contains Wrong Information on &quot;bool&quot;

	Article: Q164150
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.2
	Operating System(s): 
	Keyword(s): kbcode kbdocfix kbdocerr
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	- Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The online help on C4237 in Visual C++ 4.2 states that the keywords bool, true,
	false, mutable, explicit, and typename are for future use. The last paragraph
	states the following:
	
	  If you include the header OAIDL.H, note that this header defines both bool
	  and boolval. To avoid this warning and prevent possible compatibility
	  problems with future versions of Visual C++, your code should use the boolval
	  definition instead of the bool definition.
	
	This information is incorrect. If you use OAIDL.H for bool keyword, the following
	error message appears:
	
	  error C2065: 'bool' : undeclared identifier
	
	MORE INFORMATION
	================
	
	In Visual C++ 4.2, the keywords bool, true, and false are declared in the header
	file yvals.h. By including this file in your program, you can use the keywords
	bool, true, and false. Since the standard C++ header files (that is, iostream,
	ostream, etc.) automatically include yvals.h, if you use any of these header
	files you can use bool, true, and false. If you are also including windows.h,
	then make sure that windows.h is included above yvals.h or the standard C++
	header files, otherwise the C4237 warning appears. This happens because yvals.h
	disables the C4237 warning with a #pragma statement.
	
	The following programs compile without errors in Visual C++ 4.2.
	
	Sample Code
	-----------
	
	     /* Compile options needed:none
	     */ 
	
	     #include <windows.h>
	     #include <iostream>
	
	     void main(void){
	     bool x;
	     BOOL Y;
	
	     x=true;
	     Y=FALSE;
	
	     }
	
	     Or,
	
	     #include <windows.h>
	     #include <yvals.h>
	
	     void main(void){
	     bool x;
	     BOOL Y;
	
	     x=true;
	     Y=FALSE;
	
	     }
	
	
	Additional query words: bool kbOLDocs kbCompiler kbVC420 kbVC500fix kbDSupport kbdss
	
	======================================================================
	Keywords          : kbcode kbdocfix kbdocerr 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC32bitSearch
	Version           : winnt:4.2
	
	=============================================================================
	
