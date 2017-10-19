---
layout: page
title: "Q98841: INFO: Conforming to ANSI C Standards"
permalink: /kb/098/Q98841/
---

## Q98841: INFO: Conforming to ANSI C Standards

	Article: Q98841
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,4.0,5.0,6.0,7.0
	Operating System(s): 
	Keyword(s): kbLangC kbVC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC400 kbVC500 kbVC600 kbDSupport
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ for MS-DOS, version 7.0 
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 2.0, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	Names starting with a single underscore and an uppercase letter, or names
	beginning with a double underscore and a lowercase letter, can be used in a
	"conforming" C program translated by a "conforming" implementation; these names,
	and the meaning and syntax associated with each name, are reserved by the
	implementation. ANSI C also specifies the requirements for a "strictly
	conforming" program, in which these constructions are not permitted.
	
	MORE INFORMATION
	================
	
	Other compilers may ignore such names that exist in the implementation space, or
	produce any desired behavior, and the program can still be defined as
	conforming.
	
	The Microsoft C compiler does not have a strictly conforming mode of operation.
	As a result, if a developer uses another vendor's compiler, which is a strictly
	conforming implementation, the Microsoft headers will not work. In this case,
	the vendor of the strictly conforming compiler must provide the appropriate
	headers for the system.
	
	Because the standard headers are part of the implementation, there is no
	requirement for the header mechanisms provided by one implementation to be
	interoperable with the mechanisms of another. Another implementation MUST
	provide its own compatible set of standard headers and their associated
	inclusion mechanisms.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangC kbVC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC400 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbZNotKeyword3 kbCVC700DOS kbVC500 kbVC600 kbVC151 kbVC200 kbVC32bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,4.0,5.0,6.0,7.0
	Issue type        : kbinfo
	
	=============================================================================
	
