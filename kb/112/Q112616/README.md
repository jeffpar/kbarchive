---
layout: page
title: "Q112616: WFWG: System Error or Network Error with DEC Pathworks"
permalink: kb/112/Q112616/
---

## Q112616: WFWG: System Error or Network Error with DEC Pathworks

	Article: Q112616
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Windows for Workgroups 3.11 is installed with DEC Pathworks configured as
	the primary network, you may receive the following error message when you start
	Windows:
	
	  System Error -- Network error on drive x
	
	where <x> is the drive letter connecting a DEC Pathworks server.
	
	After you choose Cancel a number of times, you may be able to proceed into
	Windows for Workgroups. However, if you try to access a DEC Pathworks server
	drive from File Manager, you receive the following message
	
	  An error occurred reading drive D:
	
	or, if you try to access a DEC Pathworks drive from the MS-DOS Prompt in Windows,
	you receive the following Pathworks error message:
	
	  NET804: Network busy - remote node not responding
	
	CAUSE
	=====
	
	Primary networks, including Microsoft LAN Manager, Artisoft LANtastic, and DEC
	Pathworks, may use some network drivers that are incompatible with the
	IFSHLP.SYS device driver that is loaded with Windows for Workgroups 3.11.
	
	RESOLUTION
	==========
	
	To properly run Windows for Workgroups 3.11 with one of these networks as a
	primary network, you must remove the IFSHLP.SYS device driver from the
	CONFIG.SYS file.
	
	NOTE: If IFSHLP.SYS is not loaded, 32-bit file access is not available.
	
	You may also be able to workaround this problem by obtaining the integration kit
	for Windows for Workgroups provided by DEC. It allows DEC Pathworks and the
	Windows for Workgroups 3.11 network functionality to coexist by setting up
	DECNET as a protocol on an existing Windows for Workgroups installation.
	IFSHLP.SYS does not need to be removed with this installation. For more
	information, contact DEC technical support, or the DECPCI forum on CompuServe.
	
	Additional query words: 3.11 DEC PATHWORKS cannot start hangs message msg err
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
