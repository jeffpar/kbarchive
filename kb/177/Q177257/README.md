---
layout: page
title: "Q177257: STOP 0x0000000A or Difficulty Recognizing IDE CD-ROM Drives"
permalink: kb/177/Q177257/
---

## Q177257: STOP 0x0000000A or Difficulty Recognizing IDE CD-ROM Drives

	Article: Q177257
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When DMA Bus-Mastering is enabled for the EIDE bus, Windows NT may crash with a
	STOP 0x0000000A in Atapi.sys when it accesses specific IDE-based CD-ROM drive.
	
	-or-
	
	Instead of a STOP 0x0000000A message being displayed, a CD-ROM drive might be
	"unrecognized."
	
	CAUSE
	=====
	
	The Atapi.sys driver does not correctly handle the SCSIOP_READ_CD internal
	command sent by higher-level drivers.
	
	
	RESOLUTION
	==========
	
	To avoid this problem, perform one of the following below:
	
	- Disable DMA Bus-Mastering.
	
	
	- Switch to a SCSI-based CD-ROM drive.
	
	- Follow the instructions on the following article in the Microsoft Knowledge
	  Base:
	
	  ARTICLE-ID: Q197667
	  TITLE : Installing Windows NT Server on a Large IDE Hard Disk
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: hang blue screen
	======================================================================
	Keywords          : kbsetup kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
