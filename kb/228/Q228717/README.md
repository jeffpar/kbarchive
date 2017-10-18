---
layout: page
title: "Q228717: Document Footers Do Not Work with ASP Pages"
permalink: kb/228/Q228717/
---

## Q228717: Document Footers Do Not Work with ASP Pages

	Article: Q228717
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Document footers do not work with ASP files.
	
	CAUSE
	=====
	
	This occurs because ASP files (and other ISAPI applications) feed their
	responses to the client directly and have control of keeping the connection open
	or closing it.
	
	Because IIS cannot determine when ASP (or ISAPI applications for that matter) has
	completed its request, it cannot determine when to send the footer, or even if
	it has a connection to send it on.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, use .htm or .html files instead of ASP files, or add
	server-side include (SSI) directives to the ASP files to specify the footer
	file.
	
	MORE INFORMATION
	================
	
	For information on using SSI tags, see the "Using Server-Side Include
	Directives" topic in the product documentation.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: on-line online help active server pages akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
