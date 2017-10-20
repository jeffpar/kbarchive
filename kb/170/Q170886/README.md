---
layout: page
title: "Q170886: WD97: Smart Quotes Incorrect When Language Is Set to French"
permalink: /kb/170/Q170886/
---

## Q170886: WD97: Smart Quotes Incorrect When Language Is Set to French

{% raw %}

	Article: Q170886
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbproof winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set the text language to French (Standard) in Microsoft Word 97 and
	type a sentence with a single quotation mark enclosed in double quotation marks,
	the single quotation mark will incorrectly be formatted as a double quotation
	mark.
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 Service Release 1 (SR- 1).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	MORE INFORMATION
	================
	
	In French, quotations are set off with chevrons (which resemble greater than and
	less than symbols). For example, this sentence in English
	
	  "This is a sentence enclosed in quotation marks."
	
	is written like this in French:
	
	  << This is a sentence enclosed in quotation marks. >>
	
	Microsoft Word uses the AutoFormat feature to convert double quotation marks (")
	to the French quotation marks (<< or >>) when the language property
	for the text is set to French (on the Tools menu, click Language).
	
	If you want to have a single quotation mark enclosed within standard quotation
	marks, the single quotation mark is changed to a double quotation mark. This
	behavior is incorrect. The single quotation mark should remain as is. For
	example, this English statement
	
	  "l'arbre" et l'avion
	
	is changed to this if French is selected as the language:
	
	  << l"arbre >> et l'avion
	
	The correct behavior would produce the following results:
	
	  << l'arbre >> et l'avion
	
	To format text for French, follow these steps:
	
	1. Select the text you want to format for French.
	
	2. On the Tools menu, point to Language, and click Set Language.
	
	3. Change the language to French (Standard) and then click OK.
	
	REFERENCES
	==========
	
	For more information about international features in Microsoft Word, please see
	the following articles in the Microsoft Knowledge Base:
	
	  Q159341 WD97: International Fonts Don't Appear in Font List
	
	  Q163813 WD97: International Characters Incorrectly Mapped
	
	  Q168852 WD97: Nested Calculations Updated Incorrectly (International)
	
	  Q169530 WD97: Date/Time Field Doesn't Update to International Version
	
	For more information about international features, click the Office Assistant,
	type "international features," click Search, and then click "International
	features in Word."
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: SR1 release1 8.0 8.00
	
	======================================================================
	Keywords          : kbinterop kbproof winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
