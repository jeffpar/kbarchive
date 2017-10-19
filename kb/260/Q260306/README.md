---
layout: page
title: "Q260306: Nwscript.exe May Generate Network Provider Invalid Error Message"
permalink: /kb/260/Q260306/
---

## Q260306: Nwscript.exe May Generate Network Provider Invalid Error Message

	Article: Q260306
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Nwscript.exe tool may not work, and may generate the following error
	message:
	
	  The specified network provider name is invalid.
	
	CAUSE
	=====
	
	A problem in the Nwscript.exe tool could cause this issue if either of the
	following conditions exist:
	
	- You are running an international version of Terminal Server and the network
	  provider name contains an extended ASCII character (Decimal value higher than
	  127).
	
	- An administrator has renamed the Netware Network Provider to contain an
	  extended ASCII character.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	version 4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	STATUS
	======
	
	This problem was first corrected in Windows NT Server version 4.0, Terminal
	Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	This behavior is noticeable in the French Localized version of Windows NT
	Server, Terminal Server Edition after applying service pack 4 because it changed
	the name of the Netware Network Provider, but the issue existed in all versions
	of the Nwscript.exe tool.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4,4.0 SP5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
