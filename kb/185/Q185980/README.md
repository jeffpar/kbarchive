---
layout: page
title: "Q185980: WD97: Selected Text Not Visible or Offset in Some Dialog Boxes"
permalink: kb/185/Q185980/
---

## Q185980: WD97: Selected Text Not Visible or Offset in Some Dialog Boxes

	Article: Q185980
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
	
	When you try to mark an index or citation entry, or add an AutoCorrect entry,
	you cannot see the insertion point or the text you selected (or you can only see
	a portion of the text) in the Mark Index Entry, Mark Citation, or AutoCorrect
	dialog box.
	
	The following text boxes in these dialog boxes may exhibit this behavior.
	
	Mark Index Entry Dialog Box
	---------------------------
	
	  Main Entry
	  SubEntry
	  Cross Reference
	
	Mark Citation Dialog Box
	------------------------
	
	  Selected Text
	  Long Citation
	
	AutoCorrect
	-----------
	
	  With: (When the Formatted Text option button is selected.)
	
	CAUSE
	=====
	
	This problem may occur when the paragraph formatting of the Normal style (the
	default style in Word) includes settings for one or more of the following
	paragraph attributes:
	
	  Indentation
	  Spacing Before or After
	  Line Spacing
	
	For example, this problem may occur if the paragraph formatting of the Normal
	style has a Spacing Before setting of 6pt (points) or higher.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods:
	
	- Create a custom style, or modify an existing style to duplicate the paragraph
	  formatting attributes of the Normal style, and apply this style to text
	  formatted with the Normal style.
	
	  -or-
	
	- Modify the Normal style to remove the paragraph formatting related to this
	  problem (mentioned in the "Cause" section of this article).
	
	For more information about creating and editing styles, click Contents And Index
	on the Help menu, click the Index tab in Word Help, type the following text
	
	  " styles, creating and editing" (without the quotation marks)
	
	and then double-click the selected text to go to the "Create new styles" or
	"Changing" topic. If you are unable to find the information you need, ask the
	Office Assistant.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	MORE INFORMATION
	================
	
	To demonstrate this behavior, set an entry using any of the following options:
	
	- Mark an index entry, (on the Insert menu, click Index And Tables, and then
	  click Mark Entry on the Index tab).
	
	  -or-
	
	- Mark a citation entry, (on the Insert menu click Index And Tables, and then
	  click Mark Citation on the Table Of Authorities tab).
	
	  -or-
	
	- Add an AutoCorrect entry, (on the Tools menu, click AutoCorrect).
	
	Additional query words: crooked insertion point missing gone disappear disappeared cut off truncated invisible cannot see
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
