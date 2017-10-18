---
layout: page
title: "Q183568: CCSID In The Data Source Does Not Override Driver's Value"
permalink: kb/183/Q183568/
---

## Q183568: CCSID In The Data Source Does Not Override Driver's Value

	Article: Q183568
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
	
	When a CCSID is removed from the Host Column Description (HCD) with a text
	editor, tracing reveals that the column still shows as 037 even though the data
	type is binary (or another type) and the Data Source CCSID and the Driver CCSID
	are something other than 037.
	
	When the column description is removed all together, a default of 65535 is shown
	by tracing, even though the Data Source CCSID and the Driver CCSID are something
	other than 65535.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft OLE DB Provider for
	AS/400 and VSAM version 1.00 included with SNA Server version 4.0.
	
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
	
