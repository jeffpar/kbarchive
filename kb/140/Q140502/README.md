---
layout: page
title: "Q140502: FIX: ClassView Cannot Find Function That Has Been Moved"
permalink: kb/140/Q140502/
---

## Q140502: FIX: ClassView Cannot Find Function That Has Been Moved

	Article: Q140502
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbcode kbide kbVC400bug kbVC500bug kbVC600fix kbGrpDSTools
	Last Modified: 09-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a function definition is moved to a different place in a source file,
	navigating to that function from ClassView will no longer work. ClassView will
	jump to the line in the source file where the function used to be defined.
	
	CAUSE
	=====
	
	ClassView uses bookmarks to determine where to jump to in the file. The
	bookmarks are not updated until the file is saved.
	
	RESOLUTION
	==========
	
	Save the source file.
	
	Visual C++ 6.0 dynamically updates the information in ClassView, so saving the
	source file is unnecessary for the updated location to be recognized.
	
	STATUS
	======
	
	This problem was corrected in Microsoft Visual C++, version 6.0.
	
	MORE INFORMATION
	================
	
	To observe this behavior, save the following sample file. Move one of the
	function definitions to a different line, and then attempt to use ClassView to
	navigate to that function
	
	Sample Code
	-----------
	
	     /* Compile options needed: none
	     */ 
	
	     class TestClass {
	     public:
	        void FuncA( void );
	        void FuncB( void );
	        void FuncC( void );
	        TestClass(){;}
	        ~TestClass(){;}
	     };
	     void TestClass::FuncA( void ){}
	     void TestClass::FuncB( void ){}
	     void TestClass::FuncC( void ){}
	
	Additional query words: Class View VwbIss
	
	======================================================================
	Keywords          : kbcode kbide kbVC400bug kbVC500bug kbVC600fix kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:4.0,5.0
	Issue type        : kbbug kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
