---
layout: page
title: "Q183564: Start Parameter of Find Method Produces Error Message"
permalink: kb/183/Q183564/
---

## Q183564: Start Parameter of Find Method Produces Error Message

	Article: Q183564
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
	
	The Recordset.find method has a parameter Start, which allows the user to
	specify a bookmark where the find should begin. When the cursor is positioned at
	a point near the last record, an error message that the cursor is not positioned
	at an active record is generated.
	
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
	
