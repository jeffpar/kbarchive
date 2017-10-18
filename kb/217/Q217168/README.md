---
layout: page
title: "Q217168: FIX: Application Crashes When Run in Debugger"
permalink: kb/217/Q217168/
---

## Q217168: FIX: Application Crashes When Run in Debugger

	Article: Q217168
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbVC600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application runs as expected outside of the debugger but causes an
	application error like this when run in the debugger:
	
	  System Process - Application Error
	  The Application failed to initialize properly (0xc00000005)
	
	Another symptom appears if the reserve value specified for the HEAP linker option
	is smaller than the commit value: The reserve value is silently increased to the
	commit value.
	
	CAUSE
	=====
	
	The heap reserve size is smaller than the commit size. This means that
	applications that rely on these values (such as the debugger) are not able to
	load the binary image.
	
	RESOLUTION
	==========
	
	The heap reserve size should always be greater than or equal to the commit size.
	The linker provided in Service Pack 3 checks these values. If the reserve value
	is less than the commit value, the linker generates a fatal error. For example,
	linking with the option /HEAP:0x400,0x1000 causes this error:
	
	  LNK1229: Commit size greater than the reserve size in "/HEAP"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	To view the reserve and commit values for an executable, use the dumpbin
	utility:
	
	  dumpbin /headers filename.exe
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbVC600 kbVS600sp2 kbVS600SP1 kbVS600sp3fix 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
