---
layout: page
title: "Q168560: WD97: Invalid Page Fault When You Edit a Picture"
permalink: /kb/168/Q168560/
---

## Q168560: WD97: Invalid Page Fault When You Edit a Picture

	Article: Q168560
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbgraphic kbusage kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to edit a picture, Microsoft Word may display either of the
	following error messages.
	
	In Windows 95
	-------------
	
	  This program has performed an illegal operation and will be shut down.
	
	  If the problem persists, contact the program vendor.
	
	When you click Details, Word displays the following message:
	
	  WINWORD caused an invalid page fault in module WINWORD.EXE at 0137:301e2cee.
	
	In Windows NT 4.0
	-----------------
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  Winword.exe
	
	  Exception: access violation (0xc0000005), Address: 0X301e2cee
	
	CAUSE
	=====
	
	This problem may occur when you edit a picture in either of the following
	locations:
	
	- In the header or footer of a template.
	
	  -or-
	
	- In the body of a new document, when this document is based on a template that
	  contains text or pictures in its header or footer.
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 Service Release 1 (SR-1).
	
	To work around this problem, use one of the following methods.
	
	Method 1: Add Text or Picture to Header or Footer of Each New Document
	----------------------------------------------------------------------
	
	Do not add text or pictures to the header or footer of a template. Instead add
	the text or picture to the header or footer of each of your new documents.
	
	Method 2: Edit the Picture in a Different Document
	--------------------------------------------------
	
	Edit the picture in the body of a document based on a template with an empty
	header or footer. Then, copy and paste the edited picture into the desired
	document or template.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	Additional query words: SR1 release1 8.0 8.00 ipf normal.dot global
	
	======================================================================
	Keywords          : kberrmsg kbgraphic kbusage kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
