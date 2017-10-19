---
layout: page
title: "Q117302: Err Msg: TCP Unloaded with Madge Smart Ring Driver"
permalink: /kb/117/Q117302/
---

## Q117302: Err Msg: TCP Unloaded with Madge Smart Ring Driver

	Article: Q117302
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your computer, during execution of the AUTOEXEC.BAT file (before
	Windows for Workgroups is started) the following message appears:
	
	  TCP Unloaded
	
	This happens when your computer has a Madge 16/4 Smart Ring Node Token Ring
	adapter installed and you are using the SMARTND.DOS driver file version 1.25 or
	1.37.
	
	CAUSE
	=====
	
	This problem occurs when the LOAD TCPIP line in your AUTOEXEC.BAT file is
	executed. These versions of SMARTND.DOS may have problems running Microsoft's
	MS-TCP/IP stack in Windows for Workgroups 3.11.
	
	RESOLUTION
	==========
	
	To correct this problem, use the SMARTND.DOS driver file version 1.5. To obtain
	this driver file, connect to Madge BBS at (408)955-0262, or contact Madge
	Technical Support at (800)876-2343.
	
	
	The Madge product included here is manufactured by Madge Networks, Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product s performance or reliability.
	
	Additional query words: wfw wfwg 3.11 setup
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : 3.11
	
	=============================================================================
	
