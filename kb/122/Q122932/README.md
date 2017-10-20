---
layout: page
title: "Q122932: FIX: Special Characters in Path May Prevent File Access"
permalink: /kb/122/Q122932/
---

## Q122932: FIX: Special Characters in Path May Prevent File Access

{% raw %}

	Article: Q122932
	Product(s): Microsoft C Compiler
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbide kbVC kbVC200bug kbVC400fix kbGrpDSToolskbbuglist kbfixlist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Visual C++ fails to open files that have .BSC or .RC extensions when
	there are special characters (shown below) in the path. The editor will return
	to the main window without posting a warning or error.
	
	CAUSE
	=====
	
	The space character and the following characters cause this problem:
	
	  $  %  @  #  !  ^  (  )  {  }  [  ]
	
	All of these characters should work; they are all acceptable.
	
	RESOLUTION
	==========
	
	To work around this problem, avoid using any of the special characters listed
	above.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	version 4.0.
	
	REFERENCES
	==========
	
	For information about related problems with NMake, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q121018 BUG: Special Characters in Path Cause NMake Error U1007
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbVC kbVC200bug kbVC400fix kbGrpDSTools kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbVC200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
