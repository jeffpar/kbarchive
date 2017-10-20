---
layout: page
title: "Q149987: SPRY Mosaic Web Client Crash When Connected to IIS"
permalink: /kb/149/Q149987/
---

## Q149987: SPRY Mosaic Web Client Crash When Connected to IIS

{% raw %}

	Article: Q149987
	Product(s): Internet Information Server
	Version(s): winnt:1.0,3.5,3.51
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You can use the SPRY Mosaic Web client to connect Internet Information Server
	(IIS). However, if you are using basic password authentication, the SPRY Mosaic
	Web client will crash with the following error message:
	
	  
	
	  AIRMOSAI caused a General Protection Fault in module AIRMOS.EXE at
	  0006:73D6
	  Choose close. AIRMOSAI Will Close.
	
	NOTE: The above problem was produced with the SPRY Mosaic - CompuServe Edition,
	Version: 01.00.c6.07.
	
	CAUSE
	=====
	
	
	WORKAROUND
	==========
	
	Do not use basic password authentication or use a different Web browser.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server 1.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbiisSearch kbiis100
	Version           : winnt:1.0,3.5,3.51
	
	=============================================================================
	

{% endraw %}
