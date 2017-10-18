---
layout: page
title: "Q90983: Real Mode Redir: No Support for LAN Manager Validated Logon"
permalink: kb/090/Q90983/
---

## Q90983: Real Mode Redir: No Support for LAN Manager Validated Logon

	Article: Q90983
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	- Microsoft Workgroup Connections, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The default for Workgroup Connections redirector (real mode) does not support
	validated logons for Microsoft LAN Manager. You must be running the enhanced
	redirector or the Windows virtual redirector (VxD) to properly log on to a LAN
	Manager domain.
	
	To start the enhanced redirector under Workgroup Connections or under the
	real-mode Windows for Workgroups network, use the following commands:
	
	  net stop
	  net start enhanced
	
	MORE INFORMATION
	================
	
	Using the standard redirector, it is still possible to access the same network
	resources that are available when you have logged on and been validated by a LAN
	Manager domain.
	
	1. Log on to Workgroup Connections using your LAN Manager user name.
	
	2. When connecting to a resource on the domain, use the LAN Manager user
	  password as the password for the resource.
	
	If you log on to the LAN Manager domain this way, you will not be able to run
	your LAN Manager logon script as you would under the LAN Manager version 2.1
	MS-DOS client.
	
	The Workgroup Connections enhanced and virtual redirector allow you to run your
	logon script, and be validated by a LAN Manager domain.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1; :1.0
	
	=============================================================================
	
