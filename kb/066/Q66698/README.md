---
layout: page
title: "Q66698: FIX: L1089 Error, Response Filename Length &gt; 32 Characters"
permalink: /kb/066/Q66698/
---

## Q66698: FIX: L1089 Error, Response Filename Length &gt; 32 Characters

	Article: Q66698
	Product(s): Microsoft Programming Utilities
	Version(s): 5.01.21,5.03,5.05
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for OS/2, versions 5.01.21, 5.03, 5.05, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to link an application fails and Microsoft LINK displays the
	following message:
	
	  LINK : Fatal error L1089 : D:\C600\FILES\PROJECT\TEST\MYFIL :
	  cannot open response file
	
	CAUSE
	=====
	
	The length of the path and filename for the response file exceeds 32 characters.
	
	RESOLUTION
	==========
	
	Move the file to a different directory or specify a relative file name to make
	the path and filename length less than or equal to 32 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a limitation in LINK versions 5.01.21, 5.03,
	and 5.05 for MS-DOS and OS/2. This limit was increased to 255 characters in LINK
	version 5.1 for MS-DOS and OS/2.
	
	Additional query words: 5.01.21 5.03 5.05
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch
	Version           : :5.01.21,5.03,5.05
	Solution Type     : kbfix
	
	=============================================================================
	
