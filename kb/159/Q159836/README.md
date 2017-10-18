---
layout: page
title: "Q159836: XCLN: Dr Watson When Running Exchange on DEC Alpha"
permalink: kb/159/Q159836/
---

## Q159836: XCLN: Dr Watson When Running Exchange on DEC Alpha

	Article: Q159836
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run Microsoft Exchange Server 4.0 Service Pack 3 (SP3) on a DEC Alpha
	1000 computer with Windows NT 3.51 Service Pack 5 (SP5), a DR. Watson error is
	generated in Exchang32.exe.
	
	This will occur if the Microsoft Exchange client is running on the same computer
	as the Microsoft Exchange Server.
	
	Installing the Microsoft Exchange Windows NT client on the computer described
	above results in the following DR Watson when you start the client:
	
	  Application exception occurred:
	  App: exchng32.DBG (pid=317)
	  When: 11/13/1996 @ 13:7:39.703
	  Exception number: c000001d (illegal instruction)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This error does not occur in the following configurations:
	
	  Microsoft Exchange SP3 client running on Windows NT 3.51 SP5 on a computer
	  that is not also running Microsoft Exchange Server.
	
	  Microsoft Exchange SP3 client running on Windows NT 3.51 SP5 on computers
	  other than DEC Alpha. *
	
	  If the computer running both Microsoft Exchange Server and the Microsoft
	  Exchange Windows NT client is running Windows NT 4.0.
	
	The DEC Alpha 1000 is manufactured by Digital Equipment Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
