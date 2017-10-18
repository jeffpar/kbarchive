---
layout: page
title: "Q243232: Ki386VdmSegmentNotPresent Causes &quot;Stop 0x00000050&quot; Error Message"
permalink: kb/243/Q243232/
---

## Q243232: Ki386VdmSegmentNotPresent Causes &quot;Stop 0x00000050&quot; Error Message

	Article: Q243232
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kbnetwork kbWin2000PreSP1Fix kbWin2000sp1Fix
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The NTVDM for a 16-bit program may max out the PagedPool usage, which results in
	a "Stop 0x00000050" error message.
	
	CAUSE
	=====
	
	This behavior occurs when the relevant VDM's stack is modified while emulating a
	16-bit Trap B. The stack is not paged in. The following list shows some of the
	possible stop error messages that you may encounter:
	
	  0x00000050 (0xe274317f, 0x00000000, 0x00000000, 0x00000002)
	  0x00000050 (0xe2e3017f, 0x00000000, 0x00000000, 0x00000002)
	  0x0000001a (0x00041784, 0x00008000, 0x00000ecf, 0xc0502000)
	  0x00000050 (0xce000fdb, 0x00000001, 0x00000000, 0x00000000)
	  0x00000050 (0xc22b0fe2, 0x00000001, 0x00000000, 0x00000000)
	  0x00000050 (0xb301d5dc, 0x00000001, 0x00000000, 0x00000000)
	  0x00000050 (0xb2b2c28c, 0x00000001, 0x00000000, 0x00000000)
	  0x00000050 (0xb2010fda, 0x00000001, 0x00000000, 0x00000000)
	  0x00000050 (0xe2af617f, 0x00000000, 0x00000000, 0x00000002)
	  0x00000050 (0xe2f0c17f, 0x00000000, 0x00000000, 0x00000002)
	  0x00000050 (0xb2b2c28c, 0x00000001, 0x00000000, 0x00000000)
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	
	
	
	A fix for this issue is available for Windows NT 4.0, Terminal Server Edition, by
	contacting Microsoft Product Support Services.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition.Microsoft has confirmed this to be a problem in the Microsoft
	products that are listed at the beginning of this article. This problem was
	first corrected in Windows 2000 Service Pack 1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWin2000PreSP1Fix kbWin2000sp1Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch kbWinAdvServSearch
	Version           : :2000,4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
