---
layout: page
title: "Q182666: Inconsistent Length of String When Type Changed to String"
permalink: /kb/182/Q182666/
---

## Q182666: Inconsistent Length of String When Type Changed to String

	Article: Q182666
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
	
	In Component Builder (CB), when a method's return value or a parameter is
	changed from a non-string type to a string, the default size of the string is
	inconsistent.
	
	To demonstrate this problem, perform the following steps:
	
	1. Start Component Builder.
	
	2. From the File menu, select New.
	
	3. In the New Component Library dialog box, click OK.
	
	4. Insert two methods with return values of Integer.
	
	5. Right-click Method1 and bring up the Properties sheet.
	
	6. Click the Automation Definition tab and change the Return Type to String.
	
	7. Click OK.
	
	8. Right-click Method2 and bring up the Properties sheet.
	
	9. Click the Automation Definition tab and change the Return Type to String.
	
	10. Switch to the COBOL Definition tab.
	
	11. Click OK.
	
	Results:
	
	- Method1 now has a return type of String with a size of 80 bytes.
	
	- Method2 now has a return type of String with a size of 4 bytes.
	
	WORKAROUND
	==========
	
	Manually assure the size of the string is correct in every case.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft COM Transaction
	Integrator for CICS and IMS version 1.0.
	
	
	A supported fix is now available for SNA Server version 4.0, but has not been
	fully regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
