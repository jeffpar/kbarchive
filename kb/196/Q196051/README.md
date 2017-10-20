---
layout: page
title: "Q196051: Excessive Network Retransmissions While Running CSNW"
permalink: /kb/196/Q196051/
---

## Q196051: Excessive Network Retransmissions While Running CSNW

{% raw %}

	Article: Q196051
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure that you understand how to restore it if
	a problem occurs. For information about how to do this, see the "Restoring the
	Registry" Help topic in Regedit.exe or the "Restoring a Registry Key" Help topic
	in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Client Services for NetWare (CSNW) may retransmit an NCP packet in 110 ms. The
	retransmission of 110 ms will occur in a network with a tick count of 2 being
	announced.
	
	CAUSE
	=====
	
	Windows NT uses the TickCount in the NetWare routing packet as a round trip
	time. In reality, TickCount is the number of ticks it takes a packet to reach
	the remote destination. One tick equals one-sixteenth of a second. The tick out
	is used by Windows NT to calculate when to retransmit a packet because it did
	not receive a response.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT version 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	A tunable parameter has been added to allow the user to increase the tick count
	on a CSNW client. This parameter will add a user specified number of ticks to
	the tick count on a client. This user specified value will be added to all tick
	counts on a system. This will increase the amount of time it takes for Windows
	NT to retransmit a packet.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require that you reinstall your operating system. Microsoft cannot guarantee
	that problems that result from the incorrect use of Registry Editor can be
	solved. Use Registry Editor at your own risk.
	
	For information about how to edit the registry, see the "Changing Keys and
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Microsoft recommends that you back up the registry before you edit
	it. If you are running Windows NT or Windows 2000, Microsoft also recommends
	that you update your Emergency Repair Disk (ERD).
	
	1. Start Registry Editor and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \NwRdr\Parameters
	
	2. Choose Add Key from the Edit menu and use the following information:
	
	  Value Name: TickCountModifier
	  Data Type:  REG_DWORD
	  Value:      1 to 255 Value that the tickcounts should be increased by
	
	Additional query words: 4.00
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
