---
layout: page
title: "Q113526: PRB: Can't Enter Valid Date with SET DATE and @ ... GET Date"
permalink: /kb/113/Q113526/
---

## Q113526: PRB: Can't Enter Valid Date with SET DATE and @ ... GET Date

	Article: Q113526
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for Macintosh, versions 2.5b, 2.5c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are entering a date with the date format specified as yy/mm/dd and
	CENTURY set to ON, you cannot enter a valid date.
	
	RESOLUTION
	==========
	
	Regardless of the desire for the short date format of yy/mm/dd with SET DATE
	ANSI and SET CENTURY ON, you must enter the date in the format:
	
	  2001/02/18.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In the Command window, issue the following commands:
	
	        x=DATE()
	        SET DATE ANSI
	        SET CENTURY ON
	        @ 1,1 GET x
	        READ CYCLE
	
	2. Type "01" (without the quotation marks) and press the ENTER key.
	
	From this point forward, you cannot enter a valid date; instead, the error
	message "Invalid Date" will always be returned.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro250cMac kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbprb
	
	=============================================================================
	
