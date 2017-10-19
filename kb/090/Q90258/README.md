---
layout: page
title: "Q90258: Upgrading from Workgroup Connections to WFWG with OEM Drivers"
permalink: /kb/090/Q90258/
---

## Q90258: Upgrading from Workgroup Connections to WFWG with OEM Drivers

	Article: Q90258
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Workgroup Connections, version 1.0 
	-------------------------------------------------------------------------------
	
	If Windows for Workgroups Setup detects a Workgroup Connections
	installation, it does not attempt to detect any network information,
	but instead copies the information in the PROTOCOL.INI file.
	
	All references to Workgroup Connections drivers and files are replaced
	with Windows for Workgroups references. All Workgroup Connections
	files are included with Windows for Workgroups, so this presents no
	problem except in the case of original equipment manufacturer (OEM)
	drivers. Windows for Workgroups Setup does not copy or preserve any
	OEM drivers. If OEM drivers were used in the Workgroup Connections
	installation, you need to use the OEM disks containing the necessary
	drivers during the Windows for Workgroups installation or run Control
	Panel after Windows for Workgroups installation.
	
	Additional query words: 3.10 3.11 wc
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11; :1.0
	
	=============================================================================
	
