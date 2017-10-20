---
layout: page
title: "Q167392: WD97: Changing Text Formatting Also Changes Paragraph Formatting"
permalink: /kb/167/Q167392/
---

## Q167392: WD97: Changing Text Formatting Also Changes Paragraph Formatting

{% raw %}

	Article: Q167392
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbusage
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you select all of the text in a paragraph, excluding the paragraph mark, and
	change the font formatting of the text, the formatting changes are applied to
	the paragraph mark also. This affects any subsequent paragraphs when you press
	ENTER from any point within this paragraph. This functionality is different from
	earlier versions of Word.
	
	NOTE: To see the paragraph mark and other nonprinting characters, click the
	Show/Hide button on the Standard toolbar.
	
	CAUSE
	=====
	
	When you apply font formatting to a selection of text that spans a paragraph,
	Word assumes you want to change the paragraph formatting even though you did not
	select the paragraph mark.
	
	WORKAROUND
	==========
	
	To format all of the text within a paragraph without affecting the paragraph
	formatting (excluding the paragraph mark), select all but one character of the
	paragraph and then apply the font formatting. Select the remaining character and
	apply the same font formatting.
	
	MORE INFORMATION
	================
	
	In earlier versions of Word, if you want to apply character formatting to the
	paragraph mark, you must select it before you apply the font formatting;
	otherwise, the paragraph mark does not take on the new character formatting.
	
	In Word 97, if all of the text in the paragraph is selected (excluding the
	paragraph mark), character formatting changes are applied not only to the text
	of the paragraph but also to the paragraph mark.
	
	Selecting white space before or after the text has no effect on this behavior.
	
	REFERENCES
	==========
	
	For more information about character formatting, click the Office Assistant,
	type "character formatting," click Search, and then click one of the topics.
	
	For more information about paragraph formatting, click the Office Assistant, type
	"troubleshooting paragraph formatting," click Search, and then click one of the
	topics.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	For more information about formatting, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q159941 WD97: General Information about "Auto" Features in Word 97
	
	  Q108501 WD: Heading Numbering Command Changes Style, Paragraph Formatting
	
	  Q161976 WD97: Reveal Formatting Help Tool Not Installed
	
	  Q123302 WD: How to Reset Character and Style Formatting in Word
	
	  Q97793 WD: Underline Formatting Does Not Appear at End of Line
	
	  Q158565 WD97: Character Format Functions Ignore Leading, Trailing Spaces
	
	Additional query words: word97
	
	======================================================================
	Keywords          : kbualink97 kbusage 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
