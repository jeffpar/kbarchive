---
layout: page
title: "Q183484: WD97: List Styles Start at Zero After Saving as 6.0/95 or RTF"
permalink: /kb/183/Q183484/
---

## Q183484: WD97: List Styles Start at Zero After Saving as 6.0/95 or RTF

	Article: Q183484
	Product(s): Word 97 for Windows
	Version(s): Service Release 1 (SR-1)
	Operating System(s): 
	Keyword(s): word97 kbnumbering
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows, version Service Release 1 (SR-1) 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you save a document as Word 6.0/95 or as Rich Text Format (RTF) that
	contains a list with any of the List Bullet or List Number styles, close and
	then reopen the document, when you apply any of the List Bullet or List Number
	styles to a second list in your document, the list will start at zero.
	
	This problem occurs with any of the following list styles:
	
	- List Bullet 1
	
	- List Bullet 2
	
	- List Bullet 3
	
	- List Bullet 4
	
	- List Bullet 5
	
	- List Number 1
	
	- List Number 2
	
	- List Number 3
	
	- List Number 4
	
	- List Number 5
	
	NOTE: This problem also occurs after you have installed the updated Word 6.0/95
	export converter to the non-SR-1 release of Word 97 for Windows.
	
	RESOLUTION
	==========
	
	To resolve this problem, save your Word document in the "Word 97 &
	6.0/95--RTF" format.
	
	NOTE: When you save your Word document in the "Word 97 & 6.0/95--RTF" format,
	your document will be saved as Rich Text Format (RTF) and not in the native
	(binary) format of Word 6.0 for Windows and Word 7.0 for Windows 95.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q177289 WD97: Why Are Two Word 6.0/95 Converters Listed in Save As Type?
	
	To temporarily work around this problem, you can correct the format of the
	bulleted or numbered list after you apply one of the list bullet or list number
	styles, use one of the following methods.
	
	Method 1: Reapply the Bullet to the Bulleted List
	-------------------------------------------------
	
	1. With the list selected, click Bullets And Numbering on the Format menu.
	
	2. On the Bulleted tab, click to select the correct type of bullet and then
	  click OK.
	
	Method 2: Reapply the Number to the Numbered List
	-------------------------------------------------
	
	1. With the incorrectly numbered list selected, click Bullets And Numbering on
	  the Format menu.
	
	2. On the Numbered tab, click Customize.
	
	  NOTE: The incorrectly numbered scheme should automatically be selected on the
	  Numbered tab. If it is not selected, click to select the incorrectly numbered
	  scheme before you click Customize.
	
	3. In the Customize Numbered List dialog box, in the Start at box, type the
	  number the selected list should start at, and then click OK.
	
	Method 3: Use the Format Painter
	--------------------------------
	
	1. Select a bullet list to which you previously applied one of the List bullet
	  styles.
	
	2. Click the Format Painter button on the Standard toolbar.
	
	  NOTE: Your mouse pointer should now be an I-beam with a paint brush attached.
	
	3. Select the incorrectly numbered list. After you select the incorrectly
	  numbered list, the format of the list should change to the same format of
	  your previous list and continue with the same bullets.
	
	Method 4: Reapply the Bullet or Number to the List Style
	--------------------------------------------------------
	
	1. With the incorrectly bulleted or numbered list selected, click Style on the
	  Format menu.
	
	2. In the Style dialog box, the List Bullet or List Number style should be
	  selected in the Styles list. Click Modify.
	
	3. In the Modify Style dialog box, click to select the Add to template check
	  box. Click Format and then click Numbering.
	
	4. Do one of the following:
	
	   - To change any of the list bullet styles, select the correct bullet on the
	     Bulleted tab and then click OK.
	
	  -or-
	
	   - To change any of the List Number styles, follow these steps:
	
	     a. On the Numbered tab, select the correct numbering scheme and then click
	        Customize.
	
	     b. In the Customize Numbered List dialog box, change the Start at box to
	        the correct number to continue your numbered list and then click OK.
	
	     c. Click OK to close the Modify Style dialog box.
	
	     d. In the Style dialog box, click Apply.
	
	NOTE: If you save your document as Word 6.0/95 or as Rich Text Format and close
	your file, when you reopen your document to add another bulleted or numbered
	list using any of the List Bullet or List Number styles, you will need to repeat
	this procedure.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : word97 kbnumbering 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2 kbWord97SR1
	Version           : :Service Release 1 (SR-1)
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
