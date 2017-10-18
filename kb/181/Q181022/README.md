---
layout: page
title: "Q181022: Err: Cannot Write to LPTx Printing to Parallel Port"
permalink: kb/181/Q181022/
---

## Q181022: Err: Cannot Write to LPTx Printing to Parallel Port

	Article: Q181022
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbprint kbWinNT400sp4fix
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you print to a parallel port on a computer running Windows NT, one of the
	following may occur:
	
	- After you clear a paper outage or jam on the printer and click OK on the
	  following error message, the same error may reappear until Windows NT is
	  shutdown and restarted:
	
	  Cannot write to LPTx
	
	  where x is the LPT port number.
	
	- On host-based printers, the printer does not reset properly if you shutdown
	  and restart Windows NT without first actually powering off the computer.
	
	- When you print with an older parallel port printer, the output has invalid,
	  garbled, or missing characters or nothing prints.
	
	CAUSE
	=====
	
	The first two symptoms above are caused by the local port monitor resetting
	faster than the port can become ready. The printer driver then interprets that
	the printer is properly reset, which is not the case.
	
	
	
	The third symptom happens because the centronics handshake in Parallel.sys is too
	aggressive for some older devices.
	
	RESOLUTION
	==========
	
	To do a slower handshake to older/slower printers, the following registry entry
	must be added.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	The registry entry to enable this feature is
	
	\HKLM\SYSTEM\CurrentControlSet\Services\Parallel\Parameters
	
	and is a DWORD value "UsePIWriteLoop", which needs to be set to 1.
	
	Be aware that enabling this entry will slow down ALL parallel ports.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	For your convenience, the English version of this post-SP3 hotfix has been posted
	to the following Internet location. However, Microsoft recommends that you
	install Windows NT 4.0 Service Pack 4 to correct this problem.
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP3/prnt-fix/
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: lpt1 lpt2
	======================================================================
	Keywords          : kbprint kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
