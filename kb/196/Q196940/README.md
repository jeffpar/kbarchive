---
layout: page
title: "Q196940: WD97: Mail Merge Does Not Merge Hidden Character Formatting"
permalink: kb/196/Q196940/
---

## Q196940: WD97: Mail Merge Does Not Merge Hidden Character Formatting

	Article: Q196940
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a Microsoft Word mail merge data document contains hidden text formatting,
	the text appears without the hidden format after Word performs the merge.
	
	CAUSE
	=====
	
	This behavior is by design of Microsoft Word. The mail merge main document
	controls the formatting of text during a merge.
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods.
	
	Method 1: Format the Merge Field in the Mail Merge Main Document as Hidden
	--------------------------------------------------------------------------
	
	Format the merge field in the mail merge main document as hidden. When the merge
	is performed, the result of this field is hidden text.
	
	Method 2: Remove the Word "mergefield" from the Merge Field
	-----------------------------------------------------------
	
	Remove the word "mergefield" from the merge field in the main document. To do
	this, begin by displaying field codes (press ALT+F9). Delete the word
	"mergefield" from within the field code. Ignore the "Error! Bookmark not
	defined" message and perform the merge. The result after the merge is hidden
	text.
	
	Method 3: Replace the MERGEFIELD Field with a REF Field
	-------------------------------------------------------
	
	Turn on field codes (by pressing ALT+F9), and replace the word "mergefield" with
	the word "ref" (without the quotation marks) in the field code. The merge will
	generate hidden text for this field.
	
	Method 2 and method 3 do not permit you to suppress blank lines when a field in
	the data file is empty. Method 1 automatically suppresses the blank lines.
	
	Additional query words: mail merge hidden format character font
	
	======================================================================
	Keywords          : word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
