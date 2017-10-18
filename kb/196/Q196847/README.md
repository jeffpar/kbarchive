---
layout: page
title: "Q196847: &quot;Stop 0xc000021e&quot; Installing SP4 with LapLink Installed"
permalink: kb/196/Q196847/
---

## Q196847: &quot;Stop 0xc000021e&quot; Installing SP4 with LapLink Installed

	Article: Q196847
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbWinNT400sp5fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT 4.0 Service Pack 4 on a computer with LapLink 7.5 or
	LapLink Professional by Traveling Software installed, Autochk.exe may stop
	responding (hang) for approximately two minutes, and you may then receive the
	following error message:
	
	  STOP: c000021e (Cancel Timeout) The driver \driver\TSIKBFD failed to complete
	  a cancelled I/O request in the allotted time.
	
	CAUSE
	=====
	
	This behavior occurs because Autochk.exe generates keyboard read requests that
	are not handled properly by Tsikbfd.sys, which is a LapLink keyboard filter
	driver file. When Autochk.exe quits, it attempts to clean up the remaining
	requests, but Tsikbfd.sys does not respond to the cancel requests.
	
	WORKAROUND
	==========
	
	To work around this issue, download the updated Tsikbfd.sys file from the
	following Traveling Software Web site:
	
	http://www.travsoft.com/techsupport/updates.asp
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Microsoft Windows NT
	version 4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	STATUS
	======
	
	This problem was first corrected in Windows NT 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	For more information about this issue, visit the following Traveling Software
	web site:
	
	http://webserv1.travsoft.com/techkb/lpr-5703.asp
	
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
