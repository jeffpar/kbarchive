---
layout: page
title: "Q193814: Performance Improvements for APPC/CPIC Applications"
permalink: kb/193/Q193814/
---

## Q193814: Performance Improvements for APPC/CPIC Applications

	Article: Q193814
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Various performance improvements have been implemented within the SNA Server
	client (Snadmod.dll, Snalm.dll) and the Win32 APPC .dll (Wappc32.dll) to help
	maximize performance of APPC or CPIC applications. Improvements include:
	
	- More efficient internal buffer allocation/deallocation within the SNA client
	  software.
	
	- Reduced thread usage when an application calls RECEIVE_ALLOCATE more than
	  once and specifies the same TP name.
	
	- Improved routing of incoming FMH-5 to the SNA client computer where the
	  invokable TP is running.
	
	- Improved SNA Server performance while handling an incoming FMH-5 Attach
	  request.
	
	
	RESOLUTION
	==========
	
	Microsoft has produced an update to SNA Server 4.0 which improves performance
	for APPC or CPIC applications. This update is included in the latest SNA Server
	version 4.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : WINDOWS:4.0,4.0 SP1
	Issue type        : kbinfo
	
	=============================================================================
	
