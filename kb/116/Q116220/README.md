---
layout: page
title: "Q116220: WD97: Character Formatting in Data Source Not Retained In Merge"
permalink: kb/116/Q116220/
---

## Q116220: WD97: Character Formatting in Data Source Not Retained In Merge

	Article: Q116220
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbprint word97 kbmerge kbPrintingkbfaq
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Formatted characters in a mail merge data source, such as superscripted or
	subscripted characters, will not retain their formatting after the data is
	merged with the main document.
	
	CAUSE
	=====
	
	By design, Word allows you to format the merge fields in the mail merge main
	document. Formatting that is applied to the data source is overridden by
	formatting applied to the fields in the main document.
	
	WORKAROUND
	==========
	
	Method 1: Change the Main Document Mergefield
	---------------------------------------------
	
	Remove the word "MERGEFIELD" from the merge fields in the main document. To do
	this, display field codes by pressing ALT+F9. Delete the word "MERGEFIELD" from
	within the field code. Ignore the "Error! Bookmark not defined" error message
	and perform the merge.
	
	Method 2: Use Equation Editor
	-----------------------------
	
	To maintain superscript or subscript formatting, use the Equation Editor to
	create the superscript or subscript characters in the data source.
	
	Method 3: Use a REF Field
	-------------------------
	
	For the data field that contains special character formatting, insert a REF field
	in your main document instead of a MERGEFIELD field. For example, in place of
	the following MERGEFIELD field
	
	  {MERGEFIELD Fieldname}
	
	insert the following REF field instead:
	
	  {REF Fieldname}
	
	Word retains the data document formatting for the results of the REF field, which
	preserves the special character formatting. The drawback to this workaround is
	that the mail merge helper does not detect errors or suppress blank lines for
	this field. If you use this workaround, you must suppress blank lines and
	resolve any mail merge errors manually for the REF field.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: math formula chemical expression sub super subscript superscript file bold underline italic italics mergeformat charformat lost removed font size color points
	
	======================================================================
	Keywords          : kbprint word97 kbmerge kbPrinting kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
