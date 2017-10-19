---
layout: page
title: "Q168063: WD97: LineDraw and Extended Characters Mapped Incorrectly"
permalink: /kb/168/Q168063/
---

## Q168063: WD97: LineDraw and Extended Characters Mapped Incorrectly

	Article: Q168063
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbconversion word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a document goes through a specific sequence of conversions, extended
	characters and LineDraw characters may be converted to incorrect extended
	characters or square boxes.
	
	CAUSE
	=====
	
	This problem only occurs under the following specific conditions:
	
	Condition 1:
	------------
	
	1. Create a document in Microsoft Word for Macintosh version 5.x.
	
	2. Open the document in Microsoft Word 7.0 for Windows.
	
	3. Add smart quotes, em dashes, or LineDraw characters.
	
	4. Save the document in Microsoft Word 7.0 for Windows.
	
	5. Open the document in Microsoft Word 97 for Windows.
	
	The characters you typed in step 3, will be incorrectly mapped to other extended
	characters or will become square boxes.
	
	Condition 2:
	------------
	
	1. Create a document in Microsoft Word for Windows 6.0 or 7.0 configured to use
	  an international code page.
	
	2. Open the document in Microsoft Word 7.0 for Windows configured to use a U.S.
	  code page.
	
	3. Add smart quotes, em dashes, or LineDraw characters.
	
	4. Save the document in Microsoft Word 7.0 for Windows.
	
	5. Open the document in Microsoft Word 97 for Windows configured to use a U.S.
	  code page.
	
	The characters you typed in step 3, will be incorrectly mapped to other extended
	characters or will become square boxes.
	
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 Service Release 1 (SR- 1).
	
	To work around this problem, use one of the following methods.
	
	Method 1: Search and Replace
	----------------------------
	
	Use the search and replace feature to search for the incorrect characters and
	replace them with the correct characters by following these steps:
	
	1. Select one of the incorrect characters.
	
	2. On the Edit menu click Copy.
	
	3. On the Edit menu click Replace.
	
	4. Position the insertion point in the Find What box.
	
	5. Press CTRL + V to paste the character into the box.
	
	  It may appear as a square box.
	
	6. In the Replace With box, type the correct character.
	
	7. Click Replace All to replace all instances of the incorrect characters.
	
	8. Repeat these steps for all of the incorrect characters in the document.
	
	Method 2: Save as RTF in the Earlier Version of Word
	----------------------------------------------------
	
	After you type the smart quotes, em dashes, or LineDraw characters, save the
	document in Rich Text Format (.RTF) by following these steps:
	
	1. On the File menu, click Save As.
	
	2. Change the Save As Type to Rich Text Format (*.RTF).
	
	3. Give the document a new name with an .rtf extension.
	
	4. Save and close the document.
	
	5. Open the document in Microsoft Word 97 for Windows.
	
	  The characters should display and print correctly in Microsoft Word 97.
	
	6. Save the document in Word format. On the File menu, click Save As.
	
	7. In the Save As Type box, click "Word Document (*.doc)."
	
	8. Give the document a new name with a .doc extension.
	
	9. Save and close the document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	
	REFERENCES
	==========
	
	For more information about conversion of the LineDraw font, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q163059 WD97: Some Fonts Are Not Available in Word
	
	For more information about code pages, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q163813 WD97: Boxes in Central European, Russian, or Greek Document
	
	  Q159471 WD97: How to Install the Far East Support Files
	
	  Q159418 WD97: Some Printers Won't Print Unicode Characters
	
	  Q163393 "Cant Save File" After Changing Regional/Keyboard Setting
	
	  Q150620 Error Message Changing the Default Language
	
	  Q134599 Cannot Access Shared Folder with Extended Characters in Name
	
	  Q136510 Unexpected Behavior with ALT+<num> Key Combinations in Notepad
	
	  Q131702 Cannot Delete Files or Folders with Extended Characters
	
	For more information about "foreign language support," click the Office
	Assistant, type " foreign language," click Search, and then click "What's new in
	multilingual support?"
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Microsoft Word Help is not installed on your computer,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: SR1 release1 codepage 8.0 8.00
	
	======================================================================
	Keywords          : kbconversion word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
