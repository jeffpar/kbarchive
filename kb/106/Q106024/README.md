---
layout: page
title: "Q106024: Windows for Workgroups Hangs at Startup with HP VxD HPVNPD.386"
permalink: kb/106/Q106024/
---

## Q106024: Windows for Workgroups Hangs at Startup with HP VxD HPVNPD.386

	Article: Q106024
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows for Workgroups fails to load if you are using the Hewlett-Packard (HP)
	virtual device driver (VxD) HPVNPD.386 with 32-bit file access (VFAT) enabled.
	
	CAUSE
	=====
	
	HPVNPD.386 allows you to print from Windows for Workgroups directly to a printer
	connected to the network by an HP JetDirect card. This VxD accepts data from
	Print Manager and redirects it over the network using the DLC protocol.
	
	Unfortunately, when both HPVNPD.386 and VFAT are enabled, Windows for Workgroups
	stops responding (hangs) when you attempt to start it.
	
	HPVNPD is calling Exec_VxD_Int. This service does not consistently work properly
	under Windows for Workgroups. It works some of the time, but many times calling
	Exec_VxD_Int causes the WIN386 event manager to become confused. Having VFAT
	installed causes the WIN386 event manager to become confused every time
	Exec_VxD_Int is called.
	
	RESOLUTION
	==========
	
	To work around this problem, disable VFAT or obtain an updated HPVNPD.386 driver
	from HP.
	
	For more information contact Hewlett-Packard.
	
	
	Additional query words: 3.11 jet direct jetdirect
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
