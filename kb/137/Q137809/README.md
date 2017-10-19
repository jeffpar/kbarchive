---
layout: page
title: "Q137809: FIX: Insufficient Memory on a Computer That Has 512 MB of RAM"
permalink: /kb/137/Q137809/
---

## Q137809: FIX: Insufficient Memory on a Computer That Has 512 MB of RAM

	Article: Q137809
	Product(s): Microsoft FoxPro
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbenv kbvfp kbvfp300bFIX kbDSupportkbbuglist kbfixlist
	Last Modified: 27-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error "Insufficient Memory" displays when you attempt to start a Visual
	FoxPro 3.0 session. The computer has 512 megabytes (MB) of RAM, or more, and
	should have enough memory for Visual FoxPro to start.
	
	NOTE: In Visual FoxPro 3.0, the insufficient memory message does not occur on
	computers with less than 512 MB of RAM.
	
	NOTE: In Visual FoxPro 3.0b, the insufficient memory message does not occur on
	computers with less than 768 MB of RAM.
	
	
	RESOLUTION
	==========
	
	If you are using Microsoft Windows NT, you can limit the amount of memory used
	by the operating system. You can create a boot (in the Boot.ini file) that uses
	a special configuration for Visual FoxPro. To limit the amount of memory that
	Windows NT uses, use the MaxMem switch. Using a trial and error method,
	determine the maximum amount of memory you can use before you receive the
	"Insufficient Memory" error when launching Visual FoxPro.
	
	For more information about multi-boot and the MaxMem switch, please see the
	Windows NT documentation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in Visual FoxPro
	5.0a for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Install Visual FoxPro on a computer that has 512 megabytes of RAM.
	
	2. Start Visual FoxPro. The "Insufficient memory" error appears, and Visual
	  FoxPro cannot start.
	
	Additional query words: crash
	
	======================================================================
	Keywords          : kbenv kbvfp kbvfp300bFIX kbDSupport kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
