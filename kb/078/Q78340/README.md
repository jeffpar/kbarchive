---
layout: page
title: "Q78340: WD97: Words in Exclude Dictionary Not Flagged as Incorrect"
permalink: /kb/078/Q78340/
---

## Q78340: WD97: Words in Exclude Dictionary Not Flagged as Incorrect

{% raw %}

	Article: Q78340
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbproof winword word97kbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you spell check a document in Word, Word does not stop at words that are
	spelled correctly but that are included in the exclude dictionary. Instead, it
	acknowledges them as spelled correctly.
	
	CAUSE
	=====
	
	Words contained in an exclude dictionary should be flagged as misspelled in Word
	for Windows documents when you run the spelling checker. The following are
	reasons why a word in an exclude dictionary may not be flagged as incorrect:
	
	- The exclude dictionary is in a different directory than the main dictionary.
	
	- The exclude dictionary does not have an .exc extension and the same file name
	  as the main dictionary. For example, if the main dictionary is Sp_am.lex, the
	  exclude dictionary must be Sp_am.exc.
	
	- You edited the exclude dictionary in Word and the changes do not take effect
	  until you restart Word.
	
	- You have added a word that consists of only a single character.
	
	- The exclude dictionary may be corrupt; in which case, create a new one.
	
	  For additional information, please see the following articles in the Microsoft
	  Knowledge Base:
	
	  Q87857 WD: Spelling and Grammar Checkers Do Not Flag Single Letters
	
	  Q181641 WD97: How to Create an Exclude Dictionary
	
	  Q181640 WD98: How to Create an Exclude Dictionary
	
	  Q142100 WD: How to Create an Exclude Dictionary
	
	MORE INFORMATION
	================
	
	An exclude dictionary contain words that you want the spelling checker to flag
	as incorrect even though the words are not normally considered misspelled.
	
	REFERENCES
	==========
	
	"Microsoft Word for Windows User's Guide," page 283
	
	Additional query words: wrong
	
	======================================================================
	Keywords          : kbproof winword word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	

{% endraw %}
