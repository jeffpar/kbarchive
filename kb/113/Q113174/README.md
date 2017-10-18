---
layout: page
title: "Q113174: BUG: Incorrect Return Value with CAPSLOCK() or NUMLOCK()"
permalink: kb/113/Q113174/
---

## Q113174: BUG: Incorrect Return Value with CAPSLOCK() or NUMLOCK()

	Article: Q113174
	Product(s): Microsoft FoxPro
	Version(s): 2.0,2.5,2.5a,2.5b,3.0,3.0b,5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): kbProgramming kbvfp300 kbvfp500 kbvfp600 kbDSupport kbvfp250kbbuglist
	Last Modified: 19-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0, 7.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The logical result of an operation involving the NUMLOCK() and CAPSLOCK()
	functions incorrectly returns a FALSE value when either function is used with
	the logical expression operator and the second expression returns TRUE.
	
	RESOLUTION
	==========
	
	To work around this behavior, you must use a nested IF statement if you are
	going to use the result of either NUMLOCK() or CAPSLOCK() in conjunction with
	another logical expression.
	
	For example, the following code will correctly display the WAIT window message:
	
	        * ensure the NUMLOCK key is on
	        STORE .T. to istrue
	        IF NUMLOCK()
	           IF istrue
	              WAIT WINDOW 'they are both true'
	           ENDIF
	        ENDIF
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To reproduce this behavior, use the following code example:
	
	        * ensure the NUMLOCK key is on
	        STORE .T. to istrue
	        IF NUMLOCK() AND istrue
	           WAIT WINDOW 'they are both true'
	        ENDIF
	
	Note that the WAIT window message does not appear as it should in this example.
	
	Additional query words: FoxDos 2.50 2.50a 2.50b true logic logical both buglist2.00 buglist2.50 buglist2.50a buglist2.50b buglist2.60
	
	======================================================================
	Keywords          : kbProgramming kbvfp300 kbvfp500 kbvfp600 kbDSupport kbvfp250 kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP700 kbVFP500a
	Version           : :2.0,2.5,2.5a,2.5b,3.0,3.0b,5.0,5.0a,6.0,7.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
