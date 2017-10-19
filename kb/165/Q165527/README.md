---
layout: page
title: "Q165527: WD97: Outline Numbering Incorrect After Saving to HTML"
permalink: /kb/165/Q165527/
---

## Q165527: WD97: Outline Numbering Incorrect After Saving to HTML

	Article: Q165527
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbusage kbnumbering
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your document contains more than 8 levels of numbering, then your numbering
	may be incorrect after you save the document as HTML.
	
	CAUSE
	=====
	
	The HTML conversion process only supports eight levels of numbering, while Word
	supports up to nine.
	
	RESOLUTION
	==========
	
	Use Internet Explorer 3.0 or later to view the HTML document. The HTML that is
	written when you save from Word as HTML is correct. The numbering problem is a
	limitation to the HTML import process when opening the HTML document in Word.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Following, is an example of a correctly formatted list and how this list whould
	look once you save it as HTML and reopen it in Word.
	
	  The Correct List
	  ----------------
	  1. Level 1
	    1. Level 2
	      1. Level 3
	        1. Level 4
	          1. Level 5
	            1. Level 6
	              1. level 7
	                1. Level 8
	                  1. Level 9
	
	  The Incorrectly Converted List
	  ------------------------------
	  1. Level 1
	    1. Level 2
	      1. Level 3
	        1. Level 4
	          1. Level 5
	            1. Level 6
	              1. level 7
	                1. Level 8
	                  2. Level 9    <-- Level 9 is being ignored and is being
	                                    considered to be part of level 8
	
	REFERENCES
	==========
	
	For more information about saving documents as HTML, click the Office Assistant,
	type "HTML conversion limitations" (without the quotation marks), click Search,
	and then click "Learn what happens when you save a Word 97 document as a Web
	page."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words:
	
	======================================================================
	Keywords          : kbualink97 kbusage kbnumbering 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
