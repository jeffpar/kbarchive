---
layout: page
title: "Q122334: FIX: Dependencies Not Generated for Files w/Lines Ending in LF"
permalink: /kb/122/Q122334/
---

## Q122334: FIX: Dependencies Not Generated for Files w/Lines Ending in LF

{% raw %}

	Article: Q122334
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 2.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 2.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual Workbench does not generate dependencies for files that contain lines
	ending with a line-feed (LF) character only. Dependencies are generated
	correctly for files with lines that end in both a carriage-return (CR) and
	line-feed (LF) character.
	
	RESOLUTION
	==========
	
	Open the file in Visual Workbench. Then save it without making any changes. The
	saved file will contain both CR and LF characters at the end of each line. After
	that, dependencies will be correctly generated for that file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	Files with lines ending in the LF character typically come from the UNIX
	environment. MS-DOS text files have lines ending in both a CR and LF character.
	
	Additional query words: 2.00 carriage return returns include
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbVC200 kbVC32bitSearch
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
