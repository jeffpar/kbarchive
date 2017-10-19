---
layout: page
title: "Q197840: WD97: Certain Characters Do Not Display in Field Result"
permalink: /kb/197/Q197840/
---

## Q197840: WD97: Certain Characters Do Not Display in Field Result

	Article: Q197840
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The backslash ( \ ) and quotation mark ( " ) characters don't display in field
	results as you intended.
	
	For example, the field
	
	     {FILLIN "Type "M" or "F" in the box."}
	
	results in the dialog box showing only the word "Type," without the quotation
	marks.
	
	CAUSE
	=====
	
	The backslash and quotation mark characters are special characters in fields.
	The backslash is used to indicate the next character as a switch command in the
	field. Quotation marks are used to enclose literal text strings (see below)
	within a field.
	
	WORKAROUND
	==========
	
	To work around this behavior, use a backslash (with no space) before the
	character you want to include. This tells Word that you want to include this
	character in the text string.
	
	Preface a quotation mark with \ to make it display in a field code.
	
	For example, the field
	
	     {FILLIN "Type \"M\" or \"F\" in the box."}
	
	appears in the dialog box as:
	
	  Type "M" or "F" in the box.
	
	You must also use an extra backslash in an INCLUDE field when you indicate a long
	Windows path. For example:
	
	     {INCLUDETEXT "C:\\Winword\\Docs\\Start.doc"}
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
