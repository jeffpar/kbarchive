---
layout: page
title: "Q162437: WD97: File Saved in RTF Has Extra Language Property"
permalink: kb/162/Q162437/
---

## Q162437: WD97: File Saved in RTF Has Extra Language Property

	Article: Q162437
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you save a document in Rich Text Format (RTF) and then reopen it, the Normal
	style will have an extra language property associated with it. To see this extra
	language property, select some text formatted with the Normal style, click Style
	on the Format menu, and look in the Description section of the Style dialog
	box.
	
	In general, the Normal style is associated with the English (United States)
	language property. However, when you save a document in RTF format and then
	re-open the document in Word 97, the Language property for the Normal style will
	be changed to (FE) English (United States) and (Other) English (United States).
	
	NOTE: This behavior is different from earlier versions of Word. Note also that
	this problem does not occur if you create a custom style with a language
	property and then save the file in RTF.
	
	CAUSE
	=====
	
	Word 97 stores multiple language tags for the Normal style. Saving a file to RTF
	exposes these settings, and they become visible when you reopen the document and
	view the language settings of the Normal style.
	
	
	MORE INFORMATION
	================
	
	For additional information about Word 97 and multilingual support, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q157478 What's new in Word 97
	
	Additional query words: 8.0 word8 word97
	
	======================================================================
	Keywords          :  
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	
