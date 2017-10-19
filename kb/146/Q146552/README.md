---
layout: page
title: "Q146552: XCLN: Revision Marks in Word Document are not Updated in PFs"
permalink: /kb/146/Q146552/
---

## Q146552: XCLN: Revision Marks in Word Document are not Updated in PFs

	Article: Q146552
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you make a revision to a Microsoft Word document in a Microsoft Exchange
	Public Folder (PF), the revision number will not be incremented in the PF.
	
	NOTE: This only occurs with the Microsoft Exchange clients for Windows 95 and
	Windows NT running Word 95 or Word 97. When using Word 97, the properties of the
	open document are reflected properly, but the Microsoft Exchange Public Folder
	document is still not updated properly.
	
	The Microsoft Exchange client for Windows 3.x, running Word 6.x, works fine.
	
	
	MORE INFORMATION
	================
	
	If a Microsoft Word document is created and placed in a PF, any revisions made
	to the document are not noted in the PF. If a document is opened in Microsoft
	Word, the Properties will not show any revisions because it is not the same copy
	of the document that was in the PF previously. If Update from the File menu is
	selected in Word, the Properties tab in Word will reflect the same number of
	revisions as in the PF. This will occur even if the revision number was correct
	in Word.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of Microsoft
	Exchange. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
