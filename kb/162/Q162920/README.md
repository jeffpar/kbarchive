---
layout: page
title: "Q162920: Cannot Change the Default Sending Font in Microsoft Exchange"
permalink: /kb/162/Q162920/
---

## Q162920: Cannot Change the Default Sending Font in Microsoft Exchange

{% raw %}

	Article: Q162920
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 4.00 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you change the default font in Microsoft Exchange or Windows Messaging,
	the changes may not seem to take effect.
	
	CAUSE
	=====
	
	WordMail is enabled as the e-mail editor and is supplying the font.
	
	RESOLUTION
	==========
	
	To determine if WordMail is being used as the e-mail editor, click WordMail on
	the Compose menu. If the Use Word As Your Email Editor check box is selected,
	WordMail is controlling the default font.
	
	To change the default WordMail font, Follow these steps:
	
	1. On the Tools menu, click WordMail Options, and note the default template
	  listed.
	
	2. Open that template in Microsoft Word. Email.dot is the default template name.
	
	3. On the Format menu, click Font.
	
	4. Select the font, size, and color you want, and then click Default.
	
	This makes the font you selected the default for any new mail messages whenever
	the template is used.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWin95search kbZNotKeyword3
	Version           : 4.00 95
	
	=============================================================================
	

{% endraw %}
