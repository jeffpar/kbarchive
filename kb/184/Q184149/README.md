---
layout: page
title: "Q184149: WD97: Word Creates Hyperlink When @ Is Inside Quotation Marks"
permalink: /kb/184/Q184149/
---

## Q184149: WD97: Word Creates Hyperlink When @ Is Inside Quotation Marks

{% raw %}

	Article: Q184149
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbconversion WordCon kbhtml word97 kbconvert
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A hyperlink is created in Word when text enclosed in quotation marks contains
	the at sign (@), and you type a character after the closing quotation mark.
	
	CAUSE
	=====
	
	The AutoCorrect feature is interpreting this as an irregular URL (Universal
	Resource Locator) and removes the quotation marks and creates a hyperlink using
	the text inside the quotation marks.
	
	WORKAROUND
	==========
	
	Immediately after the hyperlink is created, you can undo it by pressing the
	BACKSPACE key, by pressing CONTROL+Z, or by clicking Undo on the Edit menu. Any
	of these actions will remove the hyperlink and leave the text in place.
	
	To disable the AutoCorrect feature, follow these steps:
	
	1. On the Tools menu, click AutoCorrect.
	
	2. On the "AutoFormat as you type" tab, under "Replace as you type," click to
	  clear the "Internet and network paths with hyperlinks" check box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	This behavior allows you to automatically create hyperlinks that contain spaces
	and some other non-standard characters or non-standard formatting, such as two
	'at' signs (@), by enclosing them in quotation marks.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta kbconversion WordCon kbhtml word97 kbconvert 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
