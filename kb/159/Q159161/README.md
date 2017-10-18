---
layout: page
title: "Q159161: XCON: Connecting Soft-Switch EMX to Microsoft Exchange Server"
permalink: kb/159/Q159161/
---

## Q159161: XCON: Connecting Soft-Switch EMX to Microsoft Exchange Server

	Article: Q159161
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the requirements for connecting Lotus Soft-Switch EMX to
	Microsoft Exchange Server using an X.400 connection.
	
	MORE INFORMATION
	================
	
	To connect Lotus Soft-Switch EMX to Microsoft Exchange Server using an X.400
	connection, the following requirements must be met:
	
	- You must be running Lotus Soft-Switch EMX version P5, with Open Systems
	  Interconnection (OSI) version 3.3 and patch P1AM11.
	
	- In the Microsoft Exchange Message Transfer Agent (MTA), 2K Transport Protocol
	  Data Unit (TPDU) support must be enabled.
	
	To enable 2K TPDU support, modify the Support 2K TPDU value under the following
	registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchnageMTA
	  \Parameters
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	The Support 2K TPDU registry value should be assigned a value of 0x1.
	
	Soft-Switch EMX is manufactured by Lotus, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: softswitch soft switch
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
