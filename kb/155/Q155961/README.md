---
layout: page
title: "Q155961: WD97: ListNum Field Not Converted Saving to Word 6.0/95"
permalink: /kb/155/Q155961/
---

## Q155961: WD97: ListNum Field Not Converted Saving to Word 6.0/95

	Article: Q155961
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbualink97 kbfield word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you convert a Word 97 for Windows document that contains ListNum fields to
	Word 6.0/95 format and open the document in Word 6.0 (Windows or Macintosh) or
	7.0 (Windows), you see the following error in place of the fields or numbers:
	
	  Error: Bookmark not Defined!
	
	CAUSE
	=====
	
	ListNum fields do not have an equivalent field in earlier versions of Word and
	are not translated during conversion. The ListNum field is retained to allow for
	round-trip conversions back to Word 97 for Windows and Word 98 Macintosh
	Edition.
	
	WORKAROUND
	==========
	
	To work around this problem and prevent the "Error! Bookmark Not Defined"
	message, lock the fields before you convert the document to Word 6.0/95 format.
	When you reopen the document in Word 97 for Windows or Word 98 Macintosh
	Edition, unlock and update the fields.
	
	Word 97 for Windows
	-------------------
	
	To lock a field, select the field and press CTRL+F11.
	
	To unlock a field, select the field and press CTRL+SHIFT+F11.
	
	Word 98 Macintosh Edition
	-------------------------
	
	To lock a field, press COMMAND+F11.
	
	To unlock a field, press COMMAND+SHIFT+F11.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbualink97 kbfield word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
