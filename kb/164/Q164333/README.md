---
layout: page
title: "Q164333: WD97: Word Appears to Hang When You Search Large Address Book"
permalink: /kb/164/Q164333/
---

## Q164333: WD97: Word Appears to Hang When You Search Large Address Book

	Article: Q164333
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbdta kbconversion WordCon word97 kbconvert
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Insert Address button and you search a large address book, Word
	displays an hourglass and appears to hang.
	
	NOTE: Word is actually searching the address book, but is taking a long time to
	complete the search.
	
	CAUSE
	=====
	
	Word uses an algorithm to search the address book that is different from the one
	Microsoft Outlook uses.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain Microsoft Office 97 Service Release 2 (SR-2)
	
	To temporarily work around this problem, use Microsoft Outlook to search your
	large address book.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Word 97.
	
	This problem was corrected in Microsoft Office 97 Service Release 2 (SR-2).
	
	For additional information about SR-2, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	MORE INFORMATION
	================
	
	To search the address book from Word, follow these steps:
	
	1. On the Tools menu, click Envelopes And Labels.
	
	2. Click the Insert Address icon.
	
	3. In the "Show Names from the" box, select the address book you want to search.
	
	4. In the "Type Name or Select from List" box, type the first character of the
	  name you want to find.
	
	Word will begin to search your address book for the names that start with the
	character you typed.
	
	NOTE: If you are searching a very large address book, the search may take a long
	time to finish (a few seconds to possibly 10 minutes or more). This same problem
	will occur with any feature in Word that can use the Address Book.
	
	Additional query words: 8.0 gal global address book letter wizard envelopes labels
	
	======================================================================
	Keywords          : kbinterop kbdta kbconversion WordCon word97 kbconvert 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
