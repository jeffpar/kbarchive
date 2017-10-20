---
layout: page
title: "Q125961: How to Configure Chameleon PPP Client Software for Windows NT"
permalink: /kb/125/Q125961/
---

## Q125961: How to Configure Chameleon PPP Client Software for Windows NT

{% raw %}

	Article: Q125961
	Product(s): Microsoft Windows NT
	Version(s): 3.5 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 4.0 
	- Microsoft Windows NT Server versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how you can configure NetManage's Chameleon PPP
	(Point-to-Point Protocol) client software, included with Chameleon NFS version
	4.01 and Internet Chameleon version 4.03 for Windows NT Remote Access Service
	(RAS). Please contact NetManage technical support for further assistance.
	
	MORE INFORMATION
	================
	
	To set up the Chameleon PPP client software for Windows NT, configure both the
	Chameleon installation and the Windows NT RAS server as follows:
	
	Configuring Chameleon
	---------------------
	
	1. Make sure you have Chameleon NFS version 4.01 or Internet Chameleon version
	  4.03 installed on the client computer.
	
	2. Windows NT RAS uses password authentication protocol (PAP) for password
	  authentication of third-party RAS client software. Therefore, use valid user
	  and password information that matches the Windows NT RAS server's user
	  account (Refer to Step 7 in the Windows NT Configuration below).
	
	3. Verify that the following lines are in the SLIP.INI file (used to send
	  scripts for the Chameleon PPP client software):
	
	  [PPP]
	  SCRIPT=-n
	  TYPE=PPP
	
	4. If the Windows NT RAS server is providing the IP address, select IP Address
	  from the Chameleon PPP client software Custom menu and specify the address:
	  0.0.0.0
	
	  NOTE: If you do not want Windows NT RAS server to provide the IP address, make
	  sure that you select the "Allow Remote Clients To Request A Predetermined IP
	  Address" option in Step 4 below.
	
	Configuring Windows NT
	----------------------
	
	1. Run Control Panel and choose Network. For Installed Network Software select
	  Remote Access Service. Choose the Configure button.
	
	2. In the Remote Access Setup dialog box, select the device and choose
	  Configure. For Port Usage, verify that you have selected either Receive Calls
	  Only or Dial Out And Receive Calls. Choose OK.
	
	3. In the Remote Access Setup dialog box, choose Network. In Server Settings,
	  make sure you have TCP/IP enabled for Allow Remote Clients Running. The
	  Chameleon PPP client software does not support any other PPP protocols. If
	  this is the only PPP client software, you can disable NetBEUI and IPX.
	
	4. For more network options for the Chameleon PPP client software, choose TCP/IP
	  Configure. In the RAS Server TCP/IP Configuration dialog box, you can:
	
	  - Choose to allow remote TCP/IP clients to access the Entire Network or This
	  Computer Only.
	
	  - Use DHCP to assign remote TCP/IP client addresses.
	
	  - Use a static address pool.
	
	  - Allow remote clients to request a predetermined IP address.
	
	  When you are finished with the configuration, choose OK.
	
	5. In the Network Configuration dialog box, ensure you have "Allow Any
	  Authentication Including Clear Text" selected for Encryption settings. Choose
	  OK and quit Remote Access Setup.
	
	6. Run Control Panel and select Services. Locate Remote Access Server. If it has
	  not started, select Start.
	
	7. Run Remote Access Admin. Select Permissions from the Users menu. Ensure the
	  Chameleon PPP client software users have dial-in permissions.
	
	The Chameleon product discussed here is manufactured by NetManage, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt rasadmin
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS350search
	Version           : 3.5 4.0
	
	=============================================================================
	

{% endraw %}
