---
layout: page
title: "Q165545: Odbc.inf File in ODBC Folder Prevents Use of Drvstp32.exe"
permalink: /kb/165/Q165545/
---

## Q165545: Odbc.inf File in ODBC Folder Prevents Use of Drvstp32.exe

	Article: Q165545
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Drvstp32.exe program included in the ODBC driver directory does not set up
	the driver properly over an existing installation of the ODBC driver.
	Furthermore, it does not produce reliable results on a new setup.
	
	CAUSE
	=====
	
	The Odbc.inf file in the ODBC directories for both the Windows NT and Windows 95
	clients, has information for a much older release of the StarSQL ODBC driver.
	The Drvstp32.exe program depends on the Odbc.inf file for proper setup.
	
	RESOLUTION
	==========
	
	Use SNA Server setup to remove and reinstall the ODBC components.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
