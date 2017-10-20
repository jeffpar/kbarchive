---
layout: page
title: "Q165770: WD97: Double Strikethrough Lost When File Opened in Word 6.0/95"
permalink: /kb/165/Q165770/
---

## Q165770: WD97: Double Strikethrough Lost When File Opened in Word 6.0/95

{% raw %}

	Article: Q165770
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have text formatted with double strikethrough formatting, the double
	strikethrough is lost when:
	
	- You save from Word 97 to an earlier version of Word.
	
	  -or-
	
	- You open a Word 97 document in an earlier version of Word.
	
	NOTE: To open a Word 97 document in an earlier version of Word, you must have the
	Word 97 converter installed. The Word 97 converter is available for Word 6.0 and
	Word 95 (7.0) only.
	
	WORKAROUND
	==========
	
	In Word 97, open your document containing the text with double strikethrough and
	use one of the following methods.
	
	Method 1: Use the Replace Feature
	---------------------------------
	
	1. On the Edit menu, click Replace.
	
	2. Click More.
	
	3. On the Replace tab, click the Find What box. Click Format, and then click
	  Font. Click to select the Double Strikethrough check box. Click OK.
	
	  NOTE: The check mark should be black and not the gray check mark you may have
	  already set. Do not type any text in the Find What box.
	
	4. Click the Replace With box. Click Format, and then click Font. Click to to
	  select the Strikethrough check box. Click OK.
	
	  NOTE: The check mark should be black and not the gray check mark you may have
	  already set. Do not type any text in the Replace With box.
	
	5. Click Replace All. You should receive a message that Word has completed its
	  search of the document and has made the replacements. Press OK and then close
	  the Find And Replace dialog box.
	
	6. Save your document in Word 6.0/95 format.
	
	Method 2: Manually Change Each Instance of Strikethrough Text
	-------------------------------------------------------------
	
	1. Select the text containing the double strikethrough.
	
	2. On the Format menu, click Font.
	
	3. On the Font tab, under Effects, click to clear the Double Strikethrough check
	  box, and then click to select the Strikethrough check box.
	
	4. Click OK to close the Font dialog box.
	
	  Repeat steps 1-4 for any other text you may have in your document containing
	  double strikethrough.
	
	5. Save your document and then open it in an earlier version of Word.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q162214 How to Obtain the Word 97 Converter
	
	Additional query words: conversion convert save saveas
	
	======================================================================
	Keywords          : kbusage winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
