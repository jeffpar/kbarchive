---
layout: page
title: "Q143208: PRB: Using STL in Windows Program Can Cause Min/Max Conflicts"
permalink: kb/143/Q143208/
---

## Q143208: PRB: Using STL in Windows Program Can Cause Min/Max Conflicts

	Article: Q143208
	Product(s): Microsoft C Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A windows-based program that uses the Standard Template Library (STL) will not
	compile, and it generates several invalid parameter and syntax errors.
	
	CAUSE
	=====
	
	The problem is caused by conflicting definitions of min and max. Min and max are
	defined as macros in Windef.h as follows:
	
	     #ifndef NOMINMAX
	     #ifndef max
	     #define max(a,b)  (((a) > (b)) ? (a) : (b))
	     #endif
	
	     #ifndef min
	     #define min(a,b)  (((a) < (b)) ? (a) : (b))
	     #endif
	     #endif  /* NOMINMAX */ 
	
	NOTE: Windef.h is included by Windows.h, which is included in nearly every
	Windows-based program.
	
	Min and max are defined as templated functions in the Standard Template Library
	(STL). The following definitions of min and max can be found in the file
	Algobase.h:
	
	     template <class T>
	     inline const T& min(const T& a, const T& b) {
	         return b < a ? b : a;
	     }
	     template <class T, class Compare>
	     inline const T& min(const T& a, const T& b, Compare comp) {
	         return comp(b, a) ? b : a;
	     }
	     template <class T>
	     inline const T& max(const T& a, const T& b) {
	         return  a < b ? b : a;
	     }
	     template <class T, class Compare>
	     inline const T& max(const T& a, const T& b, Compare comp) {
	         return comp(a, b) ? b : a;
	     }
	
	Because the Windef.h definition is a macro, the function definitions cause syntax
	errors when both Windef.h (or Windows.h) and Algobase.h (from the STL) are
	included. The precise errors will depend on the order in which the two are
	compiled.
	
	RESOLUTION
	==========
	
	Simply define the NOMINMAX preprocessor symbol. This can be done in the
	Developer Studio project under Build, Settings, on the C/C++ tab, in the
	Preprocessor category. This will suppress the min and max definitions in
	Windef.h.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper
	Version           : 4.0
	Issue type        : kbprb
	
	=============================================================================
	
