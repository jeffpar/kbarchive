---
layout: page
title: "Q196554: WD97: Table of Contents Shows Wrong Formatting"
permalink: /kb/196/Q196554/
---

## Q196554: WD97: Table of Contents Shows Wrong Formatting

	Article: Q196554
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
	
	Formatting applied directly (that is, manually) to heading text appears in the
	table of contents, even though the TOC style does not include that formatting in
	its style definition.
	
	By contrast, the table of contents does not use any formatting defined in the
	text's style and uses only the formatting defined in the TOC styles.
	
	For example, if you select a portion of a Heading 1 paragraph and apply bold
	formatting to that text, the corresponding entry in the table of contents also
	appears in bold. However, if you instead modify the attributes of Heading 1
	style to include bold formatting, this formatting does not appear in the table
	of contents. The table of contents shows only the formatting that is defined in
	the TOC 1 style.
	
	NOTE: The only exception to this behavior is All Caps formatting. If All Caps
	formatting is applied through any means to text in the body of the document, the
	table of contents uses All Caps formatting when it includes the text.
	
	CAUSE
	=====
	
	Word considers direct formatting to be deliberate; thus, Word retains direct
	formatting when it formats the entries in the table of contents. Similarly, Word
	considers style definitions to be deliberate and adheres to the settings in the
	TOC styles.
	
	WORKAROUND
	==========
	
	If you do not want to accept the reformatting that was applied from the Heading
	style changes, use either of the following methods to work around this.
	
	Method 1
	--------
	
	Select the table of contents and press CTRL+SPACEBAR to force Word to revert to
	the built-in TOC styles.
	
	When you update fields and Word asks whether you want to update only page numbers
	in the table of contents or the entire table, do not update the entire table.
	Updating the entire table causes any changes to the Heading styles to be
	reapplied to the table of contents text.
	
	Be sure you clear the Update Fields check box before printing the document, or
	the TOC field will be updated automatically. (To change this option, on the
	Tools menu, click Options. Select the Print tab, and under Printing Options,
	clear Update Fields.)
	
	NOTE: This method works in all cases of direct formatting or style redefinition,
	except for All Caps formatting.
	
	Method 2
	--------
	
	If you have completed work on the table of contents, select the table of contents
	and press CTRL+SHIFT+F9 to unlink the TOC field and cause the TOC results to
	become normal text.
	
	NOTE: After the TOC field is unlinked, it becomes normal text instead of a field
	and you cannot update it.
	
	Select the text to manually apply any formatting changes you want. Note that
	reapplying the appropriate TOC styles does not correct the formatting changes.
	
	
	Additional query words: tab underlining bold italic allcaps smallcaps strikethrough superscript subscript hidden kerning toc field manual table of contents direct
	
	======================================================================
	Keywords          : kbdta kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
