---
layout: page
title: "Q125060: Using Novell's ODINSUP and VLM with Network Client 3.0"
permalink: kb/125/Q125060/
---

## Q125060: Using Novell's ODINSUP and VLM with Network Client 3.0

	Article: Q125060
	Product(s): Microsoft Windows NT
	Version(s): 3.5 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 4.0 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	This article provides instructions on how to install the Novell ODINSUP
	(ODI/NDIS) driver to work with Microsoft Network Client for MS-DOS version
	3.0 (included on the Windows NT Server version 3.5 CD). This article
	discusses and displays the following using the Intel Etherexpress 16 TP
	network card as an example:
	
	- Network Client and ODINSUP Setup Instructions
	
	- Example PROTOCOL.INI
	
	- Example SYSTEM.INI
	
	- Example AUTOEXEC.BAT
	
	- Example CONFIG.SYS
	
	- Example NET.CFG
	
	For additional information regarding the Novell ODINSUP.COM driver, contact
	Novell Technical Support at (800) 638-9273.
	
	Network Client and ODINSUP Setup Instructions
	---------------------------------------------
	
	Since this configuration requires the Novell IPXODI driver, make sure you
	can connect to a NetWare server using the IPXODI driver and VLM.
	
	1. From the CLIENTS\MSCLIENT\DISKS subdirectory of the Windows NT Server version
	  3.5 CD, copy the contents of DISK1 and DISK2 to blank floppy disks (labeling
	  the disks Disk 1 and Disk 2).
	
	2. From Disk 1, run SETUP and press ENTER to set up Network Client.
	
	3. Specify the location of the Network Client installation and press ENTER.
	
	4. For adapter driver, select the ODI/NDIS support driver.
	
	5. Enter the user name. In the next screen, verify and change the computer name,
	  workgroup name and domain name, if necessary.
	
	6. Change the setup options, if necessary. This screen enables you to change
	  your redirector, startup, logon and network pop-up options.
	
	7. Choose change network configuration and highlight the NWLink IPX Compatible
	  Transport. Choose Change Settings and verify the frame type.
	
	
	1. After the configuration for Network Client is complete, insert the disk with
	  Novell's ODINSUP.COM (when requested).
	
	2. When Setup is complete, restart the computer.
	
	Example PROTOCOL.INI
	--------------------
	
	Check all bindings to make sure that the ODI MLID driver is being used.
	
	[network.setup]
	version=0x3110
	netcard=odinsupmac,1,ODINSUPMAC,1
	transport=ms$nwlink,MS$NWLINK
	transport=ms$ndishlp,MS$NDISHLP
	lana0=odinsupmac,1,ms$nwlink
	lana1=odinsupmac,1,ms$ndishlp
	
	[MS$NWLINK]
	FRAME=Ethernet_802.2
	DriverName=nwlink$
	BINDINGS=exp16ODI (This is the ODI MLID driver)
	
	[Link Driver ]
	data=FRAME Ethernet_802.3
	data=FRAME Ethernet_802.2
	data=FRAME Ethernet_II
	data=FRAME Ethernet_snap
	data=Link Driver
	
	[NWLINK]
	BINDINGS=exp16odi (This is the ODI MLID driver)
	
	[protman]
	DriverName=PROTMAN$
	PRIORITY=MS$NDISHLP
	
	[ODINSUPMAC]
	<BR/><BR/>
	[MS$NDISHLP]
	DriverName=ndishlp$
	BINDINGS=exp16odi (This is the ODI MLID driver)
	
	Example SYSTEM.INI
	------------------
	
	[network]
	filesharing=no
	printsharing=no
	autologon=yes
	computername=<computer name>
	lanroot=C:\NET
	username=<user name>
	workgroup=<workgroup name>
	reconnect=yes
	dospophotkey=N
	lmlogon=1
	logondomain=<domain name>
	preferredredir=full
	autostart=full
	maxconnections=8
	maxnwsess=8
	
	[network drivers]
	transport=ndishlp.sys
	devdir=C:\NET
	LoadRMDrivers=yes
	
	[Password Lists]
	*Shares=C:\NET\Shares.PWL
	<user name>=C:\NET\<user name>.PWL
	
	Example AUTOEXEC.BAT
	--------------------
	
	@ECHO OFF
	PROMPT $p$g
	C:\NET\net init
	C:\NOVELL\lsl
	C:\NOVELL\exp16odi (This is the ODI MAC driver)
	C:\NET\odinsup
	C:\NET\net start netbind
	C:\NOVELL\ipxodi
	C:\NOVELL\vlm
	C:\NET\net start workstation
	
	Example CONFIG.SYS
	------------------
	
	DEVICE=C:\DOS\HIMEM.SYS
	DEVICE=C:\DOS\EMM386.EXE noems
	BUFFERS=15,0
	FILES=30
	DOS=High,UMB
	lastdrive=z
	FCBS=4,0
	DEVICE=C:\DOS\SETVER.EXE
	DEVICE=C:\NET\ifshlp.sys
	
	Example NET.CFG
	---------------
	
	Preferred server=<NetWare Server>
	SHOWDOTS=ON
	PB BUFFERS 7
	Link support
	max boards 4
	max stacks 8
	Link Driver exp16odi
	
	// int 5
	// port 300
	// frame Ethernet_802.3
	// frame Ethernet_802.2
	// frame Ethernet_II
	// frame Ethernet_SNAP
	
	The ODINSUP.COM and NetWare products discussed here are manufactured by
	Novell, Inc., a vendor independent of Microsoft; we make no warranty,
	implied or otherwise, regarding these products' performance or
	reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS350search kbAudDeveloper kbZNotKeyword kbNetworkClientSearch kbNetworkClient300DOS
	Version           : 3.5 4.0
	
	=============================================================================
	
