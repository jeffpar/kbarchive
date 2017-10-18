---
layout: page
title: "Q263981: DOC: Wake Up Pattern OIDs Are Not Correctly Documented"
permalink: kb/263/Q263981/
---

## Q263981: DOC: Wake Up Pattern OIDs Are Not Correctly Documented

	Article: Q263981
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:; winnt:
	Operating System(s): 
	Keyword(s): kbdocerr kbDDK kbOSWin2000 kbDSupport kbGrpDSNTDDKkbbuglist
	Last Modified: 28-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Driver Development Kit (DDK) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 2000 Device Driver Kit (DDK) documentation incorrectly states the
	following:
	
	- A protocol driver can send a OID_PNP_ADD_WAKE_UP_PATTERN to a miniport to
	  specify one or more wake-up patterns.
	
	- A protocol driver can a send a OID_PNP_REMOVE_WAKE_UP_PATTERN to a miniport
	  to delete one or more wake-up patterns.
	
	In fact, a protocol driver can specify only one wake-up pattern to a miniport
	driver by sending the object identifier (OID) OID_PNP_ADD_WAKE_UP_PATTERN.
	Similarly, a protocol driver can delete only one wake-up pattern by sending
	OID_PNP_REMOVE_WAKE_UP_PATTERN to a miniport driver.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocerr kbDDK kbOSWin2000 kbDSupport kbGrpDSNTDDK kbbuglist
	Component         : DDK
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbwin2000DDK kbAudDeveloper kbWinDDKSearch kbWinAdvServSearch
	Version           : WINDOWS:; winnt:
	Solution Type     : kbnofix
	
	=============================================================================
	
