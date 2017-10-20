---
layout: page
title: "Q196914: WD97: Some Fonts Not Listed in Find/Replace Font Dialog"
permalink: /kb/196/Q196914/
---

## Q196914: WD97: Some Fonts Not Listed in Find/Replace Font Dialog

{% raw %}

	Article: Q196914
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you search for a font in a document using the Find or Replace command, the
	font is not listed in the Font list box of the Find Font dialog box.
	
	CAUSE
	=====
	
	This problem may occur if the font is embedded in the Word document. In the Find
	Font dialog box, Word lists only those fonts that are installed in the operating
	system--fonts embedded in a Word document are not available as formatting
	options in the Find and Replace commands.
	
	Text formatted with an embedded font is listed in the font list on the Formatting
	toolbar. This information is preserved to facilitate round-trip transfer between
	different computers and platforms.
	
	RESOLUTION
	==========
	
	To search for a font that is embedded in a document but not installed in the
	operating system, type the font name into the Font list box in the Find Font
	dialog box. To do this, follow these steps:
	
	1. On the Edit menu, click Find.
	
	2. Click the More button, click the Format button, and then click Font.
	
	3. Click the Font tab.
	
	4. Type the font name in the Font box, and then click OK.
	
	Additional query words: fonts
	
	======================================================================
	Keywords          : kbualink97 winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
