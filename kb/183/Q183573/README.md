---
layout: page
title: "Q183573: Report.ASP Fails with SNA 4.0 OLE DB Off-line Demo Script"
permalink: kb/183/Q183573/
---

## Q183573: Report.ASP Fails with SNA 4.0 OLE DB Off-line Demo Script

	Article: Q183573
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB Provider for AS/400 and VSAM, version 1.0, used with:
	   - Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Report.ASP OLE/DB sample included with SNA Server 4.0 does not work with the
	OLE/DB off-line demo script.
	
	CAUSE
	=====
	
	There is a formatting problem with the data source name.
	
	WORKAROUND
	==========
	
	To work around this problem, make the following change: add a space in the word
	DATASOURCE, making it DATA SOURCE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft OLE DB Provider for
	AS/400 and VSAM version 1.00, included with Microsoft SNA Server version 4.0.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbOLEDBSearch kbOLEDBProvSearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
