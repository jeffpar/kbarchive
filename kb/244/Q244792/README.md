---
layout: page
title: "Q244792: OLE/DB for DB2 Error: Could Not Resolve the Specified Host Name"
permalink: /kb/244/Q244792/
---

## Q244792: OLE/DB for DB2 Error: Could Not Resolve the Specified Host Name

	Article: Q244792
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP3
	Operating System(s): 
	Keyword(s): kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install SNA Server 4.0 Service Pack (SP) 3, the DB2OLEDB Provider
	fails if you are using TCP/IP and the host name is over 17 characters long. When
	you attempt to test the connection, the following error message occurs:
	
	  Test connection failed because of an error in initializing provider. Could
	  not resolve the specified host name. SQLSTATE: 08s01, SQLCODE: -602
	
	CAUSE
	=====
	
	The amount of characters that the Network Address field reads has changed. SP2
	and earlier versions read the first 64 characters entered into the field.
	Everything after the 64th character is ignored (though you can type up to 256).
	SP3 only reads the first 17 characters in the field. Everything after the 17th
	character is ignored.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	Service Pack 3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP3
	Version           : WINDOWS:4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
