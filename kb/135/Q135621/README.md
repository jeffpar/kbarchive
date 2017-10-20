---
layout: page
title: "Q135621: NetWare Transaction Tracking System (TTS) Not Detected"
permalink: /kb/135/Q135621/
---

## Q135621: NetWare Transaction Tracking System (TTS) Not Detected

{% raw %}

	Article: Q135621
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On your computer running Windows NT, when you start a database client program
	that connects to a database on a Novell NetWare server, the program generates a
	warning message that the Novell NetWare server's Transactional Tracking System
	(TTS) is not active, even though it is.
	
	If you use your database application despite the warning, the index tables in the
	server's database are destroyed.
	
	This problem occurs if you run Windows NT Client Services for NetWare (CSNW) and
	the database client program uses NetWare APIs to detect whether TTS is
	available.
	
	CAUSE
	=====
	
	CSNW does not correctly interpret the status information returned by the NetWare
	server when it checks for the presence of TTS.
	
	RESOLUTION
	==========
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem has been corrected in Windows NT 4.0 and the latest U.S.
	Service Pack for Windows NT version 3.51. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	

{% endraw %}
