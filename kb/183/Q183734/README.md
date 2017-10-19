---
layout: page
title: "Q183734: How to Create Custom Abstracts for HTML Documents"
permalink: /kb/183/Q183734/
---

## Q183734: How to Create Custom Abstracts for HTML Documents

	Article: Q183734
	Product(s): Internet Information Server
	Version(s): winnt:1.0,1.1,2.0; :
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 30-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server versions 1.0, 1.1, 2.0 
	- Indexing Service 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Index Server automatically generates abstracts for documents during the indexing
	process. However, the abstracts it creates may not contain the information you
	want.
	
	MORE INFORMATION
	================
	
	For HTML documents, a META tag can be included that Index Server will use as the
	abstract for the document. The format is as follows:
	
	  <META NAME="description" CONTENT="Abstract text">
	
	Index Server uses the content string as the abstract, instead of automatically
	creating a content string based on document content.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ100 kbIdxServ110 kbIdxServ200
	Version           : winnt:1.0,1.1,2.0; :
	Issue type        : kbhowto
	
	=============================================================================
	
