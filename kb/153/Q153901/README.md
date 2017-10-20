---
layout: page
title: "Q153901: PRB: #pragma comment(lib...) Can Specify Only Libraries"
permalink: /kb/153/Q153901/
---

## Q153901: PRB: #pragma comment(lib...) Can Specify Only Libraries

{% raw %}

	Article: Q153901
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbusage kbCompiler kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The comment pragma allows the user to insert comments into an object file or
	executable file. The lib specifier allows the user to pass this comment to the
	linker to specify additional libraries to link when using the object module.
	Some users utilize the lib comment pragma to add linker options as well as
	library names, such as:
	
	  #pragma comment(lib, "MSVCRT -VERBOSE")
	
	This line, under Visual C++ 2.x, would pass the string to the linker as is,
	resulting in the addition of the /VERBOSE linker option as well as the
	MSVCRT.LIB library. This behavior was not specified to work in this manner. The
	compiler wouldn't put quotes around comment string, so spaces would delimit the
	text.
	
	In Visual C++ 4.0, 4.1, and 4.2, the compiler correctly puts quotes around the
	comment string thereby causing the above code to generate the following error:
	
	  LINK : fatal error LNK1104: cannot open file "MSVCRT -VERBOSE.lib"
	
	RESOLUTION
	==========
	
	Use the following new pragma to specify linker options:
	
	#pragma comment(linker, "<linker options>")
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  // Compile options needed: none
	
	  // test.c
	
	  #pragma comment(lib,"MYLIBRARY -VERBOSE")
	
	  void main(void)
	  {
	  }
	
	REFERENCES
	==========
	
	For more information on /VERBOSE), please see the product documentation.
	
	Additional query words: 10.00 10.10 10.20
	
	======================================================================
	Keywords          : kbusage kbCompiler kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
