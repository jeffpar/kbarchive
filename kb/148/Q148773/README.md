---
layout: page
title: "Q148773: White Text Appears Black When Printed from WordPad"
permalink: /kb/148/Q148773/
---

## Q148773: White Text Appears Black When Printed from WordPad

	Article: Q148773
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 14-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print a document that contains white text from WordPad, the white text
	may printed as black rather than white.
	
	CAUSE
	=====
	
	WordPad maps the color white to black when you print to a black and white or
	color printer.
	
	RESOLUTION
	==========
	
	Change the color of the text to a color other than white, or use a program other
	than WordPad to print the document. To change the text color in a document in
	WordPad, follow these steps:
	
	1. Select the section of text that you want to change.
	
	2. On the Format menu, click Font.
	
	3. Click a color in the Color box, and then click OK.
	
	For information about problems that can occur when you format text in WordPad,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q148386 Problems Formatting Text in WordPad
	
	MORE INFORMATION
	================
	
	The universal printer driver (Unidrv.dll) maps all non-white colors to black
	when you print to a black and white or color printer, but it does not map the
	color white to black. This behavior causes all non-white text to appear as black
	text when printed. Because the color white is not mapped to black, white text is
	printed normally.
	
	However, WordPad maps the color white to black when you print to a black and
	white or color printer. Therefore, white text is converted to black text before
	it is sent to Unidrv.dll, which causes the text to appear as black text when
	printed. This behavior is not consistent with Microsoft Word for Windows or
	Microsoft Excel for Windows.
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	
