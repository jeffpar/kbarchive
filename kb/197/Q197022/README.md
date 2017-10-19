---
layout: page
title: "Q197022: WD97: Status Bar Lists Incorrect Line Number in Table"
permalink: /kb/197/Q197022/
---

## Q197022: WD97: Status Bar Lists Incorrect Line Number in Table

	Article: Q197022
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97 kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the insertion point is in a table cell that spans a page break, the "Ln"
	(line number) value may be incorrect on the status bar. For example, the status
	bar may display "Ln 60" even though you are on line 7 of page 2.
	
	CAUSE
	=====
	
	Word may not recalculate the line number from the top of the page when a cell
	spans a page break. Instead, Word continues counting the lines from the page
	where the table cell started.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word97 kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
