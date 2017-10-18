---
layout: page
title: "Q183554: Incorrect Error Message When Data Source Is Missing"
permalink: kb/183/Q183554/
---

## Q183554: Incorrect Error Message When Data Source Is Missing

	Article: Q183554
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
	
	When you provide a connect string that contains a data source name for which
	there is no actual data source, the resulting error message indicates an SNA
	Server LU alias name is incorrect, for example:
	
	  Microsoft SNA OLE DB Provider (ODB)
	  -2147467259 (0x80004005)
	  Invalid partner LU alias.
	
	WORKAROUND
	==========
	
	To work around this problem, either correct the data source name as used in the
	connect string, or provide a correct data source with the name used in the
	connect string.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft OLE DB Provider for
	AS/400 and VSAM version 1.00, included with SNA Server version 4.0.
	
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
	
