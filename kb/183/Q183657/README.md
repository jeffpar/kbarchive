---
layout: page
title: "Q183657: Unable to Insert OLE Objects into Application Documents"
permalink: /kb/183/Q183657/
---

## Q183657: Unable to Insert OLE Objects into Application Documents

	Article: Q183657
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When inserting an OLE object into an application document, you may receive one
	of the following error messages:
	
	  Cannot create object
	
	-or-
	
	  Cannot create OLE object
	
	-or-
	
	  Operation caused OLE error 36
	
	-or-
	
	  Failed to create OLE object
	
	-or-
	
	  OLE object problem
	
	This symptom has occurred in OLE applications such as Serif PagePlus 3.0, Adobe
	PageMaker 5.0, and Harvard Graphics 3.
	
	CAUSE
	=====
	
	The application is sending a WM_DDE_INITIATE message that is never acknowledged
	by the OLE application server.
	
	-or-
	
	Under certain conditions broadcast messages can become blocked. This will only
	occur when OLE threads are open but those threads are not processing messages.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: hang oleapp link embed insert
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
