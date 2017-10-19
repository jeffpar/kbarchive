---
layout: page
title: "Q191453: BUG: Conversion from OS/390 PACKED to DECIMAL and NUMERIC Fails"
permalink: /kb/191/Q191453/
---

## Q191453: BUG: Conversion from OS/390 PACKED to DECIMAL and NUMERIC Fails

	Article: Q191453
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB Provider for AS/400 and VSAM, version 1.0, included with:
	   - Microsoft SNA Server, version 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to display an IBM OS/390 packed decimal record field as converted to
	the DECIMAL or NUMERIC automation type results in errors. The first
	manifestation, generally, is that there is no data to display, for example, in a
	Visual Basic text box.
	
	WORKAROUND
	==========
	
	Packed decimal fields can be converted to a string (DBTYPE_STR, CHAR)
	successfully.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the OLE DB Provider for AS/400
	and VSAM component of Microsoft SNA Server version 4.0 SP1.
	
	MORE INFORMATION
	================
	
	An attempt to convert an IBM OS/390 packed decimal record field to either the
	NUMERIC (DBTYPE_NUMERIC) or DECIMAL (DBTYPE_DECIMAL) automation types results in
	the following error manifestations. They are seen when running a Visual Basic
	consumer in debug mode.
	
	1. A watch is added for the ADO recordset, and the value of the numeric field is
	  set to "Errors occurred".
	
	2. When an immediate statement to view the numeric field s executed, for
	  example, "? RS.Fields(10).Value<enter>," the following message box
	  appears:
	
	  
	
	           Title Bar: Microsoft Visual Basic
	           Description: HRESULT 80040e21 (-2147217887)
	                        Errors occurred.
	
	3. An attempt to display this field/column in a text box yields either blanks or
	  nothing.
	
	4. Issuing an ADO GetRows results in an error being returned from OLE DB
	  Provider with the same HRESULT, -2147217887 (0x80040e21) and the description
	  "Automation error."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbOLEDBSearch kbOLEDBProvSearch
	Version           : WINDOWS:1.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
