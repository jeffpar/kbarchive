---
layout: page
title: "Q126718: PC Ext: Using External with Novell and Windows NT Postoffices"
permalink: /kb/126/Q126718/
---

## Q126718: PC Ext: Using External with Novell and Windows NT Postoffices

	Article: Q126718
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For the Microsoft Mail for PC Networks External (MTA) program to transfer mail
	between postoffices a network drive must be connected to each postoffice from
	the workstation that will be running the EXTERNAL.EXE program. This article
	describes the software needed and how to set up the operating system to have the
	External program process mail on both a Novell NetWare server and Microsoft
	Windows NT or Microsoft LAN Manager servers.
	
	MORE INFORMATION
	================
	
	NetWare workstations communicate with the NetWare server using NetWare Core
	Protocol (NCP) packets and Microsoft network workstations (LAN Manager, Windows
	for Workgroups, and NT workstation) communicate with Windows NT or LAN Manager
	servers using Server Message Blocks (SMBs). For this reason one workstation with
	a single protocol and redirector cannot connect to both types of servers, unless
	a workstation can be configured for dual protocols and redirectors.
	
	Microsoft Windows for Workgroups version 3.11 or Workgroup Add-On for MS- DOS
	version 3.11 provides a Microsoft Windows Network by default. Novell NetWare can
	be added for dual protocol/redirector configuration. After a proper
	installation, a drive letter can be assigned to a Windows NT or LAN Manager
	server, and a drive letter mapped to a Novell NetWare server. The Microsoft Mail
	EXTERNAL.EXE (MTA) can then use the two drive letters for transferring and
	delivering mail.
	
	NOTE: Microsoft network workstation is a native protocol/redirector for Windows
	for Workgroups 3.11 and Workgroup Add-On for MS-DOS, so you only need to add
	Novell NetWare to have dual connectivity.
	
	To add Novell NetWare support for Windows for Workgroups 3.11:
	
	1. Select the Network Setup icon in the Network program manager group.
	
	2. Choose Network, and select Other to install Windows Support for Additional
	  Networks.
	
	3. Select Novell NetWare (Workstation Shell 3.x) or Novell NetWare (Workstation
	  Shell 4.x) depending on if you are using NETX.EXE or VLM.EXE.
	
	
	4. Setup will prompt for Novell files NOT included with Windows for Workgroups
	  3.11. Novell makes these files available on its bulletin board service (BBS)
	  and in the Novell CompuServe forum (GO NOVFILES).
	
	  The current filenames are WINDR2.EXE and NWDLL2.EXE. However, it may change
	  from time to time. Contact your Novell service person or the Novell
	  CompuServe forum for more information on availability.
	
	NOTE: If you use NETX.EXE, a LastDrive=P will be placed in your CONFIG.SYS. If
	you use VLM.EXE, the LastDrive will equal Z.
	
	When LastDrive is set to P: NetWare drives are Q: through Z:, but local MS- DOS
	drive letters can be remapped to NetWare drives. For example, if a Windows NT or
	LAN Manager server is connected using
	
	  NET USE M: \\Server\Share
	
	where the Novell drive N: can then be mapped to MAP N:=SYS:MAILDATA. EXTERNAL.EXE
	can now be executed with a -DMN to service these two postoffices.
	
	NOTE: Once installed you should not attempt to run EXTERNAL.EXE from a MS-DOS
	prompt while in Windows. Instead you should boot the computer and start the
	network with a NET START BASIC command. Establish (NET USE or MAP) the
	postoffice drive letters, and execute EXTERNAL.EXE.
	
	To add Novell NetWare support for Workgroup Add-On for MS-DOS 3.11:
	
	- Run the SETUP program from floppy diskette while logged into your Novell
	  Network.
	
	  This will provide you the Microsoft network protocol/redirector, while keeping
	  your Novell NetWare configuration.
	
	Additional query words: 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a
	Version           : :3.2,3.2a
	
	=============================================================================
	
