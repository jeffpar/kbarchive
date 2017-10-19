---
layout: page
title: "Q183572: BUG: ADO Definedsize Values Incorrect for Certain Data Types"
permalink: /kb/183/Q183572/
---

## Q183572: BUG: ADO Definedsize Values Incorrect for Certain Data Types

	Article: Q183572
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
	
	ADO's Field.Definedsize returns incorrect values for certain data types:
	
	  data type        field.definedsize
	  adDBDate         -1
	  adDBTime         -1
	  adDBTimeStamp    -1
	  adSmallInt        5
	  adInteger        10
	  Float--single     7
	  float--double    16
	  Decimal         (variable--precision + 3)
	  Numeric         (variable--precision + 3)
	
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
	
