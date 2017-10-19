---
layout: page
title: "Q193694: Index Server Cannot Filter Older Office Documents"
permalink: /kb/193/Q193694/
---

## Q193694: Index Server Cannot Filter Older Office Documents

	Article: Q193694
	Product(s): Internet Information Server
	Version(s): winnt:1.1,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server versions 1.1, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade to Index Server 2.0 (included in the Windows NT Option Pack),
	older Office documents may not be indexed correctly. Common symptoms include
	searches not finding the document or the abstract for the document showing
	illegible text.
	
	CAUSE
	=====
	
	The Office filter (Offfilt.dll) that shipped with Index Server 2.0 is only
	capable of indexing Office 97 and Office 95 formatted documents. Index Server
	version 1.1 is able to index documents formatted by Office 95 and earlier.
	
	WORKAROUND
	==========
	
	To work around this problem, resave all documents in Office 95 or Office 97
	format.
	
	MORE INFORMATION
	================
	
	Word 97 ships with a macro wizard that allows bulk document conversion.
	Information on this utility can be found at http://www.microsoft.com/word.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ110 kbIdxServ200
	Version           : winnt:1.1,2.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
