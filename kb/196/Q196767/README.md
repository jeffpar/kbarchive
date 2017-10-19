---
layout: page
title: "Q196767: WD97: Formulas Incorrectly Calculate Times"
permalink: /kb/196/Q196767/
---

## Q196767: WD97: Formulas Incorrectly Calculate Times

	Article: Q196767
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The MAX and MIN functions display incorrect results when calculating numbers in
	a time format. For example, if you have the following column of numbers:
	
	  0:11:30
	  0:08:50
	  0:02:01
	  0:12:00
	
	the MAX function, such as
	
	     {=MAX(above)}
	
	returns a result of 58; the MIN function
	
	     {=MIN(above)}
	
	returns a result of 3.
	
	These incorrect results also occur when you use the SUM formula, and you bookmark
	the times and reference the bookmark names in your formula.
	
	CAUSE
	=====
	
	Word interprets the colon as an operator for addition. In the above example,
	Word first adds 11 and 30, 8 and 50, 2 and 1, and 12 and 0. This computes to 41,
	58, 3, and 12. The highest or MAX value equals 58; the lowest or MIN value
	equals 3. The SUM formula gives you the result of 114.
	
	Additional query words: paste function table format time max min sum formula calculation calculate add addition
	
	======================================================================
	Keywords          : kbdta kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
