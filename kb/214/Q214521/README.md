---
layout: page
title: "Q214521: Multithreaded SLI Application May Deadlock within WINSLI32.DLL"
permalink: /kb/214/Q214521/
---

## Q214521: Multithreaded SLI Application May Deadlock within WINSLI32.DLL

	Article: Q214521
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While handling multiple sessions, a Win32 SLI application may hang unexpectedly
	while making various SLI calls from different threads of the same process.
	
	
	CAUSE
	=====
	
	A small window exists within the Winsli32.dll that can result in an event
	deadlock while processing SLI requests from different threads.
	
	RESOLUTION
	==========
	
	SNA Server 3.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	3.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q184307 How to Obtain the Latest SNA Server Version 3.0 Service Pack
	
	
	
	SNA Server 4.0
	--------------
	
	+----------------------------+
	| File Name    | Date | Time | 
	+----------------------------+
	| Winsli32.dll |      |      | 
	+----------------------------+
	
	NOTE: Due to file dependencies, the most recent fix that contains the above files
	may also contain additional files.
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft SNA Server 3.0
	(including SP1, SP2, SP3) and SNA Server 4.0 (including SP1). This problem was
	first corrected in SNA Server 3.0 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
