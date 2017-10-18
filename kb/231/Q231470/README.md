---
layout: page
title: "Q231470: SFU Telnet Security Overview"
permalink: kb/231/Q231470/
---

## Q231470: SFU Telnet Security Overview

	Article: Q231470
	Product(s): Microsoft Windows NT
	Version(s): 2.0,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Workstation versions 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Services for UNIX Add-On Pack 
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	
	MORE INFORMATION
	================
	
	Only users who have the "Log on Locally" permission can gain access to the
	Telnet server from the local computer's console. The Telnet server included with
	the Services for UNIX Add-On Pack enables users to log on to the server over the
	network. Users who have the permission to log on locally can make changes to the
	computer over the network as though they were actually working on it locally.
	The following groups have the "Log on Locally" permission enabled by default on
	computers running Windows NT:
	
	- Administrators
	- Everyone
	- Guests
	- Power Users
	- Users
	
	NOTE: We recommend that you deny this permission to the Everyone and Guests
	groups.
	
	A Windows NT Server configured as a domain controller is configured by default to
	give the following groups the "Log on Locally" permission:
	
	- Account Operators
	- Administrators
	- Backup Operators
	- Print Operators
	- Server Operators
	
	The "Access this computer from the network" permission enables a user to connect
	to the computer over the network. The following groups have this permission
	enabled by default on a computer running Windows NT:
	
	- Administrators
	- Everyone
	- Power Users
	
	The following groups have the "Access this computer from the network" permission
	enabled by default on a Windows NT Server configured as a domain controller:
	
	- Administrators
	- Everyone
	
	Although you usually start a Telnet session using a network connection, the shell
	is running locally on the computer. The users or groups that connect need to
	have the "Log on Locally" permission enabled to gain access to the Windows NT
	SFU Telnet server. You can create a Telnet User group that has the "Log on
	Locally" permission enabled, and then add each user you want to gain access the
	Telnet server.
	
	For additional information about permissions, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q231953 How to Restrict Permissions for Telnet Users w/Services for UNIX
	
	For more information about Windows NT Security, please obtain a whitepaper about
	securing Windows NT installations at the following Microsoft Web site:
	
	  http://www.microsoft.com/ntserver/security/exec/overview/Secure_NTInstall.asp
	
	Additional query words: SFU telnetd solar coaster
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400search kbWinNTServicesUnix kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : :2.0,4.0 SP3,4.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
