---
layout: page
title: "Q173378: WD97: Indentation in List Disappears After You Restart Numbering"
permalink: /kb/173/Q173378/
---

## Q173378: WD97: Indentation in List Disappears After You Restart Numbering

{% raw %}

	Article: Q173378
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97 kbnumbering kblayout
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a style that contains a numbered list and left indentation, and
	then you restart numbering for another list, Word removes the left indentation
	from the numbered lists and from the style definition.
	
	
	WORKAROUND
	==========
	
	To restart numbering for another list and have Word preserve the left
	indentation for the lists, use one of the following methods.
	
	Method 1: Create a Custom Style
	-------------------------------
	
	1. Select a numbered list that is indented correctly, as you want it.
	
	2. On the Format menu, click Style.
	
	3. In the Style dialog box, click New.
	
	4. In the Name box, type a new style name.
	
	5. Click to select the "Add to template" box.
	
	6. Click Modify and then click Numbering in the list.
	
	7. Click Customize. Set the indent from the left, or ensure that the indent is
	  set correctly. (For example: Left indent set to .5".)
	
	8. Ensure that the "Text indent" setting is also set correctly. (For example:
	  Text indent set to .75".)
	
	9. Click OK.
	
	10. Click Apply.
	
	The indentation will remain in all the numbered lists that are based on this
	style, even when you restart numbering.
	
	Method 2: Restart the Numbered List
	-----------------------------------
	
	To restart the numbering of a list, follow these steps:
	
	1. Press ENTER twice at the end of the first list.
	
	2. On the Format menu, click Bullets and Numbering, and then click the Numbered
	  tab.
	
	3. Click to select the numbering scheme that you want, and then click to select
	  Restart Numbering.
	
	4. Click OK.
	
	NOTE: After applying the list numbering, you can remove the empty paragraphs
	between the numbered lists without affecting the numbering scheme.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q159943 WD97: General Information About Bullets and Numbering
	
	  Q172764 WD97: Changes to List Number Styles May be Lost
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word8 word97 kbnumbering kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
