---
layout: page
title: "Q196980: WD97: MS LineDraw and Wingdings Not Converted to WordPerfect 5.x"
permalink: /kb/196/Q196980/
---

## Q196980: WD97: MS LineDraw and Wingdings Not Converted to WordPerfect 5.x

	Article: Q196980
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following fonts may not be retained when you convert from Microsoft Word 97
	to WordPerfect 5.x format.
	
	  MS LineDraw
	  Wingdings
	
	CAUSE
	=====
	
	Characters and numbers formatted with the MS LineDraw font may convert to line
	or underscore characters. This behavior is by design. Word uses the MS LineDraw
	font to convert the line draw features of other programs, such as WordPerfect,
	into Word.
	
	Wingdings is converted to underscores and formatted with the Courier New or an
	equivalent fixed-width, monospace font. This behavior is by design, because
	there are no other decorative fonts that map exactly to the same characters in
	the Wingdings font set.
	
	
	WORKAROUND
	==========
	
	To retain formatting similar to the MS LineDraw font when converting to other
	formats, use the Courier New font or another fixed-width, monospace font.
	
	You can reapply the Wingdings font or a similar decorative font to the text after
	importing the document into WordPerfect.
	
	MORE INFORMATION
	================
	
	For more information about fonts in WordPerfect, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q92643 Some Fonts Are Not Displayed in WordPerfect with Windows 3.1
	
	Additional query words: converter converters conversion transfer translate font fonts map mapping symbol symbols decorative typeface truetype tt wpft5
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
