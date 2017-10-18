---
layout: page
title: "Q66650: INFO: Purpose of &quot;Internal Linkage&quot; &amp; &quot;No Linkage&quot; Information"
permalink: kb/066/Q66650/
---

## Q66650: INFO: Purpose of &quot;Internal Linkage&quot; &amp; &quot;No Linkage&quot; Information

	Article: Q66650
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kbLangC kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500
	Last Modified: 14-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The term "internal linkage" refers to the functions and labels in the code that
	the compiler fixes up, as best it can, at compile time. However, because the
	linker coalesces the various segment pieces together (that is, the linker places
	the _DATA items into the _DATA segment, the _TEXT items into the _TEXT segment,
	and so on), the linker must fix up the final addresses for these items. This
	information is "internal" to the function.
	
	The term "no linkage" refers to data (information) for which the linker has no
	use when it creates the final .EXE file, information such as structure names,
	typedefs, function parameters, local variable names, and so on. These values are
	resolved by the compiler (parameters or local variables that are stack based),
	or are used by other utilities after the linker fixes up the code (debugging and
	profiling information). Because this information may be required after linking
	and the compiler generates this information, the linker assigns it "no linkage"
	status and passes it through without change.
	
	For more information on linkage types, see "C Scope and Linkage: The Keys to
	Understanding Identifier Accessibility" in the November 1988 issue of the
	"Microsoft Systems Journal", or search the online documentation provided with
	all versions of Microsoft Visual C++ for the term "linkage."
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangC kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,2.1,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
