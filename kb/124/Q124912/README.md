---
layout: page
title: "Q124912: Slow Processing with Windows NT PDC and LAN Manager BDC"
permalink: /kb/124/Q124912/
---

## Q124912: Slow Processing with Windows NT PDC and LAN Manager BDC

{% raw %}

	Article: Q124912
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	- Microsoft LAN Manager 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	All networks that have Windows NT version 3.5 Domain Controllers (DCs) and LAN
	Manager Backup Domain Controllers (BDCs) experience this problem. Some symptoms
	of this issue can be a general slowness of the Windows NT version 3.5 DC because
	of the constant syncing of the LAN Manager BDCs. Symptoms for this problem
	include:
	
	- Slow file directory enumeration from client workstations.
	
	- Slow printing when the printers are locally connected the client
	  workstations.
	
	CAUSE
	=====
	
	A design change in Windows NT version 3.5 causes the entire membership of groups
	(containing new users) to be sent to the LAN Manager BDC. If the total amount of
	this data is greater than the buffer allocated by the BDC for the DC, it
	requests a larger buffer. If the second buffer is also too small, the BDC goes
	into a full sync condition.
	
	WORKAROUND
	==========
	
	To reduce the likelihood of encountering this problem, change the LAN Manager
	BDC so that it initially allocates a buffer of 64K.
	
	RESOLUTION
	==========
	
	Microsoft has changed Windows NT so it now sends a list of only the groups that
	new users belong to, instead of the entire membership of the groups.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem has been corrected in the latest
	U.S. Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	To correct this problem on your LAN Manager BDC servers, contact Microsoft
	Product Support Services to get the LAN Manager patch, CSD00.108.
	
	Additional query words: prodnt 2.20 netlogon lanman NTS LM synch synchronization
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search kbAudDeveloper kbLanManSearch
	Version           : winnt:3.5; :
	
	=============================================================================
	

{% endraw %}
