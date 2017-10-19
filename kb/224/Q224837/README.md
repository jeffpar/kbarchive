---
layout: page
title: "Q224837: DCOM Clients Ping Server After Client Program Has Shut Down"
permalink: /kb/224/Q224837/
---

## Q224837: DCOM Clients Ping Server After Client Program Has Shut Down

	Article: Q224837
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run an unauthenticated distributed Component Object Model (COM) client
	that uses the CoSetProxBlanket COM API to set security on its remote interface
	and calls the remote server object, distributed COM (DCOM) pings may persist
	even though the client program has released the interface and shut down.
	
	CAUSE
	=====
	
	This fix is an update to the hotfix described in the following article:
	
	  Q184278 Server in One Domain May Disconnect Client in Another Domain
	
	This hotfix addresses the case where an unsecure client activates securely by
	specifying credentials in the COAUTHINFO structure that it passes to
	CoCreateInstanceEx. The client may then make secure calls using
	CoSetProxyBlanket or it may simply make unsecure calls. Prior to the fix, the
	server object will be cleaned up in approximately six minutes by the COM
	process. Also, prior to the fix, the client computer will continue to send DCOM
	pings to the server indefinitely, even after the client and server process have
	exited. The fix resolves both these issue.
	
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
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server version 4.0, Terminal Server Edition Service Pack 6.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
