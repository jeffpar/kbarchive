---
layout: page
title: "Q189761: WD97: Blank Line Placed Between Header and First Line of Text"
permalink: /kb/189/Q189761/
---

## Q189761: WD97: Blank Line Placed Between Header and First Line of Text

	Article: Q189761
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kblayout kbtable
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a table in the header extends into the document body, a blank line appears
	between the header and the first line of text.
	
	CAUSE
	=====
	
	This behavior is by design of Microsoft Word. When a table is inserted or placed
	in a document, a paragraph mark is always inserted below the table. In addition,
	a paragraph mark always precedes a table in Word. In this case it is used to
	store paragraph, section, or document formatting.
	
	WORKAROUND
	==========
	
	To avoid having the blank line appear when the document is printed, follow these
	steps:
	
	1. On the View menu, click Header/Footer.
	
	2. Select the paragraph mark at the end of the table in the header. If the
	  paragraph marker in not visible, click the Show/Hide button on the Standard
	  toolbar.
	
	3. On the Format menu, click Paragraph.
	
	4. Click the Indents And Spacing tab.
	
	5. From the Line Spacing list, select Exactly. In the At box, type ".01 in"
	  (without the quotation marks) or ".7 pt" (without the quotation marks).
	
	  The blank line is now very small, making it "invisible."
	
	  NOTE: You can format the font as Hidden for that paragraph marker too.
	
	Additional query words: table header head suppress blank space
	
	======================================================================
	Keywords          : kbdta kblayout kbtable 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
