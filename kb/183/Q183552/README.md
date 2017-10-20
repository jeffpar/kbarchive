---
layout: page
title: "Q183552: SNA DDM Service Terminates; Type Mismatch Errors"
permalink: /kb/183/Q183552/
---

## Q183552: SNA DDM Service Terminates; Type Mismatch Errors

{% raw %}

	Article: Q183552
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
	
	When you are accessing a mainframe file, if the LU6.2 connection is terminated
	abruptly, the SNA DDM service terminates with an unhandled exception. Bad data
	can be written to the mainframe file; also, when the OLE DB Provider reads bad
	data from the mainframe, it crashes.
	
	CAUSE
	=====
	
	The mainframe deallocates the LU6.2 conversation with CONV_FAIL_ABEND. The OLE
	DB Provider, regardless, tries to interpret as application data the LU6.2
	information returned from the mainframe. This results in an access violation.
	
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
	

{% endraw %}
