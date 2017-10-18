---
layout: page
title: "Q167149: WD97: Invalid Page Fault on NT 4.0 After Opening More Than 2000"
permalink: kb/167/Q167149/
---

## Q167149: WD97: Invalid Page Fault on NT 4.0 After Opening More Than 2000

	Article: Q167149
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kberrmsg kbusage word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows, used with:
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open and close documents without quitting Word or shutting down your
	computer, you may receive the following error when the total number of documents
	opened and closed reaches than approximately 2000 documents:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click Details, you will receive the following error message:
	
	  WINWORD caused an invalid page fault in module WINWORD.exe at
	  <address>.
	
	WORKAROUND
	==========
	
	To prevent this error from occurring, close Word every so often.
	
	If you are using the Batch Conversion macro that ships with Word 97, it is
	recommended that you convert your documents in batches of 500 files or fewer,
	and close and restart Word prior to continuing the conversion process.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: ipf gpf
	
	======================================================================
	Keywords          : kberrmsg kbusage word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	
	=============================================================================
	
