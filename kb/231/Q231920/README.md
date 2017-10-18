---
layout: page
title: "Q231920: How to Filter on TCP Header Information Using Network Monitor"
permalink: kb/231/Q231920/
---

## Q231920: How to Filter on TCP Header Information Using Network Monitor

	Article: Q231920
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:3.11,95,98,98 Second Edition; winnt:3.1,3.5,3.51,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Windows 3.11 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to apply filters in Microsoft Network Monitor to view
	Transmission Control Protocol (TCP) header information in the Capture Summary
	window.
	
	MORE INFORMATION
	================
	
	When you view a capture using Network Monitor, the "Last Protocol In Frame" is
	displayed in the Capture Summary window by default. This is true even when you
	apply filters to view only TCP information. Therefore, a frame that contains
	Server Message Blocks (SMBs) shows SMB summary information. For example:
	
	  SMB C write spool file, FID = 0xc005, Write 48 bytes
	
	To view the TCP header information, you need to open the frame.
	
	In the following example, several protocols are actually a part of the entire
	frame:
	
	  +FRAME: Base frame properties
	  +ETHERNET: ETYPE = 0x0800 : Protocol = IP:  DOD Internet Protocol
	  +IP: ID = 0x7DEC; Proto = TCP; Len: 132
	  +TCP: .AP..., len:   92, seq: 175699528-175699619, ack: 227842390, win:16500, src: 3221  dst:  139 (NBT Session) 
	  +NBT: SS: Session Message, Len: 88
	  +SMB: C write spool file, FID = 0xc005, Write 48 bytes
	
	When viewing a TCP trace, it is more convenient to have the TCP information
	displayed in the Capture Summary window. This lets you view the TCP header
	information without having to open the frame.
	
	Use the following steps to view TCP header information in the Capture Summary
	window:
	
	1. On the Display menu in the Capture Summary window, click Filter (or press
	  F8).
	
	2. In the Display Filter window, double-click "Protocol==Any".
	
	3. Click Disable All.
	
	4. In the Disabled Protocols box, click TCP, click Enable, click OK, and then
	  click OK.
	
	5. On the Display menu in the Capture Summary window, click Options.
	
	6. Click "Auto (Based on protocols in display filter)", and then click OK.
	
	The following example shows the TCP information as viewed in the Capture Summary
	window after you perform these steps:
	
	  TCP .AP..., len:   92, seq: 175699528-175699619, ack: 227842390, win:16500, src: 3221  dst:  139 (NBT Session)
	
	
	Additional query words: sniff trace netmon bloodhound
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTW400sp2 kbWinNTW400sp1 kbWinNTW310 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWin3xSearch kbWin95search kbWin98search kbWin98SEsearch kbWinNT310Search kbWinNTW310Search kbZNotKeyword3 kbWin311 kbWin98 kbWin98SE
	Version           : WINDOWS:3.11,95,98,98 Second Edition; winnt:3.1,3.5,3.51,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
