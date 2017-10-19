---
layout: page
title: "Q128603: FIX: Visual Workbench Generates Dependencies for ODL Files"
permalink: /kb/128/Q128603/
---

## Q128603: FIX: Visual Workbench Generates Dependencies for ODL Files

	Article: Q128603
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Workbench for Windows, version 1.0, used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Adding .ODL files to a make file in the Visual Workbench causes the Visual
	Workbench to unnecessarily generate dependencies for the .ODL file.
	
	CAUSE
	=====
	
	An .ODL file included in the project file list typically includes other .ODL
	files. The Visual Workbench dependency scanner adds a type library target for
	each .ODL file to the MTL_TLBS target in the project. NMAKE tries to build a
	type library for every target specified by the MTL_TLBS target.
	
	RESOLUTION
	==========
	
	To prevent the Visual Workbench from adding type library targets for each
	included .ODL file, change the file extensions inside the main .ODL file to
	something other than ODL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	Consider this .ODL file (MYPROJ.ODL):
	
	     // This is the master ODL file, MYPROJ.ODL
	     #include "object1.odl"
	     #include "object2.odl"
	     // End of MYPROJ.ODL
	
	If MYPROJ.ODL is added to a project's file list, the MTL_TLBS target which is
	added to the project looks like this:
	
	     MTL_TLBS: $(OUTDIR)\MYPROJ.TLB .\OBJECT1.TLB .\OBJECT2.TLB
	
	NOTE: OBJECT1.TLB and OBJECT2.TLB must exist in order to reproduce this problem,
	but they do not have to contain .ODL file information for this demonstration.
	
	When the Visual Workbench is used to build the project, only MYPROJ.TLB is built.
	However, if NMAKE is used to build the project, all three type libraries
	specified by MTL_TLBS are built.
	
	Additional query words: 2.00 2.10
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVSsearch kbAudDeveloper
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
