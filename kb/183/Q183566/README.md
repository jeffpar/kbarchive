---
layout: page
title: "Q183566: Error Message: &quot;Record Not Found&quot; for Certain Dates"
permalink: kb/183/Q183566/
---

## Q183566: Error Message: &quot;Record Not Found&quot; for Certain Dates

	Article: Q183566
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
	
	When you specify a date outside the range January 1, 1970 to February 5, 2036,
	the following error message appears:
	
	  Record not found
	
	This error message is seen with files that are keyed upon DATE or TIMESTAMP and a
	Find or Filter is applied using a single operator such as "TIMESTAMP = 1/1/98
	12:34:56 PM".
	
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
	
