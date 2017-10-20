---
layout: page
title: "Q198042: WD97: Spelling and Grammar Checkers Do Not Flag Single Letters"
permalink: /kb/198/Q198042/
---

## Q198042: WD97: Spelling and Grammar Checkers Do Not Flag Single Letters

{% raw %}

	Article: Q198042
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbproof winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Neither the Spelling command nor the Grammar command flags a single letter as a
	misspelled word, regardless of case. For example, in the following sentence
	
	  Now is the time f R all good men to come to the aid...
	
	the spelling and grammar checkers do not flag either character (f or R) as a
	spelling or grammar error.
	
	CAUSE
	=====
	
	Word does not flag a single letter, because it is considered an intentional
	action (for example, a heading of an index section). However, if you have two
	single letters, such as f and f (separated by a space), Word flags the second
	letter, regardless of case, because Word flags duplicate (repeated) words.
	
	WORKAROUND
	==========
	
	The AutoCorrect feature can be used to change an entry if it is a typical
	misspelling. For example, an entry of "t" can be automatically changed to "to"
	from the Tools menu by selecting AutoCorrect and adding "t" to the "Replace Text
	as You Type" dialog box.
	
	NOTE: In the example of this article, you can create an AutoCorrect entry to
	insert the word "for" instead of the f and a space; however, Word does not flag
	"R" as a misspelling or grammatical error. There is no good workaround for this
	type of problem.
	
	Additional query words: CD speller checking misses missed caught catch squiggly red wavy line proofing alphabet spellcheck single letters tools
	
	======================================================================
	Keywords          : kbproof winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
