---
layout: page
title: "Q118790: WfWG: Slow File Transfers to WinNT w/ 3C509, TCP/IP, NetBEUI"
permalink: /kb/118/Q118790/
---

## Q118790: WfWG: Slow File Transfers to WinNT w/ 3C509, TCP/IP, NetBEUI

{% raw %}

	Article: Q118790
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.1,3.11,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5 
	- Microsoft Windows NT Workstation versions 3.1, 3.5 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	File transfers to and from a Windows NT server are very slow on your Windows for
	Workgroups computer using a 3C509 network card and running NetBEUI and the real
	mode TCP/IP network protocols.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Install an updated ELNK3.DOS driver. The driver dated 3/22/94 worked
	  successfully in lab tests and new driver versions are available. This driver
	  can obtained on 3Com's BBS at (408) 980-8204.
	
	  -or-
	
	
	- Install Microsoft TCP/IP-32, a 32-bit protect mode version of TCP/IP.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt wfw wfwg 3.11 3.10 speed
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbWFWSearch kbWFW311
	Version           : :3.1,3.11,3.5
	
	=============================================================================
	

{% endraw %}
