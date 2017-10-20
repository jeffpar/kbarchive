---
layout: page
title: "Q254374: WD97: Lists Are Numbered Incorrectly in Catalog Mail Merge"
permalink: /kb/254/Q254374/
---

## Q254374: WD97: Lists Are Numbered Incorrectly in Catalog Mail Merge

{% raw %}

	Article: Q254374
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a catalog mail merge and the main document of your mail merge
	contains text and a numbered list that you want to appear the same for each
	merged record, Microsoft Word applies the numbering as continuous numbering in
	the merged results.
	
	For example, if the main document of your catalog mail merge contains the
	following numbered list
	
	Vegetables
	
	  1. Carrots
	  2. Corn
	  3. Peas
	
	the numbered list continues for each record of your data source in the catalog
	merged document, similar to the following:
	
	Vegetables
	
	  1. Carrots
	  2. Corn
	  3. Peas
	
	Vegetables
	
	  4. Carrots
	  5. Corn
	  6. Peas
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1: Restart Numbering in Each Numbered List After Merging
	---------------------------------------------------------------
	
	Restart numbering for each list after you complete the catalog merge. To do this,
	follow these steps:
	
	1. Place the insertion point where you want the numbering to restart.
	
	2. On the Format menu, click "Bullets and Numbering".
	
	3. On the Numbered tab, under List Numbering, click Restart Numbering and click
	  OK.
	
	4. Repeat steps 1-3 for each list that you would like to restart numbering.
	
	Method 2: Manually Number List
	------------------------------
	
	To manually number the list in the main document of your catalog mail merge,
	clear the "Automatic numbered lists" check box. To do this, follow these steps:
	
	1. On the Tools menu, click AutoCorrect.
	
	2. On the AutoFormat As You Type tab, click to clear the "Automatic numbered
	  lists" check box.
	
	3. Click OK to close the AutoCorrect dialog box.
	
	NOTE: If the main document of your catalog mail merge already contains an
	automatically numbered list, select the list and press CTRL+Q. This removes the
	automatic numbering. Then, manually number each list before you continue with
	your catalog mail merge.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
