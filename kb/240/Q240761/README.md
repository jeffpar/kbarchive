---
layout: page
title: "Q240761: LUA Security Does Not Apply to TN3270 LUA LUs"
permalink: kb/240/Q240761/
---

## Q240761: LUA Security Does Not Apply to TN3270 LUA LUs

	Article: Q240761
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On the Security tab of the SNA Server subdomain, an LUA check box exists to
	allow user-validated security for LUA applications. However, this does not apply
	to TN3270 LUA LUs. Even though TN3270 LUA LUs can be assigned to users in SNA
	Server Manager, no user validation will occur.
	
	MORE INFORMATION
	================
	
	TN3270 uses Telnet to communicate between the client and the server by
	encapsulating 3270 data in Telnet sessions to the TN3270 Service. Telnet is a
	TCP/IP protocol that uses IP addressing to determine the source and destination
	of packets. No user credentials are passed to the TN3270 Service for validation.
	
	REFERENCES
	==========
	
	  Q190446 Restricting Access to TN3270 LUs
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	
