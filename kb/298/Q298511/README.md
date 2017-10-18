---
layout: page
title: "Q298511: SNA/HIS Print Server May Hang Using Generic Text Print Driver"
permalink: kb/298/Q298511/
---

## Q298511: SNA/HIS Print Server May Hang Using Generic Text Print Driver

	Article: Q298511
	Product(s): Microsoft SNA Server
	Version(s): 3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbDSupport MSGRAPH kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbs
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are printing with SNA Server 3.0 (or later) or Host Integration Server
	2000 on a Windows NT 4.0 Server (with Service Pack [SP] 4 or later), all SNA
	Server/Host Integration Server print jobs may stop printing and eventually the
	server will "hang" (lock). When this occurs, all keyboard and mouse activity
	will cease.
	
	This problem does not occur when running on Windows 2000 Server.
	
	CAUSE
	=====
	
	This problem is caused by a memory leak when you are using the generic text
	print driver. For additional information, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q244350 Memory Leaks in 'Drsd' Tag When Printing to Generic Text Printer
	
	RESOLUTION
	==========
	
	To resolve this problem, apply the updated RASDD.dll file available from the
	link provided in the "Cause" section of this article.
	
	MORE INFORMATION
	================
	
	The following information would be recorded if Performance Monitor were running
	during this time.
	
	In one documented case of the problem, the following objects, counters, and
	instances were used:
	
	  Object = Process and Memory
	  Counter = Private Bytes and Pool Paged Bytes
	  Instance = SNASERVR, SNABASE and SNAPRINT
	
	During this time you would see the process/private bytes for SNASERVR and SNABASE
	increase, level off, and then start to decrease, while SNAPRINT would remain in
	a steady state. However, when viewing the memory object on the pool paged bytes
	counter, you would observe a steady increase of paged bytes up until the point
	at which the server stops responding.
	
	Reviewing the event viewer logs leading up to this failure would show the
	following errors:
	
	  SYSTEM LOG
	
	  Event 2020 - Source: Srv
	
	  The server was unable to allocate from the system paged pool because the pool
	  was empty.
	
	In addition to that event, a Snadump.log and Dr. Watson log (if configured as the
	default debugger) may be generated during this time as well:
	
	  APPLICATION LOG
	
	  Event 624 - Source: SNA Server (snadump)
	  Event 4097 - Source: DrWatson
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport MSGRAPH kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
