---
layout: page
title: "Q173283: XWEB: Netscape Navigator Users Must Use &#92;&#92; to Logon"
permalink: kb/173/Q173283/
---

## Q173283: XWEB: Netscape Navigator Users Must Use &#92;&#92; to Logon

	Article: Q173283
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If you are using Netscape Navigator to connect to Microsoft Exchange Server, you
	must explicitly enter \\ to denote your logon parameters. Netscape Navigator
	does not convert "\" to "\\" and as a result, you will not be able to enter:
	
	  NT_Domain\User_Name\Mailbox
	
	and successfully logon. You must enter:
	
	  NT_Domain\\User_Name\\Mailbox
	
	to successfully logon.
	
	Additional query words: POP3 Netscape fail logon
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : 5.5
	Issue type        : kbprb
	
	=============================================================================
	
