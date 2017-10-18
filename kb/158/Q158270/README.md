---
layout: page
title: "Q158270: SNA 2.11 SP1 Win 3.x Client Logon Fails if NT Password Expired"
permalink: kb/158/Q158270/
---

## Q158270: SNA 2.11 SP1 Win 3.x Client Logon Fails if NT Password Expired

	Article: Q158270
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 SP1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use SNA Server version 2.11 Service Pack 1 (SP1) Windows 3.x client
	software, and you connect to SNA Server over TCP/IP sockets, NetWare IPX/SPX, or
	Banyan IP, you may experience the following problem.
	
	The SNA Server 2.11 SP1 Windows 3.x client software supports the ability for SNA
	client users to change their Microsoft Windows NT password, if the Windows NT
	administrator has configured their user accounts to User Must Change Password at
	Next Logon.
	
	However, if the Windows NT password has expired, the SNA client logon fails with
	the following error messages and never prompts the user to enter a new
	password:
	
	  SNA Server Logon Error
	  The logon attempt to SNA Server failed due to a bad user ID, password
	  or domain.
	
	  SNA Server Error: 546
	  Cannot establish connection with SNA Server <servername>
	
	CAUSE
	=====
	
	SNA Server was not checking the SubStatus return value from the LsaLogonUser()
	call, and only checking the main return code, which Windows NT sets to
	STATUS_ACCOUNT_RESTRICTION (0xC000006E) when the user's password has expired. If
	the user account is configured to require a password change at next logon,
	Windows NT returns a return code of STATUS_PASSWORD_MUST_CHANGE, so this problem
	did not occur.
	
	RESOLUTION
	==========
	
	A hotfix to SNADMOD.DLL is available that corrects this problem. SNA Server now
	checks the SubStatus return value from the LsaLogonUser() call if the return
	code is STATUS_ACCOUNT_RESTRICTION. If the SubStatus is set to
	STATUS_PASSWORD_EXPIRED, SNA Server notifies the SNA Win 3.x client software to
	prompts the user to enter a new password.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	2.11 Service Pack 1. This problem was corrected in the latest Microsoft SNA
	Server 2.11 U.S. Service Pack. For information on obtaining the service pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: sp1 prodsna
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211SP1
	Version           : WINDOWS:2.11 SP1
	
	=============================================================================
	
