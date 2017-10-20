---
layout: page
title: "Q110220: Cannot Add RAS Users When RASADMIN Fails with Large UAS"
permalink: /kb/110/Q110220/
---

## Q110220: Cannot Add RAS Users When RASADMIN Fails with Large UAS

{% raw %}

	Article: Q110220
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	When an OS/2 version 1.3 LAN Manager 2.2 server has more than 5000 users in its
	NET.ACC, RASADMIN reports this error when you select users and permissions while
	in the RASADMIN utility:
	
	  Not enough memory or unable to load resource
	
	You are prevented from adding users to RAS access.
	
	CAUSE
	=====
	
	The RAS utility was not written to accommodate this many user accounts.
	
	RESOLUTION
	==========
	
	CSD 01.005 has resolved hotsite escalation for this problem. This consists of an
	MS-DOS and OS/2 RASUSER.EXE utility that can be run from command line. Just type
	in RASUSER and it will show usage.
	
	STATUS
	======
	
	Resolved.
	
	Additional query words: 2.20 2.2 RASADMIN RAS permissions
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
