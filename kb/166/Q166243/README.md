---
layout: page
title: "Q166243: Access Violation in Office 97 ODBC Apps with StarSQL Driver"
permalink: kb/166/Q166243/
---

## Q166243: Access Violation in Office 97 ODBC Apps with StarSQL Driver

	Article: Q166243
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An access violation may occur when you click OK in the "StarSQL Data Source
	Setup" dialog box if you are using any Microsoft Office 97 ODBC-aware
	application. For instance, when you are using Microsoft Access 97, the following
	access violation will occur:
	
	  MSACCESS.exe
	  Exception: access violation (0xc000005), Address: 0x77f7d4b0
	
	RESOLUTION
	==========
	
	A fix is available to correct this problem. The new version of the driver is
	2.30.0317. See the Readme.txt that accompanies this new driver for "STARSQL
	Release 2.3 Release Notes."
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: OFF97 OFFICE97
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
