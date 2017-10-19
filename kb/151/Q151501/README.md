---
layout: page
title: "Q151501: FIX: Linking Large Projects Can Be Very Slow"
permalink: /kb/151/Q151501/
---

## Q151501: FIX: Linking Large Projects Can Be Very Slow

	Article: Q151501
	Product(s): Microsoft Programming Utilities
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbtool kbVC500bug kbVS97sp1fix
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Linker (LINK.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Linking a large project can take significantly longer than expected.
	
	CAUSE
	=====
	
	The linker version 5.00.7022 that was shipped with Visual C++ 5.0 does two types
	of optimizations to decrease the image size and increase the program speed.
	Transitive COMDAT Elimination(TCE) and Identical COMDAT Folding(ICF). TCE
	removes unreferenced COMDATs, while ICF folds identical COMDATs into one copy.
	The linker option for TCE is /OPT:REF and the option for ICF is /OPT:ICF.
	/OPT:REF, which is the default for the release build, turns on /OPT:ICF by
	default. Some applications cause ICF to proceed very slowly.
	
	RESOLUTION
	==========
	
	Turn off Identical COMDAT folding(ICF) by specifying /OPT:NOICF in your linker
	options.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in Visual Studio 97
	Service Pack 1.
	
	For additional information about the Visual Studio 97 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbVC500bug kbVS97sp1fix 
	Technology        : kbVCsearch kbAudDeveloper kbLINKSearch kbLINK100
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
