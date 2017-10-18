---
layout: page
title: "Q250998: Access Violation in Cmd.exe in Long Batch Files Using &quot;FOR /F&quot;"
permalink: kb/250/Q250998/
---

## Q250998: Access Violation in Cmd.exe in Long Batch Files Using &quot;FOR /F&quot;

	Article: Q250998
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:4.0
	Operating System(s): 
	Keyword(s): kbWin2000PreSP1Fix kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running complex batch files for a long time (to run routine jobs,
	monitor services, and so on), and the batch files contain the "for /f" command
	to process files line-by-line and run commands using the line contents as
	parameters, you may receive "access violation" and "access denied" error
	messages in Cmd.exe
	
	
	CAUSE
	=====
	
	When you run the batch files for a long time, the reuse of memory areas by the
	program is more likely. In this case, the memory is not "nulled out" by the
	operating system. The algorithm used by Cmd.exe to extract tokens used as
	parameters for the command in the "for /f" command is vulnerable to reused
	memory.
	
	RESOLUTION
	==========
	
	Windows 2000
	------------
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	
	
	Windows NT 4.0
	--------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date       Time     Size      File name   Platform
	  --------------------------------------------------
	  01/25/00   08:51a   208,144   Cmd.exe     x86
	  01/25/00   08:50a   357,648   Cmd.exe     Alpha
	
	
	
	WORKAROUND
	==========
	
	This problem is aggregated by the changes in Heap Manager introduced in Windows
	NT 4.0 Service Pack 4. You should be able to avoid the problem by using the
	workaround described in the following Microsoft Knowledge Base article:
	
	  Q195009 Application Access Violation or Hang After Applying SP4
	
	STATUS
	======
	
	Windows 2000
	------------
	
	Microsoft has confirmed this to be a problem in Windows 2000. This problem was
	first corrected in Windows 2000 Service Pack 1.
	
	Windows NT 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWin2000PreSP1Fix kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:2000; winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
