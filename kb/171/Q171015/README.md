---
layout: page
title: "Q171015: How to Install and Configure Windows NT 4.0 Dial-Up Networking"
permalink: /kb/171/Q171015/
---

## Q171015: How to Install and Configure Windows NT 4.0 Dial-Up Networking

	Article: Q171015
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbsetup dun _IK12469 kbSDKPlatform kbGrpDSNet kbDialUpkbfaq
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to install and configure Windows NT 4.0 Dial- Up
	Networking (DUN) and the Remote Access Service (RAS) client for a connection to
	a Windows NT or third-party RAS Server.
	
	If you are using DUN and RAS to connect to an Internet service provider, please
	see the following articles in the Microsoft Knowledge Base:
	
	  Q156569 How to Connect to Internet Service Providers from Windows NT 4.0
	
	  Q161986 Troubleshooting Internet Service Provider Login Problems
	
	  Q163391 Troubleshooting Problems Communicating on the Internet
	
	MORE INFORMATION
	================
	
	Installing Dial-Up Networking and Remote Access Service
	-------------------------------------------------------
	
	To install DUN and RAS on your Windows NT 4.0-based computer, follow these
	steps:
	
	1. Click Start, point to Programs, point to Accessories, and then click Dial-Up
	  Networking.
	
	2. Click Install. When you are prompted, type the location of the Windows NT 4.0
	  installation files.
	
	  NOTE: If you are not prompted to install Dial-Up Networking, DUN and RAS have
	  already been installed. Skip to the "Configuring Dial-Up Networking" section
	  in this article.
	
	3. If you have not installed a RAS-capable device, the Remote Access Setup
	  program prompts you to invoke the Modem installer. Click Yes and follow the
	  instructions to install a modem.
	
	  If you have problems installing your modem, please see the following article
	  in the Microsoft Knowledge Base:
	
	  Q161516 Troubleshooting Modem Problems Under Windows NT 4.0
	
	4. In the list of RAS-capable devices, click the modem you just installed, and
	  then click OK.
	
	5. Click Configure, click Dial Out Only, and then click OK.
	
	6. Click Network, click the check boxes of the protocols to use for your
	  connection to select them, and then click OK.
	
	  NOTE: The protocols that are currently installed are selected by default. If
	  you choose a protocol that is not currently installed, you must install that
	  protocol using the Network tool in Control Panel.
	
	7. Click Continue, and then click Restart to restart your computer and finish
	  the installation.
	
	NOTE: If you have installed a Service Pack on your Windows NT-based computer, you
	must reapply the Service Pack before restarting your computer. For more
	information, please see the following article in the Microsoft Knowledge Base:
	
	  Q165418 Before Installing a Windows NT Service Pack
	
	Configuring Dial-Up Networking
	------------------------------
	
	To configure DUN to make a connection to a Windows NT or third-party RAS server,
	follow these steps:
	
	1. Click Start, point to Programs, point to Accessories, and then click Dial-Up
	  Networking.
	
	2. By default, there are no entries in the phone book. Click OK to add a new
	  entry. If you are reinstalling DUN, there may be existing phone book entries.
	  To create a new entry, click New.
	
	3. Type a name for the phone book entry to identify your connection, and then
	  click Next.
	
	4. Click any of the check boxes that apply for this connection to select them,
	  and then click Next. If you are unsure whether any of these check boxes
	  apply, see the RAS server administrator.
	
	5. Type the phone number for the RAS server, click Next, and then click Finish.
	
	6. Click Dial to connect.
	
	If you have problems connecting, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q162293 Troubleshooting RAS Client Issues in Windows NT 4.0
	
	Additional query words: isp tcpip netbeui ipx spx nwlink dns dhcp
	
	======================================================================
	Keywords          : kbenv kbnetwork kbsetup dun _IK12469 kbSDKPlatform kbGrpDSNet kbDialUp kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
