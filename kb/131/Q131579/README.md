---
layout: page
title: "Q131579: Using Lotus Organizer Cost/Customer Codes Under Windows NT"
permalink: /kb/131/Q131579/
---

## Q131579: Using Lotus Organizer Cost/Customer Codes Under Windows NT

	Article: Q131579
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Lotus Organizer version 2.01 under Windows NT, you cannot properly
	create Cost Codes or Customer Codes. Entering more than one character produces
	strange responses: either only one character codes can be created or only one
	character can be added to existing code names.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Avoid creating cost codes. Instead, create new cost and customer codes when
	  you create the first new appointment, task, or other organizer entry. For
	  example, to create a new Cost code for a task:
	
	  -or-
	
	  1. Create and then Cost Code.
	
	  2. Choose the Cost Code (or Customer Code) edit box.
	
	  3. Type the first character of the new Code. The character will appear
	     selected in the edit box. If a Code that starts with the character already
	     exists, the last several characters of the existing code will be selected.
	
	  4. Type the next character of the next code. Type only one character.
	
	  5. Press the right arrow key. All characters become deselected and the
	     flashing edit cursor appears at the right of the code.
	
	  6. Repeat steps 4 and 5. After each step 4 you have to use step 5 to deselect
	     text or the next character will replace it all.
	
	  7. When the new Code is complete, choose Add.
	
	  8. Choose OK
	
	  -or-
	
	  1. Choose Create and then Cost Code.
	
	  2. Choose the Cost Code (or Customer Code) edit box.
	
	  3. Press ALT + TAB to get to another application that supports text entry and
	     copying and pasting (such as Windows NT Notepad).
	
	  4. Type the full text of the new Code and then copy it to the clipboard.
	
	  5. Press ALT + TAB to get back to Organizer.
	
	  6. Press CTRL + V or SHIFT + INSERT to paste the text into the Code edit
	     field.
	
	  7. Choose Add.
	
	  8. Choose OK.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
