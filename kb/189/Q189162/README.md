---
layout: page
title: "Q189162: WD97: Inserted Excel Worksheet Object Is Limited in Size"
permalink: /kb/189/Q189162/
---

## Q189162: WD97: Inserted Excel Worksheet Object Is Limited in Size

	Article: Q189162
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97 kblayout
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When inserting a worksheet from Microsoft Excel into Microsoft Word, the display
	defaults to 10 rows and 5 columns, although you may have inserted more data in
	the worksheet. This setting can not be changed.
	
	CAUSE
	=====
	
	The default setting is to give an inserted object the same dimensions (10 rows x
	5 columns), but many worksheets are larger than this size. The design is that
	the object would then have in-place editing, and you could increase the number
	of rows or columns displayed.
	
	WORKAROUND
	==========
	
	To work around this problem use either of the following methods:
	
	Method 1 - Insert Excel Worksheet button
	----------------------------------------
	
	1. Click the Insert Excel Worksheet button on the standard toolbar.
	
	2. Drag to specify the number of rows and columns in the worksheet.
	
	3. Close or minimize Excel, and switch back to your Word document.
	
	Method 2 - Use Copy/Paste to Paste Exact Amount of Data
	-------------------------------------------------------
	
	1. Start Excel and open the worksheet you want to copy.
	
	2. Select the exact amount of data you want to copy, and on the Edit menu, click
	  Copy (CTRL+C).
	
	3. Start Word, open your document and place the cursor in the location you want
	  the worksheet.
	
	4. On the Edit menu, click Paste (CTRL+V) to paste the exact amount of data
	  required.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	For information about programmatically inserting Excel charts, see the following
	article in the Microsoft Knowledge Base:
	
	  Q176868 WD97: How to Programmatically Insert an Excel Chart into Word
	
	Additional query words: limit default
	
	======================================================================
	Keywords          : kbdta word97 kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
