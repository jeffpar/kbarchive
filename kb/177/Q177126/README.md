---
layout: page
title: "Q177126: INFO: How to Specify NetWare Parameters in an Unattended Setup"
permalink: kb/177/Q177126/
---

## Q177126: INFO: How to Specify NetWare Parameters in an Unattended Setup

	Article: Q177126
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbOPK kbSBK
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to configure an unattended Setup of Windows NT with
	the parameters for your Novell NetWare network.
	
	MORE INFORMATION
	================
	
	Specifying the NetWare Server
	-----------------------------
	
	To configure your unattended Setup for your preferred NetWare server, edit the
	following sections of your Unattend.txt file:
	
	     [<Services section>]
	     NWWKSTA = <NetWare Client Parameters>
	
	     [<NetWare Client Parameters>]
	     !DefaultLocation = "<preferred_server>"
	
	Specifying the NDS Tree and Context
	-----------------------------------
	
	To configure your unattended Setup for your NDS default tree and context, edit
	the following sections of your Unattend.txt file:
	
	     [<Services section>]
	     NWWKSTA = <NetWare Client Parameters>
	
	     [<NetWare Client Parameters>]
	     !DefaultLocation = "<tree\context>"
	
	For example:
	
	     !DefaultLocation = "ABC\MARKETING.US"
	
	In this example, ABC is your default tree and MARKETING.US is your default
	context.
	
	Configuring the Login Script Option
	-----------------------------------
	
	To define the login script type that Windows NT processes, edit the following
	section of your Unattend.txt file:
	
	     [<NetWare Client Parameters>]
	     !DefaultScriptOptions
	     Value: 0 | 1 | 3
	
	For example:
	
	  !DefaultScriptOptions = 3
	
	If you set the value to 0, login scripts are ignored. If you set the value to 1,
	only NetWare 3.x login scripts are processed. If you set the value to 3, NetWare
	3.x or NetWare 4.0 login scripts are processed.
	
	For additional information about Windows NT deployment, see the following article
	in the Microsoft Knowledge Base:
	
	Q155644 Available Resources for Windows NT 4.0 Deployment
	
	Additional query words: logon Unattended Setup
	
	======================================================================
	Keywords          : kbnetwork kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
