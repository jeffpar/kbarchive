---
layout: page
title: "Q176865: WD97: Error with Missing FormField Bookmark Names"
permalink: /kb/176/Q176865/
---

## Q176865: WD97: Error with Missing FormField Bookmark Names

	Article: Q176865
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbprogramming kbdta kbwordvba kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to access a form field using Visual Basic for Applications
	commands and the bookmark name for the form field is missing, you may receive
	the following error message:
	
	  Run-time error: "-2147467259" Method Name of Object FormField Failed
	
	  or
	
	  Run-time error: "5941" The requested member of the collection does not exist.
	
	CAUSE
	=====
	
	When you copy and paste a form field to a different location, a new form field
	will be created. This new form field will not have a bookmark name.
	
	WORKAROUND
	==========
	
	Make sure each form field in the active document contains a valid bookmark name.
	To enter a bookmark name for a form field, follow these steps:
	
	1. Double-click the form field to display the form field Options dialog box.
	
	2. In the Bookmark Name box enter a valid bookmark name.
	
	  The following characters are invalid in a bookmark name:
	
	   - Any characters whose ASCII value is less than 29 and greater than 127.
	
	  -or-
	
	   - Characters listed in the following table.
	
	   Character ASCII code      Character ASCII code     Character ASCII code
	   -----------------------------------------------------------------------
	
	   -         Chr(30)         <Space>   Chr(32)         !         Chr(33)
	   "         Chr(34)         #         Chr(35)         $         Chr(36)
	   %         Chr(37)         &         Chr(38)         '         Chr(39)
	   (         Chr(40)         )         Chr(41)         *         Chr(42)
	   +         Chr(43)         ,         Chr(44)         -         Chr(45)
	   .         Chr(46)         /         Chr(47)         :         Chr(58)
	   ;         Chr(59)         <         Chr(60)         =         Chr(61)
	   >         Chr(62)         ?         Chr(63)         @         Chr(64)
	   [         Chr(91)         \         Chr(92)         ]         Chr(93)
	   ^         Chr(94)         `         Chr(96)         {         Chr(123)
	   |         Chr(124)        }         Chr(125)        ~         Chr(126)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbdta kbwordvba kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
