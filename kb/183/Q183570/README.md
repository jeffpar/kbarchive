---
layout: page
title: "Q183570: AM/PM Handled Improperly Executing 'Find'"
permalink: /kb/183/Q183570/
---

## Q183570: AM/PM Handled Improperly Executing 'Find'

	Article: Q183570
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
	
	When you try to find specific rows in an ADO recordset with a particular
	timestamp, there is a failure to correctly differentiate between AM and PM times
	in the timestamp.
	
	For example:
	
	    RS.Find "Col1 >= "2:02:02 AM"
	
	  and
	
	    RS.Find "Col1 >= "2:02:02 PM"
	
	both return the record "2:02:02 AM."
	
	Also, it is not possible to find any field that is PM.
	
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
	
