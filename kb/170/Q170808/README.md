---
layout: page
title: "Q170808: Net.exe Duplicate Name Error 52 with Multihomed Computer"
permalink: /kb/170/Q170808/
---

## Q170808: Net.exe Duplicate Name Error 52 with Multihomed Computer

{% raw %}

	Article: Q170808
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51 4.00 95 3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Net View command to view any computer from a multihomed
	computer, the following error 52 message is returned:
	
	  A duplicate name detected on the network.
	
	Also, Netstat -n shows the multihomed computer's own computer name in conflict.
	
	CAUSE
	=====
	
	This problem may be caused by the following WINS configuration:
	
	Each NIC in the multihomed computer points to a different primary WINS server.
	Each WINS server thinks it is the owner for that computer's record and is not
	registering the client correctly as a multihomed host.
	
	RESOLUTION
	==========
	
	Disable WINS in one of the NICs, or set up both NICs to point to the same WINS
	server.
	
	Additional query words: name conflict duplicate multi-homed
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin95search kbWFWSearch kbZNotKeyword3 kbWFW311
	Version           : 3.50 3.51 4.00 95 3.11
	
	=============================================================================
	

{% endraw %}
