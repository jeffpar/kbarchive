---
layout: page
title: "Q181178: WD97: How to Place a Bullet in the Middle of a Sentence"
permalink: kb/181/Q181178/
---

## Q181178: WD97: How to Place a Bullet in the Middle of a Sentence

	Article: Q181178
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta winword
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You cannot use the Bullets And Numbering command (on the Format menu) to place a
	bullet in the middle of a sentence or paragraph.
	
	CAUSE
	=====
	
	This behavior is by design. Because Bullets and Numbering is a paragraph level
	format, bullets are always placed at the beginning of a paragraph. Bullets
	cannot be placed in the middle of paragraphs or words.
	
	RESOLUTION
	==========
	
	To work around this problem, use any of the following methods to insert a bullet
	in the middle of a sentence.
	
	Method 1: Use the Insert Symbol Command
	---------------------------------------
	
	1. On the Insert menu, click Symbol.
	
	2. On the Symbols tab, click to select the bullet character.
	
	3. Click Insert and then click Close.
	
	Method 2: Use the ASCII Key Code
	--------------------------------
	
	Place the insertion point where you want to insert the bullet, and then follow
	these steps:
	
	1. Make sure NUM LOCK is on.
	
	2. Hold down ALT, and then, using the numeric keypad, type 0 (zero) followed by
	  "183" (without the quotation marks), the character code for the bullet.
	
	Method 3: Use a Table
	---------------------
	
	Place your text inside a table. For example, if you want to have a bullet
	approximately three inches from the left margin, create a two column table and
	make the left column three inches wide. Place the insertion point in the right
	column, and then use the Bullets and Numbering command to insert a bullet.
	
	Method 4: Use a Macro
	---------------------
	
	Microsoft provides examples of Visual Basic for Applications procedures for
	illustration only, without warranty either expressed or implied, including, but
	not limited to the implied warranties of merchantability and/or fitness for a
	particular purpose. The Visual Basic procedures in this article are provided 'as
	is' and Microsoft does not guarantee that they can be used in all situations.
	While Microsoft support professionals can help explain the functionality of a
	particular macro, they will not modify these examples to provide added
	functionality, nor will they help you construct macros to meet your specific
	needs. If you have limited programming experience, you may want to consult one
	of the Microsoft Solution Providers. Solution Providers offer a wide range of
	fee-based services, including creating custom macros. For more information about
	Microsoft Solution Providers, call Microsoft Customer Information Service at
	(800) 426-9400.
	
	The following sample Visual Basic for Applications macro inserts a bullet.
	
	     Sub InsertBullet()
	        With Selection
	        .Collapse Direction:=wdCollapseStart
	        .InsertSymbol Font:="Symbol", CharacterNumber:=183, Unicode:=False
	        End With
	     End Sub
	
	For more information about inserting Symbols, while in the Visual Basic for
	Applications Editor, click the Office Assistant, type "InsertSymbol" (without
	the quotation marks), click Search, and then click to view the "InsertSymbol
	Method" topic.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Visual Basic Help is not installed on your
	computer, please see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q173707 OFF97: How to Run Sample Code from Knowledge Base Articles
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: dot vba vb vbe
	
	======================================================================
	Keywords          : kbdta winword 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
