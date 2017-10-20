---
layout: page
title: "Q138854: Connecting Using NBT.SYS Causes Windows NT Session to Hang"
permalink: /kb/138/Q138854/
---

## Q138854: Connecting Using NBT.SYS Causes Windows NT Session to Hang

{% raw %}

	Article: Q138854
	Product(s): Microsoft Windows NT
	Version(s): 3.51 SP2,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51 SP2, 4.0 
	- Microsoft Windows NT Server versions 3.51 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On your computer running Windows NT version 3.51 with Service Pack 2 installed,
	when you connect to a NetBIOS-based computer using TCP/IP, the session or
	application hangs.
	
	For example, this symptom occurs if you connect to a Hewlett Packard computer
	running Hewlett Packard LAN Manager/X (LM/X).
	
	This problem only affects the session and not any other network or system
	activity.
	
	CAUSE
	=====
	
	The file NETBT.SYS incorrectly handles retarget responses.
	
	When connecting to another system using NetBIOS over TCP/IP, Windows NT sends a
	NBT session request. Any system that responds with an NBT retarget response
	causes the session setup request to never complete, thereby hanging the
	session.
	
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 3.51 NETBT.SYS
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351sp2 kbWinNTW351SP2
	Version           : :3.51 SP2,4.0
	
	=============================================================================
	

{% endraw %}
