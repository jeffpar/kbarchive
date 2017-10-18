---
layout: page
title: "Q173223: WD97: Linked Picture Size Lost When Saving as Rich Text Format"
permalink: kb/173/Q173223/
---

## Q173223: WD97: Linked Picture Size Lost When Saving as Rich Text Format

	Article: Q173223
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta kbconversion winword word97
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you open a saved document, an inserted picture may revert back to its
	original size and not retain the size you specified.
	
	This behavior occurs if all of the following conditions are true when you insert
	your picture:
	
	- You clicked to select the Link to file check box.
	
	  -and-
	
	- You cleared the Save with document and Float over text check boxes.
	
	  -and-
	
	- You saved your document as one of the following:
	
	   - RTF (Rich Text Format)
	
	  -or-
	
	   - Word 6.0/95 (*.doc)--binary
	
	CAUSE
	=====
	
	This behavior is by design. When you link to a picture and clear both the Save
	with document and Float over text check boxes, Word will not retain any picture
	information in your document, including picture size.
	
	
	WORKAROUND
	==========
	
	To retain the picture size you want in Word, use either of the following
	methods.
	
	Method 1: Use "Save with Document" or "Float over Text"
	-------------------------------------------------------
	
	When you insert your linked picture or graphic, click to select either the Save
	with document check box or the Float over text check box.
	
	NOTE: Any changes you make to the size of the picture will now be retained when
	you save your document as RTF.
	
	Method 2: Link to a Resized Picture
	-----------------------------------
	
	1. In a graphics editor, open and save a copy of your picture.
	
	2. Resize the copy of your picture to the size you want and then save your
	  changes.
	
	3. Insert the resized copy of your picture into Word.
	
	NOTE: If you make any changes to the size of your copied picture in Word and save
	as RTF, you may again see the problem as described in the "Symptoms" section of
	this article.
	
	MORE INFORMATION
	================
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q161978 WD97: RTF Format Given to File Saved in Word 6.0/95
	
	  Q162602 WD97: Questions About Saving in the Word 6.0/95 File Format
	
	  Q141926 WD: How to Place Text over a Graphic in Microsoft Word
	
	  Q173501 WD97: Linked Picture Missing When Word 6.0/95 Document Reopened
	
	Additional query words: 8.0 8.00 kbgraphic convert
	
	======================================================================
	Keywords          : kbdta kbconversion winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
