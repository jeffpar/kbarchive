---
layout: page
title: "Q170887: WD97: Field Code Becomes Damaged Under Certain Circumstances"
permalink: /kb/170/Q170887/
---

## Q170887: WD97: Field Code Becomes Damaged Under Certain Circumstances

	Article: Q170887
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When your document contains a damaged field code and you save the document in
	Rich Text Format (RTF), you may receive the following error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	When you click Details, you receive the following message:
	
	  WINWORD caused an invalid page fault in module WINWORD.EXE.
	
	Other possible symptoms include:
	
	- If you click Header and Footer on the View menu, the header and footer panes
	  may not be displayed.
	
	- Field codes have only one field brace displayed instead of two.
	
	- If you delete the text in the header or footer, Word may stop responding.
	
	CAUSE
	=====
	
	This problem can occur in a variety of situations when manually editing fields
	in the header including, but not limited to, some of the following actions:
	
	- On the Standard toolbar, Show/Hide is not selected, that is, nonprinting
	  characters are not displayed.
	
	- On the View tab in the Options dialog box, the View Field Codes check box is
	  cleared.
	
	- On the Layout tab in the Page Setup dialog box, the Different First Page
	  check box is cleared.
	
	- You save, close, and then reopen the file.
	
	- You press TAB and then press BACKSPACE in the header or footer.
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 Service Release 1 (SR- 1).
	
	To work around this problem, copy everything but the last paragraph to a new
	document. To do this, follow these steps:
	
	
	1. Open the document that contains the damaged field code.
	
	2. Press CTRL+END to move the insertion point to the end of the document.
	
	3. Press CTRL+SHIFT+HOME to select all but the last paragraph of the document.
	
	4. On the Edit menu, click Copy.
	
	5. Create a new document.
	
	6. On the Edit menu, click Paste.
	
	7. Re-create the header and footer for the document.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	REFERENCES
	==========
	
	For more information about troubleshooting damaged documents, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q87856 WD: Troubleshooting Damaged Documents in Word for Windows
	
	  Q167721 WD97: IPF Error Opening File with Recover Text Converter
	
	  Q156573 WD97: How to Recover Text from Any File
	
	
	Or, click the Office Assistant, type "troubleshooting corrupt documents" (without
	the quotation marks), click Search, and then click the "Prevent loss of work and
	recover lost documents" topic.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: SR1 release1 8.0 8.00 GPF General protection styleref missing curly brackets
	
	======================================================================
	Keywords          : kberrmsg kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
