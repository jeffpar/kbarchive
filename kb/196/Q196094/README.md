---
layout: page
title: "Q196094: How to Manually Install Small Business Server Clients"
permalink: /kb/196/Q196094/
---

## Q196094: How to Manually Install Small Business Server Clients

	Article: Q196094
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 4.0,4.0a
	Operating System(s): 
	Keyword(s): sbs
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	- the operating system: Microsoft Windows NT 4.0 
	- the operating system: Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is highly recommended that all Small Business Server client computers be
	configured using the client setup disk that is created through the Manage Server
	Console. However, there may be situations where an administrator may need to
	configure client computer manually.
	
	MORE INFORMATION
	================
	
	For Microsoft Windows 95, Windows 98, and Windows Millennium Edition (Me) Client Computers
	------------------------------------------------------------------------------------------
	
	First, create a user for the client computer by using the Manage Users Console on
	the Small Business Server.
	
	Next, on the client computer:
	
	1. Verify that the TCP/IP protocol is installed and configured for DHCP.
	
	  NOTE: Client computers should not be configured with static WINS, DNS, or
	  default gateway settings unless a pre-existing network requires it.
	
	2. Client for Microsoft Networks must be installed and configured as follows:
	
	  a. Select the "Logon to Windows NT Domain" check box.
	
	  b. Specify the name of the SBS server's Windows NT Domain.
	
	3. On the Identification tab of the Network Properties, the workgroup name must
	  be the same as the domain you are logging on to.
	
	4. File and Print Sharing should be installed and configured for User Level
	  Access Control for the SBS domain.
	
	5. Restart the client computer.
	
	For Windows NT Workstation Computers
	------------------------------------
	
	First, create a user for the client computer by using the Manage Users Console on
	the Small Business Server.
	
	1. On the server, create a machine account for the Windows NT Workstation
	  computer by using Server Manager.
	
	Then, on the Client Machine:
	
	2. Verify the TCP/IP protocol is installed and configured for DHCP.
	
	  NOTE: Client computers should not be configured with static WINS, DNS, or
	  default gateway settings unless a pre-existing network requires it.
	
	3. In Control Panel, open the Network tool and select the Identification tab.
	  The Windows NT Workstation computer needs to be a member of the same domain
	  as the SBS server.
	
	4. Restart the client computer
	
	After this information is installed and configured correctly, the client computer
	should be able to log on to the domain and get a logon script. At this point,
	you can install the individual client applications through a network connection
	to the server. All of the client applications setups are located at the
	following path:
	
	  \\servername\clients\ms
	
	There are individual directories for each of the following client applications:
	
	  Exchange     =  Microsoft Exchange Client Software
	  Fax          =  Fax Client Software
	  Ie           =  Internet Explorer
	  Modemshr     =  Modem Sharing Client Software
	  Ntsp3        =  Windows NT Service Pack 3 for Client Workstations Only
	  Outlook      =  Microsoft Outlook Client
	  Proxy        =  WinSock Proxy Client
	
	You can install any or all of the client applications to the client computers.
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : sbs 
	Technology        : kbOSWin98 kbOSWin95 kbAudDeveloper kbOSWinME kbOSWinSearch kbOSWinNT400 kbSBServSearch kbSBServ400 kbSBServ400a kbOSWinNTSearch
	Version           : :4.0,4.0a
	Issue type        : kbhowto
	
	=============================================================================
	
