---
layout: page
title: "Q90225: No Network Detection During Setup"
permalink: kb/090/Q90225/
---

## Q90225: No Network Detection During Setup

	Article: Q90225
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	- Microsoft Workgroup Connections, version 1.0 
	-------------------------------------------------------------------------------
	
	The network detection portion of Windows for Workgroups Setup will not
	be executed if WRKGRP.SYS is present in the CONFIG.SYS file. Setup
	looks for WRKGRP.SYS before attempting to detect the type of network
	and adapter currently installed. If it finds WRKGRP.SYS, it assumes
	Workgroup Connections is installed. It then looks for the network
	information from the Workgroup Connections directory. If this happens,
	remove WRKGRP.SYS from the CONFIG.SYS file and run Setup again.
	
	Additional query words: 3.10 1.00 wc
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1; :1.0
	
	=============================================================================
	
