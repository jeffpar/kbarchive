---
layout: page
title: "Q201194: How to Configure Telnet NTLM Authentication"
permalink: /kb/201/Q201194/
---

## Q201194: How to Configure Telnet NTLM Authentication

	Article: Q201194
	Product(s): Microsoft Windows NT
	Version(s): 2.0,4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Services for UNIX Add-On Pack 
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Telnet server in Windows NT Services for UNIX can be set to use Windows NT
	LAN Manager (NTLM) authentication only. This ability provides increased security
	during the Telnet authentication and prevents telnet user credentials from being
	passed as clear text over the network.
	
	MORE INFORMATION
	================
	
	When the Telnet server is set to enable only NTLM authentication, only Telnet
	clients that support NTLM authentication Telnet protocol may be able to connect
	to the Telnet server.
	
	Presently, only the Console Telnet client from Windows NT Services for UNIX
	supports NTLM authentication. The basic Telnet client included in Windows NT 4.0
	does not support NTLM authentication.
	
	When the client is configured for NTLM authentication, the user may not have to
	enter his or her user name/password. Logging on may happen automatically for all
	domain authenticated users who have been granted telnet logon local user rights
	on the server.
	
	To set the Telnet server to use only NTLM authentication, follow these steps:
	
	1. Click Start, click Run, type "tlntadmn" (without the quotation marks), and
	  then click OK.
	
	2. Select Display, and then select Change Registry Settings.
	
	3. Select NTLM.
	
	4. Change the NTLM value to 2 for NTLM ONLY.
	
	5. Restart the Telnet server.
	
	NOTE: NTLM value 0 is NTLM not available. The Telnet server does only clear text
	authentication. NTLM value 1 is NTLM or logon prompt where NTLM is tried before
	the logon prompt. If the client supports NTLM, but authentication stops
	responding, the server may then send the logon prompt. If the client does not
	support NTLM, the server sends the logon prompt.
	
	To set the Telnet client to use only NTLM authentication:
	
	1. Click Start, click Run, type "telnet" (without the quotation marks), and then
	  click OK.
	
	2. Type "set NTLM" (without the quotation marks), and then press ENTER.
	
	3. This option may now require the Telnet client to use NTLM authentication.
	
	NOTE: In User Manager for Domains, if the "User must change password at next
	logon" password option is set for the user, an attempt to log on to the Telnet
	server fails when NTLM authentication is used. The user must log on to the
	domain directly, change his or her password, and then log on through telnet.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTServicesUnix kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : :2.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
