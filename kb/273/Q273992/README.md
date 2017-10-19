---
layout: page
title: "Q273992: Index Server Does Not Filter Documents with Large Property Sets"
permalink: /kb/273/Q273992/
---

## Q273992: Index Server Does Not Filter Documents with Large Property Sets

	Article: Q273992
	Product(s): Internet Information Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Index Server, which is included in the Microsoft Windows NT 4.0 Option
	Pack and with Microsoft Windows 2000, indexes but does not filter documents that
	contain property sets that are over 256 kilobytes in size. Index Server does not
	report an error in this case.
	
	CAUSE
	=====
	
	This problem occurs because of a limitation in OLE32 in Windows NT and Windows
	2000. The OLE32 property set size is hard coded to 256 KB. Office 2000 products,
	and possibly other products, support property sets greater than 256 KB.
	
	WORKAROUND
	==========
	
	Include fewer hyperlinks in the document or break the document into multiple
	documents.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Index Server version 2.0.
	
	MORE INFORMATION
	================
	
	This problem was confirmed with Microsoft Word 2000, which stores all of the
	out-bound hyperlinks as a big blob in the document property set. This way, if
	the Word document is stored in a FrontPage Web, and links are changed, then
	FrontPage can fix the links easily by updating the property set.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the DocFile Viewer file, dfview.exe, that is included in Microsoft
	  Visual Studio 6.0, and then open the suspect file.
	
	2. Expand the tree and open the IDocumentSummaryInformation branch. Note that
	  the size is reported in hex in the title bar.
	
	3. Convert the size in the title bar to decimal to see if it is larger than 256
	  KB.
	
	
	Additional query words: dfview
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
