---
layout: page
title: "Q83540: Mac Fax: FaxGate Rasterization Problems"
permalink: kb/083/Q83540/
---

## Q83540: Mac Fax: FaxGate Rasterization Problems

	Article: Q83540
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.x,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.x, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Microsoft Mail for AppleTalk Networks Gateway to Fax and System
	6.0x, free System heap memory (the memory allocated to the System) on the server
	may cause some problems. If the heap does not provide enough extra memory for
	the BackRas INIT to convert a document to fax format, error messages will be
	sent to the Network Manager and the document will be returned to the sender.
	
	Error number -108, -3005, -3019 or -3020 may be generated, but each error
	indicates the same problem.
	
	RESOLUTION
	==========
	
	When you use a heap sizing utility, the System heap memory can be expanded to
	allow rasterization to be completed. In general, the more System memory
	available, the faster a document can be rasterized. Some common heap utilities
	are HeapFixer, HeapTool and BootMan.
	
	Increasing the amount of memory allotted to Mail for AppleTalk Networks does not
	correct this problem.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 2.0 2.00 2.0a 2.00a 2.0b 2.00b 3.00 faxgate
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN2xSearch
	Version           : WINDOWS:2.x,3.0
	
	=============================================================================
	
