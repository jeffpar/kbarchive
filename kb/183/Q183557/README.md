---
layout: page
title: "Q183557: MVS Invalid Conversion of String Data"
permalink: /kb/183/Q183557/
---

## Q183557: MVS Invalid Conversion of String Data

	Article: Q183557
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
	
	String data does not display properly when the string field, or column, is
	preceded by an integer in the OLE DB Provider Host Column Description (HCD) file
	that describes the record layout of the mainframe file.
	
	This can occur, for example, when you create a Host Column Description (HCD) file
	for an MVS QSAM file, an MVS PDS file, or an MVS VSAM KSDS file using the
	Microsoft Management Console (MMC) snap-in, where the first field is a short
	integer (halfword integer) and the second field is a string. In the column
	properties of the integer, the Host type is set to "Short" and the Local Type is
	left to the default of "DBTYPE_STR."
	
	Using a Visual Basic consumer and ActiveX Data Objects to display the recordset
	returned from the mainframe reveals that the string data does not display.
	Regardless of this, the integer displays properly. The Visual Basic program can
	not display the data returned from the mainframe because the OLE DB Provider
	does not convert it properly.
	
	Similar results occur when a long integer (fullword integer) replaces the short
	integer of the first field.
	
	WORKAROUND
	==========
	
	Change the Local Type for the integer field to "DBTYPE_I2" or "DBTYPE_I4"
	depending on whether the integer is short or long, respectively.
	
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
	
