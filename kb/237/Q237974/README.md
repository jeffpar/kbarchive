---
layout: page
title: "Q237974: Unable to Activate a DCOM Server from WTS Client Session"
permalink: /kb/237/Q237974/
---

## Q237974: Unable to Activate a DCOM Server from WTS Client Session

	Article: Q237974
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to activate a DCOM server on a Terminal Server computer from a
	Terminal Server client session, activation does not work for some components,
	and the Event log on the Terminal Server computer shows the following:
	
	  Unable to start a dcom server, all pipe instances are busy.
	
	  The description for Event ID ( 10000 ) in Source ( DCOM ) could not be found.
	  It contains the following insertion string(s):
	
	  C:\FCWSCO~1\TSCOMP~1\TSNAVB~1.EXE -Embedding, 231,
	  {8381FDF0-36C7-11D2-8EBD-00C04FD054E0}.
	
	This error occurs when there is high thread and process usage.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT 4.0 Server,
	Terminal Server Edition, Service Pack 5.
	
	Additional query words: wts tse
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
