---
layout: page
title: "Q198302: WD97: Cannot Change Case from Uppercase to Title Case"
permalink: /kb/198/Q198302/
---

## Q198302: WD97: Cannot Change Case from Uppercase to Title Case

{% raw %}

	Article: Q198302
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97kbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to change the case of selected text from all uppercase to title
	case, nothing happens.
	
	NOTE: To change case, click Change Case on the Format menu.
	
	CAUSE
	=====
	
	This behavior occurs if the first paragraph in your selection is an empty
	paragraph.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods.
	
	Method 1: Use SHIFT+F3 to Change the Case to Title Case
	-------------------------------------------------------
	
	1. Select the text you want to change.
	
	2. Press SHIFT+F3.
	
	Each time you press F3 while holding the SHIFT key, Word cycles through different
	case formatting. When you see the case you want to use, release the SHIFT key.
	
	Method 2: Don't Select the Empty Paragraph at Beginning of the Selection
	------------------------------------------------------------------------
	
	Make sure that you do not select the empty paragraph immediately preceding the
	text selected, and then follow these steps to change the case of the selection:
	
	1. On the Format menu, click Change Case.
	
	2. Select Title Case.
	
	3. Click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q105708 Change Case Command Does Not Toggle to Initial Caps
	
	  Q114206 Case of Form Field Text Won't Change from Uppercase
	
	  Q125002 Format Change Case May Not Change Case Based on Selection
	
	REFERENCES
	==========
	
	For more information about changing the case of text, click the Office
	Assistant, type "capitalize text," click Search, and then click to view the
	"Capitalize text" topic.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: OFF98 all caps capitals different
	
	======================================================================
	Keywords          : word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
