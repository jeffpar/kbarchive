---
layout: page
title: "Q297040: Windows May Hang When Attempting to Establish a TCP Connection"
permalink: /kb/297/Q297040/
---

## Q297040: Windows May Hang When Attempting to Establish a TCP Connection

{% raw %}

	Article: Q297040
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT 4.0-based server with a recent post-SP6a hotfix, or a Windows NT
	4.0 Terminal Server with a recent post-SP6 hotfix, may stop responding (hang) if
	it attempts to make a TCP connection with an IP address that is nonexistent.
	
	For example, if a Windows NT 4.0-based server with an address of 129.68.72.10
	attempts to connect by using Telnet to an address of 129.68.72.40, and that
	address is either nonexistent or unavailable, the server may hang. This is a
	"hard" hang with no mouse control and no CTRL+ALT+DELETE functionality
	available. The server is unresponsive from the console and cannot be pinged on
	the network.
	
	For this hang to occur, the TCP/IP SynAttackProtect registry value must be set.
	For additional information about this registry entry, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q142641 Internet Server Unavailable Because of Malicious SYN Attacks
	
	CAUSE
	=====
	
	Under certain circumstances, the spinlock for the TCP/IP connection table lock
	is acquired but not released; this causes the server to hang.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Size     File name
	  --------------------------------------
	  27-Apr-2001  15:54  174,896  Tcpip.sys
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: freeze lock lockup
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
