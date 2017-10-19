---
layout: page
title: "Q108494: WFWG Err Msg: The Specified Drive Letter or Device Is Invalid"
permalink: /kb/108/Q108494/
---

## Q108494: WFWG Err Msg: The Specified Drive Letter or Device Is Invalid

	Article: Q108494
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows for Workgroups 3.1 File Manager allows attempts to connect to a network
	drive with a drive letter greater than that specified by the LASTDRIVE=
	statement in the CONFIG.SYS file.
	
	If you try to connect to a Windows for Workgroups or LAN Manager share using such
	a drive letter, you may receive the following error message:
	
	  The specified drive letter or device is invalid. If you specified a drive, it
	  may be past the value specified by the LASTDRIVE command in the CONFIG.SYS
	  file.
	
	CAUSE
	=====
	
	The Windows for Workgroups 3.1 File Manager allows drive designations through
	the letter Z in the Connect Network Drive dialog box regardless of the value
	specified by LASTDRIVE=. Because Microsoft LAN Manager and compatible networks
	use drive designations up to and including that specified by LASTDRIVE= only,
	this may result in an attempt to connect to an invalid drive letter and the
	resulting error message above may occur.
	
	Connections to shares on Novell NetWare servers do not result in the error
	because NETX.COM and NETX.EXE normally reserve drive letters after that
	specified by the LASTDRIVE= statement for its connections.
	
	MORE INFORMATION
	================
	
	This error message does not occur in later versions of Windows for Workgroups
	because File Manager does not allow a drive designation to be made past the
	LASTDRIVE= parameter in the CONFIG.SYS file.
	
	
	Additional query words: 3.10 3.1 3.11 winfile 15
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
