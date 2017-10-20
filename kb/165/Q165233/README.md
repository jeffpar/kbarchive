---
layout: page
title: "Q165233: WD97: Word Loses Center Align When Saving to HTML"
permalink: /kb/165/Q165233/
---

## Q165233: WD97: Word Loses Center Align When Saving to HTML

{% raw %}

	Article: Q165233
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbusage kbdta word97 kbwdinternet
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save a document to HTML, Word will left-align text if both of the
	following are true:
	
	- You applied a style called Address to the text.
	
	  -and-
	
	- You applied center alignment to the text.
	
	CAUSE
	=====
	
	Word does not retain the center formatting of text that has the Address style
	applied.
	
	NOTE: Word imports the center formatting correctly when importing text surrounded
	by the <Address>...</Address> tags, but drops the center formatting
	when you save as (export to) HTML.
	
	WORKAROUND
	==========
	
	To work around this problem, use italic formatting and center the text instead
	of using the Address style. When you save the document using the HTML converter,
	Word will apply the italic <I>...</I>) tags and the center attribute
	to the paragraph tag surrounding the address text.
	
	1. Save your document as HTML.
	
	2. Select the text you want to format.
	
	3. On the Format menu, click Style.
	
	4. In the Styles list, click Normal, and then click Apply.
	
	5. With the text still selected, click Font on the Format menu.
	
	6. Under Effects, click to select the Italic check box. Click OK.
	
	7. To center the text, click the Center Align button on the Formatting Toolbar.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: 8.0 kbformat iaword
	
	======================================================================
	Keywords          : kbusage kbdta word97 kbwdinternet 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
