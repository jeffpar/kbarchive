---
layout: page
title: "Q155982: WD97: Hyperlink Style Format Is Not Retained After Merge"
permalink: kb/155/Q155982/
---

## Q155982: WD97: Hyperlink Style Format Is Not Retained After Merge

	Article: Q155982
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbfield
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you merge a main document and a data document that contains a field
	formatted with the Hyperlink style, the text that appears in the merged document
	fails to appear in the Hyperlink style. This behavior does not affect the
	functionality of the hyperlink field, which is retained after the merge.
	
	NOTE: By default, the Hyperlink style uses a blue underlined font.
	
	CAUSE
	=====
	
	By design, you can format a merge field in the main document; however, Word
	overrides formatting applied to fields in the data document with formatting
	applied to the fields in the main document.
	
	WORKAROUND
	==========
	
	To work around this behavior, select the field in the main document, including
	the braces or chevron characters (<< >>), and then apply the
	Hyperlink style to the field. When you merge to a new document, the hyperlink
	text will appear in the Hyperlink style.
	
	MORE INFORMATION
	================
	
	Word 97 automatically creates hyperlink fields when you type a Uniform Resource
	Locator (URL) that is followed by a space. Word formats these fields with the
	Hyperlink style. For additional information about how to create hyperlinks in
	Word 97, open the Word Help Topics Index, and view the "Hyperlink, Creating"
	topic.
	
	Additional query words: 8.0 word8 word97 print merge merging merges hypertext url uniform resource locator winword
	
	======================================================================
	Keywords          : kbualink97 kbfield 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
