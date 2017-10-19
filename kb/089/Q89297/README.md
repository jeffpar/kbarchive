---
layout: page
title: "Q89297: WFWG Err Msg: &quot;Error Occurred While Loading VNETSUP...&quot;"
permalink: /kb/089/Q89297/
---

## Q89297: WFWG Err Msg: &quot;Error Occurred While Loading VNETSUP...&quot;

	Article: Q89297
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	
	The following article contains information on the use of Windows for
	Workgroups with third-party products or configurations that have not
	been tested and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information or use a supported configuration.
	
	SYMPTOMS
	========
	
	If you use Windows for Workgroups and don't have a network card installed or if
	the network card and driver fail to initialize, you receive one of the following
	error messages:
	
	  The Following Error Occurred While loading the device VNETSUP: Could not
	  locate driver WORKGRP.SYS (DOS error 2).
	
	-or-
	
	  The following error ocurred while loading the device VNETSUP: Error 6111:
	  Could not locate driver WORKGRP.SYS (MS-DOS error 2)
	
	CAUSE
	=====
	
	The error message appears because WORKGRP.SYS or the NDIS driver (.DOS) is
	unable to load in the CONFIG.SYS file.
	
	WORKAROUND
	==========
	
	To disable the error and allow Windows for Workgroups to function as a
	standalone installation of Windows 3.1, comment out the network.drv= entry in
	the SYSTEM.INI file (that is, place a semicolon in front of the network.drv=
	line).
	
	MORE INFORMATION
	================
	
	You may occasionally need to use Windows for Workgroups without a network card
	(for example, card failure, card repair). By removing WFWNET.DRV from the
	network.drv= line in the [BOOT] section of the SYSTEM.INI file, the error
	message will no longer appear and Windows 3.1 functionality will remain. Change
	the following line in the [BOOT] section
	
	       network.drv=wfwnet.drv
	
	-to-
	
	       ;network.drv=wfwnet.drv
	
	then add the following line below it:
	
	       network.drv=
	
	This change disables the Windows for Workgroups network driver from loading.
	
	Additional query words: 3.10 net
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
