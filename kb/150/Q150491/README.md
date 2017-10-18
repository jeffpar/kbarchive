---
layout: page
title: "Q150491: WD97: Screen Flickers Constantly After Pasting Excel Chart"
permalink: kb/150/Q150491/
---

## Q150491: WD97: Screen Flickers Constantly After Pasting Excel Chart

	Article: Q150491
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbdta kbchart
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Excel 97 for Windows 
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you paste a Microsoft Excel chart into a Microsoft Word document, the chart
	resizes constantly, causing the display to flicker. Both programs may stop
	responding (hang).
	
	CAUSE
	=====
	
	This problem may occur if the following conditions are true:
	
	- You create a chart in Excel that contains a text box.
	
	  -and-
	
	- You clicked the Automatic Size option on the Alignment tab of the Format Text
	  Box dialog box.
	
	  -and-
	
	- You copied the Excel chart.
	
	  -and-
	
	- You clicked Paste Link in the Paste Special dialog box in Word.
	
	RESOLUTION
	==========
	
	To correct this problem, obtain Microsoft Office 97 Service Release 2 (SR-2).
	
	To temporarily workaround this problem, remove the Automatic Size option from all
	text boxes on charts that you want to paste link into Word.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article. This problem was corrected in Microsoft Office 97
	Service Release 2 (SR-2).
	
	For additional information about SR-2, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	
	Additional query words: flickering
	
	======================================================================
	Keywords          : kbinterop kbdta kbchart 
	Technology        : kbWordSearch kbExcelSearch kbWord97 kbWord97Search kbZNotKeyword2 kbExcel97Search kbZNotKeyword3
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
