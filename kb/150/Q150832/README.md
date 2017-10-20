---
layout: page
title: "Q150832: Unable to Connect to a Lotus Notes Server Over Router"
permalink: /kb/150/Q150832/
---

## Q150832: Unable to Connect to a Lotus Notes Server Over Router

{% raw %}

	Article: Q150832
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.11 3.50 3.51 95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Lotus Notes client on a Windows NT or Windows 95 computer using NetBIOS and
	NWLink on Token Ring may fail to connect to a Lotus Notes server on Ethernet.
	This symptom can also occur when a Notes client is on a FDDI ring.
	
	CAUSE
	=====
	
	The network adapter on one side of the conversation is on a link that has a
	larger frame size than the link on the other side, and IPX does not do
	fragmentation. According to the IPX specification, it is up to a higher level to
	determine the maximum transmit unit (MTU). For NetBIOS traffic over IPX there is
	no MTU negotiation scheme.
	
	WORKAROUND
	==========
	
	To work around this problem, decrease the frame size of the Token Ring network
	adapter to 1,012 bytes on the Windows NT computer.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  \SYSTEM\CURRENTCONTROLSET\SERVICES\NWRDR\PARAMETERS
	
	3. Set DefaultMaxPacketSize (reg_dword), to 1012 (decimal).
	
	For additional information about configuring Lotus Notes clients on Windows,
	please see the following article in the Microsoft Knowledge Base:
	
	Q104944Configuring Lotus Notes Client on Windows NT Using NWLINK
	
	Additional query words: prodnt ipx spx nwlink router ethernet tokenring packet frame drop
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWin95search kbWinNT310Search kbWinNTW310Search kbWFWSearch kbZNotKeyword3 kbWFW311
	Version           : 3.10 3.11 3.50 3.51 95
	
	=============================================================================
	

{% endraw %}
