---
layout: page
title: "Q140573: FIX: F4 to Go to Error/Tag Doesn't Always Open Source File"
permalink: /kb/140/Q140573/
---

## Q140573: FIX: F4 to Go to Error/Tag Doesn't Always Open Source File

	Article: Q140573
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbGrpDSTools kbNoUpda
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some project configurations may cause the Go To Error/Tag functionality in the
	Developer Studio to fail when you double-click (or press F4) the compile results
	in the output window.
	
	CAUSE
	=====
	
	A subproject or main project that refers to an Include file in a directory
	outside of the default directory may exhibit this behavior. For example, a
	workspace with the following directory structure will produce the problem if a
	compiler error is generated in MyIncludeFile.h. The subproject source files are
	in the directory .
	
	\Subproject./>
	\toplevel
	   .\subproject
	   .\include
	
	The .\Include directory contains files that the project source file references
	with this syntax:
	
	     #include "MyIncludeFile.h"
	
	The build settings for the compiler preprocessor for the project has its
	Additional Include Directories field set to:
	
	  .\Include
	
	RESOLUTION
	==========
	
	Either put the Include files in the .\Subproject directory, or give the complete
	path name in the compiler preprocessor's Additional Include Directories field:
	
	  <drive>:\toplevel\include
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Visual C++ 6.0 Service Pack 5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
