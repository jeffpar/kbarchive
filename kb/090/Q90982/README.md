---
layout: page
title: "Q90982: No Network Services After Install Over LAN Manager 2.0"
permalink: /kb/090/Q90982/
---

## Q90982: No Network Services After Install Over LAN Manager 2.0

	Article: Q90982
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Windows for Workgroups over Microsoft LAN Manager version 2.0,
	the network services do not start because Setup did not add a NET START command
	to AUTOEXEC.BAT.
	
	RESOLUTION
	==========
	
	LAN Manager version 2.0 is not a supported network for Windows for Workgroups.
	You can perform a successful upgrade by removing the references to the LAN
	Manager network from AUTOEXEC.BAT before running Windows for Workgroups Setup.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
