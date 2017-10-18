---
layout: page
title: "Q198307: WD97: Text Box Background Is Opaque After Changing Wrap Style"
permalink: kb/198/Q198307/
---

## Q198307: WD97: Text Box Background Is Opaque After Changing Wrap Style

	Article: Q198307
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kbframe kblayout
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you insert a text box in your document, the background is opaque. When you
	perform the following, the background becomes transparent and you cannot reset
	it to opaque:
	
	- Change the wrapping style for the text box.
	
	  -and-
	
	- Reset the wrapping style to None.
	
	WORKAROUND
	==========
	
	To work around this issue, use one of the following methods.
	
	Method 1: Cancel the Wrapping Style Formatting
	----------------------------------------------
	
	Click Undo on the Standard toolbar, until the text box is opaque.
	
	Method 2: Remove the Existing Text Box and Insert a New Text Box
	----------------------------------------------------------------
	
	1. Select the text you typed inside the existing text box.
	
	2. On the Edit menu, click Copy.
	
	3. Select the text box, and then click Delete on the Edit menu.
	
	4. Insert a new text box (click Text Box on the Drawing toolbar).
	
	5. Click inside the text box, and then click Paste on the Edit menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	To change the wrapping style for a text box, follow these steps:
	
	1. Select the text box.
	
	2. On the Format menu, click Text Box.
	
	3. Click the Wrapping tab.
	
	4. Select the wrapping style you want, and then click OK.
	
	
	Additional query words: OFF98
	
	======================================================================
	Keywords          : word97 kbframe kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
