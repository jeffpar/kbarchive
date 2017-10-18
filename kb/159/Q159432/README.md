---
layout: page
title: "Q159432: FP97: Replaced Text Inherits Previous Font Characteristics"
permalink: kb/159/Q159432/
---

## Q159432: FP97: Replaced Text Inherits Previous Font Characteristics

	Article: Q159432
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Replace command (on the Tools menu of FrontPage Explorer or the
	Edit menu of FrontPage Editor), the font characteristics of the replaced
	characters may not be the same as the font characteristics of the characters
	that were replaced.
	
	CAUSE
	=====
	
	When you use the Replace command, FrontPage formats the new text (the text you
	typed in the Replace With box) with the characteristics of character immediately
	preceding this new text.
	
	The only exception to this behavior is if the preceding character is a carriage
	return.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods:
	
	Method 1: Changing fonts on the first character of the line
	-----------------------------------------------------------
	
	Structure font changes in the document such that they occur as the first
	characters on the line
	
	Method 2: Changing fonts in the space prior to the characters changed
	---------------------------------------------------------------------
	
	Structure the font changes such that the font switch is applied to the character
	immediately preceding the characters which you want to appear in the new font
	(even if this character is a space character).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Font characteristics include every setting on the Font tab of the Font dialog
	box. To view the Font dialog box, click Font on the Format menu in FrontPage
	Explorer.
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
