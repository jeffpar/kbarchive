---
layout: page
title: "Q177969: XADM: Self Registration of Scripto.dll Failed"
permalink: /kb/177/Q177969/
---

## Q177969: XADM: Self Registration of Scripto.dll Failed

	Article: Q177969
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run Microsoft Exchange Server setup and specify a directory that
	contains an apostrophe, the following errors may be displayed:
	
	  Self registration of the DLL d:\john's copy of 5.5\bin\scripto.dll
	  failed. 80020009d
	
	When you click OK, the following message is displayed:
	
	  Processing file 'E:\SERVER\SETUP\I386\event.ins', at or near line 8
	  The storage control block address is invalid.
	  Microsoft Windows NT
	  ID no: 0xc0020009
	
	When you click OK again, the following message is displayed:
	
	  The storage control block address is invalid.
	  Microsoft Windows NT
	  ID no: 0xc0020009
	
	WORKAROUND
	==========
	
	Choose an install directory that does not contain an apostrophe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	
	=============================================================================
	
