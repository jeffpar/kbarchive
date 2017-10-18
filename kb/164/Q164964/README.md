---
layout: page
title: "Q164964: Font Size Changes on Subsequent Print Jobs"
permalink: kb/164/Q164964/
---

## Q164964: Font Size Changes on Subsequent Print Jobs

	Article: Q164964
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a printer definition is defined for a font override, the first job sent to
	the printer uses the font size specified, but all subsequent jobs use a larger
	size. The problem was discovered when Courier 10 was set in the printer
	properties and Courier 10 printed on the first job, but Courier 12 printed on
	all subsequent jobs.
	
	The font overrides are set in the Overrides section of the <Printer_name>
	Properties page in SNA Server 3.0 Manager.
	
	CAUSE
	=====
	
	Printer settings are not maintained between LU1 printing jobs on the same
	session. In this case, the host sent a control code to set the number of lines
	per inch to eight, but it was reset to the configured setting (six lines per
	inch) for subsequent jobs.
	
	RESOLUTION
	==========
	
	A fix is available to correct this problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
