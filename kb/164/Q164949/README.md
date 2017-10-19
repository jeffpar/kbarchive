---
layout: page
title: "Q164949: FIX: Visual C++ Debugger Crashes on Very Long Symbols"
permalink: /kb/164/Q164949/
---

## Q164949: FIX: Visual C++ Debugger Crashes on Very Long Symbols

	Article: Q164949
	Product(s): Microsoft C Compiler
	Version(s): 4.2
	Operating System(s): 
	Keyword(s): kbDebug kbide kbVC500fix
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you place the caret on a line that contains a very long symbol name while
	you are debugging an application using Visual C++ in disassembly view, the
	debugger may crash.
	
	A possible error message is:
	
	  
	
	  [ASCII 147]MSDEV caused an invalid page fault in module <unknown> at
	  00de:676e6972[ASCII 148]
	
	CAUSE
	=====
	
	This behavior occurs because the debugger currently has a limit of 255
	characters for symbols.
	
	RESOLUTION
	==========
	
	1. Do not use the disassembly view to step through sections of code where very
	  long symbol names are present.
	
	-or-
	
	2. Do not let the caret land on a line with a very long symbol name. Use the
	  mouse to place the caret on a line following the one with the long symbol
	  name, and select Run to Cursor from the Debug menu.
	
	-or-
	
	3. Reduce the size of the mangled symbol names. You can do this by shortening
	  the names of classes and class members. You can also shorten class names of
	  classes that you have not written by using a #define before the #include for
	  the header declaring the class. If the class name is basic_string and you
	  want to shorten it to BS, then insert "#define basic_string BS" before the
	  #include for the header declaring basic_string.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0. The
	limit is now (256+128).
	
	REFERENCES
	==========
	
	Sample Code
	-----------
	
	        /* Compile options needed: /GX
	        */ 
	
	        #pragma warning(disable:4786)
	        #include <string>
	        #include <map>
	        struct ThreeString
	        {
	            string s1,s2,s3;
	            ThreeString(string i1,string i2,string i3) {
	                s1 = i1;
	                s2 = i2;
	                s3 = i3;
	            }
	            ThreeString() {}
	        };
	        typedef map<string, ThreeString, less<string>,
	        allocator<ThreeString> > MapType;
	
	        void main()
	        {
	            MapType themap;
	
	            themap["Zero"] = ThreeString("Zero","Zero","Zero");
	            themap["One"] = ThreeString("One","One","One");
	        }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDebug kbide kbVC500fix 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper
	Version           : 4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
