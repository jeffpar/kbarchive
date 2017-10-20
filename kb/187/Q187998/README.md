---
layout: page
title: "Q187998: WD97: Invalid Page Fault in MSO97.DLL Inserting AutoText"
permalink: /kb/187/Q187998/
---

## Q187998: WD97: Invalid Page Fault in MSO97.DLL Inserting AutoText

{% raw %}

	Article: Q187998
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 kbautotext word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click AutoText (on either the AutoText toolbar or on the Insert menu)
	after you have entered an AutoText entry into your document by double-clicking
	the entry, you will receive the following error message:
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	When you click Details (on Microsoft Windows Millennium Edition, press ALT+D),
	you receive the following message:
	
	  WINWORD caused an invalid page fault in MSO97.DLL at address.
	
	NOTE: The actual memory address may vary. where address is the memory address
	where the error occurred.
	
	When you click Close, Word will be closed and your Work will not be saved.
	
	NOTE: You may have to enter several AutoText entries by double-clicking them
	before you get the error message.
	
	CAUSE
	=====
	
	This problem occurs if you are running Microsoft Word 97 on Windows 98.
	
	RESOLUTION
	==========
	
	To correct this problem, obtain Microsoft Word 97 Service Release 2 (SR-2).
	
	WORKAROUND
	==========
	
	To temporarily work around this problem, click Insert to insert the AutoText
	entry into your document. To do this, follow these steps:
	
	1. On the Insert menu, point to AutoText, and click AutoText.
	
	2. Select the AutoText entry that you want.
	
	3. Click Insert.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This occurs on Windows 98 using either
	Microsoft Word 97 for Windows or Microsoft Word 97 for Windows, Service Release
	1 (SR-1). It does not occur on Microsoft Windows NT.
	
	This problem was corrected in Microsoft Office 97 Service Release 2 (SR-2). For
	additional information about SR-2, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	MORE INFORMATION
	================
	
	For additional information about AutoText, please see the following articles in
	the Microsoft Knowledge Base:
	
	  Q157843 WD97: Adding AutoText to the AutoText Menu
	
	  Q159941 WD97: General Information about "Auto" Features in Word 97
	
	
	Additional query words: auto text automatic glossary IPF
	
	======================================================================
	Keywords          : kbdta word8 kbautotext word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
