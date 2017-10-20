---
layout: page
title: "Q92541: WFWG and Novell Netware Connectivity Configuration Files"
permalink: /kb/092/Q92541/
---

## Q92541: WFWG and Novell Netware Connectivity Configuration Files

{% raw %}

	Article: Q92541
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows for Workgroups (WFWG) provides the functionality to work with Novell
	NetWare networks versions 2.1 and later. This allows a Novell NetWare client
	workstation to become a Windows for Workgroups workstation, thereby providing
	access to Novell NetWare servers and/or Windows for Workgroups servers.
	
	MORE INFORMATION
	================
	
	The following additions are made when Novell NetWare connectivity is enabled in
	Windows for Workgroups:
	
	AUTOEXEC.BAT
	------------
	
	MSIPX
	NETX
	
	CONFIG.SYS
	----------
	
	LASTDRIVE=P
	DEVICE=C:\<WFW 3.1 dir>\MSIPX.SYS
	
	PROTOCOL.INI
	------------
	
	[network.setup]
	transport=ms$ipx,MS$IPX
	lana0=ms$ee16,1,ms$ipx (I.E. ms$ee16 is used for the INTEL
	EtherExpress 16 NIC.)
	[ms$ipx]
	drivername=IPX$
	mediatype=Novell/Ethernet (depending on the NetWare configuration)
	
	SYSTEM.INI
	----------
	
	[boot]
	secondnet.drv=netware.drv
	[386Enh]
	secondnet=vipx.386,vnetware.386
	[network]
	multinet=netware
	[netware]
	nwsharehandles=false
	restoredrives=true
	
	If LAN Manager connectivity is installed as well as Novell, then the following
	line changes in the SYSTEM.INI file:
	
	  [network]
	    multinet=lanman,netware
	
	Additional query words: 3.10 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
