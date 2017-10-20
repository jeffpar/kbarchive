---
layout: page
title: "Q197153: WD97: Reveal Formatting Does Not Work Inside a Text Box"
permalink: /kb/197/Q197153/
---

## Q197153: WD97: Reveal Formatting Does Not Work Inside a Text Box

{% raw %}

	Article: Q197153
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Using the Context Sensitive Help (or "What's This?") button to reveal the
	formatting of text does not reveal the formatting of text inside a text box.
	
	CAUSE
	=====
	
	Text boxes do not reside in the text layer; instead, they reside in one of the
	drawing layers above or below the text layer. By design, Microsoft Word does not
	reveal formats in the drawing layers.
	
	
	WORKAROUND
	==========
	
	To work around this behavior and view the format settings of text in a text box,
	follow these steps:
	
	1. Select the text in the text box.
	
	2. On the Edit menu, click Copy.
	
	3. On the Standard toolbar, click the New button.
	
	4. On the Edit menu, click Paste.
	
	5. On the Help menu, click What's This.
	
	6. Click the text to view the format settings.
	
	7. Close the document without saving changes.
	
	MORE INFORMATION
	================
	
	In Microsoft Word 97 for Windows, the Help button for revealing formatting is
	not readily available on the toolbars. To place this button on a toolbar, follow
	these steps:
	
	1. On the Tools menu, click Customize, and then click the Commands tab.
	
	2. Under Categories, click Window And Help.
	
	3. Under Commands, drag the "What's This?" command to a toolbar.
	
	4. Click Close.
	
	Additional query words: Reveal format formatting style codes show 8.0 8.00
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
