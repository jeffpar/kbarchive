---
layout: page
title: "Q170272: WD97: Not All Word Editing Functions Available in Form Fields"
permalink: /kb/170/Q170272/
---

## Q170272: WD97: Not All Word Editing Functions Available in Form Fields

{% raw %}

	Article: Q170272
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
	
	When you type in a text form field, Microsoft Word may not behave the way you
	expect it to.
	
	Case 1: AutoCorrect Features
	----------------------------
	
	Microsoft Word will ignore the following AutoCorrect rules for the typed text:
	
	- Capitalize the first letter of a sentence.
	
	  -and-
	
	- Correct TWo INitial CApitals in a sentence.
	
	NOTE: "Capitalize names of days" and "Correct accidental usage of CAPS LOCK key"
	options function correctly in a text form field.
	
	Case 2: "Replace Text As You Type" Ignored
	------------------------------------------
	
	Some "Replace text as you type" text will not be replaced.
	
	For example, when you type :) in a text form field, Word will not replace the :)
	with a smiley face. This problem occurs with the following default AutoCorrect
	entries.
	
	  Text typed     Function
	  -----------------------
	  ...            Ellipse
	  :(             Unhappy face
	  :-(            Unhappy face
	  :)             Smiley face
	  :-)            Smiley face
	  :|             Uncertain face
	  :-|            Uncertain face
	  <--            Left arrow
	  <==            Bold left arrow
	  <=>            Double arrow
	  ==>            Bold right arrow
	  -->            Right arrow
	
	Case 3: Editing Features
	------------------------
	
	Some editing features (shortcut keys) do not work. For example, you cannot use
	the following shortcut keys.
	
	  Shortcut keys         Function
	  -------------------------------------------------------------------
	  CTRL+BACKSPACE        Delete one word to the left
	  SHIFT+F3              Change the case of characters
	  SHIFT+HOME            To extend selection to the beginning of a line
	  SHIFT+END             To extend selection to the end of a line
	
	NOTE: It is also not possible to do Font formatting from the Formatting Toolbar
	in protected text form fields. Font enhancements such as "Bold", "Italics," and
	"Underline" are not available using the buttons on the Formatting Toolbar.
	
	Case 4: Proofing Tools
	----------------------
	
	Word will not check the typed text for spelling or grammar.
	
	NOTE: Spelling and grammar mistakes are ignored regardless of the method you use
	to check for them.
	
	WORKAROUND
	==========
	
	Case 1: AutoCorrect Features
	----------------------------
	
	Create a case-sensitive AutoCorrect entry for each word that would start a
	sentence or type your text with correct capitalization into your text form
	field.
	
	For more information about how to create an AutoCorrect entry, click the Office
	Assistant, type "How do I create a new AutoCorrect entry?" click Search, click
	to view "Use shortcuts to insert frequently used text and graphics", and then
	click to view "Create an AutoCorrect entry to store and automatically insert
	text and graphics."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Case 2: "Replace Text As You Type" Ignored
	------------------------------------------
	
	There is no known workaround for this problem. You cannot type, paste, or insert
	the symbols that are listed in the "Symptoms" section of this article into a
	text form field.
	
	Case 3: Editing Features
	------------------------
	
	Select text in a text form field using the mouse or the SHIFT+ARROW keys. To
	delete selected text in a text form field, click Cut on the Edit menu or press
	the DELETE key on your keyboard. Note: If your form fields are in a table,
	selecting text with the mouse or SHIFT+ARROW keys does not work. You must click
	and delete or backspace to edit the text.
	
	Case 4: Proofing Tools
	----------------------
	
	To check spelling for text that is contained in a text form field, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q119698 WD: Form Fields Lose Text When Protected for Forms
	
	STATUS
	======
	
	Case 1: AutoCorrect Features
	----------------------------
	
	This behavior is by design.
	
	
	Case 2: "Replace Text As You Type" Ignored
	------------------------------------------
	
	This behavior is by design.
	
	
	Case 3: Editing Features
	------------------------
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Case 4: Proofing Tools
	----------------------
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Microsoft Word includes an AutoCorrect feature that automatically corrects many
	common typing, spelling, and grammatical errors. You can easily customize the
	preset AutoCorrect options or add errors that you commonly make to the list of
	AutoCorrect entries.
	
	Microsoft Word provides the following AutoCorrect features:
	
	- Correct TWo INitial CApitals
	- Capitalize first letter of sentences
	- Capital names of days
	- Correct accidental usage of CAPS LOCK key
	- Replace text as you type
	
	For more information about AutoCorrect, click the Office Assistant, type "What is
	AutoCorrect?" click Search, and then click to view "Automatically correct
	text."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q161582 WD97: AutoCorrect Text Deleted, Partially Visible in Form Field
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
