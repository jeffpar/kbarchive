---
layout: page
title: "Q170641: WD97: ODMA: DMS Does Not Track Changes to Template"
permalink: /kb/170/Q170641/
---

## Q170641: WD97: ODMA: DMS Does Not Track Changes to Template

	Article: Q170641
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kb3rdparty word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you save changes to a template that is stored in a Document Management
	System (DMS) library, the DMS application is unable to track the changes as
	edits to the template.
	
	CAUSE
	=====
	
	Microsoft Word 97 for Windows does not issue an ODMSaveDoc() call to the
	Document Management System when Word saves changes to a template. As a result,
	the DMS application cannot track the changes as an edit to the template.
	
	RESOLUTION
	==========
	
	To correct this problem, obtain Microsoft Word 97 Service Release 2 (SR-2).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Office 97 Service Release 2 (SR-2).
	
	For additional information about SR-2, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q151261 OFF97: How to Obtain and Install MS Office 97 SR-2
	
	
	
	Additional query words: winword.exe wwintl32.dll odmsavedoc sr2 sr-2
	
	======================================================================
	Keywords          : kb3rdparty word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
