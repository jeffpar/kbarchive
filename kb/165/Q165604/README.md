---
layout: page
title: "Q165604: WD97: WordBasic Object Returns Incorrect ASCII Number For Symbol"
permalink: kb/165/Q165604/
---

## Q165604: WD97: WordBasic Object Returns Incorrect ASCII Number For Symbol

	Article: Q165604
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbmacro kbwordvba
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The value returned for a symbol character in a WordBasic macro is different from
	the value returned for the same symbol when you convert the WordBasic macro into
	a Visual Basic for Applications macro.
	
	For example, the WordBasic macro returns a value of 183 for a bullet character in
	the Symbol font, but the Visual Basic for Applications macro returns the value
	of 63 for the same character and font.
	
	CAUSE
	=====
	
	Characters in the Symbol font are stored in Unicode. The value used is a subset
	of Unicode character mapping.
	
	MORE INFORMATION
	================
	
	For more information about returning character values, while in the Visual Basic
	for Applications Editor click the Office Assistant, type "Asc" (without the
	quotation marks), click Search, and then click to view "ASC Function."
	
	For more information about Unicode, visit the Unicode Web site at:
	
	  http://www.unicode.org
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Visual Basic Help is not installed on your
	computer, please see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: wordcon 97 word8 word97 8.0 vb vba vbe
	
	======================================================================
	Keywords          : kbmacro kbwordvba 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
