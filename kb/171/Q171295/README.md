---
layout: page
title: "Q171295: Fault Tolerant Systems May Encounter Problems with WinNT SP3"
permalink: /kb/171/Q171295/
---

## Q171295: Fault Tolerant Systems May Encounter Problems with WinNT SP3

{% raw %}

	Article: Q171295
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbfile kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	With the FirstWatch program, transition failures have been observed that require
	the use of CLARiiON's Trespass utility. For example, the system may start in
	Online Primary mode, but any attempt to change into Dual mode fails. The Ha.log
	file contains errors that occurred while using Trespass. You may also notice
	that the Scsi.exe, Clarscsi.exe, and Diskcfg.exe programs do not display LUNs
	(logical unit numbers), which Trespass needs to access.
	
	The CLARiiON Agent Service may report problems in the event log. The following
	two events messages have been logged:
	
	  ERROR: Opening Device: , 1:0:0.
	
	  Is the device configured correctly?
	
	After these events, attempting to select the host in ArrayGuide reports the
	following error:
	
	  Could not connect to the chassis, check device name in fw31a's agent
	  configuration file.
	
	ATF failures have also been observed.
	
	CAUSE
	=====
	
	This problem is caused by changes in the way Windows NT handles the SCSI LUN
	enumeration in Service Pack 3.
	
	RESOLUTION
	==========
	
	Perform the following steps to resolve this problem:
	
	1. To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	  Windows NT Server 4.0, Terminal Server Edition. For additional information,
	  please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	For your convenience, the English version of this post-SP3 hotfix has been posted
	to the following Internet location. However, Microsoft recommends that you
	install Windows NT 4.0 Service Pack 4 to correct this problem.
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP3/scsi-fix
	
	NOTE: Service Pack 3 must be applied to Windows NT 4.0 prior to applying this
	fix.
	
	2. WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	  Install the new Scsiport.sys and go to the following registry key:
	
	     HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Disk\ 
	
	3. Add the following new value to the above registry path to activate the new
	  code:
	
	     Value Name = ScanDisconnectedDevices
	     Data Type = REG_DWORD
	     Data = 1
	
	
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
	
	Additional query words: 4.00 sp3 NG
	======================================================================
	Keywords          : kb3rdparty kbfile kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
