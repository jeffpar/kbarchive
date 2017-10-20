---
layout: page
title: "Q173670: WD97: How to Recover a Saved Field Value"
permalink: /kb/173/Q173670/
---

## Q173670: WD97: How to Recover a Saved Field Value

{% raw %}

	Article: Q173670
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to recover the last saved value in a field that
	Microsoft Word 97 has automatically updated when it opened a document.
	
	MORE INFORMATION
	================
	
	When Word 97 opens a document containing fields, Word automatically updates some
	fields such as Date, Fillin, and so forth. These field updates cannot be
	reversed because they are not shown in the list of actions that you can undo.
	
	However, if you have not yet saved the document after opening it, you can recover
	the last values saved for the fields. To do this, follow these steps:
	
	NOTE: Do not close or save the original file.
	
	1. Open a new blank document by clicking the New button on the Standard toolbar.
	
	2. On the Insert menu, click File.
	
	3. In the Insert File dialog box, select the icon of the original file, and
	  click OK.
	
	4. Word inserts the fields in the new document with the last saved value
	  displayed.
	
	5. Click to select the field and then press CTRL+F11 to lock the field.
	
	6. Copy and paste the locked field into the original document replacing the
	  original field. To do this, follow these steps:
	
	  a. Click to select the locked field.
	
	  b. Copy the field to the Clipboard by clicking Copy on the Edit menu.
	
	  c. Switch to the original document by clicking it on the Window menu.
	
	  d. Click to select the original field, and then press DELETE.
	
	  e. Insert the locked field by clicking Paste on the Edit menu.
	
	NOTE: The field no longer updates until you unlock it. To do this, select the
	field and then press CTRL+SHIFT+F11.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q164547 WD97: Fillin Field Prompts Twice
	
	  Q168100 WD97: Fields Inserted in an Autotext Entry are Updated Automatically
	
	Additional query words: 8.0 8.00
	
	======================================================================
	Keywords          : kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
