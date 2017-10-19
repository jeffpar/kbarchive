---
layout: page
title: "Q193108: WD97: Text Doesn't Wrap Around Object"
permalink: /kb/193/Q193108/
---

## Q193108: WD97: Text Doesn't Wrap Around Object

	Article: Q193108
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When your document contains text that should wrap around a drawing object, text
	box, or "Float over text" object, the text does not wrap around the object.
	Instead, the text splits from the top to the bottom of the object.
	
	CAUSE
	=====
	
	This problem occurs when both of the following conditions are true:
	
	- The drawing object, text box, or "Float over text" object is formatted with
	  either Square, Tight, or Through wrapping style.
	
	  -and-
	
	- The text that should wrap around the drawing object, text box, or "Float over
	  text" object has been formatted with a symbol font.
	
	This functionality is by design of the wrapping style you selected. Symbol fonts
	(such as Symbol or Wingdings) do not contain a normal space character that Word
	uses; instead, they contain a different space character, which is a high-value
	Unicode character. Because the wrapping style (Square, Tight, or Through) needs
	a normal Word space for wrapping to occur and none are contained in the symbol
	font, Word cannot wrap the text around the object.
	
	WORKAROUND
	==========
	
	Format the text that should wrap around the drawing object, text box, or "Float
	over text" object with a non-symbol font (for example, Times New Roman).
	
	MORE INFORMATION
	================
	
	A symbol font is a font family, which consists of novelty typefaces of both
	variable and fixed-pitch fonts. Word uses symbol fonts to insert symbols (on the
	Insert menu, click Symbol) in your document and may include the following
	fonts:
	
	- Bookshelf Symbol 3
	- Greek Symbols
	- Iconic Symbols Ext
	- ITC Zaph Dingbats (D1)
	- ITC Zaph Dingbats (D2)
	- ITC Zaph Dingbats (D3)
	- ITC Zaph Dingbats (DS)
	- ITC Zaph Dingbats (DV)
	- Marlett
	- Math Ext
	- Monotype Sorts
	- MS Outlook
	- MT Extra
	- Symbol
	- Tahoma
	- Typographic Ext
	- Webdings
	- Wingdings
	- Wingdings 2
	- Wingdings 3
	
	NOTE: Not all of the symbol fonts, which may cause this problem and are available
	for use in Word are listed in this article.
	
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q192971 WD97: Definitions of Typography Terms in Word
	
	  Q160070 WD97: Symbol Dialog Different from Previous Versions
	
	For more information about Microsoft Typography, please see the following
	Microsoft World Wide Web Site:
	
	  http://www.microsoft.com/typography/
	
	Additional query words: decorative won't
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
