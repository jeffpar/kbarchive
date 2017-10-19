---
layout: page
title: "Q90528: WFWG May Not Remove All Existing Network Drivers"
permalink: /kb/090/Q90528/
---

## Q90528: WFWG May Not Remove All Existing Network Drivers

	Article: Q90528
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a network driver is not listed in the NETWORK.INF file, Windows for
	Workgroups Setup version 3.1 does not remove it from either the CONFIG.SYS or
	AUTOEXEC.BAT file.
	
	CAUSE
	=====
	
	Windows for Workgroups Setup uses the [delete_netware] and [delete_drivers]
	sections of the NETWORK.INF file to determine what files to delete when
	installing new network drivers over existing network drivers.
	
	If a driver has been renamed (for example, renamed IPX.COM to MYIPX.COM), or is
	not listed (a special driver for uncommon network cards), Setup does not remove
	the driver or its references from either the CONFIG.SYS or AUTOEXEC.BAT files.
	
	WORKAROUND
	==========
	
	To work around this problem, remove the driver and references by manually
	editing the CONFIG.SYS or AUTOEXEC.BAT files.
	
	Additional query words: 3.10 Setup Novell delete network driver
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
