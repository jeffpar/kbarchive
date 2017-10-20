---
layout: page
title: "Q143150: NetFlex-2 ENET-TR With Compaq SSD Not Routing to DECNet Node"
permalink: /kb/143/Q143150/
---

## Q143150: NetFlex-2 ENET-TR With Compaq SSD Not Routing to DECNet Node

{% raw %}

	Article: Q143150
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT client computer using a NetFlex-2 ENET-TR network adapter and the
	network adapter driver in Compaq SSD 1.15 (and greater) is not able to connect
	to a remote DECNet node across a router. The Windows NT client computer is
	running DEC Pathworks.
	
	
	RESOLUTION
	==========
	
	To work around this problem:
	
	1. Note the network configuration of your DEC Pathworks network software. To do
	  this, select DEC Pathworks and click Configure in Control Panel Network.
	
	2. Remove DEC Pathworks from the Installed Network Software list in Control
	  Panel Network.
	
	3. Replace the following NetFlex driver files with the files in Compaq SSD
	  1.14:
	
	  %SystemRoot%\system32\netflx.dll
	  %SystemRoot%\system32\drivers\netflx.bin
	  %SystemRoot%\system32\drivers\netflx.sys
	
	4. Shut down and restart Windows NT.
	
	5. Reinstall the DEC Pathworks network software in Control Panel Network.
	
	For more information, contact Compaq Technical Support at (800) 652-6672.
	
	The Compaq products discussed here are manufactured by Compaq Computer Corp., a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
