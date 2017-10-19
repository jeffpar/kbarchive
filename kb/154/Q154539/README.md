---
layout: page
title: "Q154539: PRB: Including STL.H Causes Compiler Errors"
permalink: /kb/154/Q154539/
---

## Q154539: PRB: Including STL.H Causes Compiler Errors

	Article: Q154539
	Product(s): Microsoft C Compiler
	Version(s): 4.20
	Operating System(s): 
	Keyword(s): kbprb
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Standard C++ Library, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Programs that include "STL.H" generate different compiler errors, depending on
	the STL template class you try to instantiate. The compiler errors are all in
	STL header files. The sample code below illustrates some of these errors.
	
	CAUSE
	=====
	
	STL.H contains typographical and syntax errors.
	
	RESOLUTION
	==========
	
	STL.H was included with Visual C++ 4.2 by mistake. It is not part of the ANSI
	standard for Standard C++ Libraries and should not be used. Instead, include the
	individual header files associated with the particular STL component(s) the
	program is using. The sample code below, for example, will compile and run
	correctly if "#include <stl.h>" is changed to "#include <vector>."
	
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /* Compile options needed:
	  */ 
	
	  //workaround: change the following line to #include <vector>
	  #include <stl.h>
	
	  //workaround: change the "typedef" to:
	  //typedef vector<int, allocator<int> > INTVECT;
	  typedef vector<int> INTVECT;
	
	  void main()
	  {
	       INTVECT ivect;
	  }
	
	Additional query words: 4.20 kbdsd STL STL.H allocator vector deque list map multimap set multiset queue stack priority_queue
	
	======================================================================
	Keywords          : kbprb 
	Technology        : kbVCsearch kbAudDeveloper kbVCLibrary
	Version           : 4.20
	Issue type        : kbprb
	
	=============================================================================
	
