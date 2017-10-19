---
layout: page
title: "Q146445: PRB: istream::seekg() Does Not Reset EOF State"
permalink: /kb/146/Q146445/
---

## Q146445: PRB: istream::seekg() Does Not Reset EOF State

	Article: Q146445
	Product(s): Microsoft C Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The istream::seekg() function does not reset the EOF (end of file) state when
	the stream pointer is already at EOF.
	
	RESOLUTION
	==========
	
	To work around this problem, call ios::clear() for the stream before calling
	istream::seekg().
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	You don't need to call clear(), if the stream pointer is not already at EOF.
	
	Sample Code
	-----------
	
	  /* Compile options needed: None
	  */ 
	
	  // Input: A file with the name test.txt containing some characters.
	
	  #include <fstream.h>
	  #include <assert.h>
	
	  void main()
	  {
	    fstream in("test.txt", ios::in);
	
	    char c;
	    int i = 0;
	
	    // Count characters in file
	    while (in.get(c))
	       ++i;
	
	    assert(in.eof());
	
	    // Reset read pointer to beginning of file
	    in.clear();
	    in.seekg(0, ios::beg);
	
	    // Check that file can now be read.
	    // Fails without the in.clear() statement above.
	    assert(!in.eof());
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 4.0
	Issue type        : kbprb
	
	=============================================================================
	
