---
layout: page
title: "Q106082: WFWG Setup May Not Detect Existing 32-Bit Disk Access Drivers"
permalink: kb/106/Q106082/
---

## Q106082: WFWG Setup May Not Detect Existing 32-Bit Disk Access Drivers

	Article: Q106082
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade a Windows 3.1 or Windows for Workgroups 3.1 installation to
	Windows for Workgroups 3.11, Setup may not detect existing 32-Bit Disk Access
	drivers. As a result, Setup may add a second set of entries for the default
	32-Bit Disk Access drivers, resulting in an error message at startup.
	
	CAUSE
	=====
	
	Windows for Workgroups Setup does not check for a path statement when looking
	for 32-Bit Disk Access drivers. For example, it would find
	
	       DEVICE=CPQWDCTRL.386
	
	but would not find
	
	       DEVICE=C:\CPQ\CPQWDCTL.386
	
	or
	
	       DEVICE=C:\CPQINT13.386
	
	RESOLUTION
	==========
	
	To work around this problem, edit the SYSTEM.INI file and remove the following
	lines from the [386Enh] section:
	
	     device=*wdctrl
	     device=*int13
	
	Additional query words: 3.11 fastdisk cpqint13.386 cpq int13 int 13 386 cpqwdctrl.386 access drivers
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
