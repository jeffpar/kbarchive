---
layout: page
title: "Q59093: FIX: F6412 &quot;SHARE Not Installed&quot; Error When File Name Invalid"
permalink: /kb/059/Q59093/
---

## Q59093: FIX: F6412 &quot;SHARE Not Installed&quot; Error When File Name Invalid

	Article: Q59093
	Product(s): Microsoft Fortran Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FORTRAN compiler for OS/2, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to open a file in the OS/2 operating system produces the following
	message:
	
	  run-time error F6412: OPEN(filename.ext.)
	  - SHARE not installed
	
	CAUSE
	=====
	
	The file has an invalid file extension. The error message is incorrect and
	should read as follows:
	
	  run-time error F6414: OPEN(filename.ext.)
	  - access not allowed
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in FORTRAN version 5.0 for OS/2.
	This problem was corrected in FORTRAN version 5.1 for OS/2.
	
	MORE INFORMATION
	================
	
	The following code example demonstrates this error. The trailing period is not a
	valid part of the filename specification.
	
	Sample Code
	-----------
	
	  C Compile options needed: None
	
	       OPEN(UNIT = 7, FILE = 'FILENAME.EXT.')
	       END
	
	Additional query words: 5.00 buglist5.00 fixlist5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFortranSearch kbZNotKeyword3 kbFORTRAN500OS2
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
