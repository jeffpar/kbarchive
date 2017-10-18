---
layout: page
title: "Q170411: WD97: Excel Text Uses Wrong Font When Pasted into Word"
permalink: kb/170/Q170411/
---

## Q170411: WD97: Excel Text Uses Wrong Font When Pasted into Word

	Article: Q170411
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you copy several cells in a Microsoft Excel spreadsheet and paste them into
	Word as Formatted Text (RTF), the font may change in some cells.
	
	Frequently, some cells use the font from Microsoft Excel, and others use Times
	New Roman.
	
	CAUSE
	=====
	
	This problem occurs when you copy several cells that contain extended characters
	in a font other than the default font for Word 97.
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 Service Release 1 (SR-1).
	
	To work around this problem, paste the cells as unformatted text and then apply
	any necessary formatting in Word. To paste the cells from Microsoft Excel as
	unformatted text, follow these steps:
	
	1. In Microsoft Excel, select the cells you want to copy.
	
	2. On the File menu, click Copy.
	
	3. Switch to Word 97.
	
	4. On the Edit menu, click Paste Special.
	
	5. Click Unformatted Text and then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	REFERENCES
	==========
	
	For more information about pasting a Microsoft Excel spreadsheet into Word,
	click the Office Assistant, type "pasting Excel objects" (without the quotation
	marks), click Search, and then click one of the topics.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: SR1 release1 8.0 8.00
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
