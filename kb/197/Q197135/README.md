---
layout: page
title: "Q197135: WD97: Bottom of Header/Footer Text Is Truncated"
permalink: /kb/197/Q197135/
---

## Q197135: WD97: Bottom of Header/Footer Text Is Truncated

	Article: Q197135
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Microsoft Word, when the contents of a header or footer in a document is
	larger than half the page size, part of the header or footer will be truncated
	(cut off).
	
	CAUSE
	=====
	
	By default, Word will not allow a header or footer to be larger than half the
	total page height.
	
	For example, in a letter-sized document (8.5 x 11 inches) in portrait
	orientation, the header or footer can be a maximum of 5.5 inches in height. In
	landscape orientation, the header or footer can be a maximum 4.25 inches in
	height.
	
	WORKAROUND
	==========
	
	To work around this problem, set the header or footer to a fixed (absolute)
	height. To do so, follow these steps:
	
	1. On the File menu, click Page Setup.
	
	2. Click to select the Margins tab.
	
	3. In the Top Margin box, change the top margin to a negative value. For
	  example, if your top margin is set to 1" (1 inch), change the top margin to
	  -1" (-1 inch).
	
	MORE INFORMATION
	================
	
	For more information about headers and footers, click the Office Assistant, type
	"Why is the text in my header cut off?," click Search, and then click to view
	"Troubleshoot headers and footers."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Help is not installed on your computer, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: cut off missing gone
	
	======================================================================
	Keywords          : kbdta winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
