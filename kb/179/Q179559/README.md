---
layout: page
title: "Q179559: WD97: Changing Object Wrapping Changes Order to Behind Text"
permalink: /kb/179/Q179559/
---

## Q179559: WD97: Changing Object Wrapping Changes Order to Behind Text

{% raw %}

	Article: Q179559
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a drawing object or text box, or insert a graphic as Float Over
	Text and change the text wrapping from None to Tight or Through and then back to
	None, the object is placed behind the text.
	
	CAUSE
	=====
	
	By design, when an object's wrapping is set to Tight or Through, Word
	automatically places the object behind text. When an object's wrapping is set to
	None, Word does not affect the placement in relation to the text.
	
	Because the object's placement is set to Tight or Through (behind text), and then
	back to None, the object's placement will remain behind the text.
	
	WORKAROUND
	==========
	
	To change the object placement to above the text, follow these steps:
	
	1. Select the object.
	
	2. On the Drawing toolbar, click Draw.
	
	3. Point to Order and click Bring in Front of Text.
	
	Additional query words:
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
