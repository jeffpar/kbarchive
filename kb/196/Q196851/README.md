---
layout: page
title: "Q196851: WD97: Space Added Before Number After Pasting to Text"
permalink: /kb/196/Q196851/
---

## Q196851: WD97: Space Added Before Number After Pasting to Text

{% raw %}

	Article: Q196851
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you paste a numbered list as unformatted text (using the Paste Special
	command on the Edit menu), a space appears before numbers greater than 1, but
	the space does not appear before the first item, as in the following example:
	
	  1. Apples
	   2. Oranges
	   3. Bananas
	   4. Grapes
	
	CAUSE
	=====
	
	This behavior occurs when "Smart Cut and Paste" is turned on, when "Number
	Position" is set to Right, and you apply numbering to the text using the Bullets
	And Numbering feature in Word 97.
	
	WORKAROUND
	==========
	
	Method 1
	--------
	
	Turn off the Use Smart Cut And Paste option before pasting the numbered list. To
	locate this option, click Options on the Tools menu, and select the Edit tab.
	
	Method 2
	--------
	
	If Smart Cut And Paste is turned on, paste the numbered list as Formatted text.
	To do this, follow these steps:
	
	1. Select the list.
	
	2. On the Edit menu, click Copy.
	
	3. Position the insertion point where you want to paste the list.
	
	4. On the Edit menu, click Paste Special.
	
	5. Select Formatted Text (RTF) and click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Word 2000.
	
	Additional query words: formatted unformatted text
	
	======================================================================
	Keywords          : kbualink97 kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
