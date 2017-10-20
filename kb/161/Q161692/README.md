---
layout: page
title: "Q161692: WD97: Problems With Float Over Text Objects"
permalink: /kb/161/Q161692/
---

## Q161692: WD97: Problems With Float Over Text Objects

{% raw %}

	Article: Q161692
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbgraphic kbole kbualink97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to break, display, or edit a linked object, you receive one or more
	of the following symptoms:
	
	- ALT+F9 or SHIFT+F9 does not display the link field code.
	
	- CTRL+SHIFT+F9 does not break the link of the selected linked object.
	
	- The Links command is not available (dimmed) on the Edit menu.
	
	CAUSE
	=====
	
	The object was inserted with the Float Over Text property. It is not an inline
	object.
	
	WORKAROUND
	==========
	
	To work around this problem, convert the Float Over Text object to an inline
	object using the following steps:
	
	1. With the right mouse button, click the object.
	
	2. Click Format Picture.
	
	3. Click the Position tab.
	
	4. Click to clear the Float Over Text check box, and then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q157465 Word 97: Can't See Field Codes for Some Objects
	
	  Q155802 Word Doesn't Find "Float Over Text" Objects
	
	Additional query words: 8.0 word8 word97
	
	======================================================================
	Keywords          : kbgraphic kbole kbualink97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	

{% endraw %}
