---
layout: page
title: "Q137853: Guest Account Allows FTP Users Access Without Authentication"
permalink: /kb/137/Q137853/
---

## Q137853: Guest Account Allows FTP Users Access Without Authentication

	Article: Q137853
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	If a Windows NT FTP server has the guest account enabled with no password
	assigned, anyone can log on to the server using FTP without knowing a
	username or password. This situation occurs even if the FTP Server Service
	is configured for "Allow Anonymous Connections" using a username and
	password.
	
	To prevent unauthorized connections to the FTP server, do one of the
	following:
	
	- Disable the guest account.
	
	- Place a password on the guest account.
	
	- Configure the FTP Service to Allow Only Anonymous Connections by placing a
	  username and password on the account.
	
	For more information on configuring the FTP Server Service, see Chapter 7,
	"Using the Microsoft FTP Server Service," in the Windows NT Server "TCP/IP"
	manual.
	
	Additional query words: prodnt security user manager remote
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
