---
layout: page
title: "Q149181: FIX: Removing Subproject Causes Page Fault"
permalink: /kb/149/Q149181/
---

## Q149181: FIX: Removing Subproject Causes Page Fault

	Article: Q149181
	Product(s): Microsoft C Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC410fix kbGrpDSTools
	Last Modified: 14-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Removing a subproject (on the Build menu, click Configurations, and then click
	Remove), may cause a page fault in Developer Studio.
	
	Under Windows 95, the error message is:
	
	  This program has performed an illegal operation and will be shut down.
	
	clicking the details button indicates:
	
	  MSDEV caused an invalid page fault in module MSVCCLS.PKG at 0137:512d1268.
	
	Under Windows NT, the error message is:
	
	  The instruction at "0x512d1268" referenced memory at "0x00000000".
	  The memory could not be "read".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.1.
	
	MORE INFORMATION
	================
	
	NOTE: After you dismiss the error dialogs, MSDEV may still be running in the
	background with some project files locked. Under Windows 95, you need to reboot
	the computer to remove the process and unlock the files. Under Windows NT, you
	may be able to terminate the process and therefore unlock the files by using
	Pview.exe.
	
	Additional query words: kbVC400bug 4.00 4.10 crash
	
	======================================================================
	Keywords          : kbide kbVC kbVC410fix kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC32bitSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
