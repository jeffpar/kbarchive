---
layout: page
title: "Q254367: How to Configure pcAnywhere Behind a Proxy Server"
permalink: kb/254/Q254367/
---

## Q254367: How to Configure pcAnywhere Behind a Proxy Server

	Article: Q254367
	Product(s): Microsoft Windows NT
	Version(s): 2.0,4.5
	Operating System(s): 
	Keyword(s): kb3rdparty kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.5 
	- Microsoft BackOffice Small Business Server version 4.5 
	- Microsoft Proxy Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to configure pcAnywhere to use behind a Proxy Server
	for purposes of remote control through Proxy Server 2.0.
	
	MORE INFORMATION
	================
	
	To configure pcAnywhere on a client computer behind Proxy Server:
	
	1. Install the Microsoft Winsock Proxy client on the internal client (Microsoft
	  Windows NT, Microsoft Windows 95, or Microsoft Windows 98) that will be the
	  pcAnywhere 8.0 host (if not already done). You can do this by connecting to
	  \\<servername>\Msplnt and running the Setup.exe program from this
	  folder.
	
	2. Be sure that the Winsock Proxy client is properly installed by using the
	  Chkwsp32 utility from the client computer. You may also want to test the
	  Winsock Proxy client by using a Winsock program, such as File Transfer
	  Protocol (FTP), from a command prompt to ensure that the Winsock Proxy client
	  is configured properly.
	
	3. Create a Wspcfg.ini file and save it in the folder where the Awhost32.exe
	  file is installed (by default this is in the Program Files\PcAnywhere
	  folder). The contents of this file depend on the client operating system and
	  the Proxy Server configuration. If either of the following conditions exist:
	
	   - Windows 98 is the client or host operating system for pcAnywhere
	
	  -or-
	
	   - Microsoft Windows NT is the client or host operating system and Access
	     Control is disabled for Winsock Proxy on the Proxy Server
	
	  use the following Wspcfg.ini file to bind pcAnywhere to an IP address on the
	  Proxy Server's external interface:
	
	  [awhost32]
	  ProxyBindIp=5631:<1st IP address>
	  ServerBindTCPPorts=5631
	  LocalBindTCPPorts=65301
	  KillOldSession=1
	  Persistent=1
	
	  If the client or host computer is using Windows NT and Access Control is
	  enabled for Winsock Proxy on the Proxy Server, use the following Wspcfg.ini
	  file:
	
	  [awhost32]
	  ProxyBindIp=5631:<1st IP address>
	  ServerBindTCPPorts=5631
	  LocalBindTCPPorts=65301
	  KillOldSession=1
	  Persistent=1
	  ForceCredentials=1
	
	  NOTE: Verify that the Wspcfg.ini file is saved without the .txt file name
	  extension.
	
	If the client or host computer is using Windows NT and Access Control is enabled
	for Winsock Proxy on the Proxy Server, the following additional steps are
	required:
	
	1. On the Proxy Server, create two protocol definitions:
	
	Protocol Name: PcAnywhere-UDP
	Initial Connection:
	 Port=5632
	 Type=UDP
	 Direction=Inbound
	Port Ranges for subsequent connections:
	 Port=1025-5000
	 Type=TCP
	 Direction=Outbound
	
	Protocol Name: PcAnywhere-TCP
	Initial Connection:
	 Port=5631
	 Type=TCP
	 Direction=Inbound
	Port Ranges for subsequent connections:
	 Port=1025-5000
	 Type=TCP
	 Direction=Outbound
	
	2. Run the Credtool.exe program on the client computer to provide credentials
	  for the Awhost32.exe program. From the client computer, open a command prompt
	  and change folders to the Program Files\Pcanywhere folder, and then run the
	  following command:
	
	  credtool -w -n awhost32 <username><domain><password>
	
	3. Configure pcAnywhere so that it does not run as a service. To do this:
	
	  a. Right-click the pcAnywhere icon on the host computer, such as Network or
	     Direct, and then click Properties.
	
	  b. On the Settings tab, click to clear the "Run As a Service" check box in
	     the "Host Startup" section.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	4. On the host with pcAnywhere versions 8.0 or higher installed, add the
	  following entry to the registry:
	
	  HKEY_LOCAL_MACHINE\Software\Symantec\pcAnywhere\CurrentVersion\System
	
	  Create a DWORD entry called TCPIPConnectIfUnknown with the value set to "1".
	
	For additional information about how to configure multiple pcAnywhere hosts
	behind a Proxy Server, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q201666 How to Configure Multiple PcAnywhere 8.0 Hosts Behind Proxy 2.0
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbtool 
	Technology        : kbAudDeveloper kbBackOfficeSearch kbProxyServSearch kbSBServSearch kbBackOfficeServ450 kbSBServ450 kbProxyServ200
	Version           : :2.0,4.5
	Issue type        : kbhowto
	
	=============================================================================
	
