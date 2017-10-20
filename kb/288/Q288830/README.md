---
layout: page
title: "Q288830: WD97: Item Appears Without Heading Number in Document Map"
permalink: /kb/288/Q288830/
---

## Q288830: WD97: Item Appears Without Heading Number in Document Map

{% raw %}

	Article: Q288830
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 14-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Document Map pane (on the View menu, click Document Map), an item that
	should have a heading number appears without one. The remaining items are
	numbered correctly.
	
	
	CAUSE
	=====
	
	This problem occurs when there is either a column break or a page break
	immediately before the item that is formatted with heading numbering.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods.
	
	Method 1: Use a Section Break
	-----------------------------
	
	Replace the column break or page break with a section break (for example, Next
	Page section break):
	
	1. On the View menu, click Normal.
	
	2. Find the column break or page break, and then delete it.
	
	3. On the Insert menu, click Break.
	
	4. Under Section breaks, click to select the type of break you want (for
	  example, "Next page"), and then click OK.
	
	Method 2: Use Blank Lines Before and After the Column Break or Page Break
	-------------------------------------------------------------------------
	
	Insert a blank line before and after the column break or page break in your Word
	document. Then apply the Normal style to the blank lines.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For more information about the Document Map, click "Contents and Index" on the
	Help menu, click the Index tab in Microsoft Word Help, type the following text
	
	  document
	
	and then double-click the selected text to go to the "document map" topic. If you
	are unable to find the information you need, ask the Office Assistant.
	
	For more information about adding numbering to headings, click "Contents and
	Index" on the Help menu, click the Index tab in Microsoft Word Help, type the
	following text
	
	  numbers, inserting
	
	and then double-click the selected text to go to the "Add numbers to headings
	created with built-in heading styles or Add numbers to headings that were not
	created with built-in heading styles" topic. If you are unable to find the
	information you need, ask the Office Assistant.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
