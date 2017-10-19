---
layout: page
title: "Q48863: PRB: CodeView Search String Length Limited to 19-23 Characters"
permalink: /kb/048/Q48863/
---

## Q48863: PRB: CodeView Search String Length Limited to 19-23 Characters

	Article: Q48863
	Product(s): Microsoft Programming Utilities
	Version(s): 2.2,3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 2.2, 3.0, 3.11, 3.14, 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for Windows, versions 3.0, 3.05, 3.06, 3.07, 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you enter a 20 or 21 character search string, CodeView displays the message
	"No match of regular expression" even when the search string exists in the file.
	If the search string is 22 characters or longer, CodeView displays the message
	"Regular expression too long."
	
	CAUSE
	=====
	
	CodeView versions 2.2 and 2.3 and CodeView version 2.1 for Windows can search
	for strings up to 19 characters long by choosing Find from the Search menu. This
	limit is in place even though the edit control in the dialog box accepts many
	more than 19 characters of text. If you type a string longer than 19 characters,
	one of two error messages results.
	
	CodeView versions 3.0 and later are limited to 23 character strings.
	
	RESOLUTION
	==========
	
	Even though 19 characters can be limiting at times, CodeView performs substring
	searches such that the following search expression:
	
	  " AFunctionWithAVeryL" (without the quotation marks)
	
	finds the following string:
	
	  AFunctionWithAVeryLongName
	
	Problems occur only when the code contains two functions with similar names and
	you want to find only one function and not the other, such as the following:
	
	  AFunctionWithAVeryLongName()
	  AFunctionWithAVeryLongParameterList(a, b, c, d, e, f, g, h, i, j)
	
	In this case, CodeView does not allow you to specify a search string long enough
	to distinguish between the two function names. However, you can use the Next
	command on the search menu to find subsequent occurrences of the following
	string:
	
	  AFunctionWithAVeryL
	
	The Next command finds whichever of the two function names above occurs next in
	the source code.
	
	Additional query words: kbinf 2.20 3.00 3.50 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView220DOS kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView300 kbCodeView305 kbCodeView306 kbCodeView307 kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :2.2,3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	
	=============================================================================
	
