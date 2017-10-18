---
layout: page
title: "Q180147: TPSTART Not Needed With SNA Windows 95 Client"
permalink: kb/180/Q180147/
---

## Q180147: TPSTART Not Needed With SNA Windows 95 Client

	Article: Q180147
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SNA Server APPC Programmer's Guide incorrectly states that the TPSTART
	program must be running on an SNA Server Windows 95 client before an automated
	startup of invokable transaction programs can be started as an application.
	However, TPSTART is not necessary in a Windows 95 environment.
	
	NOTE: The TPSTART program is only required on SNA Server Windows NT clients to
	support automated startup of invokable transaction programs, which are written
	as a Win32 application (as opposed to a Windows NT service).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the documentation for SNA Server
	version 3.0. It will be corrected in subsequent versions of the documentation.
	
	Additional query words: TPSTART invokable TP Win95
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
