---
layout: page
title: "Q170268: WD97: Invalid Page Fault Pasting Object from PowerPoint 97"
permalink: /kb/170/Q170268/
---

## Q170268: WD97: Invalid Page Fault Pasting Object from PowerPoint 97

	Article: Q170268
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbusage winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you select an object in Microsoft PowerPoint 97, copy the object, and then
	paste the object into Microsoft Word 97, you may receive the following error
	message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	Clicking the Details button shows either of the following:
	
	  WINWORD caused an invalid page fault in module WINWORD.EXE.
	
	  -or-
	
	  WINWORD caused an invalid page fault in module MSO97.DLL.
	
	This problem only occurs under certain conditions. It is most likely to happen
	when you are pasting the object into an application that is not yet fully
	initialized after starting.
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 Service Release 1 (SR- 1).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	REFERENCES
	==========
	
	For more information about inserting objects into Microsoft Word documents,
	click the Office Assistant, type "embedding objects," click Search, and then
	click one of the topics.
	
	NOTE: If the Assistant is hidden, click the Office Assistant button on the
	Standard toolbar. If Word Help is not installed on your computer, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	Additional query words: SR1 release1 8.0 8.00
	
	======================================================================
	Keywords          : kbinterop kbusage winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
