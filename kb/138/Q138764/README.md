---
layout: page
title: "Q138764: FIX: Custom Build Commands Not Assigned Values"
permalink: kb/138/Q138764/
---

## Q138764: FIX: Custom Build Commands Not Assigned Values

	Article: Q138764
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbNoUpdate
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
	
	When building a project from the command line using the following custom macros,
	you will encounter undetermined errors.
	
	  MSDevDir
	  WkspName
	  RemoteTarget
	
	NOTE: For information about these custom macros, please see "Using Argument
	Macros" in the Visual C++ Users Guide.
	
	CAUSE
	=====
	
	These custom macros are not assigned in the .mak file. For example,
	
	this:
	
	  $(MSDevDir)\bin
	
	expands to this:
	
	  \bin
	
	RESOLUTION
	==========
	
	Define these macros in the NMAKE command line to work around this problem. For
	example,
	
	  NMAKE /f MyProject.mak MsDevDir=C:\MSDEV<Enter>
	
	Note that the macros are case-sensitive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ 6.0 Service Pack 5.
	
	Additional query words: kbVC400bug MSDEV
	
	======================================================================
	Keywords          : kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
