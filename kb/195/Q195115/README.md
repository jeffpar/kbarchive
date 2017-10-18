---
layout: page
title: "Q195115: WD97: Label Mail Merge Displays Extra Row of Labels"
permalink: kb/195/Q195115/
---

## Q195115: WD97: Label Mail Merge Displays Extra Row of Labels

	Article: Q195115
	Product(s): Word 97 for Windows
	Version(s): 97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you use mail merge to merge your address list to labels, when you view
	your merged label document in print preview (on the File menu, click Print
	Preview), you may see an extra row of labels at the bottom of each page. This
	row contains the first record from the next page and may be truncated if there
	is more information than can fit in the remaining space on the page.
	
	NOTE: The first row of labels on the next page either correctly displays the same
	records that are found in the truncated label row or displays an empty space
	where the first row should be. When you print the labels, they are printed
	correctly.
	
	CAUSE
	=====
	
	This problem is a display-only problem that occurs when you view your labels in
	print preview. It occurs with the following labels:
	
	- Avery 5160
	- Avery 5161
	- Avery 5162
	- Avery 5660
	- Avery 5664
	- Avery 5920
	- Avery 5922
	- Avery 5961
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1: Switch to a Different View
	------------------------------------
	
	To work around this problem, use either normal view or print layout view. To
	switch to either normal view or print layout view, click Normal or Print Layout
	on the View menu.
	
	Method 2: Change the Setting for Bottom Margin of Page
	------------------------------------------------------
	
	When you create labels (on the Tools menu, click "Envelopes and Labels"), the
	bottom margin for some label sizes is set to 0" (zero-inches). To work around
	this problem, change the bottom margin of the label page to the same value as
	the top margin. To do this, follow these steps:
	
	1. Open your label document in Word.
	
	2. On the File menu, click Page Setup.
	
	3. On the Margins tab, change the Bottom box to the same value as the Top box.
	
	4. Click OK to close the Page Setup dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem may also occur if you create a custom label for your mail merge.
	
	Additional query words: mailmerge
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :97
	Issue type        : kbprb
	
	=============================================================================
	
