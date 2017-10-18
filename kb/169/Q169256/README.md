---
layout: page
title: "Q169256: WD97: Scrolling Causes Text to &quot;Disappear&quot;"
permalink: kb/169/Q169256/
---

## Q169256: WD97: Scrolling Causes Text to &quot;Disappear&quot;

	Article: Q169256
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdisplay kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you scroll through your document, some of the text may seem to disappear.
	Turning on field codes for viewing by pressing ALT+F9 allows you to see all of
	the text.
	
	CAUSE
	=====
	
	You may have an ADVANCE field in your document. To view the field, turn on field
	codes for viewing by pressing ALT+F9.
	
	WORKAROUND
	==========
	
	To work around this problem, use the following steps to remove the ADVANCE field
	from the document:
	
	1. Turn on field codes for viewing by pressing ALT+F9.
	
	2. On the Edit menu, click Replace.
	
	3. Click in the Find What box and then click More.
	
	4. Click the Special tab and then click Field.
	
	  The Find What box will contain the text "^d."
	
	5. Press the SPACEBAR once and then type "advance" (without the quotation
	  marks).
	
	6. Leave the Replace With box blank.
	
	7. Click Find Next, and then click either Replace or Replace All.
	
	To adjust text placement, try using the Font, Paragraph, or Tabs command (on the
	Format menu) instead of using the Advance field.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	ADVANCE fields first appeared in Microsoft Word 6.0 and will most commonly
	appear in documents that are converted from WordPerfect to Microsoft Word. When
	field codes on are turned on for viewing, this field would appear as follows
	
	  {ADVANCE [Switches ]}
	
	The ADVANCE field offsets the starting point of text that follows the ADVANCE
	field to the right or left, up or down, or to a specific horizontal or vertical
	position.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q118637 WD: Using the ADVANCE Field in Word
	
	For more information about the ADVANCED Field, click the Office Assistant, type
	"advance field," click Search, and then click "Field codes: Advance field."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: 8.0
	
	======================================================================
	Keywords          : kbdisplay kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
