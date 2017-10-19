---
layout: page
title: "Q189719: BUG: JustPath() May Return an Empty String for Some Paths"
permalink: /kb/189/Q189719/
---

## Q189719: BUG: JustPath() May Return an Empty String for Some Paths

	Article: Q189719
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the JustPath() function in Visual FoxPro to strip off the file name
	portion of a full path, an empty string may be returned when dealing with files
	located in the root directory of a drive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Use the JustPath() function as follows:
	
	     ?JustPath("c:boot.ini") && For Windows NT 4.0 systems
	
	  -or-
	
	Use the JustPath() function as follows:
	
	     ?JustPath("c:msdos.sys") &&For Windows 95 or Windows 98 systems
	
	RESULTS: Nothing appears on the Visual FoxPro desktop.
	
	Additional query words: kbVFp600bug kbXBase kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
