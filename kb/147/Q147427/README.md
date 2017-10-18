---
layout: page
title: "Q147427: DOC: Description of C2354 Error Is Unclear"
permalink: kb/147/Q147427/
---

## Q147427: DOC: Description of C2354 Error Is Unclear

	Article: Q147427
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbdocerr kbCompiler kbCPPonly kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 k
	Last Modified: 14-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Neither the error message itself nor the online documentation for the C2354
	compiler error clearly specify the cause of this error:
	
	  'reference' : initialization of reference member requires a temporary
	  variable
	
	MORE INFORMATION
	================
	
	It is illegal to initialize a reference member of a class in the class's
	constructor with a temporary variable. An attempt to do so generates the C2354
	error, as illustrated by this sample code:
	
	Sample Code
	-----------
	
	  int temp() { return 1; }
	
	  class Test
	  {
	  public:
	      int member;
	      int& ref_member;
	      Test();
	  };
	
	  Test::Test() : ref_member( temp() )
	  {
	  }
	
	When this error is encountered, the solution is to change the code so that the
	reference member is not initialized to a temporary variable. The reference must
	be initialized to an object that will exist for the lifetime of the reference
	member.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr kbCompiler kbCPPonly kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbOLDocs 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC410 kbVC420 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : :2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
