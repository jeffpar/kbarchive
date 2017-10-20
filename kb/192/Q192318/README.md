---
layout: page
title: "Q192318: WD97: Use Field to Print Text in Footer Except on Last Page"
permalink: /kb/192/Q192318/
---

## Q192318: WD97: Use Field to Print Text in Footer Except on Last Page

{% raw %}

	Article: Q192318
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbfield kblayout
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to insert a field into a Microsoft Word document
	footer that prints the word "Continued" on all pages except the last page.
	
	MORE INFORMATION
	================
	
	To print the word "Continued" in a footer on all pages except the last one
	without using section break, follow these steps:
	
	1. On the View menu, click Header And Footer.
	
	2. Switch to the Footer by clicking the "Switch Between Header and Footer"
	  button on the Header and Footer toolbar.
	
	3. In the footer, press CTRL+F9 to insert field braces. Inside the braces, type
	  "if " (without the quotation marks), press CTRL+F9 for another set of field
	  braces, and type "numpages" (without the quotation marks) inside the field
	  braces.
	
	4. Press the RIGHT ARROW key twice to position the insertion point outside the
	  closing brace of the NUMPAGES field. Type ">" (without the quotation
	  marks), press CTRL+F9, and type "page" (without the quotation marks) inside
	  these field braces.
	
	5. Press the RIGHT ARROW key twice to position the cursor outside the closing
	  brace of the PAGE field. Type a space and "Continued" (with the quotation
	  marks).
	
	  The field should appear as follows:
	
	  {if {numpages}>{page} "Continued"}
	
	NOTE: This method can be used to print or display any item in the header or
	footer of a document excluding the last page. You can also use this method to
	place a different item on the last page, for example
	
	  {if {numpages}>{page} "Continued Next page." "The End of Document."}
	
	the second group of text will appear on the last page of the document.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q182430 WD97: How to Print a Field Result on the Last Page
	
	Additional query words: how to header/footer include blank
	
	======================================================================
	Keywords          : kbdta kbfield kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
