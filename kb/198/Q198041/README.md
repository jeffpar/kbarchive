---
layout: page
title: "Q198041: WD97: Creating All Odd- or All Even-Numbered Pages in Document"
permalink: /kb/198/Q198041/
---

## Q198041: WD97: Creating All Odd- or All Even-Numbered Pages in Document

{% raw %}

	Article: Q198041
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbdta kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	To create all odd-numbered or all even-numbered pages in a Microsoft Word
	document (for example, 1,3,5,7... or 2,4,6,8...), use a formula field ({=}) in
	conjunction with a PAGE field ({PAGE}).
	
	MORE INFORMATION
	================
	
	To create all odd-numbered pages, insert the following field in the document
	header or footer:
	
	  {={page} + {={page} - 1}}.
	
	To create all even-numbered pages, insert the following field in the document
	header or footer:
	
	  {={page} + {page}}
	
	NOTE: If you want to number each page in the same way throughout all sections,
	add page numbers before you add section breaks. However, if you've already added
	section breaks and want to add page numbers, position the insertion point in the
	first section of the document and then insert page numbers or the fields
	mentioned above.
	
	NOTE: To create the braces "{}", press CTRL+F9.
	
	For more information about formula fields, click Contents And Index on the Help
	menu, click the Index tab in Microsoft Word Help, type the following text
	
	  "field codes: =" (without the quotation marks)
	
	and then double-click the selected text to go to the "Field codes: = (Formula)
	field" topic. If you are unable to find the information you need, ask the Office
	Assistant.
	
	Additional query words: header/footer
	
	======================================================================
	Keywords          : kbualink97 kbdta kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
