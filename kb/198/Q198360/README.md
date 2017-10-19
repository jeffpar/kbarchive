---
layout: page
title: "Q198360: WD97: Line Numbers Stop After Line 65534"
permalink: /kb/198/Q198360/
---

## Q198360: WD97: Line Numbers Stop After Line 65534

	Article: Q198360
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kbnumbering
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you apply line numbers to a large document and the line numbers reach 65534
	on a page, line numbers are suppressed for the remaining lines. If your document
	continues to a new page, the line numbers reappear, but numbering is restarted.
	
	CAUSE
	=====
	
	By design, Word numbers lines only up to 65534. When your document exceeds 65534
	total lines and continues on to additional pages, the line numbers start over
	again at line 1.
	
	WORKAROUND
	==========
	
	There is no workaround to allow Word to number lines beyond 65534. However, to
	force Word to display the restarted line numbers on the page that contains line
	number 65534, insert a continuous section break at the end of line 65534.
	
	To insert a continuous section break, follow these steps:
	
	1. Place the insertion point at the end of line 65534.
	
	2. On the Insert menu, click Break.
	
	3. Under Section Breaks, click to select Continuous, and then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	To apply line numbers, follow these steps:
	
	1. Open an existing document or create a new one.
	
	2. On the File menu, click Page Setup.
	
	3. On the Layout tab, click Line Numbers.
	
	4. In the Line Numbers dialog box, click to select the "Add line numbering"
	  check box, and then click OK.
	
	NOTE: To continuously number each line of your document (without restarting at
	each page or section), click to select Continuous under Numbering. This allows
	Word to number your lines up to 65534. If your document exceeds a total of 65534
	lines, Word automatically restarts the line numbers at 1.
	
	Additional query words:
	
	======================================================================
	Keywords          : word97 kbnumbering 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
