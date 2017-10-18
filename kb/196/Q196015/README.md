---
layout: page
title: "Q196015: WD97: Dates in Table Sort Incorrectly as Date Type"
permalink: kb/196/Q196015/
---

## Q196015: WD97: Dates in Table Sort Incorrectly as Date Type

	Article: Q196015
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta word97 kbtable
	Last Modified: 07-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Dates earlier than January 1, 1901, or later than December 31, 2035, are sorted
	incorrectly when you sort a list in a table as a Date type. (To locate this
	option, click Sort Text on the Table menu.)
	
	For example, when you sort this list:
	
	  May 1, 1504
	  Jan 1, 1901
	  April 2, 1400
	  May 5, 1503
	  Sept 6, 1966
	
	The result appears like this:
	
	  May 1, 1504
	  April 2, 1400
	  May 5, 1503
	  Jan 1, 1901
	  Sept 6, 1966
	
	CAUSE
	=====
	
	Word does not recognize dates earlier than January 1, 1901, or later than
	December 31, 2035, as valid dates.
	
	WORKAROUND
	==========
	
	Sort the dates as text.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word97 kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
