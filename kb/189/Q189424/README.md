---
layout: page
title: "Q189424: BUG: No Warning, Recordset Row Count Not Equal Length-specifier"
permalink: kb/189/Q189424/
---

## Q189424: BUG: No Warning, Recordset Row Count Not Equal Length-specifier

	Article: Q189424
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
	
	No warning or error is issued when a method is invoked and the number of rows in
	an input recordset does not agree with the length-specifier (count parameter).
	
	For example, a method has two input parameters: a count parameter and a
	recordset. The purpose of the count parameter is to indicate the number of rows
	in the recordset. Although upon execution the actual number of rows in the
	recordset does not equal the value of the count parameter, no error or warning
	is issued.
	
	This usage results from importing a COBOL table or group item that contains the
	OCCURS DEPENDING ON clause. The OCCURS DEPENDING ON clause specifies another
	variable, which is the length-specifier.
	
	Using Component Builder, you can view the properties of the recordset input
	parameter and click the Recordsets tab to see that the "Occurs depending on"
	option is selected. The "Occurs depending on" option specifies the count
	parameter mentioned above as the length-specifier of the OCCURS DEPENDING ON
	clause in the imported COBOL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in COM Transaction Integrator for
	CICS and IMS version 1.00.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
