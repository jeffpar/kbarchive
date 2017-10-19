---
layout: page
title: "Q214443: Small Business Server Client Installation Process"
permalink: /kb/214/Q214443/
---

## Q214443: Small Business Server Client Installation Process

	Article: Q214443
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 4.0,4.0a,95
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	- the operating system: Microsoft Windows NT 4.0 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	- the operating system: Microsoft Windows 98 Second Edition 
	- the operating system: Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes what happens in the background when a client disk is
	created and then run on a computer running Windows 95, Windows 98, Windows
	Millennium Edition (Me), or Windows NT Workstation 4.0.
	
	MORE INFORMATION
	================
	
	Creating the Client Disk
	------------------------
	
	The Setup Computer Wizard is used to create the client disk. During this process,
	a script that will tell the client computer to get application and configuration
	information from the server is created. The name of the script is Netparam.ini.
	The script is based on a Response File. The Response File is a standardized
	script that Microsoft BackOffice Small Business Server uses to build the setup
	disk.
	
	Netparam.ini, along with the Setup program, is saved to a disk. This compiled
	script cannot be saved on the server nor can it be run across the network.
	
	Using the Client Disk
	---------------------
	
	After the client disk is created, the client disk is taken to the client computer
	and the Setup program runs on the client computer. The Setup program does
	several things, including checking to see if there is a network adapter
	installed on the computer. If a network card is detected and TCP/IP is present,
	the network settings are configured. These settings are the machine name, the
	workgroup name, the sharing level, and the TCP/IP settings for obtaining an IP
	address from a DHCP server.
	
	The machine is restarted when the network settings are put into place. The Setup
	program then installs each specified application. Shortcuts to the user's own
	shared folder and to the Company Shared Folders directory are created on the
	client desktop. Internet Explorer is set up to start with the Client Online
	Guide as the home page.
	
	The client installation process generates the user's logon script and stores it
	on the SBS server in the Netlogon share. This script can be modified later, if
	needed.
	
	Additional query words: SBS client setup smallbiz
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbOSWin98 kbOSWin95 kbAudDeveloper kbOSWinME kbOSWin98SE kbOSWinSearch kbOSWinNT400 kbSBServSearch kbSBServ400 kbSBServ400a kbOSWinNTSearch
	Version           : :4.0,4.0a,95
	Issue type        : kbinfo
	
	=============================================================================
	
