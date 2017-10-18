---
layout: page
title: "Q201830: BUG: Error C2011 When Reusing Nested Structure Tag Names"
permalink: kb/201/Q201830/
---

## Q201830: BUG: Error C2011 When Reusing Nested Structure Tag Names

	Article: Q201830
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbConly kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 4.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the same tag name is used to declare nested structures inside different
	base structure declarations, the follow error is generated:
	
	  error C2011: '<identifier>' : '<type>' type redefinition
	
	NOTE: The C++ compiler does not generate this error.
	
	RESOLUTION
	==========
	
	To work around this problem, either don't use tag names for nested structures,
	or use unique tag names for all structures.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The following code fails to compile with the C compiler. Error C2011 is reported
	at the second use of "tag_LEVEL2" and "tag_LEVEL3". This error does not occur
	using the C++ compiler.
	
	  /* Defining "A" structure */ 
	  struct tag_STRUCTA {
	
	     struct tag_LEVEL2 {
	        int   member_a2;
	
	        struct tag_LEVEL3 {
	           int member_a3;
	        };
	     };
	  };
	
	  /* Defining "B" structure */ 
	  struct tag_STRUCTB {
	
	     struct tag_LEVEL2 {
	        int   member_b2;
	     };
	     struct tag_LEVEL3 {
	        int member_b3;
	     };
	  };
	
	Additional query words:
	
	======================================================================
	Keywords          : kbConly kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:2.0,4.0,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
