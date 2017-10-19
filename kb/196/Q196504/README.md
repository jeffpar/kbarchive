---
layout: page
title: "Q196504: WD97: Symbol in STYLEREF Field Appears as Opening Parenthesis"
permalink: /kb/196/Q196504/
---

## Q196504: WD97: Symbol in STYLEREF Field Appears as Opening Parenthesis

	Article: Q196504
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you insert a symbol in a paragraph and refer to that paragraph with a
	STYLEREF field, the symbol may not appear correctly in the STYLEREF field
	result. Instead, it appears as a "(" symbol (opening parenthesis).
	
	CAUSE
	=====
	
	This happens when you insert the symbol and specify any font other than Normal
	text.
	
	WORKAROUND
	==========
	
	There are three ways to make the symbol appear correctly in the STYLEREF field
	result:
	
	Method 1
	--------
	
	Insert the symbol without specifying a particular font. To do this, follow these
	steps:
	
	1. On the Insert menu, click Symbol.
	
	2. In the Font box, select (normal text).
	
	3. Select the symbol.
	
	Method 2
	--------
	
	If the symbol is in the Special Characters list, use the shortcut keystroke to
	insert the symbol.
	
	Method 3
	--------
	
	With the insertion point in the paragraph you are referring to, hold down the ALT
	key and type the four-digit ANSI code using the numeric keypad.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
