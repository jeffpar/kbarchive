---
layout: page
title: "Q165301: WD97: Auto Numbering Changes by One After You Press ENTER"
permalink: /kb/165/Q165301/
---

## Q165301: WD97: Auto Numbering Changes by One After You Press ENTER

	Article: Q165301
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97 kbnumbering
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you manually type a numbering scheme followed by text so that the "Automatic
	numbered lists" feature is invoked, the number you type automatically changes by
	one if numbering previous to this item was within plus or minus one to the item
	you just typed.
	
	NOTE: To enable the "Automatic numbered lists" feature, click AutoCorrect on the
	Tools menu, click the "AutoFormat As You Type" tab, and click to select the
	"Automatic numbered lists" check box.
	
	CAUSE
	=====
	
	This functionality is by design. After you type a number, AutoCorrect looks
	backward through the document for the closest numbered list. If it finds a
	numbered list where the last item in the list is numbered plus or minus one,
	from the number you just typed, Word will change the number you just typed so
	that it becomes the next item in the list.
	
	This allows you to add an item to an existing list by guessing close to the
	correct number without needing to know the exact next number in the sequence.
	
	WORKAROUND
	==========
	
	To prevent the number from attaching to the previous list, press CTRL+Z on the
	keyboard to undo the automatic formatting.
	
	To adjust the numbering so that it creates a new numbering scheme, follow these
	steps:
	
	1. Position the insertion point on the line you want to number.
	
	2. On the Format menu, click Bullets And Numbering.
	
	3. Click the Numbered tab, and then click the numbering scheme you want.
	
	4. Click Customize.
	
	5. In the Start At box, adjust the starting number, and then make any other
	  changes you want.
	
	6. Click OK.
	
	You now have a second numbered list that is not connected to the first numbered
	list.
	
	REFERENCES
	==========
	
	For more information about numbered lists, click the Office Assistant, type
	"numbered lists," click Search, and then click to view one of the topics.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: program coordinate separate different
	
	======================================================================
	Keywords          : kbdta word97 kbnumbering 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
