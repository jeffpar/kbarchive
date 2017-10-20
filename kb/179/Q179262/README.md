---
layout: page
title: "Q179262: FP: JavaScript Moves from &lt;Head&gt; to &lt;Body&gt; Element"
permalink: /kb/179/Q179262/
---

## Q179262: FP: JavaScript Moves from &lt;Head&gt; to &lt;Body&gt; Element

{% raw %}

	Article: Q179262
	Product(s): Word Front Page
	Version(s): WINDOWS:1.1,97
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert JavaScript between the <HEAD> and </HEAD> tags in
	the HyperText Markup Language (HTML) source, FrontPage moves the script between
	the <BODY> and </BODY> tags.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft FrontPage
	98 for Windows.
	
	
	WORKAROUND
	==========
	
	To preserve the script within the <HEAD> and </HEAD> tags, edit your
	file in a text editor, such as Notepad and add the script.
	
	NOTE: If you reopen the page in FrontPage Editor, the script will be repositioned
	between the <BODY> and </BODY> tags and you will need repeat these
	steps.
	
	1. In FrontPage Explorer, right-click the file that contains the script and then
	  click Open With on the menu that appears.
	
	2. Click Text Editor (notepad.exe) and then click OK.
	
	3. Place the script between the <HEAD> and </HEAD> tags.
	
	4. On the File menu, click Save.
	
	5. On the File menu, click Close.
	
	Additional query words: fpeditor jscript java
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage110
	Version           : WINDOWS:1.1,97
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
