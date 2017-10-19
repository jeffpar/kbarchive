---
layout: page
title: "Q184487: WD97: Document Label Style Name Not Fully Displayed"
permalink: /kb/184/Q184487/
---

## Q184487: WD97: Document Label Style Name Not Fully Displayed

	Article: Q184487
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a document based on the Professional Fax Template, the style
	name "Document Label" may be cut off in the Style list on the Formatting
	toolbar.
	
	CAUSE
	=====
	
	This problem occurs when a negative left indentation is part of the Document
	Label style definition.
	
	WORKAROUND
	==========
	
	To see the entire style name on the Style list, follow these steps:
	
	1. On the Format menu, click Style.
	
	2. Under Styles, select Document Label, and then click Modify.
	
	3. Click Format. Click Paragraph, and then click the Indents and Spacing tab.
	
	4. Under Indentation, change the Left setting from -0.58 to 0.
	
	5. Click OK twice and then click Apply.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	MORE INFORMATION
	================
	
	For additional information about the Style list, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q170351 WD97: Style Drop-down Shows Styles Out of Order
	
	For additional information about styles, click the Office Assistant, type "style"
	(without the quotation marks), click Search, and then click one of the topics.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
