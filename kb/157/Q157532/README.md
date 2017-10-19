---
layout: page
title: "Q157532: WD97: Invalid Procedure Name Error Creating a New Macro"
permalink: /kb/157/Q157532/
---

## Q157532: WD97: Invalid Procedure Name Error Creating a New Macro

	Article: Q157532
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to create a new macro, you receive the following error
	message:
	
	  Invalid Procedure Name
	
	CAUSE
	=====
	
	The macro name contains invalid characters or reserved identifiers, or the
	length exceeds 80 characters.
	
	
	WORKAROUND
	==========
	
	Rename the macro to contain fewer than 80 charecters. For tips on valid macro
	names see the More Information section of this article.
	
	MORE INFORMATION
	================
	
	Valid macro names:
	
	- Must begin with a letter.
	
	- Cannot contain spaces or non-alphanumeric characters (such as &, *, /,
	  and so on).
	
	- Cannot contain periods. You may use a period (.) in a macro name only to
	  explicitly define a procedure within a module. For example, if you type in
	  the new macro name "my.test", you have created a new Module called "my"
	  containing a Procedure named "test".
	
	- Cannot exceed 80 characters.
	
	- Cannot conflict with a program's reserved identifiers or keywords, such as
	  the word "print".
	
	Additional query words: tools macro word97
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
