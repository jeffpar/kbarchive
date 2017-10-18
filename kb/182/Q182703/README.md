---
layout: page
title: "Q182703: ODBC Demo for AS/400 Fails with MS Query Version 8.0"
permalink: kb/182/Q182703/
---

## Q182703: ODBC Demo for AS/400 Fails with MS Query Version 8.0

	Article: Q182703
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP2,3.0 SP3,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP2, 3.0 SP3, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ODBC Demo for AS/400 fails when used with MS Query version 8.0. An
	application exception is generated in the application to which MS Query returns
	information.
	
	CAUSE
	=====
	
	Changes to MS Query version 8.0 render the script used with the ODBC Demo for
	AS/400 invalid and cause the application exception.
	
	WORKAROUND
	==========
	
	The application exception will not occur when you use a version of MS Query
	earlier than version 8.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 SP2, 3.0
	SP3, and 4.0.
	
	
	A supported fix for SNA Server version 3.0 is now available, but has not been
	ully regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	
	This problem was corrected in the latest SNA Server version 4.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	This version of MS Query is supplied with the SR-1 release of Office 97.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP2
	Version           : WINDOWS:3.0 SP2,3.0 SP3,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
