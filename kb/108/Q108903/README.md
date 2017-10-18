---
layout: page
title: "Q108903: Using Windows for Workgroups 3.11 with Beame and Whiteside"
permalink: kb/108/Q108903/
---

## Q108903: Using Windows for Workgroups 3.11 with Beame and Whiteside

	Article: Q108903
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows for Workgroups 3.11 supports multiple network drivers and can co-exist
	with other network products, such as Beame and Whiteside NFS (BW-NFS), version
	3.0c.
	
	After you upgrade to Windows for Workgroups 3.11, your BW-NFS connectivity may
	not exist. This article describes procedures to correct this problem that are
	based on information provided by Beame and Whiteside. If you want to use ODI
	interface (running Novell NetWare, BW-NFS, and Windows for Workgroups 3.11),
	contact Beame and Whiteside for configuration recommendations.
	
	MORE INFORMATION
	================
	
	CONFIG.SYS File Changes
	-----------------------
	
	Make the following changes in your CONFIG.SYS file by either remarking out (with
	the REM command) or deleting the lines shown below.
	
	NOTE: The following information assumes that your BW-NFS files are in a directory
	called C:\BW30c.
	
	     rem DEVICE=C:\BW30c\NDIS\PROTMAN.DOS
	     rem DEVICE=C:\BW30C\NDIS\<ELNK3.DOS>   (where <ELNK3.DOS> is your
	                                            specific network card driver)
	     rem DEVICE=C:\BW30C\ETHDEV.SYS
	     rem DEVICE=C:\BW30C\TCPIP.SYS 1460
	
	SYSTEM.INI File Changes
	-----------------------
	
	Verify that your SYSTEM.INI file contains the following lines.
	
	NOTE: You must copy the ETHDEV.SYS and TCPIP.SYS files to the directory specified
	on the DEVDIR= line in the [network drivers] section of your SYSTEM.INI file.
	The following is an example and assumes that the Windows for Workgroups 3.11
	network is also installed:
	
	     [boot]
	     network.drv=wfwnet.drv
	     secondnet=bwnet.drv
	
	     [boot.description]
	     network.drv=Microsoft Windows Network (version 3.11)
	     secondnet.drv=BW-NFS Network File System (version 3.0)
	
	     [386Enh]
	     network=*vnetbios,*vwc,vnetsup.386,vredir.386,vserver.386
	     secondnet=bwdosnet.386,bwredir.386
	     TimerCriticalSection=1000
	     UniqueDOSPSP=TRUE
	     PSPIncrement=5
	
	     [Network]
	     winnet=wfwnet/00025100
	     multinet=bwnfs
	
	     [network drivers]
	     transport=ethdev.sys,tcpip.sys 1460,ndishlp.sys,*netbeui
	     devdir=C:\Windows
	     LoadRMDrivers=Yes
	
	PROTOCOL.INI File Changes
	-------------------------
	
	Verify that your PROTOCOL.INI file located in the Windows directory contains the
	following lines.
	
	NOTE: The following is an example that uses a Western Digital Plus Family
	Adapter. Your network adapter may differ and may have a different section name
	and settings under that section.
	
	  [protocol manager]
	  drivername=PROTMAN$
	
	  [WD8003XMAC]                  ;This section varies depending on the
	  drivername=MACWD$             ;network adapter used in your system.
	  irq=5
	  ramaddress=CC00
	  iobase=0X280
	
	  [ETHDEV]
	  drivername=ETHDEV27
	  bindings=WD8003XMAC           ;This line must be identical to the
	                                ;adapter name section in brackets
	                                ;above. This line is case sensitive.
	
	AUTOEXEC.BAT File Changes
	-------------------------
	
	Remark out any NETBIND= lines in your AUTOEXEC.BAT file.
	
	If you are running only the TCP portion of the BW-NFS software, you should remove
	the BWRPC and BWNFS drivers from the AUTOEXEC.BAT file.
	
	If you are using the NFS portion of the BW-NFS software, you should remove the
	BWSTART line from your AUTOEXEC.BAT file. There should be a C:\WINDOWS\NET START
	line only. If you see another similar line that is pointing to the BW-NFS
	directory, either remark out or delete that line.
	
	Rename Your Files
	-----------------
	
	Regardless of the installation (ODI or NDIS), in the BW-NFS directory, rename the
	NET.EXE file to NFS.EXE and the STARTNET.EXE to BWSTART.EXE. This eliminates
	potential conflicts with Windows for Workgroups drivers.
	
	NOTE: BW-NFS version 3.1 uses STARTNET.COM instead of STARTNET.EXE.
	
	Save Your Changes and Reboot
	----------------------------
	
	Save all changes to your files and reboot your computer. Your Beame and Whiteside
	connectivity should then be restored.
	
	For more information, contact Beame and Whiteside Software, Inc.
	
	BW-NFS is manufactured by Beame and Whiteside, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.11 Beam White-side BWNFS
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
