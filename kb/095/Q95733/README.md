---
layout: page
title: "Q95733: PC Win: Spell Does Not Check Words Containing Numbers"
permalink: /kb/095/Q95733/
---

## Q95733: PC Win: Spell Does Not Check Words Containing Numbers

	Article: Q95733
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The spelling checker in Microsoft Mail version 3.0 for Windows does not check
	words that contain numbers. Therefore, a misspelling such as "Th8s" is not
	flagged as incorrect.
	
	CAUSE
	=====
	
	The spelling checker API has the ability to turn on or off the "Ignore checking
	of words with numbers" option. Mail forces this option on and does not allow you
	the ability to turn it off.
	
	This feature is by design.
	
	
	Additional query words: 3.00 Spelling Spellcheck spell checker
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
