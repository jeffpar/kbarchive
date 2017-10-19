---
layout: page
title: "Q90911: FIX: CodeView Version 4.0 Redirects STDPRN to the Screen"
permalink: /kb/090/Q90911/
---

## Q90911: FIX: CodeView Version 4.0 Redirects STDPRN to the Screen

	Article: Q90911
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01,4.05
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 4.0, 4.01, 4.05 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When version 4.0, 4.01, or 4.05 of CodeView for MS-DOS is used to debug an
	application that sends output to STDPRN, the output is redirected to the screen.
	
	RESOLUTION
	==========
	
	Reopen STDPRN to the PRN device. The sample code below demonstrates the steps
	involved.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in CodeView versions 4.0, 4.01, and
	4.05. This problem was corrected in CodeView version 4.1.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /* Compile options needed: /Od /Zi (/D_DEBUG to work around problem)
	  */ 
	
	  #include <stdio.h>
	
	  void main(void)
	  {
	      fprintf(stdprn, "When running under CV 4.0, this "
	                      "is sent to the screen.\n");
	
	  #ifdef _DEBUG
	      freopen("PRN", "wb", stdprn);
	
	      fprintf(stdprn, "When running under CV 4.0, this "
	                      "is sent to the printer.\n");
	  #endif
	
	  }
	
	Additional query words: 4.00 4.01 4.05
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS
	Version           : :4.0,4.01,4.05
	Solution Type     : kbfix
	
	=============================================================================
	
