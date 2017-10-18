---
layout: page
title: "Q151222: Stop A in FLNK.SYS While Copying From FPNW Server"
permalink: kb/151/Q151222/
---

## Q151222: Stop A in FLNK.SYS While Copying From FPNW Server

	Article: Q151222
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	
	The following stop screen may occur when copying from an FPNW server with a
	3Com 3c7xx FDDI adapter:
	
	  Bugcheck 0000000a : 00000018 00000002 00000000 fa113482
	
	CAUSE
	=====
	
	Fpnwsrv.sys reset a work context's memory descriptor list (MDL) too soon.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	NetWare version 3.51. This problem was corrected in the latest Windows NT 3.51
	U.S. Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.51 prodnt bluescreen
	
	======================================================================
	Keywords          :  
	Technology        : kbServicesNetwareSearch kbFPNW351
	Version           : winnt:3.51
	
	=============================================================================
	
