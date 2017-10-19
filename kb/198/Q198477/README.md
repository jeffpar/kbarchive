---
layout: page
title: "Q198477: PRB: Use of /ZI May Cause Access Violation"
permalink: /kb/198/Q198477/
---

## Q198477: PRB: Use of /ZI May Cause Access Violation

	Article: Q198477
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC600
	Last Modified: 02-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SYMPTOMS
	========
	
	Use of the compiler switch /ZI (Program Data Base for Edit and Continue) may
	cause an access violation if you try to modify a text string.
	
	RESOLUTION
	==========
	
	Use one of the following workarounds:
	
	- In the sample below, change "char * ptr" to "char ptr[]".
	
	- Do not use the /ZI switch.
	
	STATUS
	======
	
	As per C++ Standard (2.13.4.2) the effect of attempting to modify a string
	literal is undefined.
	
	MORE INFORMATION
	================
	
	By default the compiler switch /ZI (Program Data Base for Edit and Continue)
	uses the compiler switch /GF.
	
	The /GF option enables the compiler to pool strings and place them in read-only
	memory. By placing the strings in read-only memory, the operating system does
	not need to swap that portion of memory. Instead, it can read the strings back
	from the image file. It is a good idea to do this as it saves pages of memory
	from being written to and therefore reduces the working set used by the
	application. In addition, it allows those pages to be shared between multiple
	instances of the process that use that image file (.exe or .dll file), further
	reducing total memory usage in the entire system. Strings placed in read-only
	memory cannot be modified; if you try to modify them, you will see an
	Application Error dialog box.
	
	The following code when executed after compile produces an access violation.
	
	Sample Code
	-----------
	
	     // Test.cpp
	     // Compile with: cl /ZI /Od test.cpp
	
	     int main ()
	     {
	       char* ptr = "Hello World";
	       ptr[3] = 'Q';   //Access violation
	       return 0;
	     }
	
	Since /ZI is used for debugging with Edit and Continue, the above code works fine
	in the Release build, where the /ZI switch is not used.
	
	Additional query words: string strings arrays initialize initialise aggregate access violation
	
	======================================================================
	Keywords          : kbCompiler kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch kbVCNET
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
