---
layout: page
title: "Q235899: ScardGetStatusChange() API Causes Deadlock in Smart Card RM"
permalink: kb/235/Q235899/
---

## Q235899: ScardGetStatusChange() API Causes Deadlock in Smart Card RM

	Article: Q235899
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Smart Card Resource Manager may stop responding (hang) in the following
	situation:
	
	There are two processes (A and B) each with a single thread gaining access to the
	same card (in the same reader) simultaneously. Each of the processes runs the
	following sequence in a finite loop:
	
	  SCardEstablishContext
	  SCardConnect
	  SCardGetStatusChange(SCARD_STATE_UNWARE,.....)
	  SCardBeginTransaction
	  SCARDTransmit (many times)
	  .....
	  SCardEndTransaction
	  SCardDisconnect
	  SCardReleaseContext
	
	The two processes run exactly the same code. After running the code for several
	minutes (from 2 to 15 minutes), the two processes hang and no other program may
	be able to gain access to the same reader. However, another reader connected to
	the system can be accessed through the Resource manager.
	
	Even if you are forced to quit the two programs, the reader is still
	inaccessible. To "unblock" the reader, the computer must either be restarted or
	you must quit the Resource Manager program through a utility like Pview.exe. You
	can also use Task Manager and then restart Resource Manager. If you quit then
	restart Resource Manager, the two other programs are immediately unblocked.
	
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
