---
layout: page
title: "Q189236: WD97: Table of Contents Entries Appear in All Caps"
permalink: kb/189/Q189236/
---

## Q189236: WD97: Table of Contents Entries Appear in All Caps

	Article: Q189236
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
	
	Entries in the table of contents appear in all caps, even though the TOC styles
	don't include this format.
	
	CAUSE
	=====
	
	This problem occurs if you applied All Caps formatting to the text that is used
	for the TOC entry. This problem occurs regardless of whether you formatted the
	text in All Caps manually with the CAPS LOCK key or by turning on the All Caps
	setting (on the Format menu, click Font, and then click the Font tab.)
	
	Unlike other font formats, the All Caps character format actually changes the
	internal representation of the characters to capital letters. Thus, the table of
	contents considers the text to have been typed in capital letters and shows it
	as such.
	
	WORKAROUND
	==========
	
	To avoid this problem, use any of the following methods.
	
	Method 1: Do Not Use All Caps Settings
	--------------------------------------
	
	Do not apply All Caps format and do not use your CAPS LOCK key for text that will
	be included in the table of contents.
	
	Method 2: Redefine your Heading Style
	-------------------------------------
	
	Redefining your Heading Style definitions to include All Caps will allow the text
	in your document to be all caps, but will use normal sentence case for the TOC
	entries. To do this, follow these steps:
	
	1. On the Format menu, click Style and under Styles, click Heading 1.
	
	2. Click Modify, click Format, and then click Font.
	
	3. Under Effects, click to select the All Caps check box and press OK.
	
	4. If you want this to be a permanent change, in the Modify Style dialog box,
	  click to select the Add To Template check box and then click OK. Or, if you
	  do not want this to be permanent, just click OK.
	
	5. Click Apply.
	
	6. Generate your table of contents in the normal way.
	
	Method 3: Convert Table of Contents to Text
	-------------------------------------------
	
	When you finalize the table of contents, select the table of contents and press
	CTRL+SHIFT+F9 to unlink the TOC field and cause the TOC results to become normal
	text. (NOTE: Once the TOC field is unlinked, it becomes normal text instead of a
	field, and you will not be able to update it.) Select the table of contents text
	and remove the All Caps formatting. Note that this will change all the selected
	text to lowercase.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: uppercase toc table of contents all caps capitals capital letters
	
	======================================================================
	Keywords          : kbdta kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
