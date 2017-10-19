---
layout: page
title: "Q99389: FIX: RW2002 Error From Long Resource Identifier"
permalink: /kb/099/Q99389/
---

## Q99389: FIX: RW2002 Error From Long Resource Identifier

	Article: Q99389
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbResourceEd kbVC kbVC100bug kbVC150bug kbGrpDSTools
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The App Studio, used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ for Windows* use 1699 1.0 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to build resources in App Studio fails and App Studio generates the
	following message:
	
	  error RW2002: File not found
	
	CAUSE
	=====
	
	If a bitmap, cursor, or icon has an identifier longer than 23 characters, App
	Studio incorrectly generates the resource file. As the identifier grows beyond
	23 characters, it eliminates spaces between the identifier and the resource
	statement. Eventually, the identifier displaces the resource statement to the
	right. If the identifier is long enough, it eliminates spaces between the
	resource statement and the memory option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in App Studio version 1.0 for
	Windows and App Studio version 1.1 (32-bit). This problem was corrected in
	Visual C++ 32-bit Edition version 2.0.
	
	MORE INFORMATION
	================
	
	App Studio generates a line like the following for the
	IDB_THISISAVERYLONGIDENTIFIER identifier:
	
	  IDB_THISISAVERYLONGIDENTIFIERBITMAPDISCARDABLE "filename.bmp"
	
	It should generate the following:
	
	  IDB_THISISAVERYLONGIDENTIFIER BITMAP DISCARDABLE "filename.bmp"
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbResourceEd kbVC kbVC100bug kbVC150bug kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
