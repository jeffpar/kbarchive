---
layout: page
title: "Q166475: NWLNKSPX Retransmission Problem Over a Slow Link"
permalink: kb/166/Q166475/
---

## Q166475: NWLNKSPX Retransmission Problem Over a Slow Link

	Article: Q166475
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	You may experience a slow response or your application may be disconnected when
	your client/server application is running over a slow link. This most noticeably
	occurs when your client/server application uses SPX as its transport mechanism.
	
	CAUSE
	=====
	
	Windows NT's NWLNKSPX protocol calculates retransmission time based on the Round
	Trip Time (RTT) calculation and is calculated for each packet. As a result, the
	retransmission time is dynamic and adjusts itself according to the network load
	and congestion. Currently there is no option in NWLNKSPX to disable RTT and the
	specified static retransmission time.
	
	RESOLUTION
	==========
	
	Apply the latest service pack, and then update the following registry entry:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Run Registry Editor (Regedt32.exe.)
	
	2. Go to the following key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \NwLnkSPX\Parameters
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Click Add Value from the Edit menu.
	
	4. Add the following:
	
	     Value Name: DisableRTT
	     Data Type: REG_DWORD
	     Data: 1 (Default 0)
	
	  A data value of 1 disables the Round Trip Time calculation algorithm and the
	  retransmission time is set to the static value determined by the
	  InitialReTransmissionTime, which is 500msec by default. You can adjust the
	  InitialRetransmissionTime to control the retransmission timer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
