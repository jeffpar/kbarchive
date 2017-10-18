---
layout: page
title: "Q182832: Error in COBOL Export After Moving Type Library"
permalink: kb/182/Q182832/
---

## Q182832: Error in COBOL Export After Moving Type Library

	Article: Q182832
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0, used with:
	   - Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After creating and saving a component library using Component Builder (CB), the
	library is moved to a different directory while still open in CB. A subsequent
	attempt to export COBOL from the same instance of CB fails and the following
	error message appears:
	
	  Export was unable to find the component library C:\Component1.TLB.
	  Restore or re-save the component library and retry export.
	
	WORKAROUND
	==========
	
	To correctly export COBOL, do either of the following:
	
	- Close the file in CB before you move component libraries to different
	  directories.
	
	-or-
	
	- In CB, click Open on the File menu. Open the type library from its new
	  location. COBOL export will work correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft COM Transaction
	Integrator for CICS and IMS version 1.0.
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  " S E R V P A C K " (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
