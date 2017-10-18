---
layout: page
title: "Q200090: XFOR: Wrong cc:Mail Connector Screen in Exchange 5.0 What's New"
permalink: kb/200/Q200090/
---

## Q200090: XFOR: Wrong cc:Mail Connector Screen in Exchange 5.0 What's New

	Article: Q200090
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): exc5
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Exchange Server 5.0 What's New book, on page 114, the screen
	shot of the Connector for Lotus cc:Mail Properties dialog box is incorrect.
	
	The following path in the screen shot is incorrect:
	
	  Path: n:\ccdata
	
	MORE INFORMATION
	================
	
	The Path field requires the network path to the Lotus cc:Mail post office data
	directory to be consistent with universal naming convention (UNC) format, as
	follows:
	
	  Path: \\<Computername>\<Share>\Ccdata
	
	Additional query words: CCMC
	
	======================================================================
	Keywords          : exc5 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
