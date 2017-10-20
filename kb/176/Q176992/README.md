---
layout: page
title: "Q176992: WD97: How to Find the ANSI Value of Characters"
permalink: /kb/176/Q176992/
---

## Q176992: WD97: How to Find the ANSI Value of Characters

{% raw %}

	Article: Q176992
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To troubleshoot a problem or search for an extended character, you may need to
	find the American National Standards Institute (ANSI) value of a string of text
	in Microsoft Word.
	
	MORE INFORMATION
	================
	
	Word 97 includes a macro named AnsiValue which, when run, provides the ANSI
	value for the selected character. To run this macro, follow these steps:
	
	1. On the File menu, click Open, and then select the following folder:
	
	  C:\Program Files\Microsoft Office\Office\Macros
	
	2. In the Files Of Type list, click "Document Templates (*.dot)."
	
	3. Select Macros8.dot and click OK.
	
	4. In your document, type the character for which you want to find the ANSI
	  value, and then select that character.
	
	5. On the Tools menu, point to Macro, and then click Macros.
	
	6. In the Macro list, click ANSIValue and then click Run.
	
	For more information about macros supplied with Word, click the Office Assistant,
	type "Supplied Macros," click Search, and then click to view "Supplied macros."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Help is not installed on your computer, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	For information about how to do this in earlier versions of Word, please see the
	following article(s) in the Microsoft Knowledge Base:
	
	  Q74894 WD: Macros to Find the ANSI Value of Characters
	
	REFERENCES
	==========
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words:
	
	======================================================================
	Keywords          : word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
