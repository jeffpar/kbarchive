---
layout: page
title: "Q122216: FIX: Errors When Spaces Used in Resource File Specification"
permalink: /kb/122/Q122216/
---

## Q122216: FIX: Errors When Spaces Used in Resource File Specification

{% raw %}

	Article: Q122216
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC200bug kbVC400fix kbGrpDSToolskbbuglist kbfixlist
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 2.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 2.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When loading an App Studio generated resource file that has a space in either
	the name of the directory where the file is located or in the file name, the
	following garbled error message is generated:
	
	  fatal
	
	  ror C1007: unrecognized flag "<remainder of path after space>" in C1.
	
	Choosing OK generates an Application Error:
	
	  msvc.exe - Application Error
	
	  - The instruction at "0x100b163f" referenced memory at "0x0000000c".
	  The memory could not be "read".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVC kbVC200bug kbVC400fix kbGrpDSTools kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbVC200 kbVC32bitSearch
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
