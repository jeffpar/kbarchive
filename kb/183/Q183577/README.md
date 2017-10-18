---
layout: page
title: "Q183577: Access Violation in Snaoledb.dll File"
permalink: kb/183/Q183577/
---

## Q183577: Access Violation in Snaoledb.dll File

	Article: Q183577
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
	
	When you try to access certain files on an AS/400, an Access Violation dialog
	box appears.
	
	This problem occurs when a Host Column Description (HCD) -- or column binding --
	is set to convert a Host Char field to a DBTYPE_I2. The function pointer for
	this type of conversion was never initialized but was called nonetheless,
	causing an access violation.
	
	CAUSE
	=====
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft OLE DB Provider for
	AS/400 and VSAM version 1.0, included with Microsoft SNA Server version 4.0.
	
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
	
