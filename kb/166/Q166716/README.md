---
layout: page
title: "Q166716: BUG: Header File Listed in SYSINCL.DAT in Dependency List"
permalink: /kb/166/Q166716/
---

## Q166716: BUG: Header File Listed in SYSINCL.DAT in Dependency List

	Article: Q166716
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbProgramming kbide kbVC kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdatekbbuglist
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A header file listed in the SYSINCL.DAT file still appears in the External
	Dependencies list.
	
	CAUSE
	=====
	
	The directory to the header file is specified with forward slash (sys/test.h)
	rather than a backward slash (sys\test.h) in the SYSINCL.DAT file. Specifying
	the directory with a backslash in the SYSINCL.DAT file excludes files that are
	included in the source file with either forward or backward slashes. For
	example:
	
	#include <sys/test1.h>
	  #include <sys\test2.h>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The files listed in SYSINCL.DAT should be excluded from dependency scanning and
	not be displayed in the External Dependencies folder.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming kbide kbVC kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdate kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
