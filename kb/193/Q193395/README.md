---
layout: page
title: "Q193395: XFOR: Access Violation Occurs When Stopping Dirsync Service"
permalink: kb/193/Q193395/
---

## Q193395: XFOR: Access Violation Occurs When Stopping Dirsync Service

	Article: Q193395
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you copy a Resync.glb file to the Exchsrvr\Dxadata folder on a Microsoft
	Exchange Server computer configured as a directory synchronization (dirsync)
	requestor, and then start the Microsoft Exchange Directory Synchronization
	service, an access violation may occur if you attempt to stop the Microsoft
	Exchange Directory Synchronization service while the Resync.glb file is being
	processed.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: DXA
	
	  File Name   Version
	  ----------------------
	  Dxa.exe     5.5.2393.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	MORE INFORMATION
	================
	
	For additional information about using a Resync.glb file with a dirsync
	requestor, please see the following article in the Microsoft Knowledge Base:
	
	  Q156124 XFOR: How to Use a Resync.glb with an Exchange Requestor
	
	Additional query words: dxa crash av
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
