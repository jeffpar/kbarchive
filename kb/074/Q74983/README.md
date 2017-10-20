---
layout: page
title: "Q74983: Configuring Extended Memory on Zenith Supersport 386sx"
permalink: /kb/074/Q74983/
---

## Q74983: Configuring Extended Memory on Zenith Supersport 386sx

{% raw %}

	Article: Q74983
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The CMOS setup program on the Zenith Supersport 386sx has an option to configure
	extended memory for Expanded Memory Specification (EMS) services or preserve it
	as extended memory. EMM386.EXE and HIMEM.SYS will not recognize memory
	configured for EMS by the Zenith CMOS setup program. To use EMM386.EXE to
	provide EMS services or to use HIMEM.SYS to provide XMS services, some of the
	extended memory must be preserved as extended memory. If all the extended memory
	is configured as expanded memory, neither HIMEM.SYS nor EMM386.EXE will load.
	
	Additional query words: 5.00 3rdparty noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
