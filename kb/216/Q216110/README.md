---
layout: page
title: "Q216110: XFOR: Err Msg: System Cannot Find the File Specified"
permalink: kb/216/Q216110/
---

## Q216110: XFOR: Err Msg: System Cannot Find the File Specified

	Article: Q216110
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you install the Internet Mail Service (IMS) on a computer running Exchange
	Server 5.0 SP1 and Windows NT 4.0 SP3, the following error message may occur:
	
	  System cannot find the file specified
	  Microsoft Windows NT
	  ID No: 0xc0020002
	
	CAUSE
	=====
	
	A previous version of the IMS may prevent proper updating when Exchange Server
	5.0 SP1 is applied.
	
	WORKAROUND
	==========
	
	To work around this issue, do the following:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. If a previous version of the IMS exists, remove the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC
	
	2. If a previous version of the IMS exists, remove the Exchsrvr\Imcdata
	  directory.
	
	3. Reapply SP3 for Windows NT 4.0.
	
	4. Reapply SP1 for Exchange Server 5.0.
	
	5. Install the Internet Mail Service. To do this, perform the following steps:
	
	  a. From the File menu, choose New.
	
	  b. Select Other, and then choose IMS.
	
	Additional query words: IMS
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	
	=============================================================================
	
