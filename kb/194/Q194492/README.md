---
layout: page
title: "Q194492: WD97: Hidden Text Appearing in File Saved as Text Only"
permalink: /kb/194/Q194492/
---

## Q194492: WD97: Hidden Text Appearing in File Saved as Text Only

	Article: Q194492
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Microsoft Word, when a document containing hidden text is saved in Text Only
	format, text formatted as hidden text becomes visible.
	
	CAUSE
	=====
	
	When you save a document in Text Only format, all character formatting is lost
	from the document. Because hidden text is a character format, it is lost along
	with the rest of the character formatting.
	
	WORKAROUND
	==========
	
	To prevent this problem from occurring, delete the hidden text from the file
	before saving the file in Text Only format. To do this, follow these steps:
	
	1. On the the Edit menu, click Replace.
	
	2. Place the pointer in the Find What Box.
	
	3. On the Format list under the Find What box, click Character (or Font).
	
	4. Under Style, click to clear the Hidden check box.
	
	5. Leave the Replace With box blank, and click Replace All.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
