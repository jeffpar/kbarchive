---
layout: page
title: "Q128800: How to Provide Additional NDIS2 Drivers for Network Client 3.0"
permalink: kb/128/Q128800/
---

## Q128800: How to Provide Additional NDIS2 Drivers for Network Client 3.0

	Article: Q128800
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The compact disc for Windows NT Server version 3.5 includes a tool called the
	Network Client administrator. This tool can be used to create boot disks and
	setup disks for the setup of Windows for Workgroups version 3.11 and The
	Microsoft Network client version 3.0. However, this tool provides only a limited
	selection of NDIS2 drivers.
	
	This article describes a workaround for adding NDIS2 drivers that are not on the
	Windows NT Server 3.5 compact disc. The information in this article is
	applicable to any generic NDIS2 driver.
	
	MORE INFORMATION
	================
	
	Follow these steps to add an NDIS2 driver to the Network Client administrator.
	
	1. Copy the \Clients subdirectory from the Windows NT Server compact disc to
	  your hard disk. This requires 49 megabytes (MB) of disk space.
	
	  -or-
	
	  To save disk space, copy just the \Clients\Msclient and \Clients\Wfw
	  subdirectories. Also copy the file Ncadmin.inf to the \Clients subdirectory
	  on your hard disk.
	
	2. Share the \Clients subdirectory on your hard disk.
	
	3. Copy the [netcard] section from your NDIS2 driver's Oemsetup.inf file to the
	  [netcard] section of the file Wcnet.inf, found in the
	  \Clients\Msclient\Netsetup subdirectory, if you're making a boot disk. Follow
	  the same procedure for making a setup disk set, except add the changes to the
	  file Wcnet.inf, found in the \Clients\Msclient\Disks\Disk1 subdirectory.
	
	  For example, the following is the [netcard] section of the Compaq NetFlx
	  driver's Oemsetup.inf file:
	
	  [netcard]
	
	  ms$netflx="COMPAQ Netflex
	  ENET-TR",246,ndis,ethernet,real,ms$netflx,ms$netflx_nif
	  ms$netflx2="COMPAQ Netflex-2
	  ENET-TR",246,ndis,ethernet,real,ms$netflx,ms$netflx_nif
	  ms$netflxt="COMPAQ Netflex-2
	  TR",246,ndis,tokenring,real,ms$netflx,ms$netflx_nif
	  ms$ntflx2t="COMPAQ Netflex-2 DualPort
	  TR",246,ndis,tokenring,real,ms$netflx,ms$netflx_nif
	  ms$ntflx2e="COMPAQ Netflex-2 DualPort
	  ENET",246,ndis,ethernet,real,ms$netflx,ms$netflx_nif
	  ms$cpqtok="COMPAQ 32-bit Dual-Speed Token Ring
	  Adapter",246,ndis,tokenring,real,ms$netflx,ms$netflx_nif
	
	4. Append the NDIS2 driver's header and NIF section from the Oemsetup.inf file
	  to the Wcnet.inf file.
	
	  For example, the following are the header and NIF sections of the Compaq
	  NetFlx driver's Oemsetup.inf file:
	
	  [ms$netflx]
	
	  devdir= 1:NETFLX.DOS
	  device=NETFLX.DOS,@DEVDIR\NETFLX.DOS
	
	  [ms$netflx_nif]
	
	  drivername=NETFLX$
	  param=earlyrelease,"Early Release Option",keyonly,,,0x02
	  param=maxrequests,"Maximum number of general requests",int,"3,10,1",
	  <continued line> 3,0x02
	  param=maxmulticasts,"Maximum number of multicast addresses",int,"1,
	  <continued line> 50,1",16,0x02
	  param=maxtransmits,"Maximum number of queued transmits",int,"3,50,1",
	  <continued line> 10,0x02
	  param=maxreceives,"Maximum Receive Buffers",int,"3,30,1",3,0x02
	  param=maxframesize,"Maximum frame size",int,"256,17952,8",4096,0x02
	
	5. In the appended header section of the Wcnet.inf file, remove the "devdir" and
	  "device" lines. Add the line, "ndis2=1:<drivername>" and save the
	  Wcnet.inf file.
	
	  This is the resultant header section of the Wcnet.inf file in the Compaq
	  NetFlx example:
	
	  [ms$netflx]
	
	  ndis2=1:NETFLX.DOS
	
	6. Copy the NDIS2 driver to the \Clients\Msclient\Netsetup subdirectory. Follow
	  the same procedure for making a setup disk set, except copy the NDIS2 driver
	  to the \Clients\Msclient\Disks\Disk1 subdirectory.
	
	  In the Compaq NetFlx example, copy the file Netflx.dos to the
	  \Clients\Msclient\Netsetup subdirectory, or to the
	  \Clients\Msclient\Disks\Disk1 subdirectory if you are making a setup disk
	  set.
	
	You can use the Network Client administrator to create the boot floppy disk for
	this new NDIS2 driver, or the driver will be available in the installation disk
	set. The new driver will then be available from the GUI interface of the Network
	Client administrator.
	
	Additional query words: prodnt 3.50 real mode oem disk ncadmin
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbZNotKeyword kbNetworkClientSearch kbNetworkClient300DOS
	Version           : 3.50
	
	=============================================================================
	
