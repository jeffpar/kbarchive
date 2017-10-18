---
layout: page
title: "Q193883: WD97: Cannot Replace Character Formatting With Nothing in SR-2"
permalink: kb/193/Q193883/
---

## Q193883: WD97: Cannot Replace Character Formatting With Nothing in SR-2

	Article: Q193883
	Product(s): Word 97 for Windows
	Version(s): Service Release 2
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows, version Service Release 2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Word 97 Service Release 2 (SR-2), you cannot search for character
	level formatting and replace the characters with nothing in that specific
	format.
	
	In earlier versions of Word if you want to format text with the font color of red
	and then later delete all red text in your document, you could search for the
	font color red and leave the Replace With box empty, and the text would be
	deleted. In SR-2, the text does not get deleted and nothing happens.
	
	RESOLUTION
	==========
	
	First, you will need to replace the formatted text with a character that is not
	found in the document and then search for that character and leave the Replace
	With box empty.
	
	For example, replace all text formatted with the font color red with an asterisk.
	Then search for the asterisk and leave the Replace With box empty to delete all
	the asterisks.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2 kbWord97SR2
	Version           : :Service Release 2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
