---
layout: page
title: "Q197758: WD97: Cross-Reference Text Format Lost in Form Field Bookmark"
permalink: /kb/197/Q197758/
---

## Q197758: WD97: Cross-Reference Text Format Lost in Form Field Bookmark

	Article: Q197758
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
	
	When you update a cross-reference to the bookmark of a text form field contained
	in a protected section, the resulting cross-reference text may not be correctly
	formatted. This problem occurs when the following conditions are true:
	
	- Manual formatting has been applied to the cross-reference field.
	
	  -and-
	
	- You have typed multiple words into the text form field.
	
	NOTE: Only the first word of the cross-reference text will contain the correct
	formatting.
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1: Modify the Cross-Reference Field Code
	-----------------------------------------------
	
	After you have applied formatting to the cross-reference field, turn on the field
	codes. The field code should resemble the following:
	
	  {ref Text1 \* MERGEFORMAT}
	
	Change MERGEFORMAT to CHARFORMAT so that your cross-reference field now looks
	like the following:
	
	  {ref Text1 \* CHARFORMAT}
	
	To turn your field codes on or off, follow these steps:
	
	1. On the Tools menu, click Options.
	
	2. On the View tab, select the Field Codes check box.
	
	3. Click OK.
	
	NOTE: A check mark in the check box indicates that the option is turned on.
	
	Method 2: Apply a Style
	-----------------------
	
	Instead of manually formatting the cross-reference field, apply a style to the
	field.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
