---
layout: page
title: "Q174821: XADM: TCP/IP Error Messages Following Install and Reboot"
permalink: kb/174/Q174821/
---

## Q174821: XADM: TCP/IP Error Messages Following Install and Reboot

	Article: Q174821
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Exchange Server 5.0, the following errors may appear
	in the Application log following each reboot:
	
	  ID 11502
	  MSExchangeNNTP
	  Error
	  Initialization of the NNTP external interface failed with error -
	  2147467259.
	
	  ID 11303
	  MSExchangeNNTP
	  Error
	  An error occurred while binding NNTP to SSL in the GetHostName function.
	
	  ID 11504
	  MSExchange Pop3
	  Error
	  Initialization of the POP3 external interface failed with error -
	  2147467259.
	
	These errors will continue to appear, even if a clean install has been performed.
	
	CAUSE
	=====
	
	If TCP/IP has been loaded on to the server and then removed, the above errors
	will occur whenever Exchange Server 5.0 is loaded on to that server and then
	rebooted.
	
	RESOLUTION
	==========
	
	Reload TCP/IP on the server and the errors will no longer appear in the
	Application log.
	
	MORE INFORMATION
	================
	
	NNTP and POP3 are native to TCP/IP. Therefore, they are trying to call/perform
	Winsock32 functions. Because Winsock is not present (because TCP/IP was
	uninstalled) these errors occur.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbprb
	
	=============================================================================
	
