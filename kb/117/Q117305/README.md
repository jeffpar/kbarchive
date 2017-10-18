---
layout: page
title: "Q117305: Err Msg: TCP Unloaded with Madge Smart Ringnode Driver"
permalink: kb/117/Q117305/
---

## Q117305: Err Msg: TCP Unloaded with Madge Smart Ringnode Driver

	Article: Q117305
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive the following message during the boot process before starting
	Windows for Workgroups version 3.11 with the Madge 16/4 Smart Ringnode Token
	Ring adapter installed:
	
	  TCP Unloaded
	
	CAUSE
	=====
	
	This problem occurs when running the LOAD TCPIP line in the AUTOEXEC.BAT file.
	Several versions of Madge drivers for the 16/4 Smart Ringnode Token Ring adapter
	are available. The SMARTND.DOS driver versions 1.25 and 1.37 may have problems
	running MS-TCP/IP stack in Windows for Workgroups 3.11.
	
	RESOLUTION
	==========
	
	To correct this problem, use the SMARTND.DOS driver version 1.5. To obtain this
	driver file, connect to the Madge bulletin board service (BBS) at (408)
	955-0262, or contact Madge Technical Support.
	
	
	MORE INFORMATION
	================
	
	The products included here are manufactured by Madge Networks, Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product s performance or reliability.
	
	Additional query words: 3.11 setup ring node
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
