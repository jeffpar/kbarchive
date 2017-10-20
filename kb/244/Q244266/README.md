---
layout: page
title: "Q244266: WD97: Word Template Hyperlink Opens Instead of New Document"
permalink: /kb/244/Q244266/
---

## Q244266: WD97: Word Template Hyperlink Opens Instead of New Document

{% raw %}

	Article: Q244266
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 21-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click a hyperlink to a Word 97 template in a Web browser, the template
	opens in the browser, instead of Word creating a new document that is based on
	the template.
	
	WORKAROUND
	==========
	
	To work around this behavior of Microsoft Word, create a hyperlink to a shortcut
	rather than to the template. To do this, follow these steps:
	
	1. To create a shortcut to your template, right-click the template file in
	  Windows Explorer. Then click Create Shortcut on the menu that appears
	  (shortcut menu).
	
	2. Create a hyperlink to the shortcut LNK file, not the template file.
	
	  IMPORTANT NOTE: If you create the hyperlink to the shortcut by clicking
	  Hyperlink on the Insert menu, and then you click Browse to find the shortcut
	  file, the problem still occurs, because the shortcut resolves to that actual
	  template. In order for this workaround to work correctly, you must manually
	  type the path to the shortcut in the Hyperlink dialog box.
	
	After you click the shortcut to the Word template, click Open to open a new
	document based on the template. After the new document is opened in your Web
	browser, you can save it to your system.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
