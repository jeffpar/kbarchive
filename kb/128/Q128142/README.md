---
layout: page
title: "Q128142: Systems with SMC NICs Hang When Using SMCMAC.DOS of NCADMIN"
permalink: /kb/128/Q128142/
---

## Q128142: Systems with SMC NICs Hang When Using SMCMAC.DOS of NCADMIN

	Article: Q128142
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Network Client Administrator (NCADMIN.EXE) allows you to create Network
	Installation Startup Disk and Network Installation Disk Set of the Network
	Client version 3.0 for MS-DOS and Windows. After you create and use the Startup
	Disk or Disk Set for a Standard Micro Systems Corporation (SMC) Ethercard or
	Starcard network interface card (NIC), the client computer stops responding
	(hangs).
	
	CAUSE
	=====
	
	This problem occurs when you use the SMC Ethercard or Starcard (SMCMAC.DOS)
	driver with the NWLink IPX Compatible Protocol.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Replace the SMCMAC.DOS driver in the Startup Disk and Disk Set with the
	  SMC8000.DOS driver that is shipped with the SMC network card.
	
	2. Modify the Network Client PROTOCOL.INI and the SYSTEM.INI files to replace
	  references to SMCMAC and SMCMAC.DOS with SMC8000 SMC8000.DOS. For example:
	
	  PROTOCOL.INI
	  ------------
	
	  [network.setup]
	  version=0x3110
	  netcard=MS$SMC8000,1,MS$SMC8000,1
	  transport=ms$ndishlp,MS$NDISHLP
	  transport=ms$nwlink,MS$NWLINK
	  lana0=MS$SMC8000,1,ms$nwlink
	  lana1=MS$SMC8000,1,ms$ndishlp
	
	  [protman]
	  drivername=PROTMAN$
	  PRIORITY=MS$NDISHLP
	
	  [MS$NDISHLP]
	  DriverName=ndishlp$
	  Bindings=MS$SMC8000
	
	  [SMC8000]
	  ADAPTERS=SMC8000
	  BINDINGS=MS$SMC8000
	
	  [MS$SMC8000]
	  drivername=SMC8000$
	  irq=5
	  iobase=0x300
	  ramaddress=0xD000
	  ; maxrequests=8
	  ; maxtransmits=12
	  ; receivebuffers=12
	  ; receivebufsize=256
	  ; receivechains=12
	  ; maxmulticast=16
	
	  [ms$nwlink]
	  drivername=nwlink$
	  FRAME=Ethernet_802.2
	  BINDINGS=MS$SMC8000
	  LANABASE=0
	
	  SYSTEM.INI
	  ----------
	
	  [network drivers]
	  netcard=smc8000.dos
	  transport=ndishlp.sys
	  devdir=A:\NET
	  LoadRMDrivers=yes
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	The SMC NICs discussed here are manufactured by Standard Micro Systems
	Corporation, a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding these products' performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
