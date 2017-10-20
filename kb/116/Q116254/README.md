---
layout: page
title: "Q116254: System File Changes Installing Xircom CE10 Ethernet Adapter"
permalink: /kb/116/Q116254/
---

## Q116254: System File Changes Installing Xircom CE10 Ethernet Adapter

{% raw %}

	Article: Q116254
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the changes made to your SYSTEM.INI, AUTOEXEC.BAT, and
	CONFIG.SYS files when you install the Xircom CE10 Credit Card Ethernet adapter.
	It also discusses the PROTOCOL.INI file that Setup creates for this adapter.
	
	MORE INFORMATION
	================
	
	AUTOEXEC.BAT
	------------
	
	  C:\WINDOWS DIRECTORY\NET START
	
	CONFIG.SYS
	----------
	
	  Device=C:\WINDOWS DIRECTORY\IFSHLP.SYS
	
	SYSTEM.INI
	----------
	
	  [BOOT]
	  network.drv=WFWNET.DRV
	
	  [BOOT.DESCRIPTION]
	  network.drv=Microsoft Windows Network (version 3.11)
	
	  [386ENH]
	  network=*vnetbios, *vwc, vnetsup.386, vredir.386, vserver.386
	  netheapsize=20
	  netmisc=ndis.386, ndis2sup.386
	  transport=nwlink.386, nwnblink.386, netbeui.386
	  InDOSPolling=FALSE
	
	  [NETWORK]
	  winnet=wfwnet/00025100
	  Username=username
	  Workgroup=workgroup
	  ComputerName=computername
	
	  [NETWORK DRIVERS]
	  devdir=C:\windows directory
	  LoadRMDrivers=YES
	  netcard=cendis.exe
	  transport=ndishlp.sys,*netbeui
	
	  [NWBLINK]
	  lanabase=1
	
	PROTOCOL.INI File
	-----------------
	
	  [NETWORK SETUP]
	  version=0x3110
	  netcard=cendis,1,CENDIS,1
	  transport=ms$nwlinknb,NWLINK
	  transport=ms$ndishlp,MSNDISHLP
	  transport=ms$netbeui,NETBEUI
	  lana0=cendis,1,ms$netbeui
	  lana1=cendis,1,ms$nwlinknb
	  lana2=cendis,1,ms$ndishlp
	
	  [PROTMAN]
	  Drivername=Protman$
	  Priority=MS$NDISHLP
	
	  [CENDIS]
	  Drivername=XIRCOM$
	  INT=10 (or other IRQ adapter configured for)
	  IOADDRESS=0x300 (or other address configured for)
	  MEM=0xC800 (or other starting memory address configured for)
	  IOWORDSIZE=16
	  SOCKET=1 (socket that lan adapter installed in)
	
	  [NWLINK]
	  Bindings=CENDIS
	
	  [MS$NDISHLP]
	  Drivername=ndishlp$
	  BINDINGS=CENDIS
	
	  [NETBEUI]
	  Drivername=netbeui$
	  SESSIONS=10
	  NCBS=12
	  BINDINGS=CENDIS
	  Lanabase=0
	
	PROTOCOL.INI
	------------
	
	Setup also creates a PROTOCOL.INI file when you install the Xircom adapter.(If
	PROTOCOL.INI already exists, Setup modifies it.) Sometimes the PROTOCOL.INI
	settings do not match the CONFIG.SYS settings for the Credit Card adapter, which
	causes it to fail. If this happens, compare your PROTOCOL.INI settings with the
	relevant CONFIG.SYS lines and modify any inconsistent settings.
	
	Additional query words: 1.00 3.11 Xircom PCMCIA CE10 creditcard
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
