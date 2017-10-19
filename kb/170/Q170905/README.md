---
layout: page
title: "Q170905: WD97: Envelope Address Moves After Canceling Font Changes"
permalink: /kb/170/Q170905/
---

## Q170905: WD97: Envelope Address Moves After Canceling Font Changes

	Article: Q170905
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage kbenvelope winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have an envelope added to your document and you then use the Envelope
	Options dialog box to modify the font attributes of the delivery address, the
	delivery address may move up near the return address if you cancel the Envelope
	Options dialog box.
	
	CAUSE
	=====
	
	Canceling the Envelope Options dialog box resets the formatting of the delivery
	address and removes the frame that is used to position the delivery address.
	With the frame removed, the delivery address becomes positioned near the return
	address.
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 for Windows Service Release 1
	(SR-1).
	
	To work around this problem, reapply the Envelope Address style to the delivery
	address and have the delivery address return to the correct position. To do
	this, follow these steps:
	
	1. Select the delivery address.
	
	2. On the Format menu, click Style.
	
	3. In the List drop-down box, click All Styles.
	
	4. Click the Envelope Address style.
	
	  NOTE: If you want to change the font of the delivery address, follow these
	  steps:
	
	  a. From the Click the Modify button.
	
	  b. Click the Format button and then click Font.
	
	  c. Change the font.
	
	  d. Click OK twice and click Apply.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	REFERENCES
	==========
	
	For more information about formatting envelopes, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q157892 WD97: Change to Address Font Not Saved from Envelopes Tab
	
	  Q157888 WD97: Word Default Font Changed When Address Font Changed
	
	For more information about formatting envelopes, click the Office Assistant, type
	"formatting envelopes," click Search, and then click one of the buttons.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: sr1 release1 8.0 8.00 move reposition
	
	======================================================================
	Keywords          : kbusage kbenvelope winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
