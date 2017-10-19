---
layout: page
title: "Q280358: WD97: Change Case Command Does Not Change to Sentence/Title Case"
permalink: /kb/280/Q280358/
---

## Q280358: WD97: Change Case Command Does Not Change to Sentence/Title Case

	Article: Q280358
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 19-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Change Case command may not change the selection to Sentence case or Title
	Case in the following conditions.
	
	Case 1
	------
	
	The Change Case command (SHIFT+F3) does not change to Title Case when either of
	the following conditions is true:
	
	- The selection includes an end-of-sentence punctuation (such as a period,
	  question mark, or exclamation mark). Word changes from UPPERCASE to lowercase
	  to Sentence case only.
	
	  -or-
	
	- The selection begins with a space. Word changes from UPPERCASE to lowercase
	  to Sentence case only.
	
	Case 2
	------
	
	The Change Case command does not change to Sentence case when either of the
	following conditions is true:
	
	- The selection does not include the end-of-sentence punctuation. Word changes
	  from UPPERCASE to lowercase to Title Case only.
	
	  -or-
	
	- The selection of an incomplete sentence includes the last letter in the
	  paragraph but does not include end-of-sentence punctuation. Word changes from
	  UPPERCASE to lowercase to Title Case only.
	
	CAUSE
	=====
	
	The Change Case command does not change a complete sentence to Title Case.
	Similarly, the Change Case command assumes that a non-sentence selection is
	never formatted for Sentence case. The command determines whether the selection
	is a sentence by checking for end-of-sentence punctuation. This feature is by
	design of the SHIFT+F3 key combination for the Change Case command.
	
	MORE INFORMATION
	================
	
	The Change Case command changes selected characters to all uppercase letters,
	all lowercase letters, or a combination of uppercase and lowercase letters. The
	Change Case command affects character capitalization but not character
	formatting, such as Small Caps or All Caps. For example, if you apply Title case
	to text that already has Small Caps format, the first letter of each word
	becomes an uppercase letter while the rest of the characters retain the Small
	Caps format.
	
	Change Case option     Function
	------------------------------------------------------------------------
	
	Sentence case          Capitalizes the first letter of the first word in
	                         the selected sentence, or the first word after
	                         the end of a sentence.
	
	lowercase              Changes selected text to all lowercase letters.
	
	UPPERCASE              Changes selected text to all uppercase letters.
	
	Title Case             Capitalizes the first letter of each word in the
	                         selection.
	
	tOGGLE cASE            Changes all uppercase letters to lowercase
	                         letters and all lowercase letters to uppercase
	                         letters in the selection.
	
	NOTE: You cannot use SHIFT+F3 to change the case of your selected text to tOGGLE
	cASE. You must click Change Case on the Format menu, click to select tOGGLE
	cASE, and then click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
