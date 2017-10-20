---
layout: page
title: "Q174513: WD97: Nonbreaking Space Missing Using French Language"
permalink: /kb/174/Q174513/
---

## Q174513: WD97: Nonbreaking Space Missing Using French Language

{% raw %}

	Article: Q174513
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Microsoft Word 97, when you use any of the French international keyboard
	settings, or set the text language of your document to French, a nonbreaking
	space may not be added automatically before the following characters:
	
	- Colon (:)
	
	- Exclamation Point (!)
	
	- Question Mark (?)
	
	- Semicolon (;)
	
	This behavior also occurs with the following French keyboard and language
	settings:
	
	- French (Belgian)
	
	- French (Canadian)
	
	- French (Luxembourg)
	
	- French (Standard)
	
	- French (Swiss)
	
	CAUSE
	=====
	
	The "Replace as you type: 'Straight quotes' with 'smart quotes'" option is
	turned off.
	
	RESOLUTION
	==========
	
	To resolve this problem, turn on the "'Straight quotes' with 'smart quotes'"
	option. To do this, follow these steps:
	
	1. On the Tools menu, click AutoCorrect.
	
	2. Click the "AutoFormat as you type" tab.
	
	3. Under Replace As You Type, click to select the "'Straight quotes' with 'smart
	  quotes'" check box, and then click OK.
	
	STATUS
	======
	
	This behavior is by design. When the "'Straight quotes' with 'smart quotes'"
	option is turned off, the non-breaking space requirement for certain characters
	in the French language is also turned off.
	
	MORE INFORMATION
	================
	
	French typography requires a non-breaking space before certain characters of the
	French language. Word 97 has added functionality to provide for this
	requirement.
	
	To set the language for the text of your document, select the text that you want
	to format with a language. To apply the language, point to Language on the Tools
	menu and click Set Language.
	
	For additional information on how to enable support for multiple languages in
	Windows 95, please click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q141306 How to Enable Support for Multiple Languages in Windows 95
	
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto kbprb kbinfo
	
	=============================================================================
	

{% endraw %}
