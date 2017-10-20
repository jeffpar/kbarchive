---
layout: page
title: "Q241387: Err Msg: STOP 0x0000001E: KMODE_EXCEPTION_NOT_HANDLED"
permalink: /kb/241/Q241387/
---

## Q241387: Err Msg: STOP 0x0000001E: KMODE_EXCEPTION_NOT_HANDLED

{% raw %}

	Article: Q241387
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbinterop kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Workstation versions 4.0 SP4, 4.0 SP5 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP4, 4.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft Accessible Event Watcher on a computer with Windows NT
	4.0 Service Pack 4 or Service Pack 5 installed and you click Test (located on
	the Settings tab of the Display tool in Control Panel), you may receive a STOP
	error message on a blue screen that is similar to the following example:
	
	  STOP 0x0000001E: KMODE_EXCEPTION_NOT_HANDLED
	
	This behavior occurs whether or not you change the screen resolution or color
	settings on the Settings tab before you click Test.
	
	CAUSE
	=====
	
	This behavior occurs because an event that the Desk.cpl thread in Winable.c
	sends is picked up by another thread.
	
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
	
	MORE INFORMATION
	================
	
	When you finish the installation of the Microsoft Active Accessibility Software
	Development Kit (SDK) software, you can choose to install Microsoft Active
	Accessibility Redistribution Kit (RDK).
	
	The RDK enables Microsoft Active Accessibility to work with computers running
	Microsoft Windows 95, Microsoft Windows 98, or Windows NT 4.0 Service Pack 4 or
	later. You must install the RDK on these operating systems because none of these
	operating systems include the system files that implement Microsoft Active
	Accessibility.
	
	After you install the SDK and RDK, you can use Accessible Event Watcher by
	clicking Start, pointing to Programs, and then clicking Microsoft Active
	Accessibility SDK.
	
	Additional query words: sp4 sp5
	
	======================================================================
	Keywords          : kbinterop kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0 SP4,4.0 SP5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
