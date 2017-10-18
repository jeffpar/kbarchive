---
layout: page
title: "Q150883: XCLN: Error 0x1b5a During ChangePasswordOnPDC"
permalink: kb/150/Q150883/
---

## Q150883: XCLN: Error 0x1b5a During ChangePasswordOnPDC

	Article: Q150883
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 26-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange MS-DOS client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Chgpass.exe in the following MS-DOS Exchange client configuration:
	
	  VLM or Netx redirector
	  Logged into a Netware Server
	
	you might receive the following error when you attempt to change the NT Domain
	password:
	
	  Binding From String Failed: 6
	  Error: unexpected error 0x1b5a during ChangePasswordOnPDC
	
	WORKAROUND
	==========
	
	The following conditions must be met for Chgpass.exe to work from a Novell
	Netware client:
	
	- The NT Primary Domain Controller (PDC) must have Gateway Service for Netware
	  and File and Print Services for Netware
	
	- You must be logged into the FPNW volume on the NT PDC Server.
	
	- No spaces are allowed in the login name, for example: joe user
	
	MORE INFORMATION
	================
	
	Chgpass.exe is included with the Microsoft Exchange client for MS-DOS and is
	used to change a user's NT password from the command line.
	
	To use chgpass.exe from the command prompt type:
	
	  chgpass <NT Server PDC name>\<username>
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword3 kbExchange400DOS kbExchange500DOS
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
