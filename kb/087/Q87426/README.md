---
layout: page
title: "Q87426: PROFS: Class of Machine Required for Gateway PC"
permalink: /kb/087/Q87426/
---

## Q87426: PROFS: Class of Machine Required for Gateway PC

{% raw %}

	Article: Q87426
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The minimum requirement for the PC running the Microsoft Mail Gateway to IBM
	PROFS and OfficeVision is an IBM-compatible PC/XT/AT computer with 640K of RAM.
	A higher class of machine, such as a 286 or 386, increases performance and
	throughput marginally.
	
	The slowest component of the message transfer between the LAN and the host is the
	3270 file transfer with the host. Although a faster PC reduces the transfer time
	slightly, the speed of the communications link is usually the limiting factor
	when trying to increase message throughput.
	
	The Gateway software is not designed to use extended or expanded memory; the
	gateway program (HostDisp or VMGATE) must be loaded into conventional memory.
	Therefore, there should be at least 215K of conventional memory free before
	loading the gateway program. To ensure that this is possible, you may have to
	load MS-DOS and/or your network drivers into high memory.
	
	
	Additional query words: 3.00 pcmail profslan
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
