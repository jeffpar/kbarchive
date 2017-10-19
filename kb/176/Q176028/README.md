---
layout: page
title: "Q176028: Adding NetBIOS over IPX Support to Network Client 3.0"
permalink: /kb/176/Q176028/
---

## Q176028: Adding NetBIOS over IPX Support to Network Client 3.0

	Article: Q176028
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbinfo kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you installing Microsoft Network Client 3.0 for MS-DOS and using the NWLink
	IPX Compatible Transport protocol, NetBIOS support for IPX is not available.
	
	The client was designed to use the IPX protocol without the aid of the NetBIOS
	support layer in a process known as direct hosting. However, NetBIOS support for
	IPX can be added when Network Client is installed over existing Novell client
	software (VLM or NETX). If Novell's Netbios.exe is loaded with the existing
	Novell client software, Network Client will be able to use it to connect to
	other Microsoft network servers using NetBIOS over IPX.
	
	To install Network Client with your existing Novell client software, perform the
	following steps:
	
	1. Install the Novell client software and insure that it is functioning
	  correctly.
	
	2. Modify the Autoexec.bat file to load Novell's Netbios.exe after Ipxodi.exe.
	
	3. Install Network Client, selecting IPX/SPX Support Driver as the Network
	  Adapter.
	
	NOTE: The existing Novell client software must be loaded before you will be able
	to install Network Client with the IPX/SPX Support Driver.
	
	MORE INFORMATION
	================
	
	Sample Config.sys
	
	     DEVICE=C:\DOS\HIMEM.SYS
	     DEVICE=C:\DOS\EMM386.EXE NOEMS
	     DOS=HIGH,UMB
	     LASTDRIVE=Z
	     DEVICEHIGH=C:\NET\IFSHLP.SYS
	
	Sample Autoexec.bat
	
	     SET PATH=C:\NET\;C:\DOS
	     C:\NWCLIENT\LSL.EXE
	     C:\NWCLIENT\EXP16ODI.EXE
	     C:\NWCLIENT\IPXODI.EXE
	     C:\NWCLIENT\NETBIOS.EXE
	     C:\NWCLIENT\VLM.EXE
	     C:\NET\NET START
	
	The Novell client software discussed in this article is manufactured by Novell, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	======================================================================
	Keywords          : kbinfo kbArtTypeINF 
	Technology        : kbAudDeveloper kbZNotKeyword kbNetworkClientSearch kbNetworkClient300DOS
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	
	=============================================================================
	
