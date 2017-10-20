---
layout: page
title: "Q173784: WD97: Changing the Bullet Type in HTML Creates a Second Bullet"
permalink: /kb/173/Q173784/
---

## Q173784: WD97: Changing the Bullet Type in HTML Creates a Second Bullet

{% raw %}

	Article: Q173784
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): winword word97 kbnumbering kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to change the bullet type in a Web page, Microsoft Word 97 adds
	a second bullet instead of changing the first bullet.
	
	CAUSE
	=====
	
	In HTML documents, bullets are actually graphic images; therefore, every time
	you select another bullet, Word adds another graphic. This lets you add as many
	bullets per line as you want.
	
	WORKAROUND
	==========
	
	To work around this behavior, you must first delete the original bullet, and
	then add the new bullet. To do this, follow these steps:
	
	1. Click to select the bullet, and press DELETE.
	
	2. On the Format menu, click Bullets and Numbering, and then click the Bulleted
	  tab.
	
	3. Click to select a bullet type and click OK.
	
	MORE INFORMATION
	================
	
	
	For additional information about problems with bullets in HTML documents, please
	see the following articles in the Microsoft Knowledge Base:
	
	  Q172764 WD97: Changes to List Number Styles May be Lost
	
	  Q162955 WD97: Alignment or Bulleted or Numbered List Lost in HTML
	
	  Q164011 WD97: Default Bullet Format Lost After Reopening HTML File
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : winword word97 kbnumbering kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
