---
layout: page
title: "Q139904: How to Configure Your DHCP Server Scope"
permalink: /kb/139/Q139904/
---

## Q139904: How to Configure Your DHCP Server Scope

{% raw %}

	Article: Q139904
	Product(s): Microsoft Windows NT
	Version(s): 3.11,3.11a,3.11b,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is supplied to help explain what the Dynamic Host
	Configuration Protocol (DHCP) is, how to configure the DHCP server and enable a
	Windows NT as well as Windows for Workgroups DHCP client.
	
	MORE INFORMATION
	================
	
	Implementing DHCP eliminates some of the configuration problems associated with
	manually configuring TCP/IP. DHCP centralizes TCP/IP configurations and manages
	the allocation of TCP/IP configuration information by automatically assigning IP
	addresses to computers configured to use DHCP.
	
	DHCP Requirements
	-----------------
	
	The following requirements need to be met by the DHCP server:
	
	- The DHCP server service is running on a Windows NT Server on at least one
	  computer within the TCP/IP internetwork.
	
	  NOTE: Your IP routers must support RFC 1542, otherwise you need a DHCP server
	  or a DHCP Relay agent on each subnet.
	
	- A DHCP scope exists on the DHCP server.
	
	  A DHCP scope consists of a pool of IP addresses the DHCP server can assign or
	  lease to DHCP clients. For example:
	
	  xxx.107.3.51 through xxx.107.3.200
	
	  where xxx is any valid number for the first octet of the IP address.
	
	The following requirements need to be met by the DHCP client:
	
	- The client computer has a DHCP supported operating system. The following
	  operating systems are capable of being a DHCP client with DHCP enabled at the
	  client:
	
	  - Windows NT Server 3.5, 3.51, and 4.0
	  - Windows NT Workstation 3.5, 3.51, and 4.0
	  - Windows 95
	  - Windows for Workgroups 3.11 with the Microsoft TCP/IP-32 for Windows for
	  Workgroups installed
	  - MS Network Client 3.0 for MS-DOS with the real mode TCP/IP driver installed
	  - LAN Manager 2.2c
	
	Installing the DHCP Server Service
	----------------------------------
	
	Prior to installing the DHCP service, you must log on as administrator from the
	primary domain controller. To install the DHCP Server service, follow these
	steps:
	
	1. Run Control Panel and choose Network.
	
	2. Choose Add Software.
	
	3. In the Add Network Software dialog box, select TCP/IP Protocol And Related
	  Components, and then choose Continue.
	
	  The Windows NT TCP/IP Installation Options dialog box appears, displaying the
	  TCP/IP components available to be installed.
	
	4. Select DHCP Server Service, and then choose Continue.
	
	  The Windows NT setup box appears, prompting you for the full path of the
	  Windows NT distribution files.
	
	  NOTE: You may be prompted with the following message:
	
	  At least one of your adapters has automatic DHCP configuration enabled. In
	  order to correctly install the DHCP server, setup will disable automatic DHCP
	  configuration. Are you sure you want to install the DHCP Server?
	
	  Choose Continue.
	
	5. Type the path to the location of Windows NT Server distribution files, and
	  choose Continue.
	
	  If you install from compact disc, the path is under the \I386 directory.
	
	  The TCP/IP configuration Box appears.
	
	6. Enter the static IP address of the DHCP Server as well as the subnet mask and
	  the default gateway. If you use Windows Internet Name Service (WINS), add the
	  primary and secondary WINS addresses here.
	
	  The appropriate files are copied to your server, and then the Network Settings
	  dialog box appears.
	
	7. Choose OK.
	
	  A Network Settings Change dialog box appears, indicating that the system must
	  be restarted to initialize the new configuration.
	
	8. Save any unsaved work in other windows and choose Restart Now to restart
	  Windows NT Server.
	
	9. Log on as Administrator.
	
	Configuring a DHCP Scope
	------------------------
	
	Be sure to install and initialize the DHCP Server before completing the next
	step.
	
	To configure the DHCP scope, you must log on as administrator. Configuring the
	DHCP scope supplies the DHCP client with the range of IP addresses from which
	the server draws from and a subnet mask to be assigned to clients.
	
	The DHCP Server provides:
	
	- Default gateway address
	
	- Domain Name
	
	- Service server addresses
	
	- WINS server addresses
	
	- NETBIOS name resolution type.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q121005
	  TITLE : DHCP Options Supported by Clients
	
	1. From the Network Administration group, start DHCP Manager.
	
	  The DHCP Manager window appears.
	
	2. Under DHCP Servers, select *Local Machine*
	
	  Local Machine indicates that you are configuring the local DHCP server, and
	  not a remote DHCP server.
	
	3. From the Scope menu, choose Create.
	
	  The Create Scope dialog box appears.
	
	4. Complete the scope configuration.
	
	  The DHCP server cannot be a DHCP client. It must have a static IP address,
	  subnet mask, and default gateway address. You also have the option of
	  assigning an exclusion range or specific excluded addresses as well as lease
	  duration and a name.
	
	5. Choose OK when done.
	
	6. Choose Yes to activate the scope.
	
	  The DHCP Manager window appears with the new scope added. Notice the yellow
	  light bulb next to the IP address. This indicates an active scope.
	
	7. Close the DHCP Manager.
	
	Enabling DHCP at the Client
	---------------------------
	
	To enable the Windows NT DHCP client, you must log on as administrator at the
	Windows NT client.
	
	Normally, you enable DHCP as part of the installation procedure for Microsoft
	TCP/IP, however, you can use this procedure if you have manually configured
	TCP/IP:
	
	1. Run Control Panel and choose Network.
	
	  The Network Settings dialog box appears.
	
	2. Under Installed Network Software, select TCP/IP Protocol and then choose
	  configure.
	
	  The TCP/IP configuration dialog box appears.
	
	3. Select Enable Automatic DHCP Configuration.
	
	  A Microsoft (MS) TCP/IP message appears, indicating that the DHCP Protocol
	  attempts to configure the server automatically during system initialization.
	
	4. Choose Yes.
	
	  A MS TCP/IP Configuration dialog box appears, displaying current TCP/IP
	  configuration parameters. The IP Address and Subnet Mask boxes are not
	  available (grayed out) and the manually configured values are no longer
	  displayed.
	
	5. Choose OK to return to the Network Settings dialog box.
	
	6. Choose OK again.
	
	7. Shut down and restart the computer.
	
	To enable DHCP on a Windows for Workgroups client if TCP/IP is not installed
	yet:
	
	1. Use Network Setup to install the MS TCP/IP-32 3.11 protocol.
	
	2. In the MS TCP/IP Configuration dialog box, select the Enable Automatic DHCP
	  Configuration check box, and choose Continue.
	
	3. Restart the computer to initialize TCP/IP using DHCP.
	
	To enable DHCP on a Windows for Workgroups client if TCP/IP is installed:
	
	1. To access the Network Drivers dialog box, run Network Setup.
	
	2. Select Microsoft TCP/IP-32 3.11, and then choose Setup.
	
	3. In the MS TCP/IP Configuration dialog box, select the Enable Automatic DHCP
	  Configuration check box, and choose continue.
	
	  A message box appears indicating that the configuration of DHCP overrides any
	  values established locally.
	
	4. Choose Yes.
	
	5. To initialize TCP/IP using DHCP information, restart the computer.
	
	Additional query words: 3.11 reskit grey greyed
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : :3.11,3.11a,3.11b,3.5,3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
