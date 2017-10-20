---
layout: page
title: "Q189426: Runtime Error 1225 When Return Value Is a Recordset"
permalink: /kb/189/Q189426/
---

## Q189426: Runtime Error 1225 When Return Value Is a Recordset

{% raw %}

	Article: Q189426
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, version 1.0, used with:
	   - Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This problem occurs when you are using a CICS (non-link) Remote Environment. It
	occurs under the following circumstances:
	
	1. A COMTI method is declared where the return value is an ADO recordset.
	
	2. In the Advanced properties of the method, the return value is
	
	repositioned, that is, away from the default position, which is <Return value
	is first item in declaration>. In COBOL terms, this means that the return
	value is a data item that is NOT first in the set of items in the COBOL
	declaration.
	
	When the method is invoked, runtime error 1225 is indicated:
	
	  "COM Transaction Integrator did not receive a data-complete indication from
	  the Remote Environment following the expected reply data. Contact the host
	  application programmer. If no changes were made to the host server program
	  that had been operating correctly, contact Microsoft customer support."
	
	The mainframe program sends the correct amount of data in the LU6.2 message and
	the SNA Server "End Bracket" indicator is set properly.
	
	CAUSE
	=====
	
	COMTI does not correctly handle methods in which the return value is not
	positioned first in the set of COBOL declarations. It always processes the
	return value first, regardless. Thus, the ODO parameter that the return value is
	dependent upon is not available at the time the parameter is referenced, causing
	the above test to fail.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in COM Transaction Integrator for
	CICS and IMS version 1.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
