---
layout: page
title: "Q125498: Print Manager Network Error with MS Network Client for MS-DOS"
permalink: kb/125/Q125498/
---

## Q125498: Print Manager Network Error with MS Network Client for MS-DOS

	Article: Q125498
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.1,3.11; winnt:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Network Client for MS-DOS version 3.0 
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Microsoft Network Client for MS-DOS with Microsoft Windows:
	
	- The Microsoft Windows Print Manager network print queue status line
	  displays:
	
	  NETWORK ERROR
	
	- Print jobs do not appear in the network print queue.
	
	- Choosing Selected Net Queues from the Print Manager View menu results in the
	  following error message:
	
	  A general network error has occurred. Try Again.
	
	  When you select OK, the print job dialog box appears.
	
	CAUSE
	=====
	
	
	WORKAROUND
	==========
	
	To work around these problems:
	
	1. Run Print Manager
	
	2. From the Options menu choose Network Settings.
	
	3. Disable Update Network Display.
	
	  The queue status changes to IDLE. An incorrect message appears at the
	  top of the screen telling you that the printer is printing regardless of
	  the real status of the printer. However, print jobs should now appear in
	  the queue.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Network Client for
	MS-DOS, version 3.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt 3.50 3.11 3.10 win3x printman
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbZNotKeyword kbZNotKeyword3 kbNetworkClientSearch kbWin310 kbWin311 kbNetworkClient300DOS
	Version           : WINDOWS:3.1,3.11; winnt:3.0
	
	=============================================================================
	
