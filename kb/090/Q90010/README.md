---
layout: page
title: "Q90010: WD97: Use of ASK and FILLIN Fields and &#92;o Switch"
permalink: kb/090/Q90010/
---

## Q90010: WD97: Use of ASK and FILLIN Fields and &#92;o Switch

	Article: Q90010
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): winword word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article discusses the following issues regarding the use of ASK and FILLIN
	fields in a Microsoft Word mail merge operation:
	
	- Using the \o switch to cause Word to prompt you only once for input.
	
	- Choosing the Cancel button or pressing ESC when prompted for ASK or FILLIN
	  input.
	
	MORE INFORMATION
	================
	
	ASK Field
	---------
	
	The ASK field prompts you to type text, which it assigns to a bookmark name.
	During a mail merge, the ASK field prompts you for input before printing each
	merged document, which allows you to customize each merged document. The ASK
	field itself has no result; the result is assigned to the bookmark. You must
	insert a separate field to reference the bookmarked information you typed in
	response to the ASK prompt. Example:
	
	  {ASK BookmarkName "Message Text"}{REF BookmarkName}
	
	In this example, the ASK field prompts you for input, which it assigns to the
	bookmark named BookmarkName. The REF field inserts the input in your merged
	document.
	
	FILLIN Field
	------------
	
	The FILLIN field prompts you for text that is used as the FILLIN field result.
	During a mail merge, the FILLIN field prompts you for input before printing each
	merged document, which allows you to customize each merged document.
	
	Using the \o Switch
	-------------------
	
	When you add the \o switch to a Microsoft Word FILLIN or ASK field, Microsoft
	Word prompts for input only once, before printing the first document during a
	mail merge, rather than once for each mail merge document. Microsoft Word uses
	the same information in each merged document. Examples:
	
	  {FILLIN "Batch Number" \o}
	  {ASK BookmarkName "Message Text" \o}{REF BookmarkName}
	
	What Happens When You Choose the Cancel Button or Press ESC?
	------------------------------------------------------------
	
	If you previously typed something in the ASK or FILLIN field dialog box, that
	text remains in the dialog box for the next prompt. If you choose the Cancel
	button to skip an ASK field, Word uses the previously- typed text as the current
	value of the ASK field bookmark.
	
	Canceling an ASK or FILLIN field dialog box only cancels the prompt for input; it
	does not delete the previously-typed input. If you don't want any value assigned
	to a FILLIN field or to an ASK field bookmark, you must press the DEL key to
	delete the previously-typed text, and then choose the OK button.
	
	Additional query words: pmh missing appear data
	
	======================================================================
	Keywords          : winword word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
