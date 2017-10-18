---
layout: page
title: "Q138953: BUG: Static Identifiers Do Not Show Up in ClassView"
permalink: kb/138/Q138953/
---

## Q138953: BUG: Static Identifiers Do Not Show Up in ClassView

	Article: Q138953
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbide kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbGrpDSTools
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Globals folder in the ClassView of Developer's Studio is used to display and
	provide quick access to global identifiers in the current project. Identifiers
	declared as static that have file scope are missing from the ClassView Globals
	folder.
	
	NOTE: In Visual C++ .NET, the nonstatic identifiers do not appear either.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. Microsoft has confirmed this to be a bug in the
	Microsoft products listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Sample Code to Demonstrate Problem
	----------------------------------
	
	     // Main.cpp
	     #include <StdIo.h>
	     ...
	     static int nGlobalStaticInt;  // Will not show up in Globals Folder
	     int        nGlobalInt;        // Will show up in Globals Folder
	     ...
	     void main(void)
	     {
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbide kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
