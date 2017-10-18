---
layout: page
title: "Q173052: WD97: Chart Missing When Pasting Grouped Items from Excel"
permalink: kb/173/Q173052/
---

## Q173052: WD97: Chart Missing When Pasting Grouped Items from Excel

	Article: Q173052
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Word 97, when you paste grouped items, including a chart object
	created in Microsoft Excel 97, the chart is missing.
	
	WORKAROUND
	==========
	
	To work around this problem, in Excel, select and copy the chart and the other
	items (a text box in this example) without grouping them. Then paste the objects
	into Word and group them there. To do this, follow these steps:
	
	1. In Excel, select the text box, and then press and hold down the SHIFT key and
	  select the chart.
	
	  Both objects should be selected.
	
	2. On the Edit menu, click Copy.
	
	3. In Word, click Paste on the Edit menu.
	
	4. Right-click the selected objects, point to Grouping, and then click Group.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	
	MORE INFORMATION
	================
	
	NOTES:
	
	- The image of the chart appears on the clipboard and is pasted into both Excel
	  and Microsoft PowerPoint.
	
	- This symptom occurs with any object grouped with a chart; however, when you
	  group any objects other than a chart, pasting works as expected.
	
	For additional information about Excel chart problems in Word, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q157638 WD97: Microsoft Excel 97 Chart Object Becomes Picture Converting to
	  Word 7.0
	
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug kbinfo
	
	=============================================================================
	
