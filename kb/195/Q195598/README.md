---
layout: page
title: "Q195598: WD97: How to Use EQ Field to Place Box Around Characters"
permalink: /kb/195/Q195598/
---

## Q195598: WD97: How to Use EQ Field to Place Box Around Characters

	Article: Q195598
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to use EQ fields to put boxes around individual
	letters, words, or combinations of words.
	
	In Microsoft Word 97, you can also use borders and shading to put a box around
	individual letters or words. You can also use the drawing tools and WordArt to
	create letters, words, and combinations of words in boxes. For more information
	about these features, see Word Help.
	
	MORE INFORMATION
	================
	
	Using an EQ Field
	-----------------
	
	To put a box around an individual letter, word, or combination of words, use the
	{eq} field with the \x switch, as in the following example:
	
	  {eq \x(b) \x(o) \x(x)}
	
	This field will create a result that resembles the following:
	
	  ----- ----- -----
	  | b | | o | | x |
	  ----- ----- -----
	
	This field {eq \x(box)} will create a result similar to this:
	
	  -------
	  | box |
	  -------
	
	To insert an empty field in Word, press CTRL+F9.
	
	For more information about the EQ field, click the Office Assistant, type "What
	is an EQ field" (without the quotation marks), click Search, and then click to
	view "Field codes: Eq (Equation) field."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Using Fields with Borders to Get a Nested Border Effect
	-------------------------------------------------------
	
	This field can be combined with paragraph borders and page borders to get a
	nested border box effect. To do this, insert one or more of the fields from the
	earlier examples in this article and use the procedure appropriate for your
	version of Word.
	
	With the insertion point still in the paragraph with the field, click Borders And
	Shading on the Format menu, select the Borders tab, and select the Box preset.
	
	Additional Ways to Nest Box Borders
	-----------------------------------
	
	  {eq \x(\x(\x(example)))}
	
	
	Additional query words: sentence
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
