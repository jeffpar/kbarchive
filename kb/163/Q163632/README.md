---
layout: page
title: "Q163632: Windows NT User Account Database Search Order"
permalink: kb/163/Q163632/
---

## Q163632: Windows NT User Account Database Search Order

	Article: Q163632
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a session is established on the Microsoft Windows NT Server Service, the
	user account database or SAM (security account manager) database that is used to
	validate the credentials is chosen based on certain rules. The server looks at
	the domain name field in the server message block (SMB) file and at the print
	sharing protocol to determine which database will be authoritative.
	
	MORE INFORMATION
	================
	
	Windows NT uses the following rules to determine which user account database to
	use when validating a user's credentials:
	
	1. If the domain name provided is a trusted domain, pass-through authentication
	  is used to pass the credentials to the trusted domain for validation. If the
	  user account does not exist in the trusted domain and the guest account is
	  enabled on the local machine, the guest account is used.
	
	2. If the domain name provided is that of the domain controller itself, the
	  domain controller will use its local SAM database. If the server or
	  workstation being accessed is a member of that domain, the request is
	  processed remotely using pass-through authentication through the implicit
	  trust to one of its domain controllers. If the username provided does not
	  exist in this primary domain and the guest account is enabled on the local
	  machine, then the guest account is used.
	
	3. If no domain name is provided, such as when a down-level legacy client is
	  used, the local SAM database is first checked, and then all trusted domains
	  are checked with pass- through authentication. This can produce inconsistent
	  results if the user name exists in multiple trusted domains. The first domain
	  that responds will be used for the validation. If both the local SAM and no
	  trusted domains are able to validate the credentials, and the guest account
	  is enabled on the local computer, the guest account is used.
	
	4. If the domain name provided is not a trusted domain, the Local SAM is used
	  for validation. If the user name does not exist locally, the guest account is
	  used.
	
	What follows is some sample output from Network Monitor that shows a session
	setup and the credentials that are passed to the server. Windows NT uses the
	domain name to determine which user account database has the authority to
	validate the user.
	
	  SMB: Command = C session setup & X
	  SMB: Word count = 13
	  SMB: Word parameters
	  SMB: Next offset = 0x00D2
	  SMB: Max Buffer Size = 4356 (0x1104)
	  SMB: Max MPX requests = 50
	  SMB: VC number = 0
	  SMB: Session Key = 0
	  SMB: Password length = 24 (0x18)
	  SMB: Unicode Password length = 24 (0x18)
	  SMB: Capabilities = 212 (0xD4)
	  SMB: Byte count = 149
	  SMB: Byte parameters
	  SMB: Account name = acctname
	  SMB: Domain name = DOMAINNAME
	  SMB: Native OS = Windows NT 1381
	  SMB: Native Lanman = Windows NT 4.0
	
	In the response from the server, the domain name indicates which domain the
	server is a member of, regardless of the SAM that was used to validate the user.
	What follows is an example of the session response from the SMB server.
	
	  SMB: Command = C session setup & X
	  SMB: Word count = 3
	  SMB: Word parameters
	  SMB: Next offset = 0x0084
	  SMB: Setup action = 0x0000
	  SMB: Byte count = 91
	  SMB: Byte parameters
	  SMB: Native OS = Windows NT 3.51
	  SMB: Native Lanman = NT LAN Manager 3.51
	  SMB: Domain name = DOMAINNAME
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
