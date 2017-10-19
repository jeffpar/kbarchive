---
layout: page
title: "Q243451: INFO: C++ Standard Noncompliance Issues with Visual C++ .Net"
permalink: /kb/243/Q243451/
---

## Q243451: INFO: C++ Standard Noncompliance Issues with Visual C++ .Net

	Article: Q243451
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbLangCPP kbVC600 kbGrpDSVCCompiler
	Last Modified: 04-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article gives a list of the known standard non-compliance issues with
	Visual C++ 6.0.
	
	MORE INFORMATION
	================
	
	In the following list the relevant standard section is given in parenthesis.
	Where an article link is provided, please refer to the article for more
	information.
	
	- Covariant return types (10.3.5) not supported.
	
	  Q240862 BUG: C2555 On Virtual Functions with Covariant Return Types
	
	- Partial ordering of template functions (14.5.5.2) not supported.
	
	  Q240869 BUG: C2667 and C2668 on Partial Ordering of Function Templates
	
	- Koenig lookup (3.4.2) not fully supported.
	
	  Q242190 BUG: Full Koenig Lookup Works only for operators
	
	- Template arguments must be deduced for function templates (14.8.1).
	
	  Q240871 BUG: Explicitly Specified Template Functions Not Overloaded Correctly
	
	- Class template partial specializations (14.5.4) not supported.
	
	  Q240866 BUG: C2989 and C2988 on Class Template Partial Specializations
	
	- Out-of-class-definition for member template classes and functions (14.5.2)
	  not supported.
	
	  Q241949 BUG: C2059 on Out-of-class Definition of Member Templates
	
	- Template Template-parameters (14.1) not supported.
	
	  Q241940 BUG: C2954 on using class template as template parameter
	
	- Export keyword for templates (14, 14.7.2, 14.7.3) not supported.
	
	  Q239436 PRB: LNK2001 on Template Member Functions
	
	- Function Try Block Syntax (15) not supported.
	
	  Q241706 BUG: C2123 on Function Try Block Syntax
	
	- uncaught_exception() (18.6.4) not implemented.
	
	  Q242192 BUG: uncaught_exception() Always Returns False
	
	- In place initialization static const members (9.2) not supported.
	
	  Q241569 BUG: C2258 and C2252 on in Place Initialization of Static Const
	  Members
	
	- C library functions not in standard namespace (17.3.1.2).
	
	  Q243444 BUG: CSTDLIB Does Not Define the Namespace STD
	
	- Scope of variable declared in the for loop initialization (6.5.3) not as per
	  standard.
	
	  Q167748 PRB: Variable Scope in for-statement Extends Beyond Loop.
	
	- Function exception specifiers (15, 15.4)other than throw() are parsed but not
	  used. Example:
	
	  void f() throw(int); // parsed but not used   
	  void g() throw();    // parsed and used   
	
	- Alternative operators like and ,and_eq, bit and etc are not implemented
	  (2.11). But you can get the same behavior by including iso646.h
	
	REFERENCES
	==========
	
	For more information, see the ANSI/ISO C++ Standard.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbLangCPP kbVC600 kbGrpDSVCCompiler 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch kbVCNET
	Version           : :6.0
	Issue type        : kbinfo
	
	=============================================================================
	
