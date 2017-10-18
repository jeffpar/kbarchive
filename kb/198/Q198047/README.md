---
layout: page
title: "Q198047: WD97: Can't Find Text Using Wildcards with Find or Replace"
permalink: kb/198/Q198047/
---

## Q198047: WD97: Can't Find Text Using Wildcards with Find or Replace

	Article: Q198047
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbproof word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use wildcards with the Find or Replace command (on the Edit menu), you
	receive one of the following messages:
	
	When You Click Replace All
	--------------------------
	
	  Word has completed its search of the document and has made 0 replacements.
	
	When you click Find, Find Next, or Replace
	------------------------------------------
	
	  Word has finished searching the document. The search item was not found.
	
	These messages may appear although the text you are searching to replace exists
	in the document.
	
	For example:
	
	To find and replace all occurrences of words beginning with the character "s" and
	ending with the character "t", as in the word "sat", in the Find text box you
	would type "s*t" (without the quotation marks). You must use wildcards for this
	search to work. For example, in this case, the asterisk is used as a wildcard
	that will find any string of characters between the starting and ending
	specified characters.
	
	NOTE: To use wildcards, you must turn on the Use Wildcards option. To turn on Use
	Wildcards, while in the Find or Replace dialog box, click the More button and
	click to select the Use Wildcards check box.
	
	CAUSE
	=====
	
	When you use wildcards to search for text, the search text is case sensitive.
	This is true even when the Match Case check box is not selected.
	
	The text you are searching may contain a mixture of uppercase and lowercase
	characters. That is, as described in the example mentioned earlier in this
	article, if you search for "s*t" and the text in your document is, for example,
	"Sat" (note the capital S), Word will not find the text because it is looking
	for a lowercase "s", as in "sat".
	
	WORKAROUND
	==========
	
	To work around this behavior, search for all combinations of both lowercase and
	uppercase characters.
	
	For example, to find all occurrences of words beginning with the character "s"
	and ending with the character "t", as in the word "sat", search the following
	combinations:
	
	  s*t
	
	  S*t
	
	  S*T
	
	  s*T
	
	MORE INFORMATION
	================
	
	For more information about finding text, click the Office Assistant, and type
	"Why can't Word find the item I'm searching for?" Click Search and then click to
	view "Why can't Word find the item I'm searching for?"
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Help is not installed on your computer, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: OFF98
	
	======================================================================
	Keywords          : kbproof word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
