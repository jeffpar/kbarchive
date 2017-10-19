---
layout: page
title: "Q188708: BUG: Error C1083 Building Large Projects with Browse Info"
permalink: /kb/188/Q188708/
---

## Q188708: BUG: Error C1083 Building Large Projects with Browse Info

	Article: Q188708
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Visual C++ 5.0 compiler generates the following compiler error when you
	build a project that contains a large number of source files with Browse Info
	generation enabled (/Fr compiler switch):
	
	  
	
	  fatal error C1083: Cannot open compiler generated file:
	      'filename.sbr': No such file or directory
	
	CAUSE
	=====
	
	The compiler does not close the browse files and subsequently runs out of file
	handles.
	
	RESOLUTION
	==========
	
	After this error occurs, use the Build command to compile the remaining files
	and link.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: kbCompiler kbVC500bug kbDSupport kbdss
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : WINNT:5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
