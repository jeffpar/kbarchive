---
layout: page
title: "Q194812: All Users See All Other Users' Auto-Created Printers"
permalink: kb/194/Q194812/
---

## Q194812: All Users See All Other Users' Auto-Created Printers

	Article: Q194812
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): TSESP4Fix
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Auto-creation of client printers is a feature of the Citrix Metaframe Add-On for
	Windows Terminal Server. When you use the auto-created printers feature, and try
	to connect with the Citrix ICA Windows Clients, you find your local printers
	mapped to your sessions and ready for use when you connect.
	
	You may notice when connected through the Citrix ICA Windows Client, that other
	users' printers' appear in the Printers folder in addition to your own printers.
	When you try to access one of these printers, you may receive the following
	error message:
	
	  You do not have access to this printer. Only the security tab will be
	  displayed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT Server 4.0,
	Terminal Server Edition Service Pack 4.
	
	Additional query words: 4.00 tse wts auto create autocreate autocreated users created
	
	======================================================================
	Keywords          : TSESP4Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
