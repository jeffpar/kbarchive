---
layout: page
title: "Q196542: WD97: Edit Find/Replace Doesn't Find Text Formatted as All Caps"
permalink: kb/196/Q196542/
---

## Q196542: WD97: Edit Find/Replace Doesn't Find Text Formatted as All Caps

	Article: Q196542
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You cannot find or replace All Caps text. This problem occurs when you created
	the uppercase text by one of the following methods:
	
	- You typed the uppercase text with the CAPS LOCK key on.
	
	  -or-
	
	- You used the Change Case command on the Format menu to change the text to
	  uppercase.
	
	  -or-
	
	- You used SHIFT+F3 to change the case of your text.
	
	CAUSE
	=====
	
	By design in Microsoft Word, when you search for uppercase text by selecting the
	All Caps effect in the Find Font dialog box, only text you formatted with the
	All Caps option is found. (To locate the All Caps option, click Font on the
	Format menu, click the Font tab, and see All Caps under Effects.)
	
	By design, All Caps formatting affects only lowercase characters. It does not
	affect uppercase letters, numbers, punctuation, or other non-alphabetic
	characters. All Caps formatting does not change the ASCII value of the
	characters. By contrast, when you use the Change Case command, SHIFT+F3, or CAPS
	LOCK, you are changing the case as well as the ASCII value of the characters.
	Lowercase characters have different ASCII values than uppercase characters.
	
	WORKAROUND
	==========
	
	Type the uppercase text you are searching for in the Find What box of the Find
	or Replace dialog box, and click to select the Match Case check box. Do not
	select All Caps.
	
	Additional query words: uppercase upper case capital letters capitals
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
