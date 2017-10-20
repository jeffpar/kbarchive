---
layout: page
title: "Q179352: WD97: Tab Characters Removed When Turning Bullets On/Off"
permalink: /kb/179/Q179352/
---

## Q179352: WD97: Tab Characters Removed When Turning Bullets On/Off

{% raw %}

	Article: Q179352
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you apply or remove the bullet formatting of text that has custom tab stops
	and tab characters, the tab characters will be removed; however, the tab stops
	will be retained.
	
	CAUSE
	=====
	
	When you apply bullet formatting, the paragraph acquires a hanging indent format
	and sometimes a left indentation, depending on the original location of text.
	This action also removes the tab characters.
	
	WORKAROUND
	==========
	
	To work around this behavior, click in the line of text where you want the tab
	character to appear and press TAB to reinsert the tab character.
	
	  -or-
	
	Do not apply or remove bullet formatting from lines of text to which you have
	applied custom tab stops and tab characters.
	
	MORE INFORMATION
	================
	
	Using custom tabs in Word is a two-step process: You need to set tab stops and
	press TAB to insert tab characters in your document.
	
	For more information about setting tabs, click the Office Assistant, type "tab,"
	click Search, and then click the topic you want to review.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	To place tab characters in your document, click at the place where you want to
	insert the tab character and press TAB. The insertion point will move to the
	first tab stop.
	
	For additional information about bullets, please see the following articles in
	the Microsoft Knowledge Base:
	
	  Q165301 WD97: Auto Numbering Changes by One After You Press ENTER
	
	  Q159943 WD97: General Information About Bullets and Numbering
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
