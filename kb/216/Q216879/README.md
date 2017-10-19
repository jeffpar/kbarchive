---
layout: page
title: "Q216879: BUG: 'Errors occurred' Results When Converting OS/390 Signed Zon"
permalink: /kb/216/Q216879/
---

## Q216879: BUG: 'Errors occurred' Results When Converting OS/390 Signed Zon

	Article: Q216879
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB Provider for AS/400 and VSAM, versions 1.0, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Using Microsoft OLEDB Provider for AS/400 and VSAM, a zoned decimal type on an
	OS/390 host may not be converted correctly to either string, numeric, or decimal
	automation types on the client. The following information is contained in the
	err structure:
	
	  Source: Provider
	  Number: -2147217887 (0x80040E21)
	  Description: Errors occurred
	
	The zoned decimal type is determined in the Host Column Description (HCD) file
	using the product's Microsoft Management Console snap-in for administration. To
	specify the zoned decimal type for a particular host column, its 'Host Type'
	property is set to 'Zoned'.
	
	If the low order byte of the host variable indicates a "+" or "-" sign, data
	conversion fails.
	
	If the low order byte indicates no sign, that is, the absolute value, conversion
	works correctly.
	
	WORKAROUND
	==========
	
	Use 'Character' instead of 'Zoned' for the 'Host Type' property. Specify the
	automation type as 'DBTYPE_STR'. Determine the sign and value of the low order
	byte programatically.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbOLEDBSearch kbOLEDBProvAS400VSAM100 kbOLEDBProvAS400VSAM400SP2 kbOLEDBProvSearch
	Version           : WINDOWS:1.0,4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
