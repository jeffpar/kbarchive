---
layout: page
title: "Q101173: Files Modified by Workgroup Connections Setup Program"
permalink: /kb/101/Q101173/
---

## Q101173: Files Modified by Workgroup Connections Setup Program

	Article: Q101173
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Workgroup Connections, version 1.0 
	-------------------------------------------------------------------------------
	
	
	The Setup program for Microsoft Workgroup Connections version 1.0
	modifies the CONFIG.SYS and AUTOEXEC.BAT files located at the root
	directory of the startup drive, regardless of where you are installing
	Workgroup Connections. This operation is by design.
	
	Workgroup Connections 1.0 also creates SYSTEM.INI and PROTOCOL.INI
	files in the directory where you installed Workgroup Connections. If
	you mistakenly installed Workgroup Connections into your Windows for
	Workgroups directory, it modifies the SYSTEM.INI and PROTOCOL.INI
	files that  are required for Windows for Workgroups. This may cause
	errors to occur when you run Windows for Workgroups.
	
	
	Additional query words: 3.10 connection remote diskless 1.0
	
	======================================================================
	Keywords          :  
	Technology        : kbWFWSearch kbWFW310
	Version           : :1.0
	
	=============================================================================
	
