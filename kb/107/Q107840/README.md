---
layout: page
title: "Q107840: Upgrade over IBM LAN Server Leaves Drivers in Startup Files"
permalink: kb/107/Q107840/
---

## Q107840: Upgrade over IBM LAN Server Leaves Drivers in Startup Files

	Article: Q107840
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows for Workgroups 3.11 for the first time after installing it
	on a machine that was previously configured to use IBM LAN Server networking
	functionality, you may receive the following message:
	
	  The protocol manager could not be opened.
	  The return code is 3.
	  Error in loading - Press F1 to continue.
	  Can not find Protocol Manager
	
	CAUSE
	=====
	
	This error occurs if any of the following IBM LAN Server components remain in
	the startup files after you install Windows for Workgroups 3.11 and select
	Microsoft Windows Network peer-to-peer networking functionality:
	
	  CONFIG.SYS
	  ----------
	
	  DEVICE=C:\LSP\DXMA0MOD.SYS XXX
	  DEVICE=C:\LSP\DXMJ0MOD.SYS
	
	  AUTOEXEC.BAT
	  ------------
	
	  C:\LSP\NETBIND
	
	RESOLUTION
	==========
	
	If you find the above items in the startup files after installing Windows for
	Workgroups 3.11 and selecting Microsoft Windows Network peer-to-peer networking
	functionality, remove them with an ASCII text editor, such as Microsoft Windows
	Notepad.
	
	MORE INFORMATION
	================
	
	When you install Microsoft Windows for Workgroups 3.11, you can choose to
	install Microsoft Windows Network peer-to-peer networking functionality or
	Windows client networking functionality for another network (such as IBM LAN
	Server). If you decide to install the Microsoft Windows Network, any recognized
	components of other networks found in the startup files are replaced with the
	equivalent Windows for Workgroups drivers. However, some components, such as the
	IBM LAN Server components listed above, may not be recognized by Setup and
	therefore must be manually removed.
	
	Additional query words: 3rdparty err msg 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
