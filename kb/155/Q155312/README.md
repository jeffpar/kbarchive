---
layout: page
title: "Q155312: WD97: How to Convert Multiple White Space Characters to Tabs"
permalink: /kb/155/Q155312/
---

## Q155312: WD97: How to Convert Multiple White Space Characters to Tabs

{% raw %}

	Article: Q155312
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to change multiple spaces or tabs in a Word document
	to a single instance of a tab or other white space character.
	
	You may want to perform this type of replacement in order to take advantage of
	some of the formatting commands in Word.
	
	MORE INFORMATION
	================
	
	Some text or word processor files use multiple spaces or tabs to create tables.
	In Word, this type of formatting makes alignment and other types of formatting
	impossible.
	
	To convert multiple instances of white space characters such as spaces or tab
	characters to a single instance of a character, use the following advanced
	criteria in the Find What box in the Find And Replace dialog box
	
	  x{y,}
	
	where x is the character you are searching for, such as a space, and y is the
	minimum number of instances that the character must appear in order to be
	replaced.
	
	The following procedure will replace all occurrences of two or more spaces with a
	single tab character.
	
	For example, if the text appears as
	
	  Filet
	  Mignon<space><space><space><space><space>$21.95
	
	it is converted to:
	
	  Filet Mignon<tab>$21.95
	
	by following these steps:
	
	1. On the Edit menu, click Replace.
	
	2. In the Find What box, type
	
	  <space>{2,}
	
	  where <space> is the character you get when you press the SPACEBAR
	  once.
	
	  NOTE: There is no space between the comma (,) and the right brace (}).
	
	3. In the Replace With box, type "^t" (without the quotation marks).
	
	  NOTE: ^ is the caret symbol and is inserted by pressing SHIFT+6.
	
	4. Click More, and then click to select the Use Wildcards check box.
	
	5. Click Replace All.
	
	REFERENCES
	==========
	
	For more information about how to clear or move tab stops, click the Office
	Assistant, type "Tabs," click Search, and then click to view the "Use Tab Stops"
	topic.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: complex search criteria
	
	======================================================================
	Keywords          : kbualink97 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
