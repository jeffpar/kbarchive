---
layout: page
title: "Q172013: W/out ODBC/DRDA Option, 32-Bit ODBC Administrator Is Deleted"
permalink: kb/172/Q172013/
---

## Q172013: W/out ODBC/DRDA Option, 32-Bit ODBC Administrator Is Deleted

	Article: Q172013
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1; winnt:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 01-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	- Microsoft SNA Workstation, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you do not select the ODBC/DRDA option when setting up SNA Server or SNA
	Client, or if you remove SNA Server or SNA Client from your system, the 32- Bit
	ODBC Administrator is deleted from %Winroot%\System32. This is a shared program
	and should not be deleted by SNA Server.
	
	CAUSE
	=====
	
	The file Odbcad32.exe is not installed as a system file. This causes it to be
	deleted by SNA Server Setup or SNA Client Setup if ODBC/DRDA is not selected, or
	if the product is removed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAW300SP1 kbSNAW300 kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1; winnt:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
