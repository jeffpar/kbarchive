---
layout: page
title: "Q254366: WD97: Inserted Excel Worksheet Object Too Large for Word Page"
permalink: /kb/254/Q254366/
---

## Q254366: WD97: Inserted Excel Worksheet Object Too Large for Word Page

{% raw %}

	Article: Q254366
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Excel 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert a Microsoft Excel Worksheet in a Word document, the worksheet
	cells may be too large and the worksheet may not fit on the page.
	
	
	CAUSE
	=====
	
	This problem occurs when the standard font size in Microsoft Excel has been
	changed to a large font size.
	
	WORKAROUND
	==========
	
	To correct this problem, change the standard font size in Microsoft Excel to a
	smaller size before you insert the Excel worksheet. To do this, follow these
	steps:
	
	1. Start Microsoft Excel.
	
	2. On the Tools menu, click Options.
	
	3. On the General tab, change the Size box to 10.
	
	4. Click OK.
	
	5. On the File menu, click Exit to quit Microsoft Excel.
	
	NOTE: If you have an existing Microsoft Excel Worksheet embedded in a Word
	document that is experiencing this problem, changing the standard font size in
	Microsoft Excel will not affect the worksheet. To resolve this problem, you must
	delete the existing worksheet in your Word document and then insert a new one
	after you make the changes in Microsoft Excel.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbExcelSearch kbWord97 kbWord97Search kbZNotKeyword2 kbExcel97Search kbZNotKeyword3
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
