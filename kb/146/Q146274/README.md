---
layout: page
title: "Q146274: INFO: Limitation of SNA Server Client Using Network Client 3.0"
permalink: /kb/146/Q146274/
---

## Q146274: INFO: Limitation of SNA Server Client Using Network Client 3.0

	Article: Q146274
	Product(s): Microsoft SNA Server
	Version(s): MS-DOS:3.0; WINDOWS:2.0,2.1,2.11 SP1;2.11 SP2,3.0 (all SP),4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11 SP1, 2.11 SP2, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to use the SNA Server Clients in MS-DOS and Windows 3.x with
	Network Client 3.0 for MS-DOS. However, there are some limitations that affects
	the SNA Server Client installation and configuration.
	
	
	NOTE: The Network Client 3.0 files are located in the \Clients\MSClient directory
	on the Windows NT Server compact disc.
	
	MORE INFORMATION
	================
	
	The following limitations exist when you use the SNA Server Client in MS- DOS
	and Windows 3.x with Network Client 3.0:
	
	- The SNA Server Client does not work if you install the IPX/SPX Compatible
	  Transport (NWLink) protocol in Network Client 3.0.
	
	- When you install the SNA Server Windows 3.x Client on a Network Client 3.0
	  network operating system, the following error message appears:
	
	  No Windows network Installed
	
	  The SNA Server Client Setup looks for the LANMAN.INI and the NETAPI.DLL files
	  when you use a DOS LAN Manager client. However, these two files do not exist
	  for Network Client 3.0. To work around this problem, you must copy the
	  NETAPI.DLL file from a DOS LAN Manager client installation to the Network
	  Client 3.0 directory (usually C:\NET). For additional information on how the
	  SNA Server Client determines the network operating system, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q128118 SNA Server Win3.x Client Setup Err Msg: No Windows network...
	
	- The SNA Server Client communicates with the SNA Server using named pipes if
	  you select Microsoft Networking as the Client/Server Protocol during Setup.
	  However, Network Client 3.0 does not support asynchronous named pipes when
	  the Client is running under Enhanced Mode Windows. Therefore, you must run
	  Windows in standard mode if you want to communicate with the SNA Server. If
	  you run Windows in enhanced mode and start the SNA Server Client, the
	  following error message appears:
	
	  SNA Server Error: 546
	  Cannot establish connection with SNA Server.
	
	- Network Client 3.0 supports the TCP/IP protocol. Both Network Client and SNA
	  Server Client are Winsock compliant. To enable Sockets in Network Client 3.0,
	  please see the following articles in the Microsoft Knowledge Base:
	
	  Q128751 No "Advanced" button in Client TCP/IP Configuration Box
	
	  Q142062 Unable to Run Win16 Sockets Application under Windows 3.1
	
	  After you enable Sockets, you can configure the SNA Server Client to use
	  TCP/IP as the Client/Server Protocol. This allows you to communicate with the
	  SNA Server using TCP/IP Sockets instead of name pipes. As a result, you can
	  run Windows in enhanced mode. You must configure the SNA Server Client as
	  Remote even though you are logging on to the same domain as the SNA Server.
	  The IP addresses of the SNA Server is required in the Primary and Backup
	  Server fields. If you enter the name of the SNA Server in these fields, SNA
	  Server Error 546 appears. If you configure the Client as Local, SNA Server
	  Errors 546 and 629 appear.
	
	As an alternative, you can use the DOS LAN Manager client. The limitations listed
	above do not apply to the DOS LAN Manager client. The Setup files for the DOS
	LAN Manager client is located in the \Clients\Lanman directory on the Windows NT
	Server compact disc.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : MS-DOS:3.0; WINDOWS:2.0,2.1,2.11 SP1;2.11 SP2,3.0 (all SP),4.0,4.0 SP1,4.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
