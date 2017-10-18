---
layout: page
title: "Q172705: Explorer Access Violates When Viewing a File's Properties"
permalink: kb/172/Q172705/
---

## Q172705: Explorer Access Violates When Viewing a File's Properties

	Article: Q172705
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Windows NT Explorer to view the properties of a file, an access
	violation occurs. If Dr. Watson is installed, it gives the standard AV pop-up
	error message, for example:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  Explorer.exe
	  Exception: access violation (0xc0000005), Address 0x77f64b53
	
	CAUSE
	=====
	
	This error can be caused if a file's property set has a corruption. In this
	case, the thumbnail for the file had an empty Binary Large Object Bitmap (BLOB)
	stored in the place of a CLIPDATA structure. Because Windows NT Explorer expects
	the serialized CLIPDATA to have a minimum size of 12 bytes but finds the empty
	BLOB to have only 8 bytes, it concludes that the discrepancy must be caused by
	data corruption and exits with the above error. During the exit, Windows NT
	Explorer cleaned up the allocated *CLIPDATA structure, but in so doing tried to
	free CLIPDATA.pClipData, which hadn't been allocated at the point of the
	failure.
	
	The fix now zero initializes the CLIPDATA structure after allocation.
	
	RESOLUTION
	==========
	
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
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbenv kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
