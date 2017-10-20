---
layout: page
title: "Q156076: BUG: WWWQuote Sample Generates Error Message"
permalink: /kb/156/Q156076/
---

## Q156076: BUG: WWWQuote Sample Generates Error Message

{% raw %}

	Article: Q156076
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbISAPI kbMFC kbVC kbVC420bug kbVC500fix kbMFC420bug kbGrpDSMFCATL
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The WWWQuote sample reports the following error when trying to bring up a new
	page from the Welcome page.
	
	  BAD REQUEST
	  Your client sent a request that this server didn't understand.
	  Request:
	
	CAUSE
	=====
	
	The HTML in the sample that is generated for the pages has a bug that prevents
	the DLL from correctly parsing the input from these pages.
	
	RESOLUTION
	==========
	
	Modify all the .htm files as shown below to fix the problem.
	
	Replace all instances of
	
	  NAME="MfcISAPICommmand"
	
	with the following:
	
	  NAME="MfcISAPICommand"
	
	Note that the original .htm files have an extra [ASCII 147]m[ASCII 148] in
	MfcISAPICommand. Rebuild the DLL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been fixed in the WWWQuote sample that
	shipped with Visual C++ version 5.0 or later.
	
	MORE INFORMATION
	================
	
	The files that contain the bug are:
	
	  issueerr.htm
	  next.htm
	  prev.htm
	  quoteerr.htm
	  selhead.htm
	  settail.htm
	  welcome.htm
	
	You can open these files by expanding the dependency files in Fileview for the
	project, and double-clicking the .htm file.
	
	Additional query words: WWWQuote
	
	======================================================================
	Keywords          : kbISAPI kbMFC kbVC kbVC420bug kbVC500fix kbMFC420bug kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
