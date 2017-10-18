---
layout: page
title: "Q169879: WD97: MS Excel Text Formatting May Not Convert Properly to Word"
permalink: kb/169/Q169879/
---

## Q169879: WD97: MS Excel Text Formatting May Not Convert Properly to Word

	Article: Q169879
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
	
	When you use Microsoft Word 97 to open a Microsoft Excel 97 worksheet with
	multiple character formats within a cell (for example some text is bolded and
	other text is italic), all text in that cell uses the format of the first
	character. All other formatting is lost.
	
	NOTE: This problem also occurs when you use the File command on the Insert menu
	in Word to insert a Microsoft Excel 97 worksheet.
	
	WORKAROUND
	==========
	
	To work around this problem, copy the worksheet in Microsoft Excel 97, and then
	paste it into Word. This method preserves all character formatting.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	
	MORE INFORMATION
	================
	
	Earlier versions of Microsoft Word and Microsoft Excel convert rich text formats
	accurately. The problem is due to changes in the Microsoft Excel binary
	interchange file format (BIFF) definitions.
	
	For additional information about the Microsoft Excel converter for Microsoft
	Word, please see the following article in the Microsoft Knowledge Base:
	
	  Q157084 WD97: Text Converters Installed in a Typical Setup
	
	For more information about how to open a Microsoft Excel worksheet in Word, click
	the Office Assistant, type "Excel converter" (without the quotation marks),
	click Search, and then click to view the "How to Import or convert files from
	another Office program" topic.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: 8.0
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
