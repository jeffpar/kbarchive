---
layout: page
title: "Q196510: Error Msg: Error Writing to LPT1: System Cannot Find the File"
permalink: /kb/196/Q196510/
---

## Q196510: Error Msg: Error Writing to LPT1: System Cannot Find the File

{% raw %}

	Article: Q196510
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print to a local printer, you may receive the following error message:
	
	  Error writing to LPT1 <file name>: The system cannot find the file
	  specified.
	
	Also, the Parallel device driver may not start and you may see the following
	event in Event Viewer:
	
	  Event ID: 3
	  Source: Parallel
	  Type: Error
	  Category: None
	  Description:  Not enough memory was available to allocate internal
	  storage needed for the device.
	
	CAUSE
	=====
	
	This behavior can occur if the third-party BasJdrv device driver starts when
	Windows NT is started.
	
	RESOLUTION
	==========
	
	To work around this behavior, disable the BasJdrv device driver by following
	these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Devices.
	
	3. In the list of devices, click BasJdrv, click Stop, click Startup, click
	  Disabled, click OK, and then click Close.
	
	4. Restart your computer.
	
	MORE INFORMATION
	================
	
	This behavior is caused by installing the Xilinx M1.3 JTAG Programmer software.
	This software installs the BasJdrv.sys driver, which accesses the parallel port
	and conflicts with the printer driver. For more information about Xilinx
	software, visit the following Xilinx Web site:
	
	  http://www.xilinx.com/techdocs/2757.htm
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
