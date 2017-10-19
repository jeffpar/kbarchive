---
layout: page
title: "Q93648: FIX: Program Hangs at Startup When 109 Segments in Application"
permalink: /kb/093/Q93648/
---

## Q93648: FIX: Program Hangs at Startup When 109 Segments in Application

	Article: Q93648
	Product(s): Microsoft Programming Utilities
	Version(s): 5.1,5.13,5.15
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 5.1, 5.13, 5.15 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to run an application fails when the computer hangs and stops
	responding. In some cases, the message "illegal instruction" appears before the
	computer hangs.
	
	CAUSE
	=====
	
	The application contains exactly 109 segments.
	
	RESOLUTION
	==========
	
	To work around this problem, modify the application to change the number of
	segments it contains.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in LINK versions 5.1, 5.13, and
	5.15. This problem was corrected in LINK version 5.2.
	
	MORE INFORMATION
	================
	
	To determine the number of segments in an application, include the /INF command
	option switch on the LINK command line.
	
	Additional query words: 5.10 5.13 5.15
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK510DOS kbLINK513DOS kbLINK515DOS
	Version           : :5.1,5.13,5.15
	Solution Type     : kbfix
	
	=============================================================================
	
