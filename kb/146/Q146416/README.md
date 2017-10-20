---
layout: page
title: "Q146416: PRB: Page Fault When Using Bounds Checker STD or PRO"
permalink: /kb/146/Q146416/
---

## Q146416: PRB: Page Fault When Using Bounds Checker STD or PRO

{% raw %}

	Article: Q146416
	Product(s): Microsoft C Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbide kbVC kbGrpDSTools
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	NOTE: Some products mentioned in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	SYMPTOMS
	========
	
	After you install Bounds Checker Standard or Professional version 3.0, Visual
	C++ version 4.0 gives a page fault upon start up,
	
	Windows 95 reports:
	
	  
	
	  Msdev
	
	  This program has performed an illegal operation
	  and will be shut down.
	
	Clicking the Details button reports:
	
	  
	
	  MSDEV caused an invalid page fault in
	  module MSVCSHL.DLL at 0137:5001d791.
	
	Windows NT reports:
	
	  
	
	 msdev.exe - Application Error
	
	 The instruction at "0x77F8879F" referenced memory at "0x0000001c".
	 The memory could not be 'written'.
	
	CAUSE
	=====
	
	The Bcprovc.pkg file that ships with Bounds Checker Professional or Bcstdvc.pkg
	that ships with the standard version 3.0 is incompatible with Visual C++ 4.0.
	
	RESOLUTION
	==========
	
	NuMega Technologies Inc. is working on new versions of the above mentioned
	files. Please contact NuMega Technologies product support at (603) 889-2386 for
	availability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbide kbVC kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper
	Version           : 4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
