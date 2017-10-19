---
layout: page
title: "Q183565: Underlyingvalue Property Incorrect for Certain Characters"
permalink: /kb/183/Q183565/
---

## Q183565: Underlyingvalue Property Incorrect for Certain Characters

	Article: Q183565
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
	
	The ADO property Underlyingvalue is often incorrect, generally with 8-bit ASCII
	characters. For example, ASCII character #162, the "cents" symbol, appears as o
	with a forward-accent in the underlying value property.
	
	CAUSE
	=====
	
	The client codepage is set to 437 (ASCII) instead of 1252 (ANSI) and, therefore,
	does not handle special characters.
	
	Additionally, the OLE DB Provider does not accept 4-digit code-page numbers. The
	OLE DB Provider does not support conversion to the system's default ANSI code
	page.
	
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
	
